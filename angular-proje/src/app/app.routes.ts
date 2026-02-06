import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Todos } from './pages/todos/todos';
import { Register } from './pages/register/register'; // ← ekle

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'todos', component: Todos },
  { path: 'register', component: Register }, // ← ekle
  { path: '**', redirectTo: 'login' }
];
