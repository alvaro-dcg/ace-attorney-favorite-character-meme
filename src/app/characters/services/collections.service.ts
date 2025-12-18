import { Injectable, signal } from '@angular/core';
import { Collection } from '../interfaces/collections-games';
import { collections_data } from '../data/collections-data';


@Injectable({ providedIn: 'root' })
export class CollectionsService {
  collections = signal<Collection[]>(collections_data);
}