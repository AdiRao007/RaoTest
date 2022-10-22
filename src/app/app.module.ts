import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DailogComponent } from './components/dailog/dailog.component';
import { SearchComponent } from './components/search/search.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    AppComponent, BannerComponent, HeaderComponent, NavbarComponent, FooterComponent,
    OurServicesComponent,
    DailogComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
