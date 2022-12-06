import { Component, OnInit, } from '@angular/core';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component'
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passIcon = faKey;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) { }

  ngOnInit(): void {

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
}
