import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group-demo',
  templateUrl: './form-group-demo.component.html',
  styleUrls: ['./form-group-demo.component.css']
})
export class FormGroupDemoComponent implements OnInit {

  /* formGroupDemoForm = new FormGroup({
                        firstName: new FormControl(''),
                        lastName: new FormControl(''),
                        address: new FormGroup({
                          street: new FormControl(''),
                          city: new FormControl(''),
                          state: new FormControl(''),
                          zip: new FormControl('')
                           })
                        }); */

    formGroupDemoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      })
    });


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  onSubmit() {
    console.warn('Input data : ' + JSON.stringify(this.formGroupDemoForm.value));
  }

  updateDemographics() {
      this.formGroupDemoForm.patchValue({
          firstName: 'Nancy',
          address: {
            street: '123 Drew Street'
          }
      });
      console.log('Demographics after update : ' + JSON.stringify(this.formGroupDemoForm.value));
  }

}
