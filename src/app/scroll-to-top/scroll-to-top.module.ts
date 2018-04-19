import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { ScrollToTopService } from './scroll-to-top.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ BackToTopComponent ],
  declarations: [ BackToTopComponent ],
  providers: [
    ScrollToTopService
  ],
})
export class ScrollToTopModule { }