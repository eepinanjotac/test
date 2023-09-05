export class Purchase{
    constructor(

        public id : number,
        public date_buy: Date,
        public code_buy: string,
        public img: string,
        public id_supplier: number,
        public status: boolean
    ){

    }
}