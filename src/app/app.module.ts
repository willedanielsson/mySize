import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

export const firebaseConfig = {
  apiKey: 'APIKEY',
  authDomain: 'DOMAIN',
  databaseURL: 'DBURL',
  storageBucket: 'BUCKET',
  messagingSenderId: "SENDERID"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
