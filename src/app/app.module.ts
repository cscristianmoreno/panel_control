import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './mui.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Interceptor } from 'src/interceptors/http.interceptor';
import { SubmitComponent } from './components/submit/submit.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PanelComponent } from './components/panel/panel.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';

import { CookieService } from 'ngx-cookie-service';
import { SectionUsers } from './components/sections/users/users.component';
import { SectionHome } from './components/sections/main/home.component';
import { DialogRegisterComponent } from './components/dialog/register/dialog.register.component';
import { DialogConfirmationComponent } from './components/dialog/confirmation/dialog.confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SubmitComponent,
    SpinnerComponent,
    PanelComponent,
    MenuComponent,
    HeaderComponent,
    DialogRegisterComponent,
    DialogConfirmationComponent,

    SectionUsers,
    SectionHome
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
      },
      CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
