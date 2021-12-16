import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleComponent } from './components/article/article.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  {path: '' , component: ArticleListComponent},
  {path:'about', component: AboutComponent},
  {path:'404', component: Error404Component},
{path:':key', component: ArticleComponent},
{path:'**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
