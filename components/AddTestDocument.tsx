'use client';

import { useState } from 'react';
import { TextInput, Textarea, Button, Stack, Title } from '@mantine/core';
import { useAddTestDocumentMutation } from '@/store/api/firebaseApi';
import styles from './AddTestDocument.module.css';

export function AddTestDocument() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [addDocument, { isLoading }] = useAddTestDocumentMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    try {
      await addDocument({ title, content });
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Title order={3} mb="md">
        Add New Document
      </Title>
      <Stack gap="md">
        <TextInput
          label="Title"
          placeholder="Enter document title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
          label="Content"
          placeholder="Enter document content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          minRows={3}
        />
        <Button type="submit" loading={isLoading} color="green">
          Add Document
        </Button>
      </Stack>
    </form>
  );
}
