export interface UserForm {
    nombre: string;
    apellido: string;
    email:string;
    password:string;
    password2?:string;
    rol_id?:number;
}