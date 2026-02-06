import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  username: string = '';
  password: string = '';
  confirmPassword: string = ''; //şifreyi doğrulama
  errorMessage: string = '';

  constructor(private router: Router) {}

  register() {
  if (!this.username || !this.password || !this.confirmPassword) {
    this.errorMessage = 'Lütfen tüm alanları doldurun!';
    return;
  }

  if (this.password !== this.confirmPassword) {
    this.errorMessage = 'Şifreler uyuşmuyor!';
    return;
  }

  const user = {
    username: this.username,
    password: this.password
  };

  localStorage.setItem('user', JSON.stringify(user)); //userı tarayıcıya kaydet

  alert('Kayıt başarılı!');
  this.router.navigateByUrl('/login');
}

  goLogin() {
    this.router.navigate(['/login']);
  }
}
