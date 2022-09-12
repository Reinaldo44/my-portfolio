import { Component, OnInit } from '@angular/core';
import { icons, Iicons } from '../icons';
import { IconsService } from '../icons.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {


    icons_angular: Iicons | undefined;
    icons_java: Iicons | undefined;
    icons_html: Iicons | undefined;
    icons_css: Iicons | undefined;
    icons_javascript: Iicons | undefined;
    icons_banco: Iicons | undefined;
    icons_dotnet: Iicons | undefined;
    icons_csharp: Iicons | undefined;
    icons_mysql: Iicons | undefined;
    icons_sql: Iicons | undefined;
    icons_spring: Iicons | undefined;
    icons_typescript: Iicons | undefined;
    icons_ionic: Iicons | undefined;
  

  constructor(

    private iconsService: IconsService
  ) 

  { }

  ngOnInit(): void {

   
       this.icons_angular = this.iconsService.getOne(1);
       this.icons_java = this.iconsService.getOne(2);
       this.icons_html = this.iconsService.getOne(3);
       this.icons_css = this.iconsService.getOne(4);
       this.icons_javascript = this.iconsService.getOne(5);
       this.icons_spring = this.iconsService.getOne(6);
       this.icons_typescript = this.iconsService.getOne(7);
       this.icons_banco = this.iconsService.getOne(8);
       this.icons_dotnet = this.iconsService.getOne(9);
       this.icons_mysql = this.iconsService.getOne(10);  
       this.icons_sql = this.iconsService.getOne(11); 
       this.icons_ionic = this.iconsService.getOne(12);
       this.icons_csharp = this.iconsService.getOne(13);

  }

}
