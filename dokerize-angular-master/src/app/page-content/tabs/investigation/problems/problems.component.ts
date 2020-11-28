import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})
export class ProblemsComponent {

  readonly NEZAPOSLENOST = 44;
  readonly KORUPCIJA = 31;
  readonly BUDUCNOST = 49;
  readonly OBRAZOVANJE = 32;
  readonly JAVNI_RESURSI = 16;

  public chartType = 'bar';

  public chartDatasets: Array<any> = [{ data: [this.NEZAPOSLENOST, this.BUDUCNOST, this.OBRAZOVANJE, this.KORUPCIJA, this.JAVNI_RESURSI], label: 'suma' }];

  public chartLabels: Array<any> = ['Nezaposlenost', 'Neizvjesna Budućnost', 'Neadekvatno obrazovanje', 'Korupcija', 'Zloupotreba javnih resursa'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
