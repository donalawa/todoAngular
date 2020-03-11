import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private service: TodoService) { }
 
  ngOnInit() {
  }

  clearForm(f: NgForm){
    f.resetForm()
  }


  onSubmit(form:NgForm){
    this.service.addTodos(form.value)
    this.clearForm(form);
  }
}
