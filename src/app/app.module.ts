import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule }
  from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './common/component/header/header.component';
import { LeftsidebarComponent } from './common/component/leftsidebar/leftsidebar.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { SalesboxComponent } from './salesbox/salesbox.component';
import { LoginComponent } from './authentication/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftsidebarComponent,
    HomeComponent,
    OverviewComponent,
    SalesboxComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
