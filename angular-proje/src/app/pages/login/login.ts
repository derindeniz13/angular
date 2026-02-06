import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
  if (!this.username || !this.password) {
    this.errorMessage = 'Lütfen kullanıcı adı ve şifre girin!';
    return;
  }

  const savedUser = localStorage.getItem('user');

  if (!savedUser) {
    this.errorMessage = 'Kayıtlı kullanıcı bulunamadı!';
    return;
  }

  const user = JSON.parse(savedUser);

  if (this.username === user.username && this.password === user.password) {
    this.errorMessage = '';
    this.router.navigateByUrl('/todos');
  } else {
    this.errorMessage = 'Kullanıcı adı veya şifre yanlış!';
  }
}

  goRegister() {
    this.router.navigateByUrl('/register');
  }
}
