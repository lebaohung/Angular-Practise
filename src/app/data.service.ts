import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {
  }

  private _petNameFromPetSubject : BehaviorSubject<string> = new BehaviorSubject<string>('');
  petNameFromPet$ : Observable<string> = this._petNameFromPetSubject.asObservable();

  setPetNameFromPet(value: string) {
    this._petNameFromPetSubject.next(value);
  }

}
