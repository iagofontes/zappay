import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accountForm: FormGroup;
  @Input() account: Account;

  constructor() { }

  ngOnInit(): void {
    console.log(this.account);
    this.onInitForm();
  }

  onSubmit(): void {
    alert('submitou');
    console.log(this.account);
  }

  onCancel(): void {
    console.log('cancel');
  }

  onInitForm(): void {
    this.accountForm = new FormGroup({
      'bank': new FormControl('', [Validators.required]),
      'name': new FormControl('', [Validators.required]),
      'agency': new FormControl('', [Validators.required]),
      'account': new FormControl('', [Validators.required]),
      'status': new FormControl('', [Validators.required])
    });
  }

}
