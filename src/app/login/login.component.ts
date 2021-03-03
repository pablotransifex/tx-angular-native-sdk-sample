import { Component, OnInit } from '@angular/core';
import { TranslationService } from '@transifex/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  _weekday: string;
  _terms: string;
  _privacy: string;

  constructor(private translationService: TranslationService) {
    const that = this;
    this.translationService.localeChanged.subscribe(res => {
      that._weekday = this.translationService.translate('Monday',
        { _key: 'text.monday' });
      that._terms = this.translationService.translate('terms of service',
        { _key: 'text.terms_of_service' });
      that._privacy = this.translationService.translate('privacy policy',
        { _key: 'text.privacy_policy' });
    });
  }

  ngOnInit(): void { }

  onLocaleChanged(event) {
    console.log(event);
  }
}
