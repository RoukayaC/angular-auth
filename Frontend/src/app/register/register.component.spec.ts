import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [HttpClientTestingModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an initial empty user object', () => {
    expect(component.user).toEqual({
      username: '',
      email: '',
      password: '',
      role: ''
    });
  });

  it('should not submit the form if role is not selected', () => {
    component.user = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password',
      role: ''
    };
    fixture.detectChanges();
    const form = fixture.nativeElement.querySelector('form');
    expect(form.checkValidity()).toBeFalse();
  });
});
