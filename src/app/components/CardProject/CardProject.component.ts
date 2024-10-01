import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-project',
  templateUrl: './CardProject.component.html',
  styleUrls: ['./CardProject.component.css'],
  standalone: true,
  imports: [MatIconModule,CommonModule]
})
export class CardProjectComponent implements OnInit {
  ngOnInit(): void {
    
  }

  @Input() linkGithub!: string;
  @Input() linkDemo!: string;
  @Input() mostrarButtonDemo: boolean = true;
  @Input() titulo!: string;
  @Input() descricao!: string;
  @Input() urlImagem!: string;
  @Input() tecnologias!: string[];

  abrirLinkGithub() {
    window.open(this.linkGithub, '_blank');
  }

  abrirDemo() {
    window.open(this.linkDemo, '_blank');
  }
}
