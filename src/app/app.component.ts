import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lesson1';
  param1 = 'angular hello';
  inputValue ='';
  inputValue2 ='';
  inputValue3 ='hello friends';

  con(event: any) {
    console.log(event);
  }

  onInput(event) {
    console.log(event)
    this.inputValue = event.target.value;
  }

  onKeyDown(event: any) {
    console.log(event);
    this.inputValue2 = event.target.value;
  }
}
