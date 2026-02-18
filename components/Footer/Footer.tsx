'use client';

import { Container, Group, Text, Anchor, Divider } from '@mantine/core';
import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
} from '@tabler/icons-react';
import classes from './Footer.module.css';

const mainLinks = [
  'Edit text',
  'Merge',
  'Split',
  'Sign',
  'Annotate',
  'More tools',
  'Login',
  'Get started',
];
const bottomLinks = [
  'Terms and conditions',
  'Privacy policy',
  'Security',
  'Compliance',
  'Sitemap',
  'Accessibility',
];

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container size="xl">
        <div className={classes.inner}>
          <Group gap={6}>
            <div className={classes.logoIcon}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill="#E03131" />
                <text
                  x="4"
                  y="20"
                  fill="white"
                  fontSize="14"
                  fontWeight="700"
                  fontFamily="Inter, sans-serif"
                >
                  pdf
                </text>
              </svg>
            </div>
            <Text fw={700} size="lg">
              pdf<span className={classes.logoAccent}>.net</span>
            </Text>
          </Group>

          <Group gap="md" className={classes.navLinks}>
            {mainLinks.map((link) => (
              <Anchor key={link} c="dimmed" size="sm" className={classes.link}>
                {link}
              </Anchor>
            ))}
          </Group>
        </div>

        <Divider my="md" color="#f0f0f0" />

        <div className={classes.bottom}>
          <Group gap="md" className={classes.bottomLinks}>
            {bottomLinks.map((link) => (
              <Anchor
                key={link}
                c="dimmed"
                size="xs"
                className={classes.bottomLink}
              >
                {link}
              </Anchor>
            ))}
          </Group>

          <Group gap="sm" className={classes.socials}>
            <IconBrandTwitter size={18} className={classes.socialIcon} />
            <IconBrandFacebook size={18} className={classes.socialIcon} />
            <IconBrandInstagram size={18} className={classes.socialIcon} />
            <IconBrandYoutube size={18} className={classes.socialIcon} />
          </Group>
        </div>
      </Container>
    </footer>
  );
}
