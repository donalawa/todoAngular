import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-all-todo',
  templateUrl: './all-todo.component.html',
  styleUrls: ['./all-todo.component.scss']
})
export class AllTodoComponent implements OnInit {

  allTodo: any[] = [];
  constructor(private service: TodoService) { }

  ngOnInit() {
    this.allTodo = this.service.allTodos;
  }

}
