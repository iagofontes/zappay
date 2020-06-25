import { Component, OnInit } from '@angular/core';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
    // console.log(this.dataSource);
  }

  onItemClick(node: ExampleFlatNode) {
    if(!node.expandable) {
      alert('oi');
    }
  }

}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Home',
    link: '/home'
  }, {
    name: 'Contatos',
    link: '/contacts'
  }, {
    name: 'Transferências',
    // link: '/discovery',
    children: [
      { 
        name: 'Nova Transferência', 
        link: '/payments/new' 
      },
      { 
        name: 'Minhas Transferências', 
        link: '/payments' 
      }
    ]
  }, {
    name: 'Perfil',
    link: '/profile'
  }, {
    name: 'Sair',
    link: '/logout'
  }
];

interface FoodNode {
  name: string;
  link?: string;
  children?: FoodNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}