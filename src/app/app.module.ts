import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './views/home/home.component';
import { SessionsComponent } from './views/sessions/sessions.component';
import { ReikiComponent } from './views/therapies/reiki/reiki.component';
import { AccessBarsComponent } from './views/therapies/access-bars/access-bars.component';
import { AcupunctureComponent } from './views/therapies/acupuncture/acupuncture.component';
import { RadionicsTableComponent } from './views/therapies/radionics-table/radionics-table.component';
import { LoginComponent } from './modals/login/login.component';
import { ForgotPasswordComponent } from './modals/forgot-password/forgot-password.component';
import { RegisterComponent } from './modals/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'therapies/reiki', component: ReikiComponent },
  { path: 'therapies/access-bars', component: AccessBarsComponent },
  { path: 'therapies/acupuncture', component: AcupunctureComponent },
  { path: 'therapies/radionics-table', component: RadionicsTableComponent },
  { path: 'sessions', component: SessionsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    HomeComponent,
    SessionsComponent,
    ReikiComponent,
    AccessBarsComponent,
    AcupunctureComponent,
    RadionicsTableComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
