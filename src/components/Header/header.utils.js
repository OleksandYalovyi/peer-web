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

export const getBackButtonUrl = (url) => {
  let backButtonUrl

  if (url.charAt(url.length - 1) === '/') {
    backButtonUrl = url.slice(0, url.lastIndexOf('/'))
    backButtonUrl = backButtonUrl.slice(0, backButtonUrl.lastIndexOf('/'))
  } else {
    backButtonUrl = url.slice(0, url.lastIndexOf('/'))
  }

  return backButtonUrl
}
