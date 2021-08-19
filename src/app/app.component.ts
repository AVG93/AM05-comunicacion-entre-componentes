import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  VERSION
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { JugadoresService } from './services/jugadores.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  jugadoresSub: Subscription = new Subscription();

  jugadores: string[];

  constructor(private jugadoresService: JugadoresService) {
    this.jugadores = this.jugadoresService.getPlayers();
  }

  ngOnInit() {
    this.jugadoresService.fetchData();
    this.jugadoresSub = this.jugadoresService.jugadoresSubject.subscribe(
      resp => {
        this.jugadores = resp;
      }
    );
  }

  recepcionEvento(mensaje: string) {
    console.log(mensaje);
    this.jugadores = this.jugadoresService.deletePlayer(mensaje);
  }
}
