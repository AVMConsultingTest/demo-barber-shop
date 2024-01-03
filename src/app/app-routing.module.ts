import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ShopwithusComponent } from './components/shopwithus/shopwithus.component';
import { FindusComponent } from './components/findus/findus.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ProductComponent } from './components/shopwithus/product/product.component';
import { GiftCardsComponent } from './components/service/gift-cards/gift-cards.component';
import { MembershipComponent } from './components/service/membership/membership.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'giftcard', component: GiftCardsComponent},
  { path: 'membership', component: MembershipComponent},
  { path: 'shopwithus', component: ShopwithusComponent},
  { path: 'findus', component: FindusComponent},
  { path: 'terms', component: TermsAndConditionsComponent},
  { path: 'privacy', component: PrivacyPolicyComponent},
  { path: 'product', component: ProductComponent },
  { path: 'appointment', loadChildren: () => import('./components/appointment/appointment.module').then(mod => mod.AppointmentModule)},
  { path: '**', component: HomeComponent},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
