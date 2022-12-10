import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  async login(email: string, password: string) {

    const response = await lastValueFrom(this.httpClient.post<LoginResponseDTO>('http://localhost:3000/auth/login', { email, password }));
    console.log(response);

  }
}


export interface LoginResponseDTO {
  message: string;
  user: UserDTO;
}

export interface UserDTO {
  username: string;
  email: string;
}