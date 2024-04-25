import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsLinksComponent } from './documents-links.component';

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
