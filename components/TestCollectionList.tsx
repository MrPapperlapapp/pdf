'use client';

import { Card, Text, Loader, Stack, Group, Badge } from '@mantine/core';
import { useGetTestCollectionQuery } from '@/store/api/firebaseApi';
import styles from './TestCollectionList.module.css';

export function TestCollectionList() {
  const { data: documents, isLoading, error } = useGetTestCollectionQuery();

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <Text color="red" className={styles.error}>
        Error loading documents
      </Text>
    );
  }

  if (!documents || documents.length === 0) {
    return (
      <Text color="dimmed" className={styles.empty}>
        No documents yet. Add one below!
      </Text>
    );
  }

  return (
    <Stack gap="md" className={styles.list}>
      {documents.map((doc) => (
        <Card key={doc.id} shadow="sm" padding="lg" radius="md" withBorder>
          <Group justify="space-between" mb="xs">
            <Text fw={500} size="lg">
              {doc.title}
            </Text>
            <Badge color="blue" variant="light">
              {doc.createdAt?.toDate().toLocaleDateString() || 'No date'}
            </Badge>
          </Group>
          <Text size="sm" c="dimmed">
            {doc.content}
          </Text>
        </Card>
      ))}
    </Stack>
  );
}
