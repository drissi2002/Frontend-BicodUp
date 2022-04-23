import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { AppComponent } from '../app.component';
import { ViewCategoriesComponent } from '../pages/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from '../pages/admin/add-categories/add-categories.component';
import { ViewQuizzesComponent } from '../pages/admin/view-quizzes/view-quizzes.component';
import {AddQuizComponent} from '../pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from '../pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from '../pages/admin/view-quiz-questions/view-quiz-questions.component';
import {AddQuestionComponent} from '../pages/admin/add-question/add-question.component';;
const routes: Routes = [
  { path: 'admin', 
  component: DashboardComponent,
  //canActivate:[AdminGuard],
children:[{
  path:'profile',
  component: ProfileComponent,
},{
  path:'',
  component: WelcomeComponent,
},{
  path:'categories',
  component: ViewCategoriesComponent,
},{
  path:'add-category',
  component: AddCategoriesComponent,
},{
  path:'quizzes',
  component:ViewQuizzesComponent
},{
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

]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
