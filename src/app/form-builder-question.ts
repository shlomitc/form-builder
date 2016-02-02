import {Component, Input, Output} from 'angular2/core';

@Component({
    selector: 'form-builder-question',
    providers: [],
    template: `
        <label>
        Question title <input id="question" value="{{questionData.title}}">
        <select [value]="questionData.type" (change)="changeType($event.target.value)">
            <option>text</option>
            <option>select</option>
            <option>radio</option>
        </select>
        <div *ngIf="questionData.type==='text'">
            ...
        </div>
        <div *ngIf="questionData.type!=='text'">
            <div *ngFor="#option of questionData.options, #i = index">
            <input value="{{option.data}}"> <button (click)="removeOption(i)">Remove</button>
            </div>
            <button (click)="addOption()">Add option</button>
        </div>
        </label>
        <hr>
  `
})
export class FormBuilderQuestion {
    @Input() questionData;
    //@Output() questionDataChange;

    addOption() {
        let newOption = {
            data: ''
        };
        this.questionData.options.push(newOption);
    }

    removeOption(index) {
        this.questionData.options.splice(index, 1);
    }

    changeType(newType){
        this.questionData.type = newType;
        this.clearOptions();
    }
    clearOptions() {
        this.questionData.options = [];
    }
}
