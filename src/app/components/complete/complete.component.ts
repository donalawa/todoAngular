import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {
  score: any = 0;
  constructor(private service: TodoService) { }

  ngOnInit() {
    this.score = this.service.productiveScore();
  }

}
