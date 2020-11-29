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
    {id: 1, ime: 'Setup', opis:'podešavanje radnog okruženja', teorija: 1, vjezbe: 1, ukupno: 2},
    {id: 2, ime: 'Uvod', opis:'Uvod u Java programski jeszik', teorija: 2, vjezbe: 0, ukupno: 2},
    {id: 3, ime: 'Osnovi', opis:'Osnovni Java programskog jezika', teorija: 2, vjezbe: 2, ukupno: 4},
    {id: 4, ime: 'Selekcije', opis:'Kontrola toka programa', teorija: 2, vjezbe: 2, ukupno: 4},
    {id: 5, ime: 'Petlje', opis:'Automatizovano ponavljanje naredbi', teorija: 2, vjezbe: 4, ukupno: 6},
    {id: 6, ime: 'Karakteri', opis:'Šta su to karakteri kako manipulisati', teorija: 2, vjezbe: 2, ukupno: 4},
    {id: 7, ime: 'Metode', opis:'Kako isti kod iskoristit na više mjesta', teorija: 2, vjezbe: 4, ukupno: 6},
    {id: 8, ime: 'Nizovi', opis:'Stari dobro nozovi', teorija: 2, vjezbe: 2, ukupno: 4},
    {id: 9, ime: 'Git-basic', opis:'Gdje sa mojimm kodom', teorija: 1, vjezbe: 1, ukupno: 2},
    {id: 10, ime: 'Ponavljanje', opis:'Majka znanja', teorija: 1, vjezbe: 1, ukupno: 2},
    {id: 11, ime: 'Test', opis:'Ko želi u sledeću etapu mora da...', teorija: 1, vjezbe: 1, ukupno: 2},
  ];

  drugiDio: any = [
    {id: 1, ime: 'Uvod u OOP', opis:'koncept objekata i uvod novog tipa podatka', teorija: 2, vjezbe: 4, ukupno: 6},
    {id: 2, ime: 'Nasledjivanje-polimorfizam ', opis:'Mama tata brat i ja imamo nešto slično, možda?', teorija: 2, vjezbe: 4, ukupno: 6},
    {id: 3, ime: 'Exeptions', opis:'Izuzetci, ne ti izuzetci..', teorija: 2, vjezbe: 4, ukupno: 6},
    {id: 4, ime: 'Apstraktne Klase, Interface', opis:'Umjetnost programiranja, nešto baš apstraktno', teorija: 2, vjezbe: 2, ukupno: 4},
    {id: 5, ime: 'JVM', opis:'mašina, virtuelna..', teorija: 1, vjezbe: 1, ukupno:  2},
    {id: 6, ime: 'Tredovi', opis:'Konpetencija', teorija: 2, vjezbe: 2, ukupno: 4},
    {id: 7, ime: 'Baze podataka', opis:'Gdje sa podatcima', teorija: 4, vjezbe: 2, ukupno: 6},
    {id: 8, ime: 'Utvrdjivanje ', opis:'Majka, šta?', teorija: 2, vjezbe: 2, ukupno: 4},
    {id: 9, ime: 'Praktični rad ', opis:'Ko želi u sledeću etapu mora da...', teorija: 1, vjezbe: 3, ukupno: 4},
  ];

 public isOdd(id: number): boolean {
    return id % 2 === 0;
  }

}
