import { Account } from './account.model';

export interface Contact {
    clientId: string,
    name: string,
    email: string,
    phone: string,
    status: boolean,
    accounts: Account[]
}