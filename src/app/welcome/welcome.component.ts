import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';

  welcomeMessage = '';

  constructor(private route: ActivatedRoute, 
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe (
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleErrorResponse(error: any): void {
    console.log('error = ' +error.message);
    console.log('error.error = ' +error.error);
    console.log('error.error.message = ' +error.error.message);
    this.welcomeMessage = error.error.message;
  }

  handleSuccesfulResponse(response: any): void {
    this.welcomeMessage = response.message;
  }

}
