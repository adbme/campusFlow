import { Component } from '@angular/core';

interface Note {
  // discipline: string;
  id: number;
  name: string;
  coef?: number;
  notes: number[];
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
  styleUrl: './report-grades.component.css',
})
export class ReportGradesComponent {
  displayedColumns: string[] = [
    'discipline',
    'coefficient',
    'travaux',
    'moyenne',
  ];
  dataSource: Note[] = [];

  eleve$: Promise<any> | undefined;

  // On init, fetch notes
  ngOnInit(): void {
    this.getAllNotes().then((notes) => {
      this.dataSource = notes.map((note) => {
        note.moyenne = this.calculateAverage(note.notes);
        return note;
      })
    });

    this.eleve$ = this.getEleve(1);
  }

  async getAllNotes(): Promise<Note[]> {
    return fetch('http://localhost:3000/cours').then((r) =>
      r.json()
    ) as Promise<Note[]>;
  }

  async getEleve(id: number): Promise<any> {
    return fetch(`http://localhost:3000/eleves/${id}`).then((r) =>
      r.json()
    );
  }

  isEven(index: number): boolean {
    return index % 2 === 0;
  }

  isOdd(index: number): boolean {
    return index % 2 !== 0;
  }

  calculateAverage(travaux: number[]): number {
    // Add moyenne property to note
    return travaux.reduce((acc, curr) => acc + curr, 0) / travaux.length;
  }

  calulateMoyenneSemestre(notes: Note[]): number {
    const moyennes = notes.map((note) => note.moyenne);
    return moyennes.reduce((acc, curr) => acc + curr, 0) / moyennes.length;
  }

  displayedColumns2: string[] = ['nom', 'valeur'];
  dataSource2: Note2[] = [
    { nom: 'Mathématiques', valeur: 4 },
    { nom: 'Sciences', valeur: 3 },
  ];

  displayedColumns3: string[] = ['nom'];
  dataSource3: Note3[] = [{ nom: 'Mathématiques' }, { nom: 'Sciences' }];
}
