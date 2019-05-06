import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  tabs = [
    'Personal Information',
    'Experiance',
    'Educational Information',
    'Attachements'
  ];
  applicationForm: FormGroup;
  selected;
  countryCode: any;
  constructor() {}
  ngOnInit() {
    this.selected = 0;
    this.countryCode = Array.from(Array(300).keys());
    this.applicationForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phonenumber: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      zip: new FormControl(null, Validators.required),
      experiance: new FormArray([]),
      education: new FormArray([]),
      attachements: new FormArray([])
    });
    console.log(this.applicationForm.get('email').valid);
  }
  onSubmit() {
    console.log(this.applicationForm.value);
  }
  incrementSelected() {
    console.log('increment');

    this.selected = this.selected === 3 ? 0 : this.selected + 1;
  }
  decrementSelected() {
    this.selected = this.selected === 0 ? 3 : this.selected - 1;
  }
  addEducation() {
    const educationGroup = new FormGroup({
      institution: new FormControl(),
      course: new FormControl(),
      cgpa: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl()
    });
    (<FormArray>this.applicationForm.get('education')).push()
  }
}
