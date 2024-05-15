import { Component } from '@angular/core';


interface Note {
  discipline: string;
  coefficient: number;
  travaux: number;
  moyenne: number;
}

interface Note2 {
  nom: string;
  valeur: number;
}

interface Note3 {
  nom: string;
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
  ];

  displayedColumns2: string[] = ['nom', 'valeur'];
  dataSource2: Note2[] = [
    { nom: 'Mathématiques', valeur: 4 },
    { nom: 'Sciences', valeur: 3},
  ];

  displayedColumns3: string[] = ['nom'];
  dataSource3: Note3[] = [
    { nom: 'Mathématiques' },
    { nom: 'Sciences'

    },
  ];
  
}
