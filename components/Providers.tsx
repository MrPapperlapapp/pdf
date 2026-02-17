'use client';

import { ReactNode, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import {initAuthListener} from "@/store/listeners/auth.listener";

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    initAuthListener()
  }, [])
  return <Provider store={store}>{children}</Provider>;
}
