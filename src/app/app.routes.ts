import { Routes } from '@angular/router';
import { Collections } from './characters/components/collections/collections';

export const routes: Routes = [
    {
        path: '',
        component: Collections,
    },
    {
        path: '**',
        redirectTo: '',
    }
];