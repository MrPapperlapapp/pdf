'use client';

import {
  Group,
  Button,
  Text,
  Container,
  Burger,
  Drawer,
  Stack,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconFileText,
  IconArrowMerge,
  IconScissors,
  IconPencil,
  IconNote,
  IconDots,
} from '@tabler/icons-react';
import classes from './Header.module.css';

const navLinks = [
  { label: 'Edit text', icon: IconFileText },
  { label: 'Merge', icon: IconArrowMerge },
  { label: 'Split', icon: IconScissors },
  { label: 'Sign', icon: IconPencil },
  { label: 'Annotate', icon: IconNote },
  { label: 'More tools', icon: IconDots },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
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
          <Text fw={700} size="lg" className={classes.logoText}>
            pdf<span className={classes.logoAccent}>.net</span>
          </Text>
        </Group>

        <Group gap={4} className={classes.navLinks}>
          {navLinks.map((link) => (
            <UnstyledButton key={link.label} className={classes.navLink}>
              {link.label}
            </UnstyledButton>
          ))}
        </Group>

        <Group gap="sm" className={classes.actions}>
          <Button variant="subtle" color="dark" className={classes.loginBtn}>
            Login
          </Button>
          <Button color="dark" radius="xl" className={classes.getStartedBtn}>
            Get started
          </Button>
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Drawer
          opened={opened}
          onClose={close}
          size="100%"
          padding="md"
          title={
            <Text fw={700} size="lg">
              pdf<span style={{ color: '#E03131' }}>.net</span>
            </Text>
          }
          zIndex={1000}
        >
          <Stack gap="md">
            {navLinks.map((link) => (
              <UnstyledButton
                key={link.label}
                className={classes.mobileLink}
                onClick={close}
              >
                <Group gap="sm">
                  <link.icon size={20} stroke={1.5} />
                  <span>{link.label}</span>
                </Group>
              </UnstyledButton>
            ))}
            <Button variant="outline" color="dark" fullWidth mt="md">
              Login
            </Button>
            <Button color="dark" fullWidth>
              Get started
            </Button>
          </Stack>
        </Drawer>
      </Container>
    </header>
  );
}
