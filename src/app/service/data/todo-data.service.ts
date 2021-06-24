import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username: string) {
    // return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    return this.http.get<Todo[]>(`http://ec2-52-47-75-97.eu-west-3.compute.amazonaws.com:8080/todos/users/${username}/todos`);

  }

  deleteTodo(username: string, id: number) {
  // return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
    return this.http.delete(`http://ec2-52-47-75-97.eu-west-3.compute.amazonaws.com:8080/todos/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: string, id: number){
    // return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
    return this.http.get<Todo>(`http://ec2-52-47-75-97.eu-west-3.compute.amazonaws.com:8080/todos/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: Todo) {
    // return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
    return this.http.put(`http://ec2-52-47-75-97.eu-west-3.compute.amazonaws.com:8080/todos/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: string, todo: Todo) {
    // return this.http.post(`http://localhost:8080/users/${username}/todos`, todo);
    return this.http.post(`http://ec2-52-47-75-97.eu-west-3.compute.amazonaws.com:8080/todos/users/${username}/todos`, todo);
  }
}
