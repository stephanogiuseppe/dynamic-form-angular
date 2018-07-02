import { Component } from '@angular/core';

import { QuestionService } from './dynamic-form-example/dynamic-form-question/question.service';

@Component({
    selector: 'app-root',
    template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions"></app-dynamic-form>
    </div>
  `,
    providers: [QuestionService],
    styleUrls: ['./dynamic-form-example/style.scss']
})
export class AppComponent {
    questions: any[];

    constructor(service: QuestionService) {
        this.questions = service.getQuestions();
    }
}
