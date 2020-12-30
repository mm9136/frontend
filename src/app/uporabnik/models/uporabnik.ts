export class Oznake {
    id: number;
    naziv: string;
    opis: string;
}
export class Artikli {
    id: number;
    naziv: string;
    opis: string;
}
export class NakupovalniSeznami {
    id: number;
    naziv: string;
    opis: string;
    artikli: Artikli[]
    oznake: Oznake[]

    // ostali atributi
}
export class Uporabnik {
    id: number;
    ime: string;
    priimek: string;
    email: string;
    uporabniskoIme: string;
    nakupovalniSeznami: NakupovalniSeznami[];

    // ostali atributi
}


