import { Component } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  constructor(private utils: UtilService){}
  ngOnInit(): void {
    this.utils.setRoute('service')
  }
  redirect(url: string){
    this.utils.redirectToPath(url);
  }
}
