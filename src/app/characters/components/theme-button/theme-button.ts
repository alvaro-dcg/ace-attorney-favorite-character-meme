import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-button',
  imports: [],
  templateUrl: './theme-button.html',
  styleUrl: './theme-button.css',
})
export class ThemeButton {
  constructor(public theme: ThemeService) {}

  toggleDarkMode() {
    this.theme.toggleTheme();
  }
}
