import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  Timestamp,
  serverTimestamp,
} from 'firebase/firestore';
import { auth, db, googleProvider } from '@/lib/firebase';

export interface TestDocument {
  id?: string;
  title: string;
  content: string;
  createdAt: Timestamp;
}

export const firebaseApi = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['TestCollection', 'Auth'],
  endpoints: (builder) => ({
    // Auth endpoints
    signInWithGoogle: builder.mutation<User, void>({
      async queryFn() {
        try {
          const result = await signInWithPopup(auth, googleProvider);
          return { data: result.user };
        } catch (error) {
          return { error: (error as Error).message };
        }
      },
    }),

    logout: builder.mutation<void, void>({
      async queryFn() {
        try {
          await signOut(auth);
          return { data: undefined };
        } catch (error) {
          return { error: (error as Error).message };
        }
      },
      invalidatesTags: ['Auth'],
    }),

    getCurrentUser: builder.query<User | null, void>({
      async queryFn() {
        return new Promise((resolve) => {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
            unsubscribe();
            resolve({ data: user });
          });
        });
      },
      providesTags: ['Auth'],
    }),

    // Firestore endpoints
    getTestCollection: builder.query<TestDocument[], void>({
      async queryFn() {
        try {
          const q = query(
            collection(db, 'test-collection'),
            orderBy('createdAt', 'desc'),
          );
          const querySnapshot = await getDocs(q);
          const documents: TestDocument[] = [];
          querySnapshot.forEach((doc) => {
            documents.push({ id: doc.id, ...doc.data() } as TestDocument);
          });
          return { data: documents };
        } catch (error) {
          return { error: (error as Error).message };
        }
      },
      providesTags: ['TestCollection'],
    }),

    addTestDocument: builder.mutation<
      void,
      Omit<TestDocument, 'id' | 'createdAt'>
    >({
      async queryFn(data) {
        try {
          await addDoc(collection(db, 'test-collection'), {
            ...data,
            createdAt: serverTimestamp(),
          });
          return { data: undefined };
        } catch (error) {
          return { error: (error as Error).message };
        }
      },
      invalidatesTags: ['TestCollection'],
    }),
  }),
});

export const {
  useSignInWithGoogleMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useGetTestCollectionQuery,
  useAddTestDocumentMutation,
} = firebaseApi;
