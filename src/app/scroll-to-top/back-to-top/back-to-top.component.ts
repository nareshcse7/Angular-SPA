import { Component, OnInit } from '@angular/core';
import { ScrollToTopService } from '../scroll-to-top.service';
@Component({
    selector: 'app-back-to-top',
    templateUrl: './back-to-top.component.html',
    styleUrls: [ './back-to-top.component.css' ]
})

export class BackToTopComponent {
    public active: boolean;
    constructor(private scrollToTopService: ScrollToTopService) {
        scrollToTopService.status.subscribe((status: boolean) => {
            this.active = status;
        });
    }
    // When the user clicks on the button, scroll to the top of the page
    public backToTop() {
        if (this.scrollToTopService.isSafariBrowser()) {
            this.scrollTo(document.body, 0, 500); // document.documentElement fails in safari
        } else {
            this.scrollTo(document.documentElement, 0, 500);
        }
    }

    public scrollTo(element: any, scrollToPosition: number, scrollDuration: number) {
        const startPosition = element.scrollTop;
        const changeInPosition = scrollToPosition - startPosition;
        let currentTime = 0;
        const increment = 20;
        const animateScroll = () => {
            currentTime += increment;
            const val = this.easeInOutQuad(currentTime, startPosition, changeInPosition, scrollDuration);
            element.scrollTop = val;
            if (currentTime < scrollDuration) {
                setTimeout(animateScroll, increment);
            }
        };
        void animateScroll();
    }
    public easeInOutQuad = (currentTime, startPosition, changeInPosition, scrollDuration) => {
        currentTime /= scrollDuration / 2;
        if (currentTime < 1) {
            return changeInPosition / 2 * currentTime * currentTime + startPosition;
        } else {
            currentTime--;
            return -changeInPosition / 2 * (currentTime * (currentTime - 2) - 1) + startPosition;
        }
    };
}