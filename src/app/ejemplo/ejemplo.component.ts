import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {
  cadenaAux;
  cadena;
  constructor() { }

  ngOnInit(): void {
  }

  inversa(cadena){
  	this.cadenaAux="";
	for(var i = cadena.length-1; i>=0; i--)
	{
	  this.cadenaAux += cadena[i];
	}
	return(this.cadenaAux);
  }

  pares(cadena){
    this.cadenaAux="";
    for(var i = 1 ; i<=cadena.length-1; i+=2)
    {
      this.cadenaAux += cadena[i];
    }
    return(this.cadenaAux);
  }

  impares(cadena){
    this.cadenaAux="";
    for(var i = 0 ; i<=cadena.length-1; i+=2)
    {
      this.cadenaAux += cadena[i];
    }
    return(this.cadenaAux);
  }

}
