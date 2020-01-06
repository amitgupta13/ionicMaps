import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdWithTabsPageRoutingModule } from './third-with-tabs-routing.module';

import { ThirdWithTabsPage } from './third-with-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThirdWithTabsPageRoutingModule
  ],
  declarations: [ThirdWithTabsPage]
})
export class ThirdWithTabsPageModule {}
