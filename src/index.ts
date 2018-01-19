import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountToComponent } from './count-to.component';

export * from './count-to.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CountToComponent],
    exports: [CountToComponent]
})
export class CountToModule { }
