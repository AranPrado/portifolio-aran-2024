import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/aboutMe/aboutMe.component').then((m) => m.AboutMeComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./pages/project/project.component').then((m) => m.ProjectComponent)
    },
    {
        path: 'resume',
        loadComponent: () => import('./pages/curriculum/curriculum.component').then((m) => m.CurriculumComponent)
    }
];
