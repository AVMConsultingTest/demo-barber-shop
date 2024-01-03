import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BookingDetails } from '../model/bookingDetails.model';
import { baseUrl } from 'src/app/shared/constants/url.constant';
import { UtilService } from 'src/app/services/util.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {


  selectedTab: any = 'paymentProcess';
  bookingDetails: BookingDetails = new BookingDetails();
  services: string[] = [
    'Haircut, Line Ups, Beard, Shave & Facials',
    'Braids/Dreads & Extensions',
    'Salon Services',
    'Packages'
  ];
  selectEmail: number = 1;
  selectSMS: number = 1;

  barberDetailsList = [
    {barberDetails: 'jhon (@johnricardo_Barber)', bookingTime: '12:00Pm', bookingDate: 'Thursday, June 15Th'},
    {barberDetails: 'jhon1 (@john1ricardo_Barber)', bookingTime: '12:00Pm', bookingDate: 'Thursday, June 15Th'},
    {barberDetails: 'jhon2 (@john2ricardo_Barber)', bookingTime: '12:00Pm', bookingDate: 'Thursday, June 15Th'},
    {barberDetails: 'jhon3 (@john3ricardo_Barber)', bookingTime: '12:00Pm', bookingDate: 'Thursday, June 15Th'},
    {barberDetails: 'jhon4 (@john4ricardo_Barber)', bookingTime: '12:00Pm', bookingDate: 'Thursday, June 15Th'},
  ]
  bookingDate!: Date;
  myScriptLoader: any;
  paymentReceivedData: any;
  payLater: boolean =  false;

  constructor(private router : Router, private activeRoute: ActivatedRoute,
    private apiService: ApiService, private utils: UtilService,){
    this.selectedTab = this.activeRoute.snapshot.paramMap.get('id') || "service";
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      params => {
        if(params['paymentReceivedData']){
          this.paymentReceivedData = JSON.parse(params['paymentReceivedData']);
          this.selectedTab ='confirmed';
          this.redirctToLocation('newBooking');
        }
      }
    )
  }

  redirect(item: any) {
    this.selectedTab = item;
  }

  redirctToLocation(id: string){
    this.utils.redirctToLocation(id);
  }
  selectService(data: any) {
   this.bookingDetails.service = data;
   this.redirect('serviceDetails');
  }

  selectServiceDetails(arg0: any){
    this.bookingDetails.serviceDetails = "1hr 15m - 1hr 20m / $60";
   this.redirect('availability');
  }

  selectBarber(arg0: any){
    this.bookingDetails.barberDetails = arg0.barberDetails;
    this.bookingDetails.bookingDate = arg0.bookingDate;
    this.bookingDetails.bookingTime = arg0.bookingTime;
    this.redirect('terms');
  }

	selectDate() {
    this.bookingDetails.bookingDate = this.bookingDate.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      weekday: 'short'
    });
    this.redirect('barber');
	}
  selectBarberName($event: any) {
    this.bookingDetails.barberDetails = $event;
    this.redirect('timer');
  }

  selectTime($event: any){
    this.bookingDetails.bookingTime = $event;
    this.redirect('terms');
  }
  public time =     {
      "morning": [ "06:00", "07:00", "08:00"],
      "afternoon":["12:00", "13:00", "14:00"],
      "evening":["18:00", "19:00", "20:00"]
  }
  routerRedirect(arg0: string) {
    this.router.navigate([arg0]);
  }

  requestBooking() {
    let obj = {
      "appointment": this.bookingDetails
    }
    this.apiService.post(obj, baseUrl+'/api/v1/appointment/bookAppointment').subscribe((res: any) =>{
      console.log(res);
      this.redirect('paymentProcess');
    })
  }
  
  proceedToPay(){
    window.location.href = baseUrl+'/api/v1/payment/getView'
  }

  downloadReceipt() {
    this.bookingDetails = new BookingDetails();
    window.open(this.paymentReceivedData.receiptUrl, '_blank');
  }
  downloadReceiptWithOutPay(){
    this.selectedTab ='service';
    this.bookingDetails = new BookingDetails();
    this.redirctToLocation('newBooking');
    this.payLater = false;
  }

  proceedToBookWithoutPay(){
    this.selectedTab ='confirmed';
    this.payLater = true;
  }
}

