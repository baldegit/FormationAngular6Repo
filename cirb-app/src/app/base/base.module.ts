import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTextComponent } from './base-text/base-text.component';
import { BaseImageComponent } from './base-image/base-image.component';
import { BaseAvatarComponent } from './base-avatar/base-avatar.component';
import { BaseInputComponent } from './base-input/base-input.component';
import { BaseFxDirective } from './base-fx.directive';
import { BaseFxOverDirective } from './base-fx-over.directive';

@NgModule({
  declarations: [BaseTextComponent, BaseImageComponent, BaseAvatarComponent, BaseInputComponent, BaseFxDirective, BaseFxOverDirective],
  imports: [
    CommonModule
  ],
  exports: [BaseTextComponent, BaseImageComponent, BaseAvatarComponent, BaseInputComponent, BaseFxDirective, BaseFxOverDirective]
})
export class BaseModule { }
