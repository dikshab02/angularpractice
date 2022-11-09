import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/header/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent implements OnInit {
  // public listOfItems = this.themeService.listThemes;
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  colorTheme(item: { key: string; value: string }): void {
    console.log('item = ', item);
    this.themeService.selectedTheme.next(item);
  }
}
