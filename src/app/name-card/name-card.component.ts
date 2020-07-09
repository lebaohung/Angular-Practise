import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {

  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.setPetNameFromPet(this.cardName);
    // this._dataService.petNameFromPet$.subscribe(value => this.cardName = value);
  }

}
