import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod2',
  templateUrl: './mod2.component.html',
  styleUrls: ['./mod2.component.css']
})
export class Mod2Component implements OnInit {
  param = '<strong>hello \n world</strong>';
  paramHtml = '<strong>hello \n world</strong>';
  paramText = '<strong>hello \n world</strong>';
  paramDate = new Date();
  paramInt = 3.14000;
  colors = ['red','orange', 'yellow', 'green', 'lightblue','blue','purple']
  constructor() { }

  ngOnInit(): void {
  }

  onInput(event) {
    this.param = event.target.value;
  }
}
