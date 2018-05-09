import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
//import { HttpModule} from '@angular/http';
//import { Observable } from 'rxjs'//'rxjs/add/operator/map';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getUsers(){
    return this.http.get('http://localhost:8080/api/users')
      .map(res=>res.json());
  }

  addUser(newUser){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/api/user', newUser, { headers: headers})
      .map( res=>res.json());
  }

}
