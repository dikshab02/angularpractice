import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/header/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-application';
  themeClass: string = '';
  constructor(private themeService: ThemeService) {}


  // loadMenu(url: string) {
  //   this.router.navigateByUrl(url);
  // }
  ngOnInit(): void {
    // this.themeService.selectedTheme.subscribe(theme => {
    //   this.themeClass = theme;
    // });
  }


}
