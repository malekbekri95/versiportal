import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'quote',
    loadComponent: () =>
      loadRemoteModule('quote', './Component').then((m) => m.App),
  },
  {
    path: 'claims',
    loadComponent: () =>
      loadRemoteModule('claims', './Component').then((m) => m.App),
  },
  {
    path: 'account',
    loadComponent: () =>
      loadRemoteModule('account', './Component').then((m) => m.App),
  },
  { path: '', pathMatch: 'full', redirectTo: 'quote' },
];
