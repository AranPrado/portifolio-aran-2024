import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; // Importar o módulo de ícones


@Component({
  selector: 'app-Menu',
  templateUrl: './Menu.component.html',
  styleUrls: ['./Menu.component.css'],
  standalone: true,
  imports: [CommonModule,MatIconModule]
})
export class MenuComponent implements OnInit {

  menuOpen = false;
  activePage:boolean = false

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  isActive(path: string): any {
    if(this.router.url === path){
      this.activePage = true
    } else {
      this.activePage = false
    }
    
  }

  goTo(page: any) {
    this.router.navigate(['/' + page]).then(() => {
      window.scrollTo(0, 0); // Rola a página para o topo após a navegação
    });
  }
  

}
