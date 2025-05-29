// app.config.ts
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideZoneChangeDetection } from '@angular/core';

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true })
  ]
};
