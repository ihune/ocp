import { NgModule } from '@angular/core';
import { StoreModule, ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
<<<<<<< HEAD

import * as fromPraticheModule from './store/reducers/index';
=======
import { PraticheEffects } from 'app/entities/pratiche/store/effects/pratiche.effects';
import { ResidenteEffects } from 'app/entities/pratiche/store/effects/residente.effects';
import { FamiliariEffects } from 'app/entities/pratiche/store/effects/familiari.effects';
>>>>>>> branch 'master' of http://gitlab.datamanagementitalia.it/accedonext/portalecittadinodmi.git
import { ToponimoEffects } from './store/effects/toponimo.effects';
import { CivicoEffects } from './store/effects/civici.effects';
import { DocumentiUploadEffects } from './store/effects/documenti-upload.effects';
import { CambioResidenzaEffects } from './store/effects/cambio-residenza.effects';
import { ListaPraticheEffects } from './store/effects/lista-pratiche.effects';
<<<<<<< HEAD
import { ListaPraticheOnlineEffects } from './store/effects/lista-pratiche-online.efffects';
=======
import { localStorageSync, LocalStorageConfig } from 'ngrx-store-localstorage';
import * as fromPraticheModule from './store/reducers/index';
import * as fromListaPratiche from './store/reducers/lista-pratiche.reducer';
import * as fromFamiliari from './store/reducers/familiari.reducer';
import * as fromResidente from './store/reducers/residente.reducer';
import * as fromToponimi from './store/reducers/toponimo.reducer';
import * as fromCivici from './store/reducers/civici.reducer';
import * as fromDocumentiUpload from './store/reducers/documenti-upload.reducer';
import * as fromCambioResidenza from './store/reducers/cambio-residenza.reducer';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  const config: LocalStorageConfig = {
    keys: ['pratiche', 'familiari', 'residente', 'toponimi', 'civici', 'documentiUpload', 'cambioResidenza', 'listaPratiche'],
    rehydrate: true,
    removeOnUndefined: true
  };
  return localStorageSync(config)(reducer);
}
>>>>>>> branch 'master' of http://gitlab.datamanagementitalia.it/accedonext/portalecittadinodmi.git

@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forFeature([
      ToponimoEffects,
      CivicoEffects,
      DocumentiUploadEffects,
      CambioResidenzaEffects,
      ListaPraticheEffects,
      ListaPraticheOnlineEffects
    ]),
    StoreModule.forFeature(fromPraticheModule.PraticheModuleFeatureKey, fromPraticheModule.reducers, { metaReducers: [localStorageSyncReducer] }),
    StoreModule.forFeature(fromFamiliari.familiariFeatureKey, fromPraticheModule.reducers, { metaReducers: [localStorageSyncReducer] }),
    StoreModule.forFeature(fromResidente.ResidenteFeatureKey, fromPraticheModule.reducers, { metaReducers: [localStorageSyncReducer] }),
    StoreModule.forFeature(fromToponimi.toponimoesFeatureKey, fromPraticheModule.reducers, { metaReducers: [localStorageSyncReducer] }),
    StoreModule.forFeature(fromCivici.civiciFeatureKey, fromPraticheModule.reducers, { metaReducers: [localStorageSyncReducer] }),
    StoreModule.forFeature(fromDocumentiUpload.documentiUploadFeatureKey, fromPraticheModule.reducers, { metaReducers: [localStorageSyncReducer] }),
    StoreModule.forFeature(fromCambioResidenza.cambioResidenzaFeatureKey, fromPraticheModule.reducers, { metaReducers: [localStorageSyncReducer] }),
    StoreModule.forFeature(fromListaPratiche.listaPraticheFeatureKey, fromPraticheModule.reducers, { metaReducers: [localStorageSyncReducer] })
  ],
  providers: [],
  exports: []
})
export class PraticheStoreModule {}
