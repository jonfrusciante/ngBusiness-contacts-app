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

   filterCategory(category) {
     this._firebaseService.getBussiness(category).subscribe(bussiness => {
      this.bussiness = bussiness;
     });
   }

   addBussines(
     company:string,
     category:string,
     years_in_business:number,
     description:string,
     phone:string,
     email:string,
     street_address:string,
     city:string,
     state:string,
     zipcode:string) {
       var created_at = new Date().toString();

       var newBussines = {
         company: company,
         category: category,
         years_in_business: years_in_business,
         description: description,
         phone: phone,
         email: email,
         street_address: street_address,
         city: city,
         state: state,
         zipcode: zipcode,
         created_at: created_at
       }

       this._firebaseService.addBussines(newBussines);

       this.changeState('default');
   }
}
