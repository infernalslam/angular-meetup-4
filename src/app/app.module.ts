import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer'

import { AppComponent } from './app.component';
import { GameLevelComponent } from './game-level/game-level.component';

@NgModule({
  declarations: [
    AppComponent,
    GameLevelComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: reducer })
    // StoreModule.forRoot({ showName: showName })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
