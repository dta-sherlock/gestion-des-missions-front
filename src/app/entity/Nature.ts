export class Nature{

    nom:string;
    facturee:boolean;
    versementPrime:boolean;
    tjm:number;
    prime:number;

    constructor(_nature:string, _facturee:boolean, _versementPrime:boolean,_tjm:number, _prime:number){
        this.nom=_nature;
        this.facturee=_facturee;
        this.versementPrime=_versementPrime;
        this.tjm=_tjm;
        this.prime=_prime;
    }

}

