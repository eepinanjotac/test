export class Rol{
    constructor(
        public id: number,
        public nombre:string,
        public descripcion : string,
        public permisos:string,
        public estado: boolean
    ){}

}