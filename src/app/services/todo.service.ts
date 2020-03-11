import { Injectable } from '@angular/core';
import { Todo } from '../components/interface/todo.interface';

@Injectable({
  providedIn: 'root'
})


export class TodoService {
  listOfTodos: Todo[] = [];
  allTodos: Todo[] = [];
  completed: any = 0;
  constructor() { 

  } 

  productiveScore(){
    return this.completed / this.listOfTodos.length
  }

  getTodos(){
    return this.listOfTodos;
  }

  addCompleted(val: boolean){
    if(val == true){
      this.completed += 1;
      console.log(this.completed)
    }else {
      this.completed -= 1; 
      console.log(this.completed)
    }
  }

  allTodo() {
    return this.allTodos;
  }

  addTodos(todo: Todo){
    this.allTodos.push(todo)
   this.listOfTodos.push(todo)
  }
  deleteTodo(todo) {
    var index = this.listOfTodos.indexOf(todo);
    this.listOfTodos.splice(index,1)
  }
}
