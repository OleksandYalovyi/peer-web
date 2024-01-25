/* eslint-disable max-len */

import React from 'react'
import { Text, Title, Image, List } from 'pages/Article/components/ArticleComponents'

const data = {
  rows: [
    {
      cols: [
        {
          card: {
            id: 0,
            type: 'large',
            createdAt: 1705297675461,
            title: 'introducing leaderboard 👾👾',
            text: 'it’s you v. the world. are you game (or scared)?',
            image:
              'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
            node: (
              <>
                <Text>
                  Hey all. We’re evolving Clubhouse to be more like a messaging app with a big new
                  update today, available now on iOS and Android. It’s designed to be more social
                  than other messaging apps, and a bit more Clubhouse-y.Our goal was to make it 100x
                  easier for you to be with friends throughout the day, bump into friends
                  unexpectedly, and get to know new friends through your existing friend groups –
                  even if you don’t have many friends on Clubhouse or a ton of time to spare. We’ve
                  been heads down testing it for quite some time and we’re so excited to share it
                  with you.
                </Text>

                <Title>Introducing “Leaderboards”</Title>

                <Text>
                  Today’s update is centered around a new format called “Chats.” A Chat is a
                  voice-only group chat with your favorite people. It’s like a Clubhouse room, but
                  it takes place asynchronously, so you can drop by and chime in on your own time.
                  <br />
                  <br />
                  To picture a Chat, imagine if your group texts and your Instagram Stories met at
                  the park, talked for hours, became best friends and fell in love. 9 months later,
                  they gave birth to a new way of keeping in touch – one that lets you hear your
                  friends’ voices, meet their friends, and spend less time typing.
                  <br />
                  <br />
                  If “social messaging” were a thing, that’s what it would be.With Chats you can
                  push to talk, listen at 2x, tap to skip, swipe to the next Chat, and slide into
                  your friends’ VMs (unless that sounds weird) to chat privately. They’re designed
                  to be fast, fun and personal.
                </Text>

                <Image src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />

                <Text>
                  Hey all. We’re evolving Clubhouse to be more like a messaging app with a big new
                  update today, available now on iOS and Android. It’s designed to be more social
                  than other messaging apps, and a bit more Clubhouse-y.Our goal was to make it 100x
                  easier for you to be with friends throughout the day, bump into friends
                  unexpectedly, and get to know new friends through your existing friend groups –
                  even if you don’t have many friends on Clubhouse or a ton of time to spare. We’ve
                  been heads down testing it for quite some time and we’re so excited to share it
                  with you.
                </Text>

                <Title>Introducing “Leaderboards”</Title>

                <List
                  items={[
                    'Today’s update is centered around a new format called “Chats.” A Chat is a voice-only group chat with your favorite people. It’s like a Clubhouse room, but it takes place asynchronously, so you can drop by and chime in on your own time. ',
                    'To picture a Chat, imagine if your group texts and your Instagram Stories met at the park, talked for hours, became best friends and fell in love. 9 months later, they gave birth to a new way of keeping in touch – one that lets you hear your friends’ voices, meet their friends, and spend less time typing.',
                    'If “social messaging” were a thing, that’s what it would be.With Chats you can push to talk, listen at 2x, tap to skip, swipe to the next Chat, and slide into your friends’ VMs (unless that sounds weird) to chat privately. They’re designed to be fast, fun and personal.',
                  ]}
                />
              </>
            ),
          },
        },
      ],
    },
    {
      cols: [
        {
          card: {
            id: 1,
            type: 'medium',
            createdAt: 1705297675461,
            title: 'From Tokyo to NYC, landmarks have arrived in style From Tokyo to NYC,',
            image:
              'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
          },
        },
        {
          card: {
            id: 2,
            type: 'medium',
            createdAt: 1705297675461,
            title: 'Android v1.0release notes',
            text: 'peer for android has arrived. it’s still in beta but we’re super thrilled. take a look and drop us a cute comment! (ideally where everyone can see it)',
            image:
              'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
            withImage: false,
          },
        },
        {
          card: {
            id: 3,
            type: 'medium',
            createdAt: 1705297675461,
            title: 'From Tokyo to NYC, landmarks have arrived in style From Tokyo to NYC,',
            image:
              'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
          },
        },
      ],
    },
    {
      cols: [
        {
          card: {
            id: 4,
            type: 'big',
            createdAt: 1705297675461,
            title: 'landmarks',
            text: 'it’s you v. the world. are you game (or scared)?',
            image:
              'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
          },
        },
        {
          card: {
            id: 5,
            type: 'big',
            createdAt: 1705297675461,
            title: 'landmarkslandmarkslandmarkslandmarksland...',
            text: 'it’s you v. the world. are you game (or scared)?',
            image:
              'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
          },
        },
      ],
    },
  ],
}

export default data
