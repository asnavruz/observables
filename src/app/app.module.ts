import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatingComponent } from './components/creating/creating.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { ObservableVsSubjectComponent } from './components/observable-vs-subject/observable-vs-subject.component';
import { OperatorsComponent } from './components/operators/operators.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatingComponent,
    SubscriptionsComponent,
    SubjectsComponent,
    ObservableVsSubjectComponent,
    OperatorsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
