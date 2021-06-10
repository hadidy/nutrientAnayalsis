import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-reciepe-collecting',
  templateUrl: './reciepe-collecting.component.html',
  styleUrls: ['./reciepe-collecting.component.scss'],
})
export class ReciepeCollectingComponent implements OnInit, OnDestroy {
  food = new FormControl('', [
    Validators.required,
    Validators.pattern(/\b[\t|\n|\r\s]+\b/),
  ]);
  subcription: Subscription[] = [];
  constructor(private appService: AppService, private router: Router,
  ) { }

  ngOnInit(): void { }
  getErrorMessage(): string {
    let error = '';
    if (this.food.hasError('required')) {
      error = 'You must enter a value';
    }
    return error;
  }
  analyze(): void {
    // check if we have value
    if (this.food.value) {
      this.appService.showSpinner = true;
      // subscrition array to collect all subscriptions and un sunscribe
      // once we go to any other page
      this.subcription.push(
        this.appService
          .getMealAnalysis(this.food.value.split('\n'))
          .subscribe(
            () => {
              // handle success
              this.navigateToFoodAnaylsisDetails();
            },
            (err) => {
              // handle error
              this.handleGetMealAnalysisError();
            }
          )
      );
    }
  }
  // handle success
  // show user the details screen
  navigateToFoodAnaylsisDetails() {
    this.router.navigate(['/details']);
    this.appService.showSpinner = false;
  }
  // handle error
  // show user firendly message with descrptive error
  handleGetMealAnalysisError() {
    this.appService.showSpinner = false;
    this.appService.openSnackBar("Please check the ingredient spelling or if you have entered a quantities for the ingredients.", "dismiss")
  }
  ngOnDestroy(): void {
    // subscrition array to collect all subscriptions and un sunscribe
    // once we go to any other page
    this.subcription.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
