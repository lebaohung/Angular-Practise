import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hackernews',
  templateUrl: './hackernews.component.html',
  styleUrls: ['./hackernews.component.css']
})
export class HackernewsComponent {

  @Input() articles: Article[] = [
    {
      id: 1,
      isShow : false,
      title: 'tieu de 1',
      content: "Lorem ",
      link: 'link 1'
    },

    {
      id: 2,
      isShow : false,
      title: 'tieu de 2',
      content: 'Lorem ',
      link: 'link 2'
    },

    {
      id: 3,
      isShow : false,
      title: 'tieu de 3',
      content: 'Lorem',
      link: 'link 3'
    }
  ]
  @Output() onclickShowButton = new EventEmitter();

  constructor() { }

  onclick(link) {
    this.onclickShowButton.emit(" Noi dung bai viet : " + link );
  }

  showContent(article : Article) {
    article.isShow = !article.isShow;
  }
}
