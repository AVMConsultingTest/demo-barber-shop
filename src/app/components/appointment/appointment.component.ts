import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { baseUrl } from 'src/app/shared/constants/url.constant';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
selectedEmail: any;
appointmentList: any[]= [];
  paymentResponseData: any;
  constructor(private utils: UtilService, private route: ActivatedRoute, private apiService: ApiService,
    private router: Router){}
  ngOnInit(): void {
    this.utils.setRoute('appointment')
    this.router.navigate(['/appointment/services']);
  }

  redirect(item: string) { 
    this.utils.redirectToPath(item);
  }
  redirctToLocation(id:string){
    this.utils.redirctToLocation(id);
  }

  public navigateToSection(url: string) {
   this.router.navigate(['/appointment/services'], 
   { queryParams: { id: "service" }})
  }
  getAppointmentList(selectedEmail: string) {
    let url = `${baseUrl}/api/v1/appointment/getAppointment/${selectedEmail}`
    this.apiService.get(url).subscribe((res) => {
      this.appointmentList = res;
    })
  }
}
