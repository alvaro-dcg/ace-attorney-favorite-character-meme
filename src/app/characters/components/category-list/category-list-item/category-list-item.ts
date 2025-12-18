import { Component, inject, input, output, signal } from '@angular/core';
import { Modal } from 'bootstrap'; // npm i --save-dev @types/bootstrap
import { characters_data } from '../../../data/characters-data';
import { KeyValuePipe } from '@angular/common';
import { specialCategoryList } from '../../../interfaces/category';
import { CharacterData } from '../../../interfaces/characters';
import { Collection } from '../../../interfaces/collections-games';
import { CategoryListService } from '../../../services/category-list.service';
import { ORDER_BY_GAME } from '../../../data/order-data';
import { cases } from '../../../data/cases-data';
import { mechanics } from '../../../data/mechanics-data';
import { ThemeService } from '../../../services/theme.service';


@Component({
  selector: 'app-category-list-item',
  imports: [KeyValuePipe],
  templateUrl: './category-list-item.html',
  styleUrl: './category-list-item.css',
})
export class CategoryListItem {

  modalTitle = signal<string>(''); // Titulo de modal
  private modalInstance?: Modal; // Instancia de modal
  activeCollections = input<Collection[]>(); // colecciones activas
  characters_images = characters_data; //lista de todos los personajes
  keepOrder = (a: any, b: any): number => 0; // esto es para que se respete el orden original
  imageSelected = output<{ categoryTitle: string, image: string }>(); // imagen seleccionada que se manda al componente padre
  groupByGame = signal<boolean>(false); // indica si la separacion por juegos está activada o no
  currentGame = signal<string | null>(null); //indica el juego que está activado
  mechanics = mechanics;
  private audioPlayer: HTMLAudioElement | null = null;
  currentTrack: string | null = null;
  theme = inject(ThemeService);


  constructor(public listService: CategoryListService) {}


  // funcion que se encarga de abrir el modal
  openModal(categoryTitle: string): void {
    this.modalTitle.set(categoryTitle);

    if (categoryTitle.toLowerCase().includes("game")) {
      this.groupByGame.set(false);
      this.currentGame.set(null);
    }

    const modalEl = document.getElementById('imageSelectorModal');
    if (modalEl) {
      this.modalInstance = new Modal(modalEl);

      modalEl.addEventListener('hidden.bs.modal', () => {
        if (this.audioPlayer) {
          this.audioPlayer.pause();
          this.audioPlayer = null;
          this.currentTrack = null;
        }
      });

      this.modalInstance.show();
    }
  }

  private stopAudio() {
    if (this.audioPlayer) {
      this.audioPlayer.pause();
      this.audioPlayer = null;
      this.currentTrack = null;
    }
  }

  // funcion que se encarga de cerrar el modal
  closeModal() {
    (document.activeElement as HTMLElement)?.blur();
    this.modalInstance?.hide();
    this.stopAudio();
  }

  // obtiene la ruta de la imagen
  getImagePathBase(name: string): string {
    if (this.modalTitle() == 'Favorite case') {
      return "images/cases/" + name + ".png";
    }
    else if (this.modalTitle() == 'Favorite game mechanic') {
      return "images/mechanics/Mini/" + name + ".png";
    }
    else if (this.modalTitle() == 'Favorite game') {
      return "images/games/" + name + ".png";
    }
    return "images/characters/Mini/" + name + ".png";
  }

  //selecciona la imagen y cierra el modal
  selectImage(imgName: string) {
    this.closeModal();

    // un poco mas tarde para que no se vea el cambio de la imagen por el cancel
    setTimeout(() => {
      this.imageSelected.emit({ categoryTitle: this.modalTitle(), image: imgName });
    }, 110);
  }

  // Obtiene los juegos activados
  getSelectedGames(): string[] {
    const games: string[] = [];
    
    for (const collection of this.activeCollections()!) {
        for (const game of collection.games) {
            if (game.selected) games.push(game.name);
        }
    }

    return games;
  }

  // Funcion que filtra por los juegos activados
  filterCharactersByGames(games: string[]): CharacterData {
    const filtered: CharacterData = {};

    for (const name in this.characters_images) {
      const characterArray = this.characters_images[name];

      const matches = characterArray.filter(char =>
        games.includes(char.game)
      );

      if (matches.length > 0) {
        filtered[name] = matches;
      }
    }

    return filtered;
  }

  // devuelve true si estamos en una categoria especial y false si es una categoria general
  private getMatchedCategory(): string | undefined {
    const title = this.modalTitle().toLowerCase();
    
    if (title.includes('game mechanic')) return 'mechanic';
    if (title.includes('favorite game')) return 'game';
    if (title.includes('breakdown')) return 'breakdown';
    if (title.includes('theme')) return 'theme';
    if (title.includes('case')) return 'case';

    // categorías de personajes
    return specialCategoryList.find(cat =>
      title.includes(cat) &&
      !['game', 'case', 'breakdown', 'theme', 'mechanic'].includes(cat)
    );
  }

  // Filtra personajes por categoria
  private filterCharactersByCategory(gameFiltered: CharacterData, matchedCategory: string): CharacterData {
    const filtered: CharacterData = {};

    for (const name in gameFiltered) {
      const characterArray = gameFiltered[name];

      // Filtrar las versiones que contengan la categoría detectada
      const matches = characterArray.filter(char =>
        char.category.some(cat => cat.toLowerCase() === matchedCategory)
      );

      if (matches.length > 0) {
        filtered[name] = matches;
      }
    }

    return filtered;
  }

  private getGamesToFilter(): string[] {
    return this.currentGame() !== null
      ? [this.currentGame()!]
      : this.getSelectedGames();
  }

  private sortCharacters(filtered: CharacterData, games: string[]): CharacterData {
    const order = this.getCombinedOrder(games, filtered);
    const sorted: CharacterData = {};

    for (const name of order) {
      if (filtered[name]) {
        sorted[name] = filtered[name];
      }
    }

    return sorted;
  }

  private filteredCharactersDefault(category?: string): CharacterData {
    const games = this.getGamesToFilter();

    let filtered = this.filterCharactersByGames(games);

    if (category) {
      filtered = this.filterCharactersByCategory(filtered, category);
    }

    if (!Object.keys(filtered).length) return {};

    return this.sortCharacters(filtered, games);
  }

  // filtra la lista de imagenes
  filteredImages(): CharacterData {
    const matchedCategory = this.getMatchedCategory()?.toLowerCase();
    
    switch (matchedCategory) {
      case 'mechanic': return this.filteredMechanics();
      case 'game': return this.filteredGames();
      case 'case': return this.filteredCases();
      case 'breakdown': return this.filteredBreakdowns();
      case 'theme': return this.filteredMusic();
    }

    return this.filteredCharactersDefault(matchedCategory);
  }


  filteredCases(): CharacterData {
    const gamesToFilter = this.getGamesToFilter();

    const result: CharacterData = {};

    for (const [caseName, caseGames] of Object.entries(cases)) {
      // Mostrar solo casos cuyo juego esté en los juegos filtrados
      if (caseGames.some(g => gamesToFilter.includes(g))) {
        result[caseName] = [
          {
            game: caseGames[0],  // Solo tiene uno
            category: [],
          }
        ];
      }
    }

    return result;
  }

  

  //Comprobar si el personaje ya se ha seleccionado para poner el cancel
  checkSelected(imgName: string): boolean {  
    // Busca la categoría correspondiente en el servicio
    const category = this.listService.categoryList().find(cat => cat.title === this.modalTitle());

    // Si existe y el name coincide con la imagen, devuelve true
    return !!category?.name && category.name === imgName;
  }

  //activa el switch de separacion por juegos
  toggleGroupByGame(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.groupByGame.set(checked);

    // Si se desactiva el switch, salimos del modo juegos
    if (!checked) {
      this.currentGame.set(null);
    }
  }

  // marca el juego seleccionado
  selectGame(game: string) {
    this.currentGame.set(game);
  }

  //ordena por juego
  getCombinedOrder(selectedGames: string[], filteredCharacters: CharacterData): string[] {
    const finalOrder: string[] = [];

    for (const game of selectedGames) {
      const orderList = ORDER_BY_GAME[game];
      if (!orderList) continue;

      for (const charName of orderList) {
        // Solo agregar si el personaje existe en los filtrados
        if (filteredCharacters[charName] && !finalOrder.includes(charName)) {
          finalOrder.push(charName);
        }
      }
    }

    // Añadir personajes filtrados que no están en ninguna lista de orden
    const filteredNames = Object.keys(filteredCharacters);
    for (const charName of filteredNames) {
      if (!finalOrder.includes(charName)) {
        finalOrder.push(charName);
      }
    }
    
    return finalOrder;
  }

  filteredGames(): CharacterData {
    const result: CharacterData = {};

    for (const collection of this.activeCollections()!) {
      for (const game of collection.games) {
        if (game.selected) {
          result[game.name] = [
            {
              game: game.name,
              category: []
            }
          ];
        }
      }
    }

    return result;
  }

  filteredMechanics(): CharacterData {
    const gamesToFilter = this.getGamesToFilter();

    const result: CharacterData = {};

    for (const [mechanicName, mechanicGames] of Object.entries(this.mechanics)) {
      if (mechanicGames.some(game => gamesToFilter.includes(game))) {
        result[mechanicName] = [
          {
            game: mechanicGames[0], // solo para cumplir la interfaz
            category: []
          }
        ];
      }
    }

    return result;
  }

  filteredBreakdowns(): CharacterData {
    return this.explodeByArrayField('breakdown');
  }


  getMiniName(key: string): string {
    return key.split(' — ')[0];
  }


  filteredMusic(): CharacterData {
    return this.explodeByArrayField('music');
  }

  private explodeByArrayField(field: 'music' | 'breakdown'): CharacterData {
    const games = this.getGamesToFilter();
    const result: CharacterData = {};

    for (const charName in this.characters_images) {
      for (const char of this.characters_images[charName]) {
        if (!games.includes(char.game)) continue;

        const values = char[field];
        if (!values?.length) continue;

        for (const value of values) {
          result[`${charName} — ${value}`] = [{
            game: char.game,
            category: char.category,
            [field]: [value]
          }];
        }
      }
    }
    return result;
  }


  toggleMusic(track: string) {

    // Si ya está sonando esa pista → pausar
    if (this.audioPlayer && this.currentTrack === track) {
      this.audioPlayer.pause();
      this.currentTrack = null;
      return;
    }

    // Si había otra pista sonando → detenerla
    if (this.audioPlayer) {
      this.audioPlayer.pause();
    }

    // Crear nuevo audio
    this.audioPlayer = new Audio('music/' + track + '.mp3');
    this.audioPlayer.play();
    this.currentTrack = track;
  }

  isPlaying(track: string): boolean {
    return this.currentTrack === track;
  }

}
