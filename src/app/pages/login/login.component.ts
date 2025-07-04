import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    senha: ''
  };

  loginError = false;

  constructor(private router: Router) {}

  onSubmit(): void {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      const user = users.find((u: any) => u.email === this.loginData.email && u.senha === this.loginData.senha);

      if (user) {
        this.loginError = false;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['/']);
      } else {
        this.loginError = true;
      }
    } else {
      this.loginError = true;
    }
  }
}
