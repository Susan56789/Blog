import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../article';
import { Articles } from '../mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]>{
    //const article: Article[] = Articles;
    //return of(article);
    return this.http.get<Article[]>("http://localhost:8000/articles")
  }

  getArticle(key: string):Observable<Article>{
   // const article: Article[] = Articles.filter(
    //  a => a.key === key
   // )
    //return of(article[0]);

    return this.http.get<Article>("http://localhost:8000/articles/"+ key)
  }
}
