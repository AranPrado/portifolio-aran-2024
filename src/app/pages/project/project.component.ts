import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../../components/Menu/Menu.component";
import { FooterComponent } from "../../components/Footer/Footer.component";
import { CardProjectComponent } from '../../components/CardProject/CardProject.component';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  standalone: true,
  imports: [MenuComponent, FooterComponent,CardProjectComponent]
})
export class ProjectComponent implements OnInit {

  constructor(private globalService:GlobalService) { }

  repositoriosSelecionados:any

  ngOnInit() {

    this.recuperarRepositorios()
    

  }

  async recuperarRepositorios(){
    const response = await this.globalService.recuperarRepositorios();
    

    if(response){
      const idsFiltrar = [858933885, 863688428,664659884, 695163051, 603205920, 640072918];

      const filterRepositorios = response.filter((el:any) => idsFiltrar.includes(el.id))

      this.repositoriosSelecionados = filterRepositorios;

      
    }
  }



}
