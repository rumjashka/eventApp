import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {EventCardComponent} from '../components/event-card/event-card';
import {EventDetailsComponent} from '../components/event-details/event-details';
import { EventCardDirective } from '../directives/event-card/event-card';
import { HttpClientModule } from '@angular/common/http';
import { EventsProvider } from '../providers/events-provider/events-provider';
import {NgxMaskModule} from 'ngx-mask'
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventCardComponent,
    EventDetailsComponent,
    EventCardDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxMaskModule,
    IonicModule.forRoot(MyApp),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventCardComponent,
    EventDetailsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventsProvider]
})
export class AppModule {}
