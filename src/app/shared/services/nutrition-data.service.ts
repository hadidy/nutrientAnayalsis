import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JSONPath } from 'jsonpath-plus';
import { FoodAnalysis, FoodSummeryDetail, nutrientNames, nutrientNamesFromBackEnd } from '../models/food-analysis';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NutritionDataService {
  constructor(private http: HttpClient) { }
  getMealAnalysis(ingred: string[]): Observable<any> {

    let url = environment.edamamBaseUrl + "?app_id=" + environment.edamamAppId + "&app_key=" + environment.edamamAppKey
    let reqBody = {
      ingr: ingred
    };
    return this.http.post(url, reqBody).pipe(
      map((data) => {
        return this.mapFoodAnaylsis(data);
      }))
  }
  mapFoodAnaylsis(data: any): any {
    let foodAnaylsis = new FoodAnalysis();
    let foodSummeryDetails: FoodSummeryDetail[] = new Array<FoodSummeryDetail>();

    const parsedIngredient: [] = JSONPath({
      path: '$.ingredients[*].parsed[*]',
      json: data,
    });
    // here we check if the returned response contain any data 
    // or the back end fail to analysis
    // we throw error
    if (parsedIngredient.length < 1) {
      throw new Error("back end could not analysis the data");
    }
    // here we map the ingredient data from the back end
    parsedIngredient.forEach((data: any) => {
      let foodSummery = new FoodSummeryDetail();
      foodSummery.foodMatch = data.foodMatch;
      foodSummery.measure = data.measure;
      foodSummery.quantity = data.quantity;
      foodSummery.weight = data.weight;
      foodSummery.ENERC_KCAL = data.nutrients?.ENERC_KCAL;
      foodSummeryDetails.push(foodSummery);
    });

    // here we map the data from the back end

    for (let nutrient in nutrientNames) {
      const ingredientName = (nutrientNamesFromBackEnd as any)[nutrient]
      const totalNutrientspath = `$.totalNutrients[?(@.label =="${ingredientName}")]`;
      const totalDailypath = `$.totalDaily[?(@.label =="${ingredientName}")]`;
      (foodAnaylsis as any)[nutrient].totalNutrients = JSONPath({ path: totalNutrientspath, json: data })[0] || null;
      (foodAnaylsis as any)[nutrient].totalDaily = JSONPath({ path: totalDailypath, json: data })[0] || null;
    }
    const mappedData = {
      foodAnaylsis: foodAnaylsis,
      foodSummeryDetails: foodSummeryDetails
    }
    return mappedData;
  }
}
