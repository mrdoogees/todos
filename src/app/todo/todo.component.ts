import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  id: number = this.route.snapshot.params['id'];
  todo: Todo = new Todo(Number(this.id), '', new Date(), false);

  constructor(private service: TodoDataService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if(this.id != -1) {
      this.service.retrieveTodo('mano', this.id).subscribe(
        data => this.todo = data)
    }
  }

  saveTodo() {
    if(this.id === -1) {
      this.service.createTodo('mano', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      )
    }
    else {
      this.service.updateTodo('mano', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      )
    }
    
  }

}
