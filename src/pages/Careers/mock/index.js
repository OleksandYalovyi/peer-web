import QAFulltime from './pdf/qa.pdf'
import SDFreelance from './pdf/sd-freelance.pdf'
import SDFullFreelance from './pdf/sd-full-freelance.pdf'
import SDFull from './pdf/sd-full.pdf'

export const jobData = [
  {
    id: 1,
    title: 'QA Engineer',
    location: 'Remote',
    time: 'Full Time',
    linkFile: QAFulltime,
  },
  {
    id: 2,
    title: 'Software Developer',
    location: 'Remote',
    time: 'Freelancer',
    linkFile: SDFreelance,
  },
  {
    id: 3,
    title: 'Software Developer',
    location: 'Remote',
    time: 'Full Time / Freelancer',
    linkFile: SDFullFreelance,
  },
  {
    id: 4,
    title: 'Software Developer',
    location: 'Remote',
    time: 'Full Time',
    linkFile: SDFull,
  },
  {
    id: 5,
    title: 'Open Application',
    location: 'Remote',
  },
]

export const defaultJobData = [
  {
    title: 'Open Application',
    location: 'Remote',
    linkFile: QAFulltime,
  },
]
