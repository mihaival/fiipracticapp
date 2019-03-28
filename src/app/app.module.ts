import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PresentationComponent } from './presentation/components/presentation/presentation.component';
import { AriasComponent } from './presentation/components/arias/arias.component';
import { MainComponent } from './presentation/components/main/main.component';
import { CategoryComponent } from './presentation/components/category/category.component';
import { CategoryTitleComponent } from './presentation/components/category/category-title/category-title.component';
import { CategoryTrainersComponent } from './presentation/components/category/category-trainers/category-trainers.component';
import {MatIconModule, MatInputModule, MatMenuModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './shared/components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    AriasComponent,
    MainComponent,
    CategoryComponent,
    CategoryTitleComponent,
    CategoryTrainersComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatMenuModule,
    MatIconModule
  ]
})
export class AppModule { }
