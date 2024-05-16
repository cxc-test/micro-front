import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss']
})
export class FormClienteComponent implements OnInit {
  form!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      id: new FormControl(null, []),
      name: new FormControl(null, [Validators.required]),
      rfc: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
    });
    if(this.data.form != null) this.form.patchValue(this.data.form);
  }

  saveAndClose() {
    this.dialogRef.close(this.form.getRawValue());
  }
}