import { ClienteModel } from 'src/app/core/model/cliente.model';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientesApiService } from 'src/app/core/service/clientes/clientes-api.service';
import { CoinType } from 'src/app/core/type/coin-type.enum';

@Component({
  selector: 'app-form-factura',
  templateUrl: './form-factura.component.html',
  styleUrls: ['./form-factura.component.scss']
})
export class FormFacturaComponent implements OnInit {
  form!: FormGroup;
  coinType = Object.keys(CoinType);
  clienteModel: ClienteModel[] = [];
  constructor(
    private fb: FormBuilder,
    private api: ClientesApiService,
    private dialogRef: MatDialogRef<FormFacturaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.initForm();

    this.api.getAll().subscribe(item => this.clienteModel = item);
  }

  initForm() {
    this.form = this.fb.group({
      id: new FormControl(null, []),
      coin: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
      descriptionProduct: new FormControl(null, [Validators.required]),
      countProduct: new FormControl(null, [Validators.required]),
      clientId: new FormControl(null, [Validators.required]),
    });
    if (this.data.form != null) this.form.patchValue(this.data.form);
  }

  saveAndClose() {
    this.dialogRef.close(this.form.getRawValue());
  }
}