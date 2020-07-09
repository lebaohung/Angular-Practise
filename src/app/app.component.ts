import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Practise 2';

  article = {
    title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
    url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
  };

  withBorder = true;
  textColor = 'tomato';


  showArticleContent(e) {
    alert(e);
  }

  onClickButton(event: MouseEvent) {
    this.withBorder = !this.withBorder;
  }

  onMouseTextOver() {
    this.textColor = '#AAA';
  }

  onMouseTextOut() {
    this.textColor = 'tomato';
  }
}
