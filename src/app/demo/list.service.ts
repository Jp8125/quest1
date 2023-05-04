import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  list = [{ id: 1, name: "xyz" }
    , { id: 1, name: "skfdlk" }
    , { id: 2, name: "hskj" }
    , { id: 3, name: "slfkj" }
    , { id: 4, name: "hkjsfd" }
    , { id: 5, name: "kslf" }]
}
