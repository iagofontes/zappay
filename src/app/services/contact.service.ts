import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    ccontacts: Contact[] = [
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

    public getContacts(): Contact[] {
        return this.ccontacts.slice();
    }

    public getContactById(contactId: string) {
        return this.getContacts().filter((element) => {
            return element.clientId == contactId;
        })[0];
    }

}