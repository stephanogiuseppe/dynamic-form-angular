import { Injectable } from '@angular/core';

import {
    QuestionBase,
    DropdownQuestion,
    TextboxQuestion,
    TextAreaQuestion
} from './question-base.model';

@Injectable()
export class QuestionService {

    // TODO: get from a remote source of question metadata
    // TODO: make asynchronous
    getQuestions() {

        const questions: QuestionBase<any>[] = [

            new TextboxQuestion({
                key: 'texto',
                label: 'Nome',
                value: 'Stéphano',
                required: true,
                order: 1
            }),

            new TextboxQuestion({
                key: 'numero',
                value: '',
                label: 'Número',
                type: 'number',
                order: 2
            }),

            new TextboxQuestion({
                key: 'data',
                value: '',
                label: 'Data',
                type: 'date',
                order: 3
            }),

            new TextAreaQuestion({
                key: 'textolongo',
                value: '',
                label: 'Campo de texto livre',
                order: 4
            }),

            new TextboxQuestion({
                key: 'arquivo',
                value: '',
                label: 'Arquivo',
                type: 'file',
                order: 5
            }),

            new DropdownQuestion({
                key: 'cor',
                label: 'Cor',
                options: [
                    { key: 'branco', value: 'Branco' },
                    { key: 'preto', value: 'Preto' },
                    { key: 'azul', value: 'Azul' },
                    { key: 'amarelo', value: 'Amarelo' }
                ],
                order: 6
            }),
        ];

        return questions.sort((a, b) => a.order - b.order);
    }
}
