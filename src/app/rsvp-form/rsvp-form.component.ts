import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-rsvp-form',
  templateUrl: './rsvp-form.component.html',
  animations: [
    trigger('appearAnimation', [
      state('default', style({
        opacity: 0
      })),
      state('appear', style({
        opacity: 1
      })),
      transition('default <=> appear', animate('1000ms ease-in-out'))
    ]),

  ]
})
export class RsvpFormComponent implements AfterViewChecked {
  guestName: string = '';
  attendance: string = '';
  animationState: string = 'default';

  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.animationState = 'appear';
    }, 1200);
  }

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted:', this.guestName, this.attendance);

  }
}
