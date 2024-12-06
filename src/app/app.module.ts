import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
  
})
export class AppModule { }
