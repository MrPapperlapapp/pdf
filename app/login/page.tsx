'use client';

import { useCallback, useState } from 'react';
import {
  Container,
  Paper,
  Title,
  Text,
  Button,
  Divider,
  Stack,
  Group,
} from '@mantine/core';
import { IconBrandGoogle, IconArrowRight } from '@tabler/icons-react';
import { useSignInWithGoogleMutation } from '@/store/api/firebaseApi';
import classes from './LoginPage.module.css';

// Static JSX hoisted outside component (rendering-hoist-jsx)
const Logo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes.logo}
  >
    <path
      d="M8 4C8 2.89543 8.89543 2 10 2H22C23.1046 2 24 2.89543 24 4V28C24 29.1046 23.1046 30 22 30H10C8.89543 30 8 29.1046 8 28V4Z"
      fill="#E03131"
    />
    <path
      d="M12 8H20M12 12H18M12 16H20M12 20H16"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Memoized footer component (rerender-memo)
const Footer = () => (
  <footer className={classes.footer}>
    <Group gap="md" justify="center" className={classes.footerLinks}>
      <Text
        size="sm"
        c="dimmed"
        component="a"
        href="#"
        className={classes.footerLink}
      >
        Support
      </Text>
      <Text
        size="sm"
        c="dimmed"
        component="a"
        href="#"
        className={classes.footerLink}
      >
        Privacy Policy
      </Text>
      <Text
        size="sm"
        c="dimmed"
        component="a"
        href="#"
        className={classes.footerLink}
      >
        Security
      </Text>
      <Text
        size="sm"
        c="dimmed"
        component="a"
        href="#"
        className={classes.footerLink}
      >
        Terms of Use
      </Text>
    </Group>
    <Text size="xs" c="dimmed" ta="center" mt="xs">
      © 2026, pdf.net. All rights reserved.
    </Text>
  </footer>
);

export default function LoginPage() {
  const [signInWithGoogle, { isLoading }] = useSignInWithGoogleMutation();
  const [error, setError] = useState<string | null>(null);

  // Memoized callback (rerender-functional-setstate)
  const handleGoogleSignIn = useCallback(async () => {
    try {
      setError(null);
      await signInWithGoogle();
      // Redirect after successful login
      window.location.href = '/';
    } catch {
      setError('Failed to sign in with Google. Please try again.');
    }
  }, [signInWithGoogle]);

  return (
    <div className={classes.wrapper}>
      <Container size="sm" className={classes.container}>
        {/* Logo */}
        <Group justify="center" mb="xl">
          <Group gap="xs" align="center">
            <Logo />
            <Text size="xl" fw={700} className={classes.brand}>
              pdf.net
            </Text>
          </Group>
        </Group>

        {/* Login Card */}
        <Paper className={classes.card} p="xl" radius="md" withBorder>
          <Title order={2} ta="center" mb="xl" className={classes.title}>
            Log in to your pdf.net account
          </Title>

          {/* Error Message */}
          {error && (
            <Text c="red" size="sm" ta="center" mb="md">
              {error}
            </Text>
          )}

          <Stack gap="md">
            {/* Google Auth Button */}
            <Button
              fullWidth
              size="md"
              variant="default"
              leftSection={<IconBrandGoogle size={20} color="#4285F4" />}
              onClick={handleGoogleSignIn}
              loading={isLoading}
              className={classes.socialButton}
            >
              Log in with Google
            </Button>

            <Divider
              label="Or log in with email"
              labelPosition="center"
              my="xs"
            />

            {/* Email Login Form - Placeholder */}
            <Button
              fullWidth
              size="md"
              color="red"
              rightSection={<IconArrowRight size={16} />}
              className={classes.loginButton}
              disabled
            >
              Continue with Email
            </Button>
          </Stack>

          {/* Sign Up Link */}
          <Text ta="center" mt="xl" size="sm">
            Don&apos;t have an account yet?{' '}
            <Text
              component="a"
              href="#"
              c="red"
              td="underline"
              className={classes.link}
            >
              Sign Up
            </Text>
          </Text>
        </Paper>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
}
