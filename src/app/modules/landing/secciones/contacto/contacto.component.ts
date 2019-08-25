import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { timer } from "rxjs";

export interface FormularioContactoWeb {
  nombre: string;
  email: string;
  mensaje: string;
  leido: boolean;
}

@Component({
  selector: "app-contacto",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.scss"]
})
export class ContactoComponent implements OnInit {
  focus: any;
  focus1: any;
  public mostrarAlerta: boolean = false;
  public tipoDeAlerta: string = "danger";
  public textoStrong: string = "Ups";
  public textoNormal: string =
    "There is an error with the form format,check the fields again";

  public formGroup: FormGroup;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService
  ) {
    this.formGroup = this.fb.group({
      nombre: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      mensaje: ["", Validators.required]
    });
  }

  ngOnInit() {}

  public sendMessage() {
    this.markFormGroupTouched(this.formGroup);
    if (this.formGroup.valid) {
      this.spinner.show();
      this.http
        .put("https://koordinator1488.herokuapp.com/contacto", {
          nombre: this.formGroup.getRawValue().nombre,
          email: this.formGroup.getRawValue().email,
          mensaje: this.formGroup.getRawValue().mensaje,
          leido: false
        })
        .subscribe((data: any) => {
          timer(1000).subscribe(data => {
            this.spinner.hide();
          });
          this.mostrarAlerta = true;
          if (data == null) {
            this.formGroup.reset();
            this.tipoDeAlerta = "success";
            this.textoStrong = "Success";
            this.textoNormal =
              "We will get in touch with you as sooner as posible :)";
          } else {
            this.tipoDeAlerta = "danger";
            this.textoStrong = "Ups";
            this.textoNormal = data.error.message;
          }
        });
    } else {
      this.mostrarAlerta = true;
      this.tipoDeAlerta = "danger";
      this.textoStrong = "Ups";
      this.textoNormal = "There are errors on the form";
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
