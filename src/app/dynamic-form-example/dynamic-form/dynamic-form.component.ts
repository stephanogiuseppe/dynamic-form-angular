import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './../dynamic-form-question/question-base.model';
import { DynamicFormService } from './dynamic-form.service';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [ DynamicFormService ],
    styleUrls: ['./../style.scss']
})
export class DynamicFormComponent implements OnInit {

    @Input() questions: QuestionBase<any>[] = [];

    form: FormGroup;
    payLoad = '';

    constructor(private dynamicFormService: DynamicFormService) { }

    ngOnInit() {
        this.form = this.dynamicFormService.toFormGroup(this.questions);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}
