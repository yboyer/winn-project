import {RouterModule} from '@angular/router';
import {ListComponent, EditComponent, AddComponent} from './components/components.js';

export const routes = [
  {path: '', component: ListComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'add', component: AddComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

export const RoutesModules = RouterModule.forRoot(routes);
