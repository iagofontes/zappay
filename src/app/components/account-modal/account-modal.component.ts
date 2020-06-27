import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-account-modal',
  templateUrl: './account-modal.component.html',
  styleUrls: ['./account-modal.component.css']
})
export class AccountModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AccountModalComponent>,
    @Inject(MAT_DIALOG_DATA) public account: Account) { }
  
  ngOnInit(): void {
    // console.log(this.account);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
