import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { KeyupComponent } from './keyup/keyup.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyupComponent,
    LoopBackComponent,
    HeroParentComponent,
    HeroChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
