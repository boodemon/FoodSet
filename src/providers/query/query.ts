import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the QueryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QueryProvider {

  constructor(public http: HttpClient,public sqlite:SQLite) {
    console.log('Hello QueryProvider Provider');
  }

  db(){
    return this.sqlite.create({
      name:'conference.db',
      location:'default'
    });
  }
}
