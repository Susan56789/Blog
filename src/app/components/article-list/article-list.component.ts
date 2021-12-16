import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { Articles } from 'src/app/mock-articles';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

 article : Article[] = [];

  constructor() { }

  ngOnInit(): void {
    this.article = Articles;
  }

}
