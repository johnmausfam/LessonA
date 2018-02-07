import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Matiess',
  url: 'http://jt-rd2web01/chartut/'
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.(js|jsx)$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);