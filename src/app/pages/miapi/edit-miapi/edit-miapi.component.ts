import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { RanmaService } from '../services/miapi.service';
import { listaRanma, RanmaInterface}  from '../interfaces/ranma';
import {FormGroup,FormControl, Validators, ReactiveFormsModule, FormsModule, NgModel } from '@angular/forms'

@Component({
  selector: 'app-edit-miapi',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './edit-miapi.component.html',
  styleUrl: './edit-miapi.component.css'
})
export class EditMiapiComponent implements OnInit {

  constructor(
    private ranmaService: RanmaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  datosRanma:RanmaInterface|undefined;

  editarForm = new FormGroup({
    _id: new FormControl(''),
    nombre: new FormControl(''),
    genero: new FormControl(''),
    edad: new FormControl(''),
    descripcion: new FormControl(''),
    imagen: new FormControl('')
  });

  ngOnInit(): void {
    let ranmaId=this.activatedRoute.snapshot.paramMap.get('id');
    this.ranmaService.getAllRanma().subscribe((ranmaAll)=>{
      ranmaAll.ranma.forEach((ranma:RanmaInterface)=>{
        if(ranma._id==ranmaId){
          this.datosRanma=ranma;
          this.editarForm.setValue({
            _id:this.datosRanma._id,
            nombre:this.datosRanma.nombre,
            genero:this.datosRanma.genero,
            edad:this.datosRanma.edad,
            descripcion:this.datosRanma.descripcion,
            imagen:this.datosRanma.imagen
          });
        }
      })
    })
  }

  postForm():void{
    this.ranmaService.putRanma(this.editarForm.value).subscribe(data=>{
      console.log(this.editarForm.value);
    })
  }

  deleteFomr(): void{
    this.ranmaService.deleteRanma(this.editarForm.value).subscribe(data=>{
      console.log(this.editarForm.value)
    })
  }

}
