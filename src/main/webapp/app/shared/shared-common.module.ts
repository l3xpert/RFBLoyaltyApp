import { NgModule } from '@angular/core';

import { RfbLoyaltySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RfbLoyaltySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RfbLoyaltySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RfbLoyaltySharedCommonModule {}
