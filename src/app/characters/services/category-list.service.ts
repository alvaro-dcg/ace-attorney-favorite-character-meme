import { Injectable, signal } from '@angular/core';
import { category_data, CATEGORY_LIST } from '../interfaces/category';

const STORAGE_KEY = 'categoryList';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  categoryList = signal<category_data[]>([]);

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        this.categoryList.set(JSON.parse(saved));
      } catch (e) {
        console.error('Error leyendo categoryList de localStorage', e);
        this.categoryList.set(CATEGORY_LIST);
      }
    } else {
      this.categoryList.set(CATEGORY_LIST);
    }
  }

  saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.categoryList()));
  }

  // Actualiza una categoría y guarda automáticamente
  updateCategory(updatedCategory: category_data) {
    this.categoryList.update(list =>
      list.map(cat =>
        cat.title === updatedCategory.title ? updatedCategory : cat
      )
    );
    this.saveToStorage();
  }

  // Resetear lista a la original (vacia todo)
  resetList() {
    this.categoryList.set(CATEGORY_LIST);
    this.saveToStorage();
  }
}
