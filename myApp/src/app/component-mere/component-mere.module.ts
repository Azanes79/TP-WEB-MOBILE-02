import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentMereComponent } from './component-mere.component';
import { ComponentEnfantComponentModule } from '../component-enfant/component-enfant.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, ComponentEnfantComponentModule],
  declarations: [ComponentMereComponent],
  exports: [ComponentMereComponent]
})
export class ComponentMereComponentModule {}
