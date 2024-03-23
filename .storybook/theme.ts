import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  // Brand color
  colorPrimary: '#282C31',
  colorSecondary: '#1883FE',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Starter Template',
  brandUrl: 'https://example.com',
  // brandImage: '../src/stories/assets/logo.jpg',
  brandTarget: '_self',

  // UI
  appBg: '#F7F7F9',
  appContentBg: '#FFF',
  appBorderColor: '#E1E5EA',
  appBorderRadius: 5,

  // Text colors
  textColor: '#282C31',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#939598',
  barSelectedColor: '#1883FE',
  barBg: '#FFF',

  // Form colors
  inputBg: '#FFF',
  inputBorder: '#E1E5EA',
  inputTextColor: '#282C31',
  inputBorderRadius: 3,
});