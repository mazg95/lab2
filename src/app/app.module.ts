import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MetricComponent } from './metric/metric.component';
import { SessionComponent } from './session/session.component';
import { MealComponent } from './meal/meal.component';
import { SessionListComponent } from './session-list/session-list.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { MetricListComponent } from './metric-list/metric-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MetricComponent,
    SessionComponent,
    MealComponent,
    SessionListComponent,
    MealListComponent,
    MetricListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
