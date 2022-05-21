import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent], //componentes
  imports: [BrowserModule, HeroesModule, ContadorModule, DbzModule], //otros módulos
  providers: [], //servicios específicos a un módulo
  bootstrap: [AppComponent], //componente principal
})
export class AppModule {}
