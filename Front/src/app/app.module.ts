import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCER } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffects } from './state/effects/projects.effects';
import { UserEffects } from './state/effects/user.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([ProjectEffects, UserEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
