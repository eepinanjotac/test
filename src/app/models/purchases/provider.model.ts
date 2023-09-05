export class Provider {
    constructor(
        public id: number,
        public ruc: string,
        public trade_name: string,
        public representative: string,
        public address: string,
        public phone: string,
        public email: string,
        public status: boolean,
    ){}
  }