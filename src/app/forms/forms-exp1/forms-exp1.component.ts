import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../validate/phone-validate';



@Component({
    selector: 'app-forms-exp-1',
    templateUrl: './forms-exp1.component.html',
    styleUrls: ['./forms-exp1.component.css']
})

export class FormsExp1Component implements OnInit {

    registerForm: FormGroup;
    countries = ['USA', 'Germany', 'Italy', 'France'];
    requestTypes = ['Claim', 'Feedback', 'Help Request']

    constructor(private fb: FormBuilder){}

    ngOnInit() {

        // this.registerForm = this.createFormGroup();
        this.registerForm = this.createFormBuider();

    }

    // createFormGroup() {

    //     return new FormGroup({
    //         personalData: new FormGroup({
    //             name: new FormControl('', [Validators.required]),
    //             email: new FormControl(''),
    //             phone: new FormControl(''),
    //             country: new FormControl(),
    //         }),
    //         notes: new FormControl(''),
    //         requestTypes: new FormControl()
    //     })
    // }

    createFormBuider() {
        return this.fb.group({
            personalData: this.fb.group({
                name: ['', Validators.required],
                email: ['', Validators.required, , Validators.email],
                phone: ['', Validators.required, phoneNumberValidator],
                country: ['', Validators.required],
            }),
            notes: [''],
            requestTypes: ['']
        })
      
    }

    saveData() {
        const result = Object.assign({}, this.registerForm.value);
        console.log(result);
        
    }


    get phone() {
        return this.registerForm.get('phone')
    }

    get name() {
        return this.registerForm.get('name')
    }

    get email() {
        return this.registerForm.get('email')
    }
}