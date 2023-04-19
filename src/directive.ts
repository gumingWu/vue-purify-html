import type { FunctionDirective } from 'vue';
import DOMPurify from 'dompurify';

const domPurify = DOMPurify();

export const purifyHtmlDirective: FunctionDirective<
  HTMLElement,
  HTMLElement
> = (el, binding) => {
  const bindingValue = binding.value;

  if (binding.oldValue === bindingValue) {
    return;
  }
  const bindingValueStr = `${bindingValue}`;
  el.innerHTML = domPurify.sanitize(bindingValueStr);
};
