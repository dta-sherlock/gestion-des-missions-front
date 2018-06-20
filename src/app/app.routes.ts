import { Routes } from '@angular/router';
import { FormulaireMissionsComponent} from './formulaire-missions/formulaire-missions.component';

import { PATH_MISSIONS, PATH_AJOUT_MISSIONS} from './constantes';
import { TabMissionComponent } from './tab-mission/tab-mission.component';


export const ROUTES: Routes = [

    { path: PATH_MISSIONS, component: TabMissionComponent },
    { path: PATH_AJOUT_MISSIONS, component: FormulaireMissionsComponent},
    { path: PATH_AJOUT_MISSIONS + '/:user', component: FormulaireMissionsComponent}

    /*{ path: PATH_MISSIONS, component: TabMissionComponent,
        children: [{
            path: PATH_FORMULAIRE_MISSIONS, component: FormulaireMissionsComponent
        }
         ]},*/

];