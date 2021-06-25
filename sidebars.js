module.exports = {
  docs: [
    'doc1', 'toollist',
    {
      type: 'category',
      label: 'Communication',
      collapsed: false,
      items: ['howtosubmitdoc', 'howtodocs', 'howtorunscraper','standupmeetings', 'externalcomm', 'terminology'],
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
    'sop/sopintroduction',
    {
      type: 'category',
      label: 'Planning',
      collapsed: true,
      items: ['sop/doc2', 'sop/measureguide', 'sop/digimark']
    },
    {
      type: 'category',
      label: 'Production',
      collapsed: true,
      items: [
        {
          'Cabinet Assembley': [
            'sop/basecabinetassembley',
            'sop/installingdraweranddoorfaces',
            'sop/finishingassembley',
          ],
        },
        {
          Sanding: [
            'sop/prepsurfaceprimer',
          ],
        },
        'sop/modernshaker',
        'sop/rawwoodsanding'
      ]
    },
    {
      type: 'category',
      label: 'Finishing',
      collapsed: true,
      items: [
        'sop/mixformula',
        'sop/finishingwhitepainteddoors',
        'sop/finishingcleanup',
        'sop/sprayequipmentcleaning'
      ]
    },
    {
      type: 'category',
      label: 'Delivery',
      collapsed: true,
      items: [
        'sop/hardwaredeliverybox',
        'sop/delivery',
        'sop/delivery2'
      ]
    },
    {
      type: 'category',
      label: 'Install',
      collapsed: true,
      items: [
        'sop/installation',
        'sop/installation2'
      ]
    },
    {
      type: 'category',
      label: 'Short form',
      collapsed: true,
      items: ['sop/primersandingtrunc']
    },
    ],
  roles: [
     'roles/roles',
    {
      type: 'category',
      label: 'Office',
      collapsed: false,
      items: ['roles/purchasing', 'roles/manager']
    },
    {
      type: 'category',
      label: 'Shop',
      collapsed: false,
      items: ['roles/cncop', 'roles/leadhand', 'roles/benchman', 'roles/helper']
    },
    {
      type: 'category',
      label: 'On Site',
      collapsed: false,
      items: ['roles/installer']
    },
  ]
};
