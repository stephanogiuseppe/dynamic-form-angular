import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base.model';

@Component({
    selector: 'app-question',
    templateUrl: './dynamic-form-question.component.html',
    styleUrls: ['./../style.scss']
})
export class DynamicFormQuestionComponent {

    @Input() question: QuestionBase<any>;
    @Input() form: FormGroup;

    get isValid() {
        return this.form.controls[this.question.key].valid;
    }
}
