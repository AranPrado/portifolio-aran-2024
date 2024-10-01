import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-CardTec',
  templateUrl: './CardTec.component.html',
  styleUrls: ['./CardTec.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CardTecComponent implements OnInit {

  @Input() imagemUrl!: string;
  @Input() width: string = '40px';

  constructor() { }

  ngOnInit() {
  }

}
