module.exports = {
  docs: [
    'doc1', 'toollist',
    {
      type: 'category',
      label: 'Communication',
      collapsed: false,
      items: ['howtodocs','doc3', 'externalcomm', 'terminology'],
    },
    {
      type: 'category',
      label: 'Policies and Procedures',
      collapsed: false,
      items: ['policy', 'cleanupschedule', 'emergencyprodeduresineventoffire', 'lockoutprocedure'],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: ['mdx', 'cheatsheet'],
    },
    ],
  sops: [
    'sopintroduction',
    {
      type: 'category',
      label: 'Planning',
      collapsed: true,
      items: ['doc2', 'measureguide', 'digimark']
    },
    {
      type: 'category',
      label: 'Production',
      collapsed: true,
      items: [
        {
          'Cabinet Assembley': [
            'basecabinetassembley',
            'installingdraweranddoorfaces',
            'finishingassembley',
          ],
        },
        {
          Sanding: [
            'prepsurfaceprimer',
          ],
        },
        'modernshaker',
        'hingeboring',
        'cabinetassembly',
        'rawwoodsanding'
      ]
    },
    {
      type: 'category',
      label: 'Finishing',
      collapsed: true,
      items: ['mixformula', 'finishingwhitepainteddoors', 'finishingcleanup', 'sprayequipmentcleaning']
    },
    {
      type: 'category',
      label: 'Delivery',
      collapsed: true,
      items: ['hardwaredeliverybox', 'delivery', 'delivery2']
    },
    {
      type: 'category',
      label: 'Install',
      collapsed: true,
      items: ['installation', 'installation2']
    },
    {
      type: 'category',
      label: 'Short form',
      collapsed: true,
      items: ['primersandingtrunc']
    },
    ],
  roles: [
     'roles',
    {
      type: 'category',
      label: 'Office',
      collapsed: false,
      items: ['purchasing', 'manager']
    },
    {
      type: 'category',
      label: 'Shop',
      collapsed: false,
      items: ['cncop', 'leadhand', 'benchman', 'helper']
    },
    {
      type: 'category',
      label: 'On Site',
      collapsed: false,
      items: ['installer']
    },
  ]
};

// This is from Docusaurus and is a much better version of a sidebar. We will copy this moving forward.
/*

module.exports = {
 docs: [
   'introduction',
   {
     type: 'category',
     label: 'Getting Started',
     collapsed: false,
     items: ['installation', 'configuration', 'typescript-support'],
   },
   {
     type: 'category',
     label: 'Guides',
     items: [
       'guides/creating-pages',
       {
         Docs: [
           'guides/docs/introduction',
           'guides/docs/create-doc',
           'guides/docs/sidebar',
           'guides/docs/versioning',
           'guides/docs/markdown-features',
           'guides/docs/multi-instance',
         ],
       },
       'blog',
       {
         type: 'category',
         label: 'Markdown Features',
         items: [
           'guides/markdown-features/introduction',
           'guides/markdown-features/react',
           'guides/markdown-features/tabs',
           'guides/markdown-features/code-blocks',
           'guides/markdown-features/admonitions',
           'guides/markdown-features/headings',
           'guides/markdown-features/inline-toc',
           'guides/markdown-features/assets',
           'guides/markdown-features/plugins',
           'guides/markdown-features/math-equations',
         ],
       },
       'styling-layout',
       'static-assets',
       'search',
       'browser-support',
       'deployment',
       {
         type: 'category',
         label: 'Internationalization',
         items: [
           {
             type: 'doc',
             id: 'i18n/introduction',
             label: 'Introduction',
           },
           {
             type: 'doc',
             id: 'i18n/tutorial',
             label: 'Tutorial',
           },
           {
             type: 'doc',
             id: 'i18n/git',
             label: 'Using Git',
           },
           {
             type: 'doc',
             id: 'i18n/crowdin',
             label: 'Using Crowdin',
           },
         ],
       },
     ],
   },
   {
     type: 'category',
     label: 'Advanced Guides',
     items: ['using-plugins', 'using-themes', 'presets'],
   },
   {
     type: 'category',
     label: 'Migrating from v1 to v2',
     items: [
       'migration/migration-overview',
       'migration/migration-automated',
       'migration/migration-manual',
       'migration/migration-versioned-sites',
       'migration/migration-translated-sites',
     ],
   },
 ],
 api: [
   'cli',
   'docusaurus-core',
   'api/docusaurus.config.js',
   'lifecycle-apis',
   {
     type: 'category',
     label: 'Plugins',
     items: [
       'api/plugins/plugins-overview',
       'api/plugins/plugin-content-docs',
       'api/plugins/plugin-content-blog',
       'api/plugins/plugin-content-pages',
       'api/plugins/plugin-client-redirects',
       'api/plugins/plugin-debug',
       'api/plugins/plugin-google-analytics',
       'api/plugins/plugin-google-gtag',
       'api/plugins/plugin-ideal-image',
       'api/plugins/plugin-pwa',
       'api/plugins/plugin-sitemap',
     ],
   },
   {
     type: 'category',
     label: 'Themes',
     items: [
       'api/themes/themes-overview',
       'api/themes/theme-configuration',
       'api/themes/theme-classic',
       'api/themes/theme-bootstrap',
       'api/themes/theme-live-codeblock',
       'api/themes/theme-search-algolia',
     ],
   },
 ],
};
*/