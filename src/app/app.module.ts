import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
// import { AppointmentComponent } from './components/appointment/appointment.component';
import { ShopwithusComponent } from './components/shopwithus/shopwithus.component';
import { FindusComponent } from './components/findus/findus.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ProductComponent } from './components/shopwithus/product/product.component';
import { GiftCardsComponent } from './components/service/gift-cards/gift-cards.component';
import { MembershipComponent } from './components/service/membership/membership.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    AboutusComponent,
    // AppointmentComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    ShopwithusComponent,
    FindusComponent,
    ProductComponent,
    GiftCardsComponent,
    MembershipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
