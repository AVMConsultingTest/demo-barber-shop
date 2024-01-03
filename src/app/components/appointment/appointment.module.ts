import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment.component';
import { LoginComponent } from '../login/login.component';
import { ServicesComponent } from './services/services.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpServiceInterceptor } from 'src/app/http/httpInterceptor/http-service-interceptor.service';
import { ApiService } from 'src/app/services/api.service';
import { CalendarModule } from 'primeng/calendar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
const childrenRoutes: Routes = [
  { path: 'services', component: ServicesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
]

const routs: Routes = [
  { path: '', component : AppointmentComponent, children: childrenRoutes},
]


@NgModule({
  declarations: [
    AppointmentComponent,
    LoginComponent,
    ServicesComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    JsonPipe,
    CalendarModule,
    OverlayPanelModule,
    TableModule,
    ButtonModule,
    RouterModule.forChild(routs)
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpServiceInterceptor,
      multi: true,
    }
  ],
  exports:[RouterModule]
})
export class AppointmentModule { }
