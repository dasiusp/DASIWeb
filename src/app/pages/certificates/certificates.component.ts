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

  searchCertificate(value) {
    this.pageLoading = true;
    this.certificatesService.getCertificate(value).subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
      () => (this.pageLoading = false)
    );
  }

  resolved(res) {
    if (res) {
      this.form.controls["recaptchaReactive"].setValue(true);
    }
  }
}
