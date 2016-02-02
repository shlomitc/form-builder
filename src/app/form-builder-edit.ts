import {Component} from 'angular2/core';
import {FormBuilderQuestion} from './form-builder-question';

@Component({
    selector: 'form-builder-edit',
    providers: [],
    template: `
    <form>
        <label for="title">Form Title</label><input id="title">
        <hr>
        <form-builder-question *ngFor="#question of questions, #i = index" [questionData]="question"></form-builder-question>
        <button (click)="addQuestion()">Add Question</button>
    </form>
  `,
    directives: [FormBuilderQuestion]
})

//class QuestionItem {

//}

export class FormBuilderEdit {
    public questions = [];

    addQuestion(){
        let newQuestion = {
            title: '',
            type: 'text',
            options : []
        };

        this.questions.push(newQuestion);
    }

    removeQuestion(){

    }
}

