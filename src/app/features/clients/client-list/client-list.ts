import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from '../client-form/client-form';

@Component({
  selector: 'app-client-list',
  imports: [
    CommonModule,
    ClientFormComponent
  ],
  templateUrl: './client-list.html',
  styleUrl: './client-list.scss',
})
export class ClientListComponent {

}
