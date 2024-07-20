import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './restPipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { MealTypeFilterPipe } from './restPipes/meal-type-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleViewComponent,
    HeaderComponent,
    FooterComponent,
    SearchPipe,
    MealTypeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
