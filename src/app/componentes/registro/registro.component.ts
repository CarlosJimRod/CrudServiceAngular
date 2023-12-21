import {Component, OnInit} from '@angular/core';
import {Material} from "../../models/Material";
import {MaterialService} from "../../services/material.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  material: Material[] = []

  constructor(private materialService: MaterialService) {
  }

  ngOnInit() {
    this.material=this.materialService.getAllMaterial()
  }

  modifyPrecio(id:number){
    let precio = prompt("Introduce el nuevo precio")
    if (precio != null){
      this.materialService.modifyPrecio(id,parseInt(precio))
    }else{
      this.modifyPrecio(id)
    }

  }

  deleteMaterial(id: number){
    this.materialService.deleteMaterial(id)
  }

}
