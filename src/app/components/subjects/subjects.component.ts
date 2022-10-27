import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {
  subject$: Subject<number> = new Subject();
  behaviour$: BehaviorSubject<number> = new BehaviorSubject(0);
  replay$: ReplaySubject<number> = new ReplaySubject(3);

  subjectValues: number[] = [];
  behaviourValues: number[] = [];
  replayValues: number[] = [];

  emittedCount = 0;
  interval?: any;

  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      const random = Math.random();
      this.subject$.next(random);
      this.behaviour$.next(random);
      this.replay$.next(random);
      this.emittedCount++;
    }, 1000);
  }

  startSubscribing(): void {
    this.subject$.subscribe((data) => this.subjectValues.push(data));
    this.behaviour$.subscribe((data) => this.behaviourValues.push(data));
    this.replay$.subscribe((data) => this.replayValues.push(data));
  }

  completeSubjects(): void {
    this.subject$.complete();
    this.behaviour$.complete();
    this.replay$.complete();
    clearInterval(this.interval);
  }
}
