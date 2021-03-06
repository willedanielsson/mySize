import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule, AuthMethods, AuthProviders  } from 'angularfire2';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Firebase config 
export const firebaseConfig = {
  apiKey: 'AIzaSyCcJFMOq9fChyexiikIppNkZjVKZNQSyB8',
  authDomain: 'mysize-aebce.firebaseapp.com',
  databaseURL: 'https://mysize-aebce.firebaseio.com',
  storageBucket: 'mysize-aebce.appspot.com',
  messagingSenderId: "139935871422"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
