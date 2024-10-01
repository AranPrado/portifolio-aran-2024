import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; 
import { Links } from '../../../utils/Links';

@Component({
  selector: 'app-Footer',
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.css'],
  standalone: true,
  imports: [MatIconModule]
})
export class FooterComponent implements OnInit {

  constructor() { }

  linkInstagram:any = Links.instagram
  linkLinkedin:any = Links.linkedin
  linkGitHub:any = Links.github

  ngOnInit() {

    
  }

}
