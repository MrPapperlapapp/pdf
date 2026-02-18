'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';
import { Center, Loader } from '@mantine/core';

import classes from './Public.module.css';

export default function Public({ children }: PropsWithChildren) {
  const { user, isLoading } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      router.replace('/api');
    }
  }, [isLoading, user, router]);

  if (isLoading || user) {
    return (
      <Center className={classes.loader}>
        <Loader size="lg" />
      </Center>
    );
  }

  return user ? children : null;
}
