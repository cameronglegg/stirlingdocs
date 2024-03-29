const remarkImages = require('remark-images');
const rehypeTruncate = require('rehype-truncate');

module.exports = {
  title: 'Stirling Docs',
  tagline: 'The How and Why.',
  url: 'https://www.stirlingdocs.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cameron@stirlingwoodworks.com', // Usually your GitHub org/user name.
  projectName: 'stirlingdocs', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      hideOnScroll: true,
      title: 'Stirling Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'doc1',
          label: 'Docs',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'sop/sopintroduction',
          label: 'SOPs',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'roles/roles',
          label: 'Roles',
        },
        {
          type: 'doc',
          position: 'right',
          docId: 'naaws/naaws',
          label: 'NAAWS 4.0 Manual',
        },
        {
          href: 'http://hrm.stirlingwoodworks.com',
          position: 'right',
          label: 'Ice HRM',
        },
        // Commented Out Blog {to: 'blog', label: 'Blog', position: 'left'},
        // Commented Out the Top Github Link{
          // href: 'https://github.com/cameronglegg/stirling_docs',
          // label: 'GitHub',
          // position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Site Measurements',
              to: 'docs/sop/doc2/',
            },
            // Added New Style Guide in Footer
            {
              label: 'Style Guide',
              to: 'docs/cheatsheet/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/c/stirling-woodworks/questions',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
              // label: 'Blog',
              // to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/cameronglegg/stirlingdocs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stirling Woodworks Ltd. Built with Docusaurus.`,
    },
    // This is the Algolia Search Bar.
    algolia: {
      apiKey: 'f744bc3693067211b93698623d172995',
      indexName: 'test',
      appId: 'A371I1W7P6',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/cameronglegg/stirlingdocs/tree/master',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [remarkImages],
          rehypePlugins: [rehypeTruncate],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/cameronglegg/stirlingdocs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
