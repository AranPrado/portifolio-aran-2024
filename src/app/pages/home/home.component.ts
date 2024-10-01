import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../../components/Menu/Menu.component";
import { FooterComponent } from "../../components/Footer/Footer.component";
import { CommonModule } from '@angular/common';
import { Links } from '../../../utils/Links';
import { TypewriterService } from './typewriter.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [MenuComponent, FooterComponent, CommonModule]
})
export class HomeComponent implements OnInit {

  constructor(private typewriterService: TypewriterService) { }
  linkInstagram:any = Links.instagram
  linkLinkedin:any = Links.linkedin
  linkGitHub:any = Links.github
  linksWhatsApp:any = Links.whatsapp


  ngOnInit() {
  }

  titles = ['Desenvolvedor Full Stack', 'Desenvolvedor Mobile'];
  

  

  public nome = 'Aran Prado';
  
}
