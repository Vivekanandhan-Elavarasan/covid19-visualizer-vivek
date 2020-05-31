import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User {
 firstName: string;
 lastName: string;
  email: string;
  password: string; 
}

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
       return this.http.get<User[]>(`https://zen-user-api.herokuapp.com/users/authenticate`);
    }

    register(user: User) {
        return this.http.post(`https://zen-user-api.herokuapp.com/users/register`, user);
    }



    delete(id: number) {
       // return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}