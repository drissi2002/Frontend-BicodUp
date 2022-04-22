import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';



const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full', 
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full', 
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full', 
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
    
    {
      path:'profile',
      component: ProfileComponent,
    },
    {
      path:'',
      component: WelcomeComponent,
    },
    {
        path:'categories',
        component: ViewCategoriesComponent,
    },
    {
        path:'add-category',
        component:AddCategoryComponent,
    },
    {
      path:'quizzes',
      component:ViewQuizzesComponent,
    },
    {
      path:'add-quiz',
      component:AddQuizComponent
    },{
      path:'quiz/:idquiz',
      component:UpdateQuizComponent,
    },{
      path:'view-questions/:idquiz/:title',
      component:ViewQuizQuestionsComponent,
    },{
      path:'add-question/:idquiz/:title',
      component:AddQuestionComponent,
    }
    ],
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full', 
    canActivate:[NormalGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
