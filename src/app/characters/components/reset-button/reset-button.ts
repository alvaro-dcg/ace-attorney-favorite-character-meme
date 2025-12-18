import { Component } from '@angular/core';
import { CategoryListService } from '../../services/category-list.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-reset-button',
  imports: [],
  templateUrl: './reset-button.html',
  styleUrl: './reset-button.css',
})
export class ResetButton {
  constructor(
    private categoryListService: CategoryListService, 
    public theme: ThemeService
  ) {}

  resetList() {
    this.categoryListService.resetList();
  }
}
