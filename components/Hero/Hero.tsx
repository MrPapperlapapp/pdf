'use client';

import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Box,
  Stack,
  Avatar,
} from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import {
  IconUpload,
  IconStarFilled,
  IconFileTypePdf,
} from '@tabler/icons-react';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <section className={classes.hero}>
      <Container size="xl">
        <div className={classes.grid}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Professional <span className={classes.highlight}>All-In-One</span>{' '}
              Online
              <br />
              PDF Editor
            </Title>

            <Text className={classes.description}>
              Effortlessly upload your PDF files to securely sign, edit,
              annotate, merge, and do much more with them using our online PDF
              editor.
            </Text>

            <Dropzone
              onDrop={(files) => console.log('accepted files', files)}
              onReject={(files) => console.log('rejected files', files)}
              maxSize={5 * 1024 ** 2}
              accept={['application/pdf']}
              className={classes.dropzone}
            >
              <Group
                justify="center"
                gap="xl"
                mih={100}
                style={{ pointerEvents: 'none' }}
              >
                <Dropzone.Accept>
                  <IconUpload size={40} color="var(--mantine-color-red-6)" />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconFileTypePdf
                    size={40}
                    color="var(--mantine-color-red-6)"
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconUpload size={40} color="var(--mantine-color-gray-4)" />
                </Dropzone.Idle>

                <div>
                  <Text size="xl" inline>
                    Drop PDF file here
                  </Text>
                  <Text size="sm" c="dimmed" inline mt={7}>
                    or click to select file (max 5MB)
                  </Text>
                </div>
              </Group>
            </Dropzone>

            <div className={classes.testimonial}>
              <div className={classes.quoteBox}>
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  className={classes.quoteIcon}
                >
                  <path
                    d="M0 16V9.6C0 4.16 3.2 0.96 8 0L8.8 1.6C5.6 2.56 4.16 4.96 4 7.2H8V16H0ZM12 16V9.6C12 4.16 15.2 0.96 20 0L20 1.6C17.6 2.56 16.16 4.96 16 7.2H20V16H12Z"
                    fill="#E8E8E8"
                  />
                </svg>
                <Text size="sm" c="dimmed" className={classes.quoteText}>
                  A game changer for PDF editing. I fully edited the document in
                  like a couple of minutes, so easy.
                </Text>
                <Group gap="sm" mt="sm">
                  <Avatar size={32} radius="xl" color="blue">
                    JT
                  </Avatar>
                  <div>
                    <Text size="sm" fw={600}>
                      John Thompson
                    </Text>
                    <Text size="xs" c="dimmed">
                      Legal advisor | Delos Inc.
                    </Text>
                  </div>
                </Group>
              </div>
              <Group gap={2} mt="xs">
                {[1, 2, 3, 4, 5].map((i) => (
                  <IconStarFilled
                    key={i}
                    size={14}
                    style={{ color: '#fab005' }}
                  />
                ))}
                <Text size="xs" c="dimmed" ml={4}>
                  5 stars, my go-to tool
                </Text>
              </Group>
            </div>
          </div>

          <div className={classes.illustration}>
            <div className={classes.illustrationInner}>
              <div className={classes.floatingDoc}>
                <div className={classes.docPreview}>
                  <div className={classes.docLine} style={{ width: '80%' }} />
                  <div className={classes.docLine} style={{ width: '60%' }} />
                  <div className={classes.docLine} style={{ width: '90%' }} />
                  <div className={classes.docLine} style={{ width: '45%' }} />
                  <div className={classes.docLine} style={{ width: '70%' }} />
                </div>
              </div>
              <div className={classes.decorCircle1} />
              <div className={classes.decorCircle2} />
              <div className={classes.decorDot1} />
              <div className={classes.decorDot2} />
              <div className={classes.decorDot3} />

              <div className={classes.editBadge}>
                <IconUpload size={14} />
                <Text size="xs" fw={500}>
                  Edit
                </Text>
              </div>
              <div className={classes.signBadge}>
                <Text size="xs" fw={500}>
                  Sign
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
