'use client';

import { ReactNode } from 'react';
import { Container, Title, Text, Stack } from '@mantine/core';
import { useGetCurrentUserQuery } from '@/store/api/firebaseApi';
import { LoginButton } from './LoginButton';

interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { data: user, isLoading } = useGetCurrentUserQuery();

  if (isLoading) {
    return (
      <Container size="sm" py="xl">
        <Text ta="center">Loading...</Text>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container size="sm" py="xl">
        <Stack align="center" gap="md">
          <Title order={2}>Welcome</Title>
          <Text c="dimmed" ta="center">
            Please sign in to access the content
          </Text>
          <LoginButton />
        </Stack>
      </Container>
    );
  }

  return <>{children}</>;
}
