export class Client{
    constructor(
        public id: number,
        public ci: string,
        public name: string,
        public lastname: string,
        public address: string,
        public phone: string,
        public email: string,
        public id_group_cli: number,
        public status: boolean
    ){}
}