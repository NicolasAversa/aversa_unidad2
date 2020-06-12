import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  products = [
    {
      name: 'Tomate',
      price: 120,
      description:
        'Tomates frescos cultivados por huertas locales. Libres de agroquímicos.',
      imgUrl:
        'https://img.freepik.com/vector-gratis/tomate-natural_1053-566.jpg?size=338&ext=jpg',
    },
    {
      name: 'Lechuga',
      price: 90,
      description:
        'Lechuga tipo criolla. Muy buena para sanguches de milanesa.',
      imgUrl:
        'https://5.imimg.com/data5/RN/GI/MY-41098264/lettuce-iceberg-500x500.jpg',
    },
    {
      name: 'Cebolla',
      price: 110,
      description: 'Cebolla común de tamaño inmenso.',
      imgUrl:
        'https://frutasmaripili.com/wp-content/uploads/2019/02/cebolla-blanca.jpg',
    },
  ];
  constructor() {}

  handleDelete(index) {
    this.products.splice(index, 1);
  }

  ngOnInit(): void {}
}
