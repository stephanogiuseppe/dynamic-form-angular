import { Component } from '@angular/core';

import { QuestionService } from './dynamic-form-example/dynamic-form-question/question.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    providers: [QuestionService],
    styleUrls: ['./dynamic-form-example/style.scss']
})
export class AppComponent {
    questions: any[];

    constructor(service: QuestionService) {
        this.questions = service.getQuestions();
    }
}
