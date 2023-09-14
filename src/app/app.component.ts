import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piano';

  aplicarSonido(numero:number):void{
    const audio = new Audio();

    audio.src = `../assets/sonidos/note${numero}.wav`
    audio.load();
    audio.play();

  }

  @HostListener('window:keydown',['$event'])
  handlekeyboardEvent(event: KeyboardEvent){
    const numero = parseInt(event.key)

    if (!isNaN(numero) && numero >= 1 && numero <= 7) {
      this.aplicarSonido(numero)

    }
  }
}
