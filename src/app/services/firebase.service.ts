import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import {Bussines} from '../Bussines';
import {Category} from '../Category';

@Injectable()
export class FirebaseService {
  bussiness: FirebaseListObservable<Bussines[]>;
  categories: FirebaseListObservable<Category[]>;

  constructor(private _af: AngularFire){

  }

  getBussiness() {
    this.bussiness = this._af.database.list('/bussiness') as
    FirebaseListObservable<Bussines[]>
    return this.bussiness;
  }
  getCategories() {
    this.categories = this._af.database.list('/categories') as
    FirebaseListObservable<Category[]>
    return this.categories;
  }
}
