import { Component, inject, input, signal } from '@angular/core';
import { collections_data } from '../../data/collections-data';
import { Collection, Game } from '../../interfaces/collections-games';
import { CategoryList } from "../category-list/category-list";
import { CategoryListService } from '../../services/category-list.service';
import { characters_data } from '../../data/characters-data';
import { mechanics } from '../../data/mechanics-data';
import { cases } from '../../data/cases-data';


@Component({
  selector: 'app-collections',
  imports: [CategoryList],
  templateUrl: './collections.html',
  styleUrl: './collections.css',
})
export class Collections {

  pageName = signal<string>('Ace Attorney Favorite Character Meme');
  collections = signal<Collection[]>(collections_data);
  categoryListService = inject(CategoryListService);


  // Aciva o desactiva una coleccion. Tambien desactiva sus juegos
  toggleCollection(col: Collection) {
    const newState = !col.selected;
    col.selected = newState;
    col.games.forEach(j => j.selected = newState);

    if (!newState) {
      this.handleGameDisabled();
    }
  }

  // Activa o desactiva un juego
  toggleGame(col: Collection, game: Game) {
    const wasSelected = game.selected;
    game.selected = !game.selected;
    // si todos los juegos están desactivados, desactiva la colección
    col.selected = col.games.some(j => j.selected);
    if (wasSelected && !game.selected) {
      this.handleGameDisabled();
    }
  }

  handleGameDisabled() {
    const activeGames = this.collections()
      .flatMap(col => col.games)
      .filter(game => game.selected)
      .map(game => game.name);

    this.categoryListService.categoryList.update(list =>
      list.map(category => {
        if (!category.name) return category;

        let stillAppears = false;
        const title = category.title;

        if (title === 'Favorite game mechanic') {
          const games = mechanics[category.name as keyof typeof mechanics] as string[];
          if (games) {
            stillAppears = games.some((game: string) => activeGames.includes(game));
          }
        } else if (title === 'Favorite case') {
          const games = cases[category.name as keyof typeof cases] as string[];
          if (games) {
            stillAppears = games.some((game: string) => activeGames.includes(game));
          }
        } else if (title === 'Favorite game') {
          stillAppears = activeGames.includes(category.name);
        } else {
          // 🔹 Fallback: revisar characters_data
          const baseName = category.name.includes('—')
            ? category.name.split('—')[0].trim()
            : category.name.trim();
          const characterData = characters_data[baseName];
          if (characterData) {
            stillAppears = characterData.some(entry => activeGames.includes(entry.game));
          }
        }

        if (stillAppears) return category;

        return {
          ...category,
          name: undefined,
          image: undefined
        };
      })
    );

    this.categoryListService.saveToStorage();
  }
}
