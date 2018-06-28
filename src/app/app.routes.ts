import { Routes } from '@angular/router';
import { FormulaireMissionsComponent} from './formulaire-missions/formulaire-missions.component';

import { PATH_MISSIONS, PATH_AJOUT_MISSIONS, PATH_NATURE, PATH_MODIFIER_MISSION, PATH_VALIDATION_MISSION} from './constantes';
import { TabMissionComponent } from './tab-mission/tab-mission.component';
import { NatureTableauComponent } from './nature-tableau/nature-tableau.component';
import { TableauMissionEnAttenteValidationComponent } from './tableau-mission-en-attente-validation/tableau-mission-en-attente-validation.component';
import { ModifierMissionComponent } from './modifier-mission/modifier-mission.component';


export const ROUTES: Routes = [

    { path: PATH_MISSIONS, component: TabMissionComponent },
    { path: PATH_VALIDATION_MISSION, component: TableauMissionEnAttenteValidationComponent },
    { path: PATH_AJOUT_MISSIONS, component: FormulaireMissionsComponent},
    { path: PATH_MODIFIER_MISSION + '/:idMission', component: ModifierMissionComponent},
    {path: PATH_NATURE, component: NatureTableauComponent},
    
];