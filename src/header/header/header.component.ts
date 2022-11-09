import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

//   toggleDarkTheme():void {
//     if (this.themeService.selectedTheme.value === this.themeService.lightTheme) {
//       this.themeService.selectedTheme.next(this.themeService.darkTheme);
//     } else {
//       this.themeService.selectedTheme.next(this.themeService.lightTheme);
//     }
//     // document.body.classList.toggle('dark-theme');
// }

}
