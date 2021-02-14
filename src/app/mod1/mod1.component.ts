import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css']
})
export class Mod1Component implements OnInit {
  @Input()
  param1:string = '';

  event1  = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  handlerClick(param1: string) {
    this.event1.emit(param1)
  }
}
