export interface RespuestaFeriados{
    status: string;
    totalResultados: number;
    data: Feriado[];
}
export interface Feriado{
    date: string;
    extra: string;
    inalineable: boolean;
    title: string;
    type: string;
}
export interface IClases{
    id : number;
    nom_asig : any;
    modulo_seccion : any;
    fecha_clase: any;
    rut_estudiante:any;
}
export interface IClase{
    nom_asig : any;
    modulo_seccion : any;
    fecha_clase: any;
    rut_estudiante:any;
}
export interface IClaseActual{
    nom_asig : any;
    modulo_seccion : any;
    fecha_clase: any;
}