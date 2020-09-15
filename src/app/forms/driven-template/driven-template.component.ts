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
    selelcted = ['basic', 'advanced', 'Pro'];

    sub = false;

    userSubscription = {
        email: '',
        selectedSub: '',
        password: ''
    }

    // saveData(form: NgForm) {
    //     console.log(this.signUpForm);
    //     // console.log(form);
    // }

    saveData() {
        // console.log(this.signUpForm);

        this.sub = true;
        this.userSubscription.email = this.signUpForm.value.email;
        this.userSubscription.selectedSub = this.signUpForm.value.selected;
        this.userSubscription.password = this.signUpForm.value.pass;

        this.signUpForm.reset();
    }

    updateData() {
        // updated value form

        this.signUpForm.form.patchValue({ // setValue() or patchValue()
            groupData: {
                fullname: "updatedFullName",
                email: "ahmed@gaber.com"
            },

            phone: "updatedPhone",
            country: "USA",
            message: 'updated message',
            gender: "male"

        })
    }
}