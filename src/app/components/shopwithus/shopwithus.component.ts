import { Component } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-shopwithus',
  templateUrl: './shopwithus.component.html',
  styleUrls: ['./shopwithus.component.scss']
})
export class ShopwithusComponent {
  constructor(private utils: UtilService){}
  ngOnInit(): void {
    this.utils.setRoute('shopwithus')
  }
  redirectToPath(path: string){
    this.utils.redirectToPath(path);
  }

}
