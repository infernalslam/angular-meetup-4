import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { RANDOM } from './reducer'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  expected$: Observable<number>
  show$: Observable<number>
  constructor(private store: Store<any>) {
    this.expected$ = store.select('counter')
    // this.show$ = store.select('showName')
  }
  random () {
    this.store.dispatch({ type: RANDOM})
  }
}
