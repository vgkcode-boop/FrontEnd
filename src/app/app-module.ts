import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { App } from './app';
import { Item } from './item/item';
import { Produto } from './produto/produto';

@NgModule({
  declarations: [App, Item, Produto],
  imports: [BrowserModule, HttpClientModule],

  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
