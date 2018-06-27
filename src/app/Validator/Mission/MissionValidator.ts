import { FormControl } from "@angular/forms";
import _ from 'lodash';
import { DatePipe } from "@angular/common";


function isAfterToday(control: FormControl): boolean {
    let day = new Date();
    //Cette ligne permet de reformater la date au même format que le formulaire
    let today = ((day.getFullYear() + "-" + ((day.getMonth() + 1) <= 9 ? "0" : "") + (day.getMonth() + 1) + "-" + day.getDate()))
    if (control.value <= today) {
        return false;
    }
    else {
        return true;
    }
}

function isWeekEnd(control: FormControl) {
    let dateFormulaire = control.value.toString();
    let date = new Date();
    date.setFullYear(dateFormulaire.substring(0, 4), dateFormulaire.substring(5, 7) - 1, dateFormulaire.substring(8, 10));
    if (date.getDay() == 6 || date.getDay() == 0) {
        return false;
    }
    else {
        return true;
    }
}



/*  TODO :
function isHoliday(control:FormControl): boolean{

}


function isAlreadyTaken(control:FormControl): boolean{

}

function isAWeekByPlane(control :FormControl):boolean {
    
}
*/


export function isGoodDateDebutValidator(control: FormControl) {
    if (isAfterToday(control) && isWeekEnd(control)) {
        return null
    }
    else {
        return { isGoodDateDebut: true }
    }
}

export function isGoodDateFinValidator(control: FormControl) {
    if (isAfterToday(control) && isWeekEnd(control)) {
       return null
    }
    else {
        return { isGoodDateFin: true }
        
    }
}

export function isEmptyValidator(control:FormControl){
    if (control.value == "" || control.value==null) {
        return {isEmpty:true};
    }
    else {
        return null;
    }
}


