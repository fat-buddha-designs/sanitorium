export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '636dfe94a712bf27b0af897f',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-anyxw8u3',
                  apiId: '676a80b2-6c61-4f04-846f-8fc4ba038765'
                },
                {
                  buildHookId: '636dfe941a9de526a9ad3831',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-c3a7p1s4',
                  apiId: '47f86ace-1d27-4fb3-b76b-fb4b5df6a20a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fat-buddha-designs/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-c3a7p1s4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
