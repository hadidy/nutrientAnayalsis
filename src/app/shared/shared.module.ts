import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutrientWeightPipe } from './pipe/nutrient-weight.pipe';
import { RoundPercentPipe } from './pipe/round-percent.pipe';
import { NutrientRowComponent } from './component/nutrient-row/nutrient-row.component';

@NgModule({
  declarations: [NutrientWeightPipe, RoundPercentPipe, NutrientRowComponent],
  exports: [NutrientWeightPipe, RoundPercentPipe, NutrientRowComponent],
  imports: [CommonModule],
})
export class SharedModule { }

