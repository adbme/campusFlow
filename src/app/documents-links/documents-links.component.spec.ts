import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

describe('DocumentsLinksComponent', () => {
  let component: DocumentsLinksComponent;
  let fixture: ComponentFixture<DocumentsLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentsLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
