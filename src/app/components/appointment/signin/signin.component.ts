import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  
  selectEmail: number = 1;
  selectSMS: number = 1;
  name: any;
  phone: any;
  email: any;
  constructor(private router: Router, private apiService: ApiService){}

  routerRedirect(arg0: string) {
    this.router.navigate([arg0]);
  }

  requestBooking() {
    let obj = {
      "appointment": {
        "name":this.name,
        "email":this.email,
        "phone_number": this.phone
        }
    }
    this.apiService.post(obj, '/api/v1/appointment/bookAppointment').subscribe((res: any) =>{
      console.log(res);
    })
  }
}
