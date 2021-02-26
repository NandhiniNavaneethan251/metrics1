import { Component,OnInit } from '@angular/core';
import {NgSelectModule,NgSelectConfig,NgOption}from '@ng-select/ng-select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Metrics';
  public metrics: number=0;
  

    items = [
        { id: 1, name: 'contributors',link:'/contributors' },
        { id: 2, name: 'commits',link:'/commits' },
    ];


    //constructor(){ }
    constructor(private config: NgSelectConfig) {
      this.config.placeholder = 'Metrics ';
      this.config.notFoundText = 'Custom not found';
      this.config.appendTo = 'body';
     
      this.config.bindValue = 'value';
  }
  

  ngOnInit(){

  }
}
