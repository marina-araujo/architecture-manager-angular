import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private mockProjects: Project[] = [
    {
      id: 1,
      moment: new Date('2026-02-01'),
      status: 'PLANNING',
      client: { id: 1, name: 'Renato Barros', email: 'renato@gmail.com', phone: '999999988' }
    },
    {
      id: 2,
      moment: new Date('2026-01-05'),
      status: 'EXECUTING',
      client: { id: 2, name: 'Ana Rocha', email: 'ana@gmail.com', phone: '997779988' }
    }
  ];
  projects = signal<Project[]>(this.mockProjects);
  constructor() {}
}
