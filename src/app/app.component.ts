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

  activeCompany:string;
  activeCategory:string;
  activeYearsInBusiness:string;
  activeDescription:string;
  activePhone:string;
  activeEmail:string;
  activeStreetAddress:string;
  activeCity:string;
  activeState:string;
  activeZipcode:string;

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

   showEdit(bussines){
     this.changeState('edit', bussines.$key);
     this.activeCompany =          bussines.company;
     this.activeCategory =         bussines.category;
     this.activeYearsInBusiness =  bussines.years_in_business;
     this.activeDescription =      bussines.description;
     this.activePhone =            bussines.phone;
     this.activeEmail =            bussines.email;
     this.activeStreetAddress =    bussines.street_address;
     this.activeCity =             bussines.city;
     this.activeState =            bussines.state;
     this.activeZipcode =          bussines.zipcode;
   }

   updateBussines() {
     var updBussines = {
       company:this.activeCompany,
       category:this.activeCategory,
       years_in_business:this.activeYearsInBusiness,
       description:this.activeDescription,
       phone:this.activePhone,
       email:this.activeEmail,
       street_address:this.activeStreetAddress,
       city:this.activeCity,
       state:this.activeState,
       zipcode:this.activeZipcode
     }

     this._firebaseService.updateBussines(this.activeKey, updBussines);

     this.changeState('default');
   }

   deleteBussines(key) {
     this._firebaseService.deleteBussines(key);
     this.changeState('default');
   }
}
