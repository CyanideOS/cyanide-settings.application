import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NativeSdkModule } from './components/native-sdk/native-sdk.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, NativeSdkModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
