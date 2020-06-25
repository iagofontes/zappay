import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-layout',
  templateUrl: './parent-layout.component.html',
  styleUrls: ['./parent-layout.component.css']
})
export class ParentLayoutComponent implements OnInit {

  //popular essa informação com um subject
  title: string = 'Contacts';
  subtitle: string = 'Sua lista de contatos cadastrados';
  
  constructor() { }

  ngOnInit(): void {  }

}
