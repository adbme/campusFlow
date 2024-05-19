import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

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

  constructor(private authService: AuthService) {}

  eleve$: Promise<any> | undefined;

  // On init, fetch notes
  ngOnInit(): void {
    this.getAllNotes().then((notes) => {
      this.dataSource = notes.map((note) => {
        note.moyenne = this.calculateAverage(note.notes);
        return note;
      })
    });

    this.eleve$ = this.getEleve(this.authService.user.id);
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
    return travaux.reduce((acc, curr) => acc + curr, 0) / travaux.length;
  }

  calulateMoyenneSemestre(notes: Note[]): number {
    const moyennes = notes.map((note) => note.moyenne);
    return moyennes.reduce((acc, curr) => acc + curr, 0) / moyennes.length;
  }

  calulateMoyenneOfModule(notes: number[], coef: number): number {
    const moyenne = this.calculateAverage(notes);
    return moyenne * coef;
  }

  calculateAverageWithExam(element: any): number {
    const notesWithExam = [...element.notes, ...new Array(element.nextCoef).fill(element.noteExam)];
    return this.calculateAverage(notesWithExam);
  }

  displayedColumns2: string[] = ['coefficient', 'examen-semestriel'];
  dataSource2: Note2[] = [
    { nom: 'Mathématiques', valeur: 4 },
    { nom: 'Sciences', valeur: 3 },
  ];

  displayedColumns3: string[] = ['moyenne'];
  dataSource3: Note3[] = [{ nom: 'Mathématiques' }, { nom: 'Sciences' }];
}
