import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/article';
import { ArticleService } from 'src/app/services/article.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

 article: Article = new Article();

  constructor(private route: ActivatedRoute,
    private articleService: ArticleService,
    private router:Router,
    private titleService: Title,
    private sharedService: SharedService
    ) { }

  ngOnInit(): void{
    this.route.params.subscribe(params =>
    {
      const key= params['key'];
      
      this.articleService.getArticle(key).subscribe(articles =>{

        if(articles === undefined){
         this.router.navigateByUrl('404');
         return;
        }
        
          this.article = articles;
          this.titleService.setTitle(`${this.article.title} : ${this.sharedService.blogTitle}`)
          
      })

    });
  }

}
