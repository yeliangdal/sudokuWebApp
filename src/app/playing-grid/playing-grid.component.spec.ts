import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingGridComponent } from './playing-grid.component';

describe('PlayingGridComponent', () => {
  let component: PlayingGridComponent;
  let fixture: ComponentFixture<PlayingGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayingGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
