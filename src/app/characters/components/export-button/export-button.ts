import { ChangeDetectorRef, Component } from '@angular/core';
import html2canvas from 'html2canvas';
import { ThemeService } from '../../services/theme.service';
import { CollectionsService } from '../../services/collections.service';
import { Collection } from '../../interfaces/collections-games';

@Component({
  selector: 'app-export-button',
  imports: [],
  templateUrl: './export-button.html',
  styleUrl: './export-button.css',
})
export class ExportButton {

  isExporting = false;

  constructor(
    private theme: ThemeService, 
    private cdr: ChangeDetectorRef, 
    public collectionsService: CollectionsService
  ) { }


  export() {
    this.isExporting = true;
    this.cdr.detectChanges();

    setTimeout(() => {
      this.doExport();
    });
  }



  async doExport() {

    try {
      const element = document.getElementById('meme-export');
      if (!element) return;

      // Crear contenedor temporal fuera de pantalla
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'fixed';
      tempContainer.style.top = '-10000px';
      document.body.appendChild(tempContainer);

      // Copiar HTML del DOM real
      tempContainer.innerHTML = element.innerHTML;
      tempContainer.style.backgroundColor = this.theme.isDarkMode() ? '#212529' : '#fff';

      const collectionsValue: Collection[] = this.collectionsService.collections();

      // --- Reemplazamos temporalmente las collections ---
      const collectionsContainer = tempContainer.querySelector<HTMLElement>('.collections');
      if (collectionsContainer) {
        collectionsContainer.innerHTML = '';

        collectionsContainer.style.display = 'flex';
        collectionsContainer.style.flexDirection = 'row';
        collectionsContainer.style.flexWrap = 'nowrap'; // no saltar de línea
        collectionsContainer.style.gap = '8px';
        collectionsContainer.style.alignItems = 'center';
        collectionsContainer.style.justifyContent = 'center';

        collectionsValue.forEach(col => {
          // iteramos todos los juegos, no solo los seleccionados
          col.games.forEach(game => {
            const img = document.createElement('img');
            img.src = game.src;
            img.style.height = '80px'; // importante para que quepan en una fila
            img.style.width = 'auto';
            img.style.display = 'block';

            // si no está seleccionado, aplicar filtro de blanco y negro
            if (!game.selected) {
              img.style.filter = 'grayscale(100%)';
              img.style.opacity = '0.25';
            }

            collectionsContainer.appendChild(img);
          });
        });
      }


      // --- Recorremos cada .image-box y reemplazamos temporalmente la imagen ---
      const boxes = tempContainer.querySelectorAll('.image-box');
      boxes.forEach((box: Element) => {
        const img = box.querySelector('img') as HTMLImageElement;
        if (!img) return;

        const canvasImg = document.createElement('canvas');
        canvasImg.width = img.clientWidth;
        canvasImg.height = img.clientHeight;
        const ctx = canvasImg.getContext('2d')!;

        const scale = Math.max(
          canvasImg.width / img.naturalWidth,
          canvasImg.height / img.naturalHeight
        );
        const drawWidth = img.naturalWidth * scale;
        const drawHeight = img.naturalHeight * scale;
        const dx = (canvasImg.width - drawWidth) / 2;
        const dy = 0;

        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, dx, dy, drawWidth, drawHeight);

        img.style.display = 'none';
        box.appendChild(canvasImg);
      });

      // --- Generamos el canvas final con html2canvas ---
      const canvas = await html2canvas(tempContainer, {
        scale: window.devicePixelRatio * 3,
        allowTaint: false,
        backgroundColor: null,
      });

      // --- Descargamos el canvas final ---
      const link = document.createElement('a');
      link.download = 'ace-attorney-character-meme.png';
      link.href = canvas.toDataURL('image/png');
      link.click();

      // Limpiar contenedor temporal
      document.body.removeChild(tempContainer);

    } finally {
      this.isExporting = false;
      this.cdr.detectChanges();
    }
  }
}
