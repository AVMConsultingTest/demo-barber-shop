import { Component } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {
  constructor(private utils: UtilService){}
  ngOnInit(): void {
    this.utils.setRoute('aboutus')
  }
}
