// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Payphone Tag API',
  tagline: 'A dedicated site for the Payphone Tag API run by the community',
  favicon: 'img/ppttapico.png',
  trailingSlash: false,
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'StarTheProot', // Usually your GitHub org/user name.
  projectName: 'payphonetagapi', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/pptapiico.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Payphone Tag API',
        logo: {
          alt: 'My Site Logo',
          src: 'img/pptapiico.png',
        },
        items: [
          {
            label: 'Docs',
            href: '/docs/intro',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Payphone Tag',
            items: [
              {
                label: 'Payphone Tag',
                href: 'https://payphonetag.com/',
              },
              {
                label: 'Payphone Tag Wiki',
                href: 'https://wiki.payphonetag.com/wiki/Main_Page',
              },
            ],
          },
        ],
        copyright: `Attribution-ShareAlike 4.0 International CC BY-SA 4.0, Made with ♥. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
