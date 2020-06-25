import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  displayedColumns: string[] = ['clientId', 'name', 'email'];
  dataSource = new MatTableDataSource<Contact>([]);
  contactForm: FormGroup;
  contacts: Contact[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService) { }

  ngOnInit() {
    this.dataSource.data = this.contactService.getContacts();
    this.dataSource.paginator = this.paginator;
  }

  onSelectContact(row: any) {
    this.router.navigate([row.clientId, 'edit'], {relativeTo: this.route});
  }

  onSubmit(){
    alert('submit');
  }

}

const CCONTACTS: Contact[] = [
  {
      "clientId": "02145879658452",
      "name": "Felipe Sobrero Sandroni",
      "email": "felipe.sobrero@zappay.com.br",
      "phone": "11 96325-1145",
      "status": true,
      "accounts": [
          {
              "accountId": 15648168781891654187,
              "bank": 341,
              "name": "FELIPE SOBRERO",
              "agency": "2475",
              "account": "48596-7",
              "status": true
          }
      ]
  }
];