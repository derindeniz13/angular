import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; //ngFor gibi temel komutlar
import { FormsModule } from '@angular/forms'; //inputlara yazılan veriyi tsye eklemek 

@Component({
  selector: 'app-todos',
  standalone: true, //component bir module bağlı olmadan çalışabilir
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.html',
  styleUrls: ['./todos.css']
})
export class Todos {
  todos: { text: string; completed: boolean }[] = [];
  newTodo = ''; //<input [(ngModel)]="newTodo>"

  constructor() {  
    this.loadTodos();  //sayfa açılınca kayıtlı veriyi yükle
  }

  addTodo() { //button click=addTodo (html) 
    if (this.newTodo.trim()) {
      this.todos.push({ text: this.newTodo.trim(), completed: false });  //listeye yeni eleman ekler
      this.newTodo = '';
      this.saveTodos(); //yeni listeyi kaydediyor
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1); //index numaralı elamanı sil
    this.saveTodos();
  }

  toggleComplete(todo: any) { //görevin tamamlanma durumunu değiştirir 
    todo.completed = !todo.completed; // ! tersine çevirir
    this.saveTodos();
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos)); //JSON için stringe çevirip kaydeder(todo listesini tarayıcı hafızasına yazar)
  }

  loadTodos() {
    const saved = localStorage.getItem('todos'); //sayfa açılınca eski todos listesini ekrana getirir
    if (saved) this.todos = JSON.parse(saved);
  }
}
