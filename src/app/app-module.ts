import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Title } from './components/title/title';
import { StudentsPage } from './pages/students-page/students-page';
import { HomePage } from './pages/home-page/home-page';
import { Sidebar } from './components/sidebar/sidebar';

@NgModule({
  declarations: [App, Header, Title, StudentsPage, HomePage, Sidebar],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
