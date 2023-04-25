import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatanoComponent } from './platano.component';

describe('PlatanoComponent', () => {
  let component: PlatanoComponent;
  let fixture: ComponentFixture<PlatanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
