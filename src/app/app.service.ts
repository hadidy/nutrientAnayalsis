import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';
import {
  FoodAnalysis,
  FoodSummeryDetail
} from './shared/models/food-analysis';
import { NutritionDataService } from './shared/services/nutrition-data.service';

@Injectable({
  providedIn: 'root',
})

export class AppService {
  foodAnaylsis: FoodAnalysis = new FoodAnalysis()
  foodSummeryDetails: FoodSummeryDetail[] = [];
  // boolean to show or hide the spinner
  // modified with getter and setter for future use 
  // if we need to change the boolean and do another actio
  private _showSpinner: boolean = false;

  public get showSpinner(): boolean {
    return this._showSpinner;
  }

  public set showSpinner(value: boolean) {
    this._showSpinner = value;
  }
  constructor(private nutritionDataService: NutritionDataService,
    private _snackBar: MatSnackBar) { }

  getMealAnalysis(ingr: string[]) {
    this.foodAnaylsis = new FoodAnalysis();
    this.foodSummeryDetails = [];
    return this.nutritionDataService.getMealAnalysis(ingr).pipe(
      tap((data) => {
        this.foodAnaylsis = data.foodAnaylsis;
        this.foodSummeryDetails = data.foodSummeryDetails;
      })
    );
  }
  // golbal function to open snak bar from any component in the app 
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
