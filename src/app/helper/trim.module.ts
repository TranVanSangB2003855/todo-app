import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrimDirective } from './trim.directive';
import { NoWhitespaceDirective } from './nowhitespace.directive'

@NgModule({
  declarations: [NoWhitespaceDirective],
  exports: [NoWhitespaceDirective],
  imports: [CommonModule]
})
export class TrimModule { }
