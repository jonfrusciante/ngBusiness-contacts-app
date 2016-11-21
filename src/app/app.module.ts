import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAvCyxyv16SWvNQWN0LUSEZirV2iVXxLO0",
  authDomain: "stefan-contacts.firebaseapp.com",
  databaseURL: "https://stefan-contacts.firebaseio.com",
  storageBucket: "stefan-contacts.appspot.com"
};

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
