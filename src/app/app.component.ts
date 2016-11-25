import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './services/firebase.service';
import {Bussines} from './Bussines';
import {Category} from './Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  bussiness: Bussines[];
  categories: Category[];
  appState: string;
  activeKey: string;

   constructor(private _firebaseService: FirebaseService) {

   }

   ngOnInit() {
     this._firebaseService.getBussiness().subscribe(bussiness => {
       this.bussiness = bussiness;
     });
     this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
     });
   }

   changeState(state, key) {
     if(key) {
       this.activeKey = key;
     }
     this.appState = state;
   }
}
