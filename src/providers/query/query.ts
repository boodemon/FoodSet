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
      name:'setconference.db',
      location:'default'
    });
  }

  createHead(){
    this.db().then((db: SQLiteObject) => {
      db.executeSql('create table if not exists orders (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, userName TEXT, jobName TEXT, jobAddress TEXT, jobDate TEXT, jobTime TEXT, jobRemark TEXT, created_at TEXT, updated_at TEXT)', {})
        .then((data) => {
          // this.tb = 'Create table orders successful query is ' + JSON.stringify( data );
        }, (error) => {
          alert('Error can not create table orders' + JSON.stringify( error ) );
        });
    })
      .catch(e => alert( 'Error can not create database ' + JSON.stringify(e)) );
  }

  createDetail(){
    this.db().then((db: SQLiteObject) => {
      db.executeSql("CREATE TABLE IF NOT EXISTS orderlist (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, userName TEXT, price_id INTEGER, category_id INTEGER, food_id INTEGER, food_name TEXT, restourant_id INTEGER, restourant_name TEXT, quantity INTEGER, price DOUBLE, amount DOUBLE, remark TEXT, created_at TEXT, updated_at TEXT)", {}).then(
        (data) => {
        }, (error) => {
          alert('Error cannot Create Table ' + JSON.stringify(error) );
        });
    },
      (error) => {
          alert('Error cannot Create Database ' + JSON.stringify(error));
      });    
  }
  onCart(){
    let item = 0;
    this.db().then((db:SQLiteObject) =>{
      db.executeSql('SELECT * FROM orderlist',{}).then((data) => {
        item = data.rows.length;
      },
      (err) => {
        item = 0;
      });
    },
    (e) =>{
      item = 0;
    });
    return item;
  }
}
