import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(false);

  constructor() {
    this.loadTheme();
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const enableDark =
      savedTheme === 'dark' ||
      (!savedTheme && systemPrefersDark);

    this.isDarkMode.set(enableDark);
    document.documentElement.setAttribute('data-bs-theme', enableDark ? 'dark' : 'light');
  }

  toggleTheme() {
    const newValue = !this.isDarkMode();
    this.isDarkMode.set(newValue);

    localStorage.setItem('theme', newValue ? 'dark' : 'light');
    document.documentElement.setAttribute('data-bs-theme', newValue ? 'dark' : 'light');
  }
}