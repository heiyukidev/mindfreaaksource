import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPage } from './index.component';
import { BlockModule } from '../../components/block/block.module';
import { SideprofileModule } from '../../components/sideprofile/sideprofile.module';

@NgModule({
  imports: [
    CommonModule,
    BlockModule,
    SideprofileModule
  ],
  declarations: [IndexPage],
  exports:[IndexPage]
})
export class IndexModule { }
