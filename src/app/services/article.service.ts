import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../article';
import { Articles } from '../mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]>{
    const article: Article[] = Articles;

    return of(article);
  }
}