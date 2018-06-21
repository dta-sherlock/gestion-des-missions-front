import { Nature } from "./Nature";

export enum Transport{
    AVION='Avion',
    COVOITURAGE='Covoiturage',
    TRAIN='Train',
    VOITURE_DE_SERVICE='Voiture de service'
}

export enum Statut{
    INITIAL='Initial',
    EN_ATTENTE_VALIDATION='En attende de validation',
    VALIDEE='Validée',
    REJETEE='Rejetée'
}

export class Mission{

   public id:number;
   public dateDebut:Date;
   public dateFin:Date;
   public nature:Nature;
   public villeDeDepart:string;
   public villeDArrivee:string;
   public transport:Transport;
   public prime:number;
   public statut:Statut;

    constructor(id:number,_dateDeDebut:Date, _dateDeFin:Date, _nature:Nature, _villeDeDepart:string, _villeDArivee:string, _transport:Transport, _prime:number, _statut:Statut){
        this.id = id;
        this.dateDebut=_dateDeDebut;
        this.dateFin=_dateDeFin;
        this.nature=_nature;
        this.villeDeDepart=_villeDeDepart;
        this.villeDArrivee=_villeDArivee;
        this.transport=_transport;
        this.prime=_prime;
        this.statut=_statut
    }

}