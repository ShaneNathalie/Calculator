import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator Project of Shane Nathalie Acebo';

  public num1:number=0;
  public num2:number=0;
  public num3:number=0;

  add(){
    this.num3=this.num1+this.num2;
  }
  
  subtract(){
    this.num3=this.num1-this.num2;
  }
  
  multiply(){
    this.num3=this.num1*this.num2;
  }
  
  divide(){
    this.num3=this.num1/this.num2;
  }
}
