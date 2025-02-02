import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraBoardComponent } from './jira-board.component';

describe('JiraBoardComponent', () => {
  let component: JiraBoardComponent;
  let fixture: ComponentFixture<JiraBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JiraBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JiraBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
