'use client';

import { Button } from '@mantine/core';
import {
  useSignInWithGoogleMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
} from '@/store/api/firebaseApi';
import styles from './LoginButton.module.css';

export function LoginButton() {
  const { data: user, isLoading } = useGetCurrentUserQuery();
  const [signInWithGoogle, { isLoading: isSigningIn }] =
    useSignInWithGoogleMutation();
  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();

  if (isLoading) {
    return <Button loading>Loading...</Button>;
  }

  if (user) {
    return (
      <div className={styles.container}>
        <span className={styles.userInfo}>
          {user.displayName || user.email}
        </span>
        <Button
          onClick={() => logout()}
          loading={isLoggingOut}
          color="red"
          variant="outline"
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={() => signInWithGoogle()}
      loading={isSigningIn}
      color="blue"
    >
      Sign in with Google
    </Button>
  );
}
