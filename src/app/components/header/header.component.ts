import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/modals/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authIcon = faUser;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  onAuthClick() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.name = 'World';
  }

}
