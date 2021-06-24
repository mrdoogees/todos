import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {

  constructor(public id: number, public description: string,
    public targetDate: Date, public completed: boolean) {

    }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];

  message: string = '';

  constructor(private service: TodoDataService, private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  deleteTodo(id: number) {
    this.service.deleteTodo('mano', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} successful!`
      this.refreshTodos();
      }
    )
  }

  refreshTodos() {
    this.service.retrieveAllTodos('mano').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  updateTodo(id: number) {
    console.log(`update ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.updateTodo(-1);
  }
}
