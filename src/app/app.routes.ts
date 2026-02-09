import { Routes } from '@angular/router';
import { ProjectListComponent } from './features/project-list/project-list';
import { ClientListComponent } from './features/clients/client-list/client-list';
import { DashboardComponent } from './features/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'clients', component: ClientListComponent }
];
