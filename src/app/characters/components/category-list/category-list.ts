import { Component, input } from '@angular/core';
import { CategoryListItem } from "./category-list-item/category-list-item";
import { Collection } from '../../interfaces/collections-games';
import { CategoryListService } from '../../services/category-list.service';
import { GameTitlePipe } from '../../pipes/game-title.pipe';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-category-list',
  imports: [CategoryListItem, GameTitlePipe],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList {

  activeCollections = input<Collection[]>();
  constructor(public listService: CategoryListService, public theme: ThemeService) {}


  openImageSelector (modal: CategoryListItem, categoryTitle: string) {
    modal.openModal(categoryTitle);
  }

  getImagePath (img: string): string {
    return 'images/characters/Art/' + img + '.png'
  }

  getMusicImageName(name: string): string | null {
    return name.split('—')[0]?.trim() ?? '';
  }

  getBreakdownImageName(name: string): string | null {
    return name.split('—')[1]?.trim() ?? '';
  }

  onImageSelected(event: { categoryTitle: string; image: string }) {
    
    if (event.image === 'cancel') {
      // Eliminar imagen y nombre de la categoría
      const updatedCategory = {
        title: event.categoryTitle,
        image: undefined,
        name: undefined
      };
      this.listService.updateCategory(updatedCategory);
    } 
    else {
      let imagePath: string;

      if (event.categoryTitle.toLowerCase().includes('case')) {
        imagePath = 'images/cases/' + event.image + '.png';
      }
      else if (event.categoryTitle.toLowerCase().includes('mechanic')) {
        imagePath = 'images/mechanics/Art/' + event.image + '.png';
      } 
      else if (event.categoryTitle.toLowerCase().includes('game')) {
        imagePath = 'images/games/' + event.image + '.png';
      } 
      else if (event.categoryTitle.toLowerCase().includes('breakdown')) {
        imagePath = 'images/breakdowns/' + this.getBreakdownImageName(event.image) + '.png';
      } 
      else if (event.categoryTitle.toLowerCase().includes('theme')) {
        imagePath = 'images/characters/Art/' + this.getMusicImageName(event.image) + '.png';
      } 
      else {
        imagePath = this.getImagePath(event.image);
      }
      // Actualizar normalmente
      const updatedCategory = {
        title: event.categoryTitle,
        image: imagePath,
        name: event.image
      };
      this.listService.updateCategory(updatedCategory);
    }
  }
}
