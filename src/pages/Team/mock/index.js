/* eslint-disable react/react-in-jsx-scope */
import Tony from 'assets/team/tony.png'
import Heath from 'assets/team/heath.png'
import Rachid from 'assets/team/rachid.png'
import Kyle from 'assets/team/kyle.png'
import Egor from 'assets/team/egor.png'
import Milan from 'assets/team/milan.png'
import Matthieu from 'assets/team/matthieu.png'
import Gino from 'assets/team/gino.png'
import Santiago from 'assets/team/santiago.png'
import Kishan from 'assets/team/kishan.png'

import { IconLinkedin, IconX } from '../TeamItem/icons'

const teamMembers = [
  {
    id: 1,
    src: Tony,
    name: 'Tony Tran',
    position: 'President and CEO',
    social: [
      {
        icon: <IconX />,
        link: 'https://twitter.com/mistaalfa',
      },
      {
        icon: <IconLinkedin />,
        link: 'https://www.linkedin.com/in/mralfa',
      },
    ],
  },
  {
    id: 2,
    src: Heath,
    name: 'Heath Abbate',
    position: 'Chief Operations Officer',
    social: [
      {
        icon: <IconLinkedin />,
        link: 'https://www.linkedin.com/in/heath-abbate',
      },
    ],
  },
  {
    id: 3,
    src: Rachid,
    name: 'Dr. Rachid Saadi',
    position: 'Chief Technology Officer',
    social: [
      {
        icon: <IconLinkedin />,
        link: 'https://www.linkedin.com/in/rsaadi',
      },
    ],
  },
  {
    id: 4,
    src: Kyle,
    name: 'Kyle Hay',
    position: 'Chief Design Officer',
    social: [
      {
        icon: <IconLinkedin />,
        link: 'https://www.linkedin.com/in/kyle-hay',
      },
    ],
  },
  {
    id: 5,
    src: Egor,
    name: 'Dr. Egor Yusov',
    position: 'Chief Architect',
    social: [
      {
        icon: <IconLinkedin />,
        link: 'https://www.linkedin.com/in/egor-yusov',
      },
    ],
  },
  {
    id: 6,
    src: Milan,
    name: 'Milan Bulat',
    position: 'Head of Maps',
    social: [
      {
        icon: <IconX />,
        link: 'https://twitter.com/speedy_milan',
      },
      {
        icon: <IconLinkedin />,
        link: 'https://www.linkedin.com/in/milanbulat',
      },
    ],
  },
  {
    id: 7,
    src: Matthieu,
    name: 'Matthieu Chopin',
    position: 'Maps Architect',
    social: [
      {
        icon: <IconLinkedin />,
        link: 'https://www.linkedin.com/in/mattchopin',
      },
    ],
  },
  {
    id: 8,
    src: Gino,
    name: 'Gino Ardelean',
    position: 'Technical Creative Director',
    social: [
      {
        icon: <IconX />,
        link: 'https://twitter.com/GinoArdelean',
      },
      {
        icon: <IconLinkedin />,
        link: 'https://www.linkedin.com/in/gino-ardelean-a43a8194',
      },
    ],
  },
  {
    id: 9,
    src: Santiago,
    name: 'Santiago Moriv',
    position: 'Sr. Art Director',
    social: [
      {
        icon: <IconX />,
        link: 'https://twitter.com/santiagomoriv',
      },
      {
        icon: <IconLinkedin />,
        link: 'https://www.linkedin.com/in/santiago-moriv-7ba892171',
      },
    ],
  },
  {
    id: 10,
    src: Kishan,
    name: 'Kishan Verma',
    position: 'Blockchain Architect',
    social: [
      {
        icon: <IconX />,
        link: 'https://twitter.com/kishankverma',
      },
      {
        icon: <IconLinkedin />,
        link: 'https://www.linkedin.com/in/kishanverma',
      },
    ],
  },
]

export default teamMembers
