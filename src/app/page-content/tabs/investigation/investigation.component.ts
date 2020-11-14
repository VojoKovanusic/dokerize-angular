import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investigation',
  templateUrl: './investigation.component.html',
  styleUrls: ['./investigation.component.scss']
})
export class InvestigationComponent {

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [{ data: [18, 16, 15, 12, 7, 1], label: 'My First dataset' }];

  public chartLabels: Array<any> = ['Nezaposlenost', 'Neizvjesna Budućnost', 'Neadekvatno obrazovanje', 'Zapošljavanje preko stranke', 'Zloupotreba javnih resursa', 'Korupcija'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }}
