const desktop = {
  withoutAuth: {
    home: '/',
    app: '/app',
    notFound: '/notFound',
    homeProduct: '/product',
    team: '/team',
    jobs: '/careers',
    jobsDetails: {
      path: '/careers/:id',
      url: (id) => `/careers/${id}`,
    },
    shop: '/shop',
    blog: '/blog',
  },
  withAuth: {},
}

export default desktop
