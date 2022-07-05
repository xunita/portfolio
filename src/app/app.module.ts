import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TriesComponent } from './tries/tries.component';
import { NowComponent } from './now/now.component';
import { ContactComponent } from './contact/contact.component';
import { ClickoutsideDirective } from './clickoutside.directive';
// import { XyzComponent } from './xyz/xyz.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    TriesComponent,
    NowComponent,
    ContactComponent,
    ClickoutsideDirective,
   //  XyzComponent
  ],
  exports: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    TriesComponent,
    NowComponent,
    ContactComponent,
    ClickoutsideDirective,
   //  XyzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
