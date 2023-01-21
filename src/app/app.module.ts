import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShortenPipe } from './shorten.pipe';
import { CustomPipe } from './customPipe.pipe';

import { AppComponent } from './app.component';
import { FilterPipePipe } from './filter-pipe.pipe';

@NgModule({
  declarations: [AppComponent, ShortenPipe, CustomPipe, FilterPipePipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
