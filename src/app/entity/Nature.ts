export class Nature{

    id:number;
    nom:string;
    facturee:boolean;
    versementPrime:boolean;
    tjm:number;
    prime:number;
    plafond:number;
    depassementFrais:boolean;


    constructor(_nom:string, _facturee:boolean, _versementPrime:boolean,_tjm:number, _prime:number,_plafond:number,_depassementFrais){
        this.nom=_nom;
        this.facturee=_facturee;
        this.versementPrime=_versementPrime;
        this.tjm=_tjm;
        this.prime=_prime;
        this.plafond=_plafond;
        this.depassementFrais=_depassementFrais;
    }

}