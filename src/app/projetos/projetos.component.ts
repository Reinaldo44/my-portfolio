import { Component, OnInit } from '@angular/core';
import { Iicons } from '../icons';
import { IconsService } from '../icons.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  icons: Iicons | undefined;

  constructor(

    private iconsService: IconsService
  ) 
  { }

  ngOnInit(): void {



  }

}
