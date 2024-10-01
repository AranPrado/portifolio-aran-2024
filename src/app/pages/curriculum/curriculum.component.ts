import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../../components/Menu/Menu.component';
import { FooterComponent } from '../../components/Footer/Footer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
  standalone: true,
  imports: [MenuComponent,FooterComponent,PdfViewerModule]
})
export class CurriculumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  baixarCurriculo() {
    const link = document.createElement('a'); // Cria um elemento de link
    link.href = 'assets/Curriculo/CurriculoAran.pdf'; // Caminho do PDF
    link.download = 'Currículo Aran.pdf'; // Nome do arquivo para download
    link.click(); // Aciona o clique para baixar
  }
  

}
