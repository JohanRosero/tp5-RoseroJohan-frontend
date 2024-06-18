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
