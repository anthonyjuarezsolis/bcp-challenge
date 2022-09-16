// Angular
import { Component, OnInit, Inject } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

// Other
import AgencyService from "src/app/services/agency.service";

@Component({
  selector: "app-modal-edit",
  templateUrl: "./modal-edit.component.html",
  styleUrls: ["./modal-edit.component.scss"],
})
export class ModalEditComponent implements OnInit {
  public form: FormGroup;
  public messageRequiredItem: string;

  constructor(
    private readonly fb: FormBuilder,
    public agencyService: AgencyService,
    public dialogRef: MatDialogRef<ModalEditComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.createForm();
    this.messageRequiredItem = "Campo obligatorio";
  }

  public ngOnInit(): void {
    this.onFormSetValue();
  }

  public onFormSetValue() {
    this.form.controls["id"].setValue(this.data?.dataEdit?.id);
    this.form.controls["agencia"].setValue(this.data?.dataEdit?.agencia);
    this.form.controls["departamento"].setValue(
      this.data?.dataEdit?.departamento
    );
    this.form.controls["provincia"].setValue(this.data?.dataEdit?.provincia);
    this.form.controls["distrito"].setValue(this.data?.dataEdit?.distrito);
    this.form.controls["direccion"].setValue(this.data?.dataEdit?.direccion);
    this.form.controls["lat"].setValue(this.data?.dataEdit?.lat);
    this.form.controls["lon"].setValue(this.data?.dataEdit?.lon);
    this.form.controls["img"].setValue(this.data?.dataEdit?.img);
  }

  public createForm() {
    return this.fb.group({
      id: [""],
      agencia: ["", Validators.required],
      departamento: ["", Validators.required],
      provincia: ["", Validators.required],
      distrito: ["", Validators.required],
      direccion: ["", Validators.required],
      lat: ["", Validators.required],
      lon: ["", Validators.required],
      img: [""],
    });
  }

  get formError(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public updateElement(): void {
    this.agencyService.updateStorage(this.data?.id, this.form.value);
    this.onCloseModal();
  }

  public onCloseModal(): void {
    this.dialogRef.close();
  }
}
