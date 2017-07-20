import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-plan-choices',
  templateUrl: './simple-plan-choices.component.html',
  styleUrls: ['./simple-plan-choices.component.css']
})

export class SimplePlanChoicesComponent implements OnInit {
  someObject = {
    something: 'yeah'
  }

  myArr = [1,2,3,4]

  constructor() { }

  ngOnInit() {
  }

}
