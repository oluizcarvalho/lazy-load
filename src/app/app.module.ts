import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
