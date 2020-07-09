import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit{

  constructor(private _dataService: DataService) {}

  petName :string;
  petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';

  updateName(name) {
    this.petName = name;
    this._dataService.setPetNameFromPet(name);
    // this._dataService.petNameFromPet$.subscribe(value => this.petName = value);
  }

  updateImage(image) {
    this.petImage = image;
  }

  ngOnInit(): void {
    // this._dataService.setPetNameFromPet(this.petName);
    this._dataService.petNameFromPet$.subscribe(value => this.petName = value);
  }
}



