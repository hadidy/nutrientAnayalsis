
export class FoodAnaylsisDetail {
  label: string = '';
  quantity: string = '';
  unit: string = '';
}
export class FoodSummeryDetail {
  foodMatch: string = '';
  quantity: string = '';
  measure: string = '';
  weight: string = '';
  ENERC_KCAL: FoodAnaylsisDetail = new FoodAnaylsisDetail();
}
export class FoodingredientAnalysis {
  totalNutrients: FoodAnaylsisDetail = new FoodAnaylsisDetail();
  totalDaily: FoodAnaylsisDetail = new FoodAnaylsisDetail();
}

export interface forceTypeString {
  [name: string]: any
}

export enum nutrientNames {
  energy = 'energy',
  fat = 'fat',
  cholesterol = 'cholesterol',
  sodium = 'sodium',
  fiber = "fiber",
  sugars = "sugars",
  protein = "protein",
  calcium = "calcium",
  iron = "iron",
  potassium = "potassium",
  VITB6A = 'VITB6A',
  VITB12 = "VITB12",
  VITD = "VITD",
  VITC = "VITC",
}
export enum nutrientNamesFromBackEnd {
  "energy" = 'Energy',
  "fat" = 'Fat',
  "cholesterol" = 'Cholesterol',
  "sodium" = 'Sodium',
  "fiber" = "Fiber",
  "sugars" = "Sugars",
  "protein" = "Protein",
  "calcium" = "Calcium",
  "iron" = "Iron",
  "potassium" = "Potassium",
  "VITB6A" = 'Vitamin B6',
  "VITB12" = "Vitamin B12",
  "VITD" = "Vitamin D",
  "VITC" = "Vitamin C",
}
export class FoodAnalysis implements forceTypeString {
  [nutrientNames.energy]: FoodingredientAnalysis = new FoodingredientAnalysis();
  [nutrientNames.fat]: FoodingredientAnalysis = new FoodingredientAnalysis();
  [nutrientNames.cholesterol]: FoodingredientAnalysis = new FoodingredientAnalysis();
  [nutrientNames.sodium]: FoodingredientAnalysis = new FoodingredientAnalysis();
  [nutrientNames.protein]: FoodingredientAnalysis = new FoodingredientAnalysis();
  [nutrientNames.calcium]: FoodingredientAnalysis = new FoodingredientAnalysis();
  [nutrientNames.iron]: FoodingredientAnalysis = new FoodingredientAnalysis();
  [nutrientNames.potassium]: FoodingredientAnalysis = new FoodingredientAnalysis();
  [nutrientNames.fiber]: FoodingredientAnalysis = new FoodingredientAnalysis();
  [nutrientNames.sugars]: FoodingredientAnalysis = new FoodingredientAnalysis();
  [nutrientNames.VITB6A]: FoodingredientAnalysis = new FoodingredientAnalysis();
  [nutrientNames.VITB12]: FoodingredientAnalysis = new FoodingredientAnalysis();
  [nutrientNames.VITD]: FoodingredientAnalysis = new FoodingredientAnalysis();
  [nutrientNames.VITC]: FoodingredientAnalysis = new FoodingredientAnalysis();
}
