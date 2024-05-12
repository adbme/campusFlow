import { Component } from '@angular/core';


interface Note {
  discipline: string;
  coefficient: number;
  travaux: number;
  moyenne: number;
}

@Component({
  selector: 'app-report-grades',
  templateUrl: './report-grades.component.html',
  styleUrl: './report-grades.component.css'
})
export class ReportGradesComponent {

  displayedColumns: string[] = ['discipline', 'coefficient', 'travaux', 'moyenne'];
  dataSource: Note[] = [
    { discipline: 'Mathématiques', coefficient: 4, travaux: 15, moyenne: 14.5 },
    { discipline: 'Sciences', coefficient: 3, travaux: 12, moyenne: 11.8 },
    { discipline: 'Langues', coefficient: 2, travaux: 13, moyenne: 12.6 },
    // Ajoutez d'autres données de test selon vos besoins
  ];
}
