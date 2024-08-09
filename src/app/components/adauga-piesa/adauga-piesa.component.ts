import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartService } from '../../services/part.service';
import { Part } from '../../models/part';
import { response } from 'express';

@Component({
  selector: 'app-adauga-piesa',
  templateUrl: './adauga-piesa.component.html',
  styleUrl: './adauga-piesa.component.css'
})
export class AdaugaPiesaComponent implements OnInit {
  errorMessages: string[] = [];
  parts: Part[] = [];
  addForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private partService: PartService) {}

  ngOnInit(): void {
    this.addForm = this.fb.group({
      partName: [null, [Validators.required]],
      price:    [null, [Validators.required]],
      stock:    [null, [Validators.required]]
    });
    this.initializeParts();
  }

  initializeParts() {
    this.partService.getAllParts().subscribe(parts => this.parts = parts);
  }


  addPart() {
    this.errorMessages = [];
    if(this.addForm.valid) {
      this.partService.addNewPart(this.addForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this.errorMessages.push("Partea a fost adaugata cu succes!");
        },
        error: (response) => {
          this.errorMessages.push(response);
        }
      })
    } else {
      this.errorMessages.push("Toate campurile trebuie completate!");
    }
  }

  deletePart(id: number) {
    this.errorMessages = [];
    this.partService.deletePart(id).subscribe({
      next: (response) => {
        this.errorMessages.push(response);
        this.initializeParts();
      },
      error: (response) => {
        this.errorMessages.push(response);
      }
    })
  }
}
