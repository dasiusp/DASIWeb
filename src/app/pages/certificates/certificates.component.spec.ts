import { ComponentFixture, TestBed } from "@angular/core/testing";

<<<<<<< Updated upstream:src/app/pages/certificates/certificates.component.spec.ts
import { CertificatesPage } from './certificates.component';
=======
import { CertificatesPage } from "./certificates.page";
>>>>>>> Stashed changes:src/app/pages/certificates/certificates.page.spec.ts

describe("CertificatesPage", () => {
  let component: CertificatesPage;
  let fixture: ComponentFixture<CertificatesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertificatesPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
