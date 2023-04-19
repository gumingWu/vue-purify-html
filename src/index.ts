import type { App } from 'vue';
import { purifyHtmlDirective } from './directive';

export function vuePurtifyHtml(app: App) {
  app.directive('purify-html', purifyHtmlDirective);
}
