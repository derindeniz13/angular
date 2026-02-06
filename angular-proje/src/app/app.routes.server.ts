import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Todos } from './pages/todos/todos';

export const serverRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'todos', component: Todos },
  { path: '**', redirectTo: 'login' } // bilinmeyen route’lar için
];
