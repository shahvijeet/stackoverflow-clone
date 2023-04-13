import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { HomeComponent } from './layouts/home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
