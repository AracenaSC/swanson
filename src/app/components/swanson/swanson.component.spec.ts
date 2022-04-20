import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwansonComponent } from './swanson.component';

describe('SwansonComponent', () => {
  let component: SwansonComponent;
  let fixture: ComponentFixture<SwansonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwansonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwansonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
