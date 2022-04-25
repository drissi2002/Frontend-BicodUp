import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule} from'@angular/forms';
import {HttpClientModule} from'@angular/common/http'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import{MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon';
//import { RouterModule } from './app-routing/app-routing.module';
import{AppRoutingModule, routing} from './app-routing/app-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { MatCardModule } from '@angular/material/card';


import { HttpClientModule } from '@angular/common/http';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule } from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component'
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { SidebarUserComponent } from './pages/user/sidebar-user/sidebar-user.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { WelcomeUserComponent } from './pages/user/welcome-user/welcome-user.component';
@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,

    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,

    UpdateQuizComponent,
    AddQuestionComponent,
    ViewQuizQuestionsComponent,
    LoadQuizComponent,
      
    UpdateQuizComponent,  
    LoadQuizComponent, SidebarUserComponent, InstructionsComponent, StartComponent, UserProfileComponent, WelcomeUserComponent
    SidebarComponent,
     LoadQuizComponent, 
     InstructionsComponent, 
     StartComponent
 SidebarUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class AppModule { }
