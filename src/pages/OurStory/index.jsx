import React from 'react'

import PageContainer from 'components/PageContainer/index'
import Typography from 'components/Typography/index'
import PEERStarLogo from 'components/Icons/PEERStarLogo/index'
import QRCodeModal from 'components/Modals/QRCodeModal/index'
import useQRCodeModal from 'components/Modals/QRCodeModal/useQRCodeModal'
import ActionLink from './ActionLink/index'
import routing from '../../routing/path'
import { paragraphDataFirst, paragraphDataSecond } from './paragraphData'

import styles from './story.module.scss'

const { Heading, Paragraph } = Typography

function OurStory() {
  const { isQRCodeModalOpen, setIsQRCodeModalOpen, closeQRCodeModal } = useQRCodeModal()
  return (
    <PageContainer>
      <div className={styles.story_wrapper}>
        <PEERStarLogo width="43" height="43" />
        <section className={styles.introduction}>
          <Heading size={2} className={styles.title}>
            Hi, we’re Peer.
          </Heading>
          {paragraphDataFirst.map((paragraph) => (
            <Paragraph key={paragraph.id} size={1} className={styles.text}>
              {paragraph.text}
            </Paragraph>
          ))}
          <div className={styles.links_wrapper}>
            <ActionLink to={routing.withoutAuth.jobs} name="Job Board" />
            <ActionLink name="Download Peer" onClick={setIsQRCodeModalOpen} />
          </div>
          <span className={styles.email}>
            Email the team: <a href="mailto:hello@peer.inc ">hello@peer.inc</a>
          </span>
        </section>
        <section className={styles.story}>
          <Heading size={1} className={styles.title}>
            There’s no magic without story
          </Heading>
          {paragraphDataSecond.map((paragraph) => (
            <Paragraph key={paragraph.id} size={1} className={styles.text}>
              {paragraph.text}
            </Paragraph>
          ))}
        </section>
      </div>
      <QRCodeModal isOpen={isQRCodeModalOpen} onClose={closeQRCodeModal} />
    </PageContainer>
  )
}

export default OurStory
