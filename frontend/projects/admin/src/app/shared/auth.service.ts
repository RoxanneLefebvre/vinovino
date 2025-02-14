import {Injectable, isDevMode} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// User interface
export class User {
  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;
  type!: String;
}

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  constructor(private http: HttpClient) {}

  // User registration
  register(user: User): Observable<any> {
    if (isDevMode()) {
      console.log('Development admin!');
      console.log(environment.apiUrl);
      return this.http.post<any>(environment.apiUrl+'/api/auth/register', user);
    } else {
      console.log('Production admin!');
      console.log(environment.apiUrl);
      return this.http.post<any>(environment.apiUrl+'/api/auth/register', user);
    }
  }

  // Login
  signin(user: User): Observable<any> {
    if (isDevMode()) {
      console.log('Development admin!');
      console.log(environment.apiUrl);
      return this.http.post<any>(environment.apiUrl+'/api/auth/login', user);
    } else {
      console.log('Production admin!');
      console.log(environment.apiUrl);
      return this.http.post<any>(environment.apiUrl+'/api/auth/login', user);
    }
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get(environment.apiUrl+'/api/auth/user-profile');
  }
}
