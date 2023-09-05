export class Product {
    constructor( 
        public sku: string,
        public name: string,
        public description: string,
        public specifications: string,
        public id_category: number,
        public pur_price: number,
        public id_iva: number,
        public id_unit: number,
        public mini_stock: number,
        public stock: number,
        public status?: boolean,
        public id?: number,
    ){}
  }