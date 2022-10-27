import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatingComponent } from './components/creating/creating.component';
import { ObservableVsSubjectComponent } from './components/observable-vs-subject/observable-vs-subject.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

const routes: Routes = [
  {
    path: '',
    component: CreatingComponent,
  },
  {
    path: 'observablevssubject',
    component: ObservableVsSubjectComponent,
  },
  {
    path: 'subjects',
    component: SubjectsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
