import { environment } from "src/environments/environment"
const base_url = environment.base_url;
export class Usuario {
    constructor(

        public nombre: string,
        public apellido: string,
        public email: string,
        public rol_id?: number,
        public img?: string,
        public id?: number,
        public estado?: boolean
    ) { }

    get imagenUrl() {

        if (!this.img) {
            return `${base_url}/upload/usuarios/noimage`;
        } else if (this.img) {
            return `${base_url}/upload/usuarios/${this.img}`
        } else {
            return `${base_url}/upload/usuarios/noimage`
        }

        /* console.log(this.img);
        console.log(this.img); */

    }

    /* get nombreApellido(){
        return this.nombre +' ' +this.apellido;
    }
    get getCorreo(){
        return this.email;
    } */
}