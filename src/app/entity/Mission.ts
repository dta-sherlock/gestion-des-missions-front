import { Nature } from "./Nature";

export enum Transport{
    AVION='AVION',
    COVOITURAGE='COVOITURAGE',
    TRAIN='TRAIN',
    VOITURE_DE_SERVICE='VOITURE_DE_SERVICE'
}

export enum Statut{
    INITIAL='INITIALE',
    EN_ATTENTE_VALIDATION='EN_ATTENTE_VALIDATION',
    VALIDEE='VALIDEE',
    REJETEE='REJETEE'
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

    constructor(_dateDeDebut:Date, _dateDeFin:Date, _nature:Nature, _villeDeDepart:string, _villeDArivee:string, _transport:Transport, _prime:number, _statut:Statut){
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