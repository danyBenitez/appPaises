import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaisesService } from '../services/paises/paises.service';


export interface Pais{
  nombre:string,
  numericCode:number,
  capital:string,
  subregion:string,
  flag:string
}

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})

export class PaisesComponent implements OnInit {

  @ViewChild(MatPaginator) paginatorPais: MatPaginator;

  dataSourcePaises;
  PAISES_LIST= [];
  displayedColumnsPais: string[] = ['numericCode','nombre',  'capital', 'subregion', 'flag'];

  constructor( private paiserServices: PaisesService) { }

  ngOnInit(): void {

    this.dataSourcePaises = new MatTableDataSource<Pais>();

    this.paiserServices.getAllPaises().subscribe(data => {
      data.forEach(element => {
        this.PAISES_LIST.push({ nombre:element.name,numericCode:element.numericCode,capital:element.capital,subregion:element.subregion, flag:element.flag});
      });
      console.log(this.PAISES_LIST);
      
      this.dataSourcePaises.data = this.PAISES_LIST;
    });
  }

  ngAfterViewInit() {

    this.dataSourcePaises = new MatTableDataSource<Pais>(this.PAISES_LIST);
    this.dataSourcePaises.paginator = this.paginatorPais;
  }

}
