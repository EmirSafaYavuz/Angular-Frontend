import { Component } from '@angular/core';

//component html in datasını yönettiğin yer
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';
  user: string = "Emir Safa Yavuz";
  
  
}

