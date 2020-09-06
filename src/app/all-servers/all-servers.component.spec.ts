import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllServersComponent } from './all-servers.component';

describe('AllServersComponent', () => {
  let component: AllServersComponent;
  let fixture: ComponentFixture<AllServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
