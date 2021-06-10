import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutritionDetailsComponent } from './nutrition-details/nutrition-details.component';
import { ReciepeCollectingComponent } from './reciepe-collecting/reciepe-collecting.component';
import { NutrionsDetailsDataGuard } from './shared/guards/nutrions-details-data.guard';

const routes: Routes = [
  {
    path: '',
    component: ReciepeCollectingComponent,
  },
  {
    path: 'details',
    component: NutritionDetailsComponent,
    canActivate: [NutrionsDetailsDataGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
