export const JOBS_DATA = [
  {
    info: {
      title: 'Lead Product Designer',
      position: 'full time',
      location: 'remote',
    },
    description: '',
  },
  {
    info: {
      title: 'Junior Product Manager Web3',
      position: 'full time',
      location: 'remote',
    },
    description: '',
  },
  {
    info: {
      title: 'Senior Backend Engineer',
      position: 'full time',
      location: 'remote',
    },
    description: '',
  },
  {
    info: {
      title: 'Senior IOS Engineer',
      position: 'full time',
      location: 'remote',
    },
    description: '',
  },
  {
    info: {
      title: 'Senior Web Developer',
      position: 'full time',
      location: 'remote',
    },
    description: '',
  },
  {
    info: {
      title: 'Game designer Peer',
      position: 'full time',
      location: 'remote',
    },
    description: '',
  },
  {
    info: {
      title: 'Senior Technical Artist',
      position: 'full time',
      location: 'remote',
    },
    description: '',
  },
]

export const JOBS_DATA_MAP = Object.entries(JOBS_DATA).reduce(
  (acc, item, i) => ({ ...acc, [i + 1]: item }),
  {},
)
