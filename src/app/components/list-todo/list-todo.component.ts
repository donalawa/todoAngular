import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  constructor(private service: TodoService) { }

  allTodos: any[] = [];
  ngOnInit() {
    this.allTodos = this.service.getTodos();
  }
  onDelete(todo){
    this.service.deleteTodo(todo)
  }

  onComplete(e){
    this.service.addCompleted(e)
  }


}
