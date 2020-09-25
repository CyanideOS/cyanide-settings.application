import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NativeSdkModule } from './components/native-sdk/native-sdk.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, NativeSdkModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
