import {Component} from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

  constructor() {
  }

  prviDio: any = [
    {id: 1, oblast: 'Setup', teorija: 1, vjezbe: 1, ukupno: 2},
    {id: 2, oblast: 'Uvod', teorija: 2, vjezbe: 0, ukupno: 2},
    {id: 3, oblast: 'Osnovi', teorija: 2, vjezbe: 2, ukupno: 4},
    {id: 4, oblast: 'Selekcije', teorija: 2, vjezbe: 2, ukupno: 4},
    {id: 5, oblast: 'Petlje', teorija: 2, vjezbe: 4, ukupno: 6},
    {id: 6, oblast: 'Karakteri', teorija: 2, vjezbe: 2, ukupno: 4},
    {id: 7, oblast: 'Metode', teorija: 2, vjezbe: 4, ukupno: 6},
    {id: 8, oblast: 'Nizovi', teorija: 2, vjezbe: 2, ukupno: 4},
    {id: 9, oblast: 'Git-basic', teorija: 1, vjezbe: 1, ukupno: 2},
    {id: 10, oblast: 'Ponavljanje', teorija: 1, vjezbe: 1, ukupno: 2},
    {id: 11, oblast: 'Test', teorija: 1, vjezbe: 1, ukupno: 2},
  ];

  drugiDio: any = [
    {id: 1, oblast: 'Uvod u OOP', teorija: 2, vjezbe: 4, ukupno: 6},
    {id: 2, oblast: 'Nasledjivanje-polimorfizam ', teorija: 2, vjezbe: 4, ukupno: 6},
    {id: 3, oblast: 'Exeptions', teorija: 2, vjezbe: 4, ukupno: 6},
    {id: 4, oblast: 'Apstraktne Klase, Interface', teorija: 2, vjezbe: 2, ukupno: 4},
    {id: 5, oblast: 'JVM', teorija: 1, vjezbe: 1, ukupno:  2},
    {id: 6, oblast: 'Tredovi', teorija: 2, vjezbe: 2, ukupno: 4},
    {id: 7, oblast: 'Baze podataka', teorija: 4, vjezbe: 2, ukupno: 6},
    {id: 8, oblast: 'Utvrdjivanje ', teorija: 2, vjezbe: 2, ukupno: 4},
    {id: 9, oblast: 'Praktični rad ', teorija: 1, vjezbe: 3, ukupno: 4},
  ];

 public isOdd(id: number): boolean {
    return id % 2 === 0;
  }
}
