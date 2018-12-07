import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseModule } from '../base/base.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BaseModule
  ],
  exports: [
    CommonModule,
    BaseModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
