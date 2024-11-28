import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {FormGroup,FormControl, Validators, ReactiveFormsModule, FormsModule, NgModel } from '@angular/forms';
import { RanmaService } from '../services/miapi.service';
import { listaRanma, RanmaInterface } from '../interfaces/ranma';

@Component({
  selector: 'app-new-miapi',
  standalone: true,
  imports: [ RouterLink ,ReactiveFormsModule, FormsModule],
  templateUrl: './new-miapi.component.html',
  styleUrl: './new-miapi.component.css'
})
export class NewMiapiComponent implements OnInit {
  nuevoForm = new FormGroup({
    nombre: new FormControl('' ),
    genero: new FormControl('' ),
    edad: new FormControl('' ),
    descripcion: new FormControl('' ),
    imagen: new FormControl('' )
  });

  constructor (
    private api:RanmaService,
    private route:Router
  ){}

  ngOnInit(): void {
  }

  postForm(){
    this.api.postRanma(this.nuevoForm.value).subscribe(data=>{
      console.log(data)
    })
  }
}

