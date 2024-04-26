import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  submitForm() {
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#contactForm')
      .then((response: EmailJSResponseStatus) => {
        console.log('Email sent successfully', response);
        alert('Email sent successfully');
      }, (error) => {
        console.error('Error sending email', error);
        alert('Error sending email');
      });
  }
}
