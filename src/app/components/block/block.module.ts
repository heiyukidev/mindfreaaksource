import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../../atoms/content/content.component';
import { Block } from './block.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Content,Block],
  exports:[Block]
})
export class BlockModule { }
