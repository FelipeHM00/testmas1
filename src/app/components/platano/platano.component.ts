import { Component } from '@angular/core';

@Component({
  selector: 'app-platano',
  templateUrl: './platano.component.html',
  styleUrls: ['./platano.component.css']
})
export class PlatanoComponent {
//platanos:Platano[]=[
 // new Platano('platano cavendish'),
 // new Platano ('platano canario'),
 // new Platano ('platano con motitas')
//]
//name: string;

 // constructor(name: string) {
  //  this.name = name;
 // }

 name: string = 'Platano'
platanos: any;
}
