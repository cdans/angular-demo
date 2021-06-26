import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TabbarComponent} from './components/tabbar/tabbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {NumbersComponent} from './components/numbers/numbers.component';
import {StatisticsComponent} from './components/numbers/statistics/statistics.component';
import {RouterModule, Routes} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'numbers', component: NumbersComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TabbarComponent,
    WelcomeComponent,
    NumbersComponent,
    StatisticsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory:  httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
