import { Component } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-findus',
  templateUrl: './findus.component.html',
  styleUrls: ['./findus.component.scss']
})
export class FindusComponent {
  constructor(private utils: UtilService){}
  ngOnInit(): void {
    this.utils.setRoute('findus');
  }
}
