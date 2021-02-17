import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod3',
  templateUrl: './mod3.component.html',
  styleUrls: ['./mod3.component.css']
})
export class Mod3Component implements OnInit {
  red = 'ff000';
  orange = 'ffa500';
  yellow = 'ffff00';
  green = '008000';
  lightblue = '42aaff';
  blue = '0000ff';
  purple = '8b00ff';
  table =  'visibility: visible';
  constructor() { }

  ngOnInit(): void {
  }
  onHidden() {
    this.table = 'visibility: hidden';
  }
  onShow() {
    this.table = 'visibility: visible';
  }
}
