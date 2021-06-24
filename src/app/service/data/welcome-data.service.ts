import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    //return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    return this.http.get<HelloWorldBean>('http://ec2-52-47-75-97.eu-west-3.compute.amazonaws.com:8080/todos/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithPathVariable(name: string) {
    //return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${name}`);
    return this.http.get<HelloWorldBean>(`http://ec2-52-47-75-97.eu-west-3.compute.amazonaws.com:8080/todos/hello-world-bean/${name}`);
  }

}
