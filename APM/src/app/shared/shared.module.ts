import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';

@NgModule({
  declarations: [
    StarComponent
  ],
  exports: [
    StarComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
