import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Article } from 'src/app/article';
import { Articles } from 'src/app/mock-articles';
import { ArticleService } from 'src/app/services/article.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

 article : Article[] = [];

  constructor(private articleService: ArticleService,
    private titleService: Title,
    private sharedService: SharedService
    ) { }

  ngOnInit(): void {

    this.titleService.setTitle(` ${this.sharedService.blogTitle}`)
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
