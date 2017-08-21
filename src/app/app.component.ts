import { Component,style, animate, state, transition, trigger  } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    nom: string = 'je suis le titre';
    text: string = 'je suis le paragraphe';
    message: string = 'un jour viendra où Angular sera de la bombe pour moi!';
    today: Date;
    // ici on definit langages comme tableau de string
    langages: string[];
    image = '../assets/image1.png';
    marche: number = 1;
    bonhomme;
    // fadeAnimation = animation([
    //     style({ opacity: '{{ start }}' }),
    //     animate('{{ time }}',
    //         style({ opacity: '{{ end }}'))
    // ], { params: { time: '1000ms', start: 0, end: 1 }});

    afficherDate() {
        this.today = new Date();
    }

    alertMessage() {
       alert(this.message);
    }
    // ici on construit les parametres du tableau :
    constructor(){
        this.langages =['htlm', 'css', 'javascrpit', 'jquery'];
    }

   walkOn() {
       // alert('coucou');
       this.marche = -100;
}

}
