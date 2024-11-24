import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  VAR1="bonjour4se1"
  VAR2="../../assets/angular.jpg"
  VAR3="nahed"
  MyList=["4se1","4se2"]
  MyListt=["nahed","rahmani"]
  function1(){
    alert('hi')
  }
}
