import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingSurfaceComponent } from './playing-surface.component';

describe('PlayingSurfaceComponent', () => {
  let component: PlayingSurfaceComponent;
  let fixture: ComponentFixture<PlayingSurfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayingSurfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingSurfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
