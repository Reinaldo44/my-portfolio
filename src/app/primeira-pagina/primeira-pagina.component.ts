import { Component, OnInit } from '@angular/core';
import { icons, Iicons } from '../icons';
import { IconsService } from '../icons.service';

@Component({
  selector: 'app-primeira-pagina',
  templateUrl: './primeira-pagina.component.html',
  styleUrls: ['./primeira-pagina.component.css']
})
export class PrimeiraPaginaComponent implements OnInit {

  icons: Iicons [] = icons;

  constructor(
    private iconsService: IconsService
  ) { }

  ngOnInit(): void {

    const icons = this.iconsService.getAll();

  }

}
