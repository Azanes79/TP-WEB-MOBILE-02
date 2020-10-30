import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentEnfantComponent } from './component-enfant.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ComponentEnfantComponent],
  exports: [ComponentEnfantComponent]
})
export class ComponentEnfantComponentModule {}
