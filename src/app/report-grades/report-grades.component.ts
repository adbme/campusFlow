import { Component } from '@angular/core';


interface Note {
  discipline: string;
  coefficient?: number;
  travaux?: number[],
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
    {discipline: 'MODULES INFORMATIQUES ICT', moyenne:5.00},
    { discipline: '187 Mettre en service un Poste de travail ICT avec le système d exploitation', coefficient: 1, travaux:[ 5.8, 5.0], moyenne: 5.40 },
    { discipline: '117 Mettre en place l’infrastructure informatque d’une petite entreprise', coefficient: 3, travaux:[ 5.8, 5.0], moyenne: 11.8 },
    { discipline: '319 Concevoir et implémenter des applications', coefficient: 1, travaux:[ 5.8, 5.0], moyenne: 12.6 },
    { discipline: '162 Analyser et modéliser des données', coefficient: 1, travaux:[ 5.8, 5.0], moyenne: 12.6 },
  ];

  isEven(index: number): boolean {
    return index % 2 === 0;
  }

  isOdd(index: number): boolean {
    return index % 2 !== 0;
  }

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
