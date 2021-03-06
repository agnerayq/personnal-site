import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

	articles: Array<any>;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
	  this.articleService.getAll().subscribe(data => {
		  this.articles = data;
	  });
  }

}
