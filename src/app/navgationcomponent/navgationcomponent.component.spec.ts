import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavgationcomponentComponent } from './navgationcomponent.component';

describe('NavgationcomponentComponent', () => {
  let component: NavgationcomponentComponent;
  let fixture: ComponentFixture<NavgationcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavgationcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavgationcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
