import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  @Input() nickname: string;

  @Output() myOnClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  myClick() {
    this.myOnClick.emit(this.nickname);
  }
}
