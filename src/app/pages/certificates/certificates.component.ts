import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { CertificatesService } from "services/certificates/certificates.service";

@Component({
  selector: "app-certificates",
  templateUrl: "./certificates.component.html",
  styleUrls: ["./certificates.component.sass"],
})
export class CertificatesPage implements OnInit {
  form: FormGroup;
  pageLoading = false;

  constructor(
    private fb: FormBuilder,
    private certificatesService: CertificatesService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      certificateId: ["", Validators.required],
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
}
