export interface listaRanma {
    ranma: RanmaInterface[];
}

export interface RanmaInterface {
    _id:         string;
    nombre:      string;
    genero:      string;
    edad:        string;
    descripcion: string;
    imagen:      string;
}