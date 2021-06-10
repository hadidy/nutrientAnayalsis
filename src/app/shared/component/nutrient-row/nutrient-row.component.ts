import { Component, Input, OnInit } from '@angular/core';
import { FoodAnalysis, FoodAnaylsisDetail, FoodingredientAnalysis } from '../../models/food-analysis';

@Component({
  selector: 'app-nutrient-row',
  templateUrl: './nutrient-row.component.html',
  styleUrls: ['./nutrient-row.component.scss']
})
export class NutrientRowComponent implements OnInit {

  @Input('nutrientName') nutrientName: string | undefined = ''
  @Input('weight') weight: string | undefined = ''
  @Input('weightUnit') weightUnit: string | undefined = ''
  @Input('weightPercentage') weightPercentage: string | undefined = ''
  @Input('weightUnitPercentage') weightUnitPercentage: string | undefined = ''
  constructor() { }

  ngOnInit(): void {
  }

}
