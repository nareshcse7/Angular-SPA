import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/share';

@Injectable()
export class ScrollToTopService {
  public status: Subject<boolean> = new Subject();
  private _active = true;
  private scrollToValue = 0;

  public get active(): boolean {
    return this._active;
  }

  public set active(v: boolean) {
    this._active = v;
    this.status.next(v);
  }

  public enableBackToTop(): void {
    if (this.isSafariBrowser()) {
      this.scrollToValue = document.body.scrollTop;
    } else {
      this.scrollToValue = document.documentElement.scrollTop;
    }
    if (this.scrollToValue > 20) {
      this.active = true;
    } else {
      this.active = false;
    }
  }
  public isSafariBrowser(): boolean {
    if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor) || /iPad|iPhone|iPod/.test(navigator.userAgent)) {
      return true;
    }
    return false;
  }
}