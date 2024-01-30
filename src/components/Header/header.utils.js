import routes from 'routing/path'

export default [
  {
    id: 1,
    router: true,
    name: 'team',
    to: routes.withoutAuth.team,
  },
  {
    id: 2,
    router: true,
    name: 'blog',
    to: routes.withoutAuth.blog,
  },
  {
    id: 3,
    router: true,
    name: 'jobs',
    to: routes.withoutAuth.jobs,
  },
]
