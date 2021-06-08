import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { CertificatesService } from "services/certificates/certificates.service";
import { environment } from "../../../environments/environment.prod";

@Component({
  selector: "app-certificates",
  templateUrl: "./certificates.component.html",
  styleUrls: ["./certificates.component.sass"],
})
export class CertificatesPage implements OnInit {
  recaptchaKey = environment.recaptchaKey;
  form: FormGroup;
  pageLoading = false;
  certificate = null;

  constructor(
    private fb: FormBuilder,
    private certificatesService: CertificatesService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      certificateId: ["", Validators.required],
      recaptchaReactive: [false, Validators.requiredTrue],
    });
  }

  handleKey(key: string) {
    switch (key) {
      case "personName":
        return "Nome completo";
      case "durationInHours":
        return "Duração";
      case "isoFormattedDate":
        return "Data do evento";
      case "activityName":
        return "Nome do evento";
      default:
        return key;
    }
  }

  handleValue(key: string, value: string) {
    switch (key) {
      case "durationInHours":
        return `${value}h`;
      case "isoFormattedDate":
        return `${new Date(value).getDate() + 1}/${
          new Date(value).getMonth() + 1 < 10
            ? "0" + (new Date(value).getMonth() + 1)
            : new Date(value).getMonth() + 1
        }/${new Date(value).getFullYear()}`;
      default:
        return value;
    }
  }

  searchCertificate(value) {
    this.pageLoading = true;
    this.certificatesService.getCertificate(value).subscribe(
      (res) => {
        if (!res) {
          return (this.certificate = {
            error:
              "Não encontramos o certificado informado. Confirme se o ID digitado está correto e tente novamente.",
          });
        }

        this.certificate = res;
      },
      () =>
        (this.certificate = {
          error:
            "Não conseguimos buscar o certificado. Tente novamente mais tarde.",
        }),
      () => (this.pageLoading = false)
    );
  }

  resolved(res) {
    if (res) {
      this.form.controls["recaptchaReactive"].setValue(true);
    } else {
      this.form.controls["recaptchaReactive"].setValue(false);
    }
  }
}
