import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { Config } from '../../config';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: Config.myApiKey,
  authDomain: Config.myAuthDomain,
  databaseURL: Config.myDatabaseURL,
  storageBucket: Config.myStorageBucket,
  messagingSenderId: Config.myMessagingSenderId
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
