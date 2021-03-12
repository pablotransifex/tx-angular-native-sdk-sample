import { Component, OnInit } from '@angular/core';
import { TranslatableString, TranslationService } from '@transifex/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Translations using decorator
  @TranslatableString('Monday', { _key: 'text.monday' })
  _weekday: string;
  @TranslatableString('terms of service', { _key: 'text.terms_of_service' })
  _terms: string;
  @TranslatableString('privacy policy', { _key: 'text.privacy_policy' })
  _privacy: string;

  constructor(private translationService: TranslationService) {
    // Translations using translation service
    // const that = this;
    // this.translationService.localeChanged.subscribe(res => {
    //   that._weekday = this.translationService.translate('Monday',
    //     { _key: 'text.monday' });
    //   that._terms = this.translationService.translate('terms of service',
    //     { _key: 'text.terms_of_service' });
    //   that._privacy = this.translationService.translate('privacy policy',
    //     { _key: 'text.privacy_policy' });
    // });
  }

  ngOnInit(): void { }

  onLocaleChanged(event) {
    console.log(event);
  }
}
