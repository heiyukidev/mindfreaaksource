import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sideprofile } from './sideprofile.component';
import { AltContent } from '../../atoms/altcontent/altcontent.component';
import { SkillsModule } from '../skills/skills.module';
@NgModule({
  imports: [
    CommonModule,
    SkillsModule
  ],
  declarations: [Sideprofile,AltContent],
  exports:[Sideprofile]
})
export class SideprofileModule { }
