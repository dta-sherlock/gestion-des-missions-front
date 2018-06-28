export class Nature{

    id:number;
    nom:string;
    facturation:boolean;
    prime:boolean;
    pourcentage:number;
    plafond:number;
    plafondDepassable:boolean;
    debutValidite:Date;
    finValidite:Date;
    tjm:number;


    constructor(_nom:string, facturation:boolean, _prime:boolean,_pourcentage:number,_plafond:number,_plafondDepassable:boolean, _debutValidite:Date, _tjm:number, _finValidite?:Date){
        this.nom=_nom;
        this.facturation=facturation;
        this.prime=_prime;
        this.pourcentage=_pourcentage;
        this.plafond=_plafond;
        this.plafondDepassable=_plafondDepassable;
        this.debutValidite=_debutValidite;
        this.finValidite=_finValidite;
        this.tjm=_tjm;
    }

}