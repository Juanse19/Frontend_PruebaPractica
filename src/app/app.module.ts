import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService, ToolbarService } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    GridModule,
  ],
  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService,
    ToolbarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
