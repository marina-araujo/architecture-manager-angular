import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-client-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './client-form.html',
  styleUrl: './client-form.scss',
})
export class ClientFormComponent {
  private fb = inject(FormBuilder);

  clientForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required]
  });

  onSubmit() {
    if (this.clientForm.valid) {
      console.log('Dados que seriam enviados para o Spring Boot:', this.clientForm.value);
      alert('Cliente validado com sucesso! Verifique o console (F12).');
    }
  }
}
