import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NumberGeneratorService} from './_services/number-generator/number-generator.service';

import { AppComponent } from './app.component';
import { PlayingSurfaceComponent } from './playing-surface/playing-surface.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayingSurfaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NumberGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
