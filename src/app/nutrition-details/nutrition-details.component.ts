import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-nutrition-details',
  templateUrl: './nutrition-details.component.html',
  styleUrls: ['./nutrition-details.component.scss'],
})
export class NutritionDetailsComponent implements OnInit {
  displayedColumns: string[] = [
    'food',
    'quantity',
    'measure',
    'weight',
    'Calories',
  ];
  showTotalNutrtion: boolean = false;
  constructor(public appService: AppService) { }

  ngOnInit(): void { }



}
