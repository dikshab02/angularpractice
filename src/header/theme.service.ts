import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public listThemes = [
    {
      key: '#039be5',
      value: 'blue-theme'
    },
    {
      key: '#000000',
      value: 'dark-theme'
    },
    {
      key: '#808080',
      value: 'light-theme'
    },
    {
      key: '#FFFF00',
      value: 'yellow-theme'
    }
  ];
  public selectedTheme = new BehaviorSubject<{
    key: string,
    value: string
  }>(this.listThemes[0]);


  constructor() { }
}
