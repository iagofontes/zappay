import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Account } from '../models/account.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    ccontacts: Contact[] = [];
    // ccontacts: Contact[] = [
    //     {
    //         "clientId": "02145879658452",
    //         "name": "Felipe Sobrero Sandroni",
    //         "email": "felipe.sobrero@zappay.com.br",
    //         "phone": "(11)96325-1145",
    //         "status": true,
    //         "accounts": [
    //             {
    //                 "accountId": 15648168781891654187,
    //                 "bank": 341,
    //                 "name": "FELIPE SOBRERO",
    //                 "agency": "2475",
    //                 "account": "48596-7",
    //                 "status": true
    //             }
    //         ]
    //     }
    // ];

    constructor(private http: HttpClient) { }

    public getContacts() {
    // public getContacts(): Contact[] {
    // public getContacts(): void {
        // this.http
        //     .get<Contact[]>('https://zappay-e7564.firebaseio.com/contacts.json')
        //     .subscribe((response: Contact[]) => {
        //         console.log(response);
        //         this.ccontacts = this.ccontacts;
        //         return this.ccontacts;
        //     });
                // map(contacts => {
                //     return contacts.map(contact => {
                //         return {
                //             ...contact,
                //             accounts: contacts.accounts ? contacts.accounts : []
                //         };
                //     });
                // }),
                // tap(contacts => {
                //     this.ccontacts = contacts;
                // })
        // return this.ccontacts.slice();
        return this.http.get<Contact[]>(
            'https://zappay-e7564.firebaseio.com/contacts.json'
        ).pipe(
          map(recipes => {
            return recipes.map(recipe => {
              return {
                ...recipe,
                accounts: recipe.accounts ? recipe.accounts : []
              };
            });
          }),
          tap((contacts: Contact[]) => {
              return contacts;
          }));
    }

    public getContactById(contactId: string) {
        return this.getContacts().filter((element) => {
            return element.clientId == contactId;
        })[0];
    }

    public saveAccount(clientId: string, account: Account): void {
        let index = this.ccontacts.findIndex((element)=>{
            return clientId == element.clientId;
        });
        this.ccontacts[index].accounts.push(account);
    }

}