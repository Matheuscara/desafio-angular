import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarLeftComponent } from './nav-bar-left.component';

describe('NavBarLeftComponent', () => {
  let component: NavBarLeftComponent;
  let fixture: ComponentFixture<NavBarLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarLeftComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
