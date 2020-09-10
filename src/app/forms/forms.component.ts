import { Component } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
 
@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.componen.css']
})

export class FormsComponent {

    firstName;

    constructor(private fb: FormBuilder) {}

    // firstName: string = "mohamed";

    // reactive form

    // favoriteColorControl = new FormControl('red');

    // create single form
    // lastName = new FormControl('gaber');

    // // updated value from reactive form
    // updateLastname() {
    //     this.lastName.setValue('ahmed')
    // }

    // create form group
    // profileForm = new FormGroup({
    //     firstName: new FormControl(''),
    //     lastName: new FormControl(''),
    //     age: new FormControl(),
    //     work: new FormControl(''),

    //     address: new FormGroup({
    //         street: new FormControl(''),
    //         city: new FormControl(''),
    //         state: new FormControl(''),
    //         zip: new FormControl('')
    //     })
    // });

 
    // create from by FormBuilder
    profileForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: [''],
        age: [''],
        work: [''],
        address: this.fb.group({
            street: [''],
            city: [''],
            state: [''],
            zip: ['']
        })
    })


    // update data model
    updateProfile() {
        // patchValue
        this.profileForm.patchValue({
            firstName: 'nancy',
            address: {
                street: 'helwan'
            }
        })
    }

    // save data model
    onSubmit() {
        console.warn(this.profileForm.value);
    }


}