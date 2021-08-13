module.exports = {
  docs: [
    'doc1', 'toollist',
    {
      type: 'category',
      label: 'Communication',
      collapsed: true,
      items: [
        'standupmeetings',
        'externalcomm',
        'culture',
        'pdpolicy',
        'terminology'
      ],
    },
    {
      type: 'category',
      label: 'Policies and Procedures',
      collapsed: true,
      items: [
        'policy',
        'cleanupschedule',
        'emergencyprodeduresineventoffire',
        'lockoutprocedure',
        'firefighting',
        'firesafetyduties',
      ],
    },
    {
      type: 'category',
      label: 'Apprenticeship',
      collapsed: true,
      items: ['apprentice'],
    },
    {
      type: 'category',
      label: 'Documentation Site',
      collapsed: true,
      items: [ 'howtosubmitdoc',
      'howtodocs',
      'howtorunscraper'],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: true,
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
      label: 'Engineering',
      collapsed: true,
      items: ['sop/electricalcode']
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
            'sop/raisedpaneldoors',
          ],
        },
        {
          'Solid Surface': [
            'sop/solidsurfacesink',
          ]
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
        'sop/sitedamagerefinishing',
        'sop/mixformula',
        'sop/finishingwhitepainteddoors',
        'sop/finishingcleanup',
        'sop/sprayequipmentcleaning',
        'sop/woodfinishing',
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
        'sop/installmeeting',
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
