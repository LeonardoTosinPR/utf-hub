import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroData = {
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  };

  constructor(private router: Router) {}

  onSubmit(): void {
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    users.push({
      nome: this.registroData.nome,
      email: this.registroData.email,
      senha: this.registroData.senha
    });

    localStorage.setItem('users', JSON.stringify(users));

    alert('Registro realizado com sucesso!');
    this.router.navigate(['/login']);
  }
}
