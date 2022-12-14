import { Component, OnInit, } from '@angular/core';
import { faKey, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component'
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  closeIcon = faXmark;
  passIcon = faKey;
  emailInput!: string;
  passwordInput!: string;

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {

  }

  dismissModal() {
    this.activeModal.dismiss()
  }

  closeModal() {
    this.activeModal.close()
  }

  showForgotModal() {
    this.activeModal.close();

    const modalRef = this.modalService.open(ForgotPasswordComponent);
    modalRef.componentInstance.name = 'World';
  }

  showRegisterModal() {
    this.activeModal.close();

    const modalRef = this.modalService.open(RegisterComponent);
    modalRef.componentInstance.name = 'World';
  }

  async onLoginClick() {
    await this.authenticationService.login(this.emailInput, this.passwordInput)
  }

}
