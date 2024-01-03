import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private router : BehaviorSubject<string> = new BehaviorSubject('') 
  constructor(private route: Router, private viewportScroller: ViewportScroller) { }

  setRoute(route: string) {
    this.router.next(route);
  }
  getRoute():Observable<string>{
   return this.router.asObservable();
  }

  redirectToPath(path: string){
    this.route.navigate([path]);
  }

  redirctToLocation(id: string){
    this.viewportScroller.scrollToAnchor(id);
  }
}
