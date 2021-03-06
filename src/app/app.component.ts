import { Component } from '@angular/core';
import { TranslationService } from '@transifex/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TX Native Angular Demo';

  constructor(private translationService: TranslationService) {
    translationService.init({
      token: '1/e41ce31df46f0526af6ea4931daa7718b3d7e843',
      secret: '1/bec6bc714f11fa2cca330f6c7c69500bb8ecfe0a',
      sourceLocale: 'en',
    });
    translationService.setLocale('en');
  }
}
