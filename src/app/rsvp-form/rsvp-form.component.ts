import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { EmailService } from '../services/email.service';
import { ToastrService } from 'ngx-toastr';

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
  constructor(public emailService: EmailService, public toastr: ToastrService) {}
  guestName: any = '';
  attendance: any = '';
  animationState: string = 'default';
  formSubmitted = false;

  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.animationState = 'appear';
    }, 1200);
  }

  submitForm() {
    const emailData = {nome: this.guestName, presenca: this.attendance}
    this.emailService.sendEmail(emailData).subscribe((value: any) => {
      if(value?.ok){
        this.toastr.success('Presença confirmada!');
        this.formSubmitted = true;
      }
    })

  }
}
