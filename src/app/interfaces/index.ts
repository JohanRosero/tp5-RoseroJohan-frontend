export interface Productos {
    _id:         string;
    nombre:      string;
    descripcion: string;
    imagen:      string;
    precio:      number;
    stock:       number;
    destacado:   boolean;
    __v:         number;
}
export interface Convertion {
    success:           boolean;
    validationMessage: any[];
    result:            Result;
}

export interface Result {
    from:            string;
    to:              string;
    amountToConvert: number;
    convertedAmount: number;
}
export interface Ticket {
    _id:                 string;
    precioTicket:        string;
    categoriaEspectador: string;
    fechaCompra:         string;
    espectador:          Espectador;
    __v:                 number;
    tipoCategoria?:      TipoCategoria;
}

export interface Espectador {
    _id:      string;
    apellido: string;
    nombre:   string;
    dni:      string;
    email:    string;
    __v:      number;
}

export interface TipoCategoria {
    _id:         string;
    nombre:      string;
    descripcion: string;
    __v:         number;
}
