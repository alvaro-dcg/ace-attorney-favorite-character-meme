import { Pipe, PipeTransform } from '@angular/core';
import { GamesTitle } from '../data/game-title-data';

@Pipe({
    name: 'gameTitle'
})

export class GameTitlePipe implements PipeTransform {
    transform(value: string): string {
        return GamesTitle[value];
    }
}