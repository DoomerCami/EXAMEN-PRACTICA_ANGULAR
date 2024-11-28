import { Component, OnInit } from '@angular/core';
import { listaRanma } from '../interfaces/ranma';
import { RanmaService } from '../services/miapi.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-miapi',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl:'./list-miapi.component.html',
  styleUrl:'./list-miapi.component.css'
})
export class ListMiapiComponent implements OnInit {
  listapi: listaRanma|undefined;
  
  constructor(private RanmaService: RanmaService, private router: Router) {}

  ngOnInit(): void {
    this.RanmaService.getAllRanma().subscribe((data) =>{
        if (!data) {
          console.log('No hay personajes');
        } else {
          this.listapi = data; // Asignamos los datos a listapi
          console.log(this.listapi);
        }
      },
      (error)=>{
        console.log(error);
      })
  }

  editarRanma(id: string): void {
    this.router.navigate(['miapi/edit', id]);
  }
}
