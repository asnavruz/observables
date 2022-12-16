import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  delay,
  filter,
  first,
  map,
  pluck,
  skip,
  take,
  takeUntil,
  tap,
  throttle,
} from 'rxjs/operators';
import { OperatorsService } from 'src/app/services/operators.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit {
  userNames$!: Observable<string[]>;
  countries$!: Observable<string[]>;

  searchControl = new FormControl('');

  constructor(private operatorService: OperatorsService) {}

  ngOnInit(): void {
    // MAP sequential users => names
    this.operatorService
      .getUsersSequentially()
      .pipe(
        tap(console.log),
        map((user) => user.name),
        tap((user) => console.log(user))
      )
      .subscribe();

    // PLUCK sequential users => country and add a DELAY
    this.operatorService
      .getUsersSequentially()
      .pipe(pluck('country'), delay(2000), tap(console.log))
      .subscribe();

    // MAP click event to x and y coordinates and SKIP first 3 clicks and listen to next 2 clicks
    this.operatorService
      .getClickEvent()
      .pipe(
        map((event) => {
          return {
            x: event.x,
            y: event.y,
          };
        }),
        skip(3),
        take(2),
        tap(console.log)
      )
      .subscribe();

    // filter sequential users => keep users older than 18 years
    this.operatorService
      .getUsersSequentially()
      .pipe(
        filter((x) => x.age > 18),
        tap(console.log)
      )
      .subscribe();

    // filter interval (get only odd numbers)
    this.operatorService
      .getInterval()
      .pipe(
        filter((x) => x % 2 == 1),
        tap(console.log)
      )
      .subscribe();

    // show filter dialog result => stackblitz

    // get user names
    this.userNames$ = this.operatorService.getUsers().pipe(
      map((users) => users.map((user) => user.name)),
      tap(console.log)
    );

    // get older than 18
    this.userNames$ = this.operatorService.getUsers().pipe(
      map((users) => users.filter((user) => user.age > 18)),
      tap(console.log)
    );

    // get FIRST user
    this.operatorService.getUsersSequentially().pipe(first());

    // get interval => take until click event is fired
    this.operatorService
      .getInterval()
      .pipe(takeUntil(this.operatorService.getClickEvent()), tap(console.log))
      .subscribe();

    // get interval => throttle when click event is fired
    this.operatorService
      .getInterval()
      .pipe(
        throttle(() => this.operatorService.getClickEvent()),
        tap(console.log)
      )
      .subscribe();

    // search input debounce
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        tap((x) => console.log('REQUEST SEND: ', x))
      )
      .subscribe();

    // catch error
    this.operatorService
      .getSequenceWithError()
      .pipe(catchError((err) => of(0)))
      .subscribe((x) => console.log(x));
  }
}
