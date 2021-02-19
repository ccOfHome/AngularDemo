import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// 引入Address
import { Address } from './Address';

@Component({
  selector: 'app-hello-formbuilder',
  templateUrl: './hello-formbuilder.component.html',
  styleUrls: ['./hello-formbuilder.component.css'],
})
export class HelloFormbuilderComponent implements OnInit {
  userForm: FormGroup;

  // Adderss数组
  addressArr : Address[] = [
    {
      street: '12',
      city: 'shanghai'
    },
    {
      street: '112',
      city: 'beijing'
    }
  ];

  constructor(private fb : FormBuilder) {
    this.userForm = fb.group({
      name: ['Tim', Validators.required],
      pwd: ['123456', Validators.minLength(6)],
      // 多级group
      address: fb.group({
        street: 'road 207',
        city: 'shanghai'
      })
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.userForm.value);
  }

  // 重置为空
  forceReset() {
    this.userForm.reset();
  }

  // 重置默认数据
  defaultReset() {
    this.userForm.reset({
      name: 'Tim',
      pwd: '123456',
      address: {
        street: 'road 207',
        city: 'shanghai'
      }
    });
  }

  setFormValue() {
    this.userForm.setValue({
      name: 'Cat',
      pwd: '666666',
      address: this.addressArr[0]
    });
  }

  patchFormValue() {
    this.userForm.patchValue({
      name: 'Cat',
      // pwd: '666666',
      address: this.addressArr[0]
    });
  }

}
