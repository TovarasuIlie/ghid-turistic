import { Injectable } from '@angular/core';
import { Part } from '../models/part';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartService {
  parts: Part[] = [
    {
      partName: "Bucsa Spate",
      price: 234,
      stock: 3
    },
    {
      partName: "Arbore cotit",
      price: 2323,
      stock: 1
    },
    {
      partName: "Curea Distributie",
      price: 23,
      stock: 3
    }
  ];

  constructor(private http: HttpClient) { }

  addNewPart(newPart: Part): Observable<Part> {
    this.parts.push(newPart);
    return of(newPart);
  }

  getAllParts(): Observable<Part[]> {
    return of(this.parts);
  }

  deletePart(id: number) {
    this.parts.splice(id, 1);
    return of("Piesa a fost stearsa cu success!");
  }
}
