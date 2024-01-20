import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { EmailService } from '../services/email.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  animationState: string = 'default';
  formSubmitted = false;
  form: FormGroup;
  constructor(public emailService: EmailService, public toastr: ToastrService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required], // Add the 'name' field with a required validator
      attendance: ['', Validators.required], // Add the 'attendance' field with a required validator
    });
  }

  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.animationState = 'appear';
    }, 1200);
  }

  submitForm() {
    const emailData = {nome: this.name.value, presenca: this.attendance.value}
    this.emailService.sendEmail(emailData)
    .subscribe((value: any) => {
      if(value?.ok){
        this.toastr.success('Presença confirmada!');
        this.formSubmitted = true;
      }
    })

  }

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get attendance(): FormControl {
    return this.form.get('attendance') as FormControl;
  }

}
