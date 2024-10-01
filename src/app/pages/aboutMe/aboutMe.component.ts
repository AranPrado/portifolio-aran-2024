import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../../components/Menu/Menu.component';
import { FooterComponent } from "../../components/Footer/Footer.component";
import { CardTecComponent } from "../../components/CardTec/CardTec.component";
import { GlobalService } from '../../../services/global.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-aboutMe',
  templateUrl: './aboutMe.component.html',
  styleUrls: ['./aboutMe.component.css'],
  imports: [MenuComponent, FooterComponent, CardTecComponent,MatIconModule],
  standalone: true
})
export class AboutMeComponent implements OnInit {

  constructor(private globalService:GlobalService) { }

  fotoPerfil:any;
  

  async buscarInformacoes(){
   try {
     const response = await this.globalService.recuperarInformacoes();
 
     if(response){
       
       this.fotoPerfil = response.avatar_url
     }
     
   } catch (error) {
    console.log("Deu erro", error)
   }
  }

  ngOnInit() {

    this.buscarInformacoes()
  }

}
