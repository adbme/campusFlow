import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGradesComponent } from './report-grades.component';

describe('ReportGradesComponent', () => {
  let component: ReportGradesComponent;
  let fixture: ComponentFixture<ReportGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportGradesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
