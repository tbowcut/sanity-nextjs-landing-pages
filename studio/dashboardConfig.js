export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6244a111f1979317f2ff2904',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-67upd1he',
                  apiId: 'a2da6045-a5af-47a8-a504-fd04d8bec69f'
                },
                {
                  buildHookId: '6244a1118594c515e358e295',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zddej3nv',
                  apiId: '62f2182e-6d63-4f2b-960f-a4a595820ca7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tbowcut/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zddej3nv.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
