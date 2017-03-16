import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skills } from './skills.component';
import { Range } from '../../atoms/range/range.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Skills,Range],
  exports:[Skills]
})
export class SkillsModule { }
