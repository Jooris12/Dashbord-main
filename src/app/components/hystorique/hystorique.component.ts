import { Component, OnInit } from '@angular/core';



  @Component({
    selector: 'history',
    standalone: true,
    templateUrl: './hystorique.component.html',
    styleUrls: ['./hystorique.component.css']
  })
  export class History implements OnInit {
    transactions: any[] = [
      { 'date': Date(), 'description': 'Achat chez Amazon', amount: 50.00, type: 'Débit' },
      { 'date':  Date(), 'description': 'Remboursement', amount: 20.00, type: 'Crédit' },
      { 'date':  Date(), 'description': 'Facture de services', amount: 80.00, type: 'Débit' },
    ];

    constructor() { }

    ngOnInit(): void {
    }
  }
