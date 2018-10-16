import { Component } from "@angular/core";

@Component({
    selector:'app-body',
    templateUrl:'./body.component.html'
})
export class BodyComponent{

    frase:any={
        mensaje:"tacobell",
        autor:"Mr. Taco"
    };

    Numeros:string[];

    mostrar:boolean;

    constructor(){
        this.mostrar=false;
        this.Numeros=new Array(); //si se declara como arriba aparentemente se debe inicializar :O
        this.Numeros.push("1");
        this.Numeros.push("2");
        this.Numeros.push("3");
        this.Numeros.push("4");
        this.Numeros.push("5");
    }

    //Alternativa 1
    MostrarOcultar(){
        if(this.mostrar){
            this.mostrar=false;
        }
        else{
            this.mostrar=true;
        }
    }

    // Alternativa 2, ver .html para encontrar la alternativa 2
    //La alternativa 2 hace referencia a negar el propio valor
}