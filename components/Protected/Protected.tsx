'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';
import { Center, Loader } from '@mantine/core';

import classes from './Protected.module.css';

export default function Protected({ children }: PropsWithChildren) {
  const { user, isLoading } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/login');
    }
  }, [isLoading, user, router]);

  if (isLoading) {
    return (
      <Center className={classes.loader}>
        <Loader size="lg" />
      </Center>
    );
  }

  return user ? children : null;
}
