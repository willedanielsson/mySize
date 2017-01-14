/* tslint:disable:no-unused-variable */
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';
import { inject, TestBed, async } from '@angular/core/testing';
import { LoginComponent } from '../app/login';

describe('LoginComponent', () => {
  beforeEach(() => {
    const config = {
      apiKey: 'AIzaSyCcJFMOq9fChyexiikIppNkZjVKZNQSyB8',
      authDomain: 'mysize-aebce.firebaseapp.com',
      databaseURL: 'https://mysize-aebce.firebaseio.com',
      storageBucket: 'mysize-aebce.appspot.com',
      messagingSenderId: '139935871422'
    };
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      providers: [FIREBASE_PROVIDERS, defaultFirebase(config)]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(LoginComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Logga in');
  }));
});
