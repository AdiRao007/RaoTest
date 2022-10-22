import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';


import { OurServicesComponent } from './our-services.component';

describe('OurServicesComponent', () => {
  let component: OurServicesComponent;
  let fixture: ComponentFixture<OurServicesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OurServicesComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(OurServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
