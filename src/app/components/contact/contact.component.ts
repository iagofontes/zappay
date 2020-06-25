import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  contact: Contact;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private contactService: ContactService) { }

  ngOnInit(): void {

    this.activatedRoute
      .params
      .subscribe((param)=> {
        console.log(param);
        if(param['id']) {
          this.contact = this.contactService.getContactById(param['id']);
          console.log(this.contact);
        }
      });

    this.contactForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', [Validators.required]),
    });

  }

  onSubmit(): void {
    alert('submit');
  }

  onCancel(): void {
    alert('cancel');
  }

  saveAccount(): void {
    alert('save account');
  }

}
