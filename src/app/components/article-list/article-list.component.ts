import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { Articles } from 'src/app/mock-articles';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

 article : Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  this.getArticles();
  }

  getArticles():void{
    this.articleService
    .getArticles()
    .subscribe(
      article => (this.article = article)
    )
  }
}
