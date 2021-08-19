import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {
  private jugadores: string[] = [];
  jugadoresSubject = new Subject<string[]>();

  constructor(private http: HttpClient) {
    /*for (var i = 0; i < 9; i++) {
      this.jugadores.push('Player ' + (i + 1));
    }*/
  }

  async fetchData() {
    await this.http
      .get<any>('https://randomuser.me/api/?results=9')
      .pipe(
        map(resp => {
          return resp.results.map(obj => obj.name.first + ' ' + obj.name.last);
        })
      )
      .subscribe(resp => {
        this.jugadores = resp;
        this.jugadoresSubject.next(this.jugadores);
      });
  }

  getPlayers() {
    return this.jugadores;
  }

  deletePlayer(player: string) {
    this.jugadores = this.jugadores.filter(p => p !== player);
    return this.jugadores;
  }
}
