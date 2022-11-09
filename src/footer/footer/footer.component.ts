import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemeService } from 'src/header/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
    console.log('hello');
  }


}
