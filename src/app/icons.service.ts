import { Injectable } from '@angular/core';
import { icons, Iicons } from './icons';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  icons : Iicons[] = icons;
  
  constructor() { }

  getAll(): Iicons[]{

    return this.icons;

  }

  getOne(iconsId: number): Iicons | undefined{

    return this.icons.find(icons => icons.id == iconsId);

  }


}
