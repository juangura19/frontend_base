import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localPE from '@angular/common/locales/es-PE';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthInterceptor } from './_interceptors/auth.interceptor';
import { MaterialModule } from './material/material.module';
import { PaginatorAdapter } from './_helpers/_adapters/paginator.adapter';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './_shared/header/header.component';
import { PopupComponent } from './_shared/popup/popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { TOKEN_NAME } from './_shared/constants';
import { PersonaComponent } from './pages/main/persona/persona.component';

export function tokenGetter() {
  return sessionStorage.getItem(TOKEN_NAME);
}

registerLocaleData(localPE, 'es-Pe');

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    PopupComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.ALLOWED_HOST_ADMIN],
        disallowedRoutes: [],
      }
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: LOCALE_ID, useValue: 'es-Pe'
    },
    { provide: MatPaginatorIntl, useValue: new PaginatorAdapter().getPaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
