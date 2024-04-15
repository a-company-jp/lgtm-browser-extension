import { defineManifest } from '@crxjs/vite-plugin';
import { version } from '../package.json';

// NOTE: do not include src/ in paths,
// vite root folder: src, public folder: public (based on the project root)
// @see ../vite.config.ts#L16

const manifest = defineManifest(async (env) => ({
  manifest_version: 3,
  name: `${env.mode === 'development' ? '[Dev] ' : ''}LGTM-Gen for GitHub`,
  description: 'Enhance your GitHub reviews with instant LGTM image inserts!',
  author: 'a-company-jp',
  version,
  background: {
    service_worker: 'background/index.ts',
  },
  content_scripts: [
    {
      matches: ['https://github.com/*/pull/*/files'],
      js: ['content/index.tsx'],
    },
  ],
  host_permissions: ['<all_urls>'],
  options_ui: {
    page: 'options/options.html',
    open_in_tab: true,
  },
  web_accessible_resources: [
    {
      resources: [
        // this file is web accessible; it supports HMR b/c it's declared in `rollupOptions.input`
        'welcome/welcome.html',
      ],
      matches: ['<all_urls>'],
    },
  ],
  action: {
    default_popup: 'popup/popup.html',
    default_icon: {
      '16': 'images/lgtm-icon.png',
      '32': 'images/lgtm-icon.png',
      '48': 'images/lgtm-icon.png',
      '128': 'images/lgtm-icon.png',
    },
  },
  icons: {
    '16': 'images/lgtm-icon.png',
    '32': 'images/lgtm-icon.png',
    '48': 'images/lgtm-icon.png',
    '128': 'images/lgtm-icon.png',
  },
  permissions: ['storage', 'tabs'],
}));

export default manifest;
