import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { KeyupComponent } from './keyup/keyup.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { VoterComponent } from './voter/voter.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { CountdownChildComponent } from './countdown-child/countdown-child.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyupComponent,
    LoopBackComponent,
    HeroParentComponent,
    HeroChildComponent,
    VoterComponent,
    VoteTakerComponent,
    CountdownChildComponent,
    CountdownParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
