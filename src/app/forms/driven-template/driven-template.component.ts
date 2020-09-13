import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-driven-template',
    templateUrl: './driven-template.component.html',
    styleUrls: ['./driven-template.component.css']
})

export class DrivenTemplateComponent {

    @ViewChild('f') signUpForm: NgForm;
    answer = "";
    countries = ['egypt', 'USA', 'Germany', 'England'];
    genders = ['male', 'female'];

    saveData(form: NgForm) {
        console.log(this.signUpForm);
        // console.log(form);
        
    }
}