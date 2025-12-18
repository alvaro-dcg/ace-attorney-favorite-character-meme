import { Component } from '@angular/core';
import { Collections } from "./characters/components/collections/collections";
import { ExportButton } from "./characters/components/export-button/export-button";
import { ResetButton } from "./characters/components/reset-button/reset-button";
import { ThemeButton } from "./characters/components/theme-button/theme-button";

@Component({
  selector: 'app-root',
  imports: [Collections, ExportButton, ResetButton, ThemeButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  
}
