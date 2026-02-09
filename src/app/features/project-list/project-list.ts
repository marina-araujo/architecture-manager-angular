import { Component, inject } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule],
  templateUrl: './project-list.html',
  styleUrl: './project-list.scss'
})
export class ProjectListComponent {
  projectService = inject(ProjectService);
}
