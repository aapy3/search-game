import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModalModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyOwnCustomMaterialModule } from './angularMaterial.module';
import { HomeComponent } from './home/home.component';
import { ApiHitService } from './apiHit.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgProgressModule } from 'ngx-progressbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    MyOwnCustomMaterialModule,
    NgbModule,
    HttpModule,
    NgbModalModule,
    NgbRatingModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    NgProgressModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiHitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
