import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  closeIcon = faXmark;

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  dismissModal() {
    this.activeModal.dismiss()
  }

  backModal() {
    this.activeModal.close();

    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.name = 'World';
  }
}
