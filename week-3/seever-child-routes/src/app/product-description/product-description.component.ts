import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  template: `
    <p>
     This is an amazing product with great value!
    </p>
  `,
  styles: [ `
    .container {
      margin-top: 20px;
    }
    p {
      color: red;
    }
  `]
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
