'use client';

import { Container, Title, Text, Button, Stack, Group } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import classes from './CTA.module.css';

export function CTA() {
  return (
    <section className={classes.section}>
      <Container size="sm">
        <Stack align="center" gap="lg">
          <Title order={2} className={classes.title}>
            Ready to edit your PDFs?
          </Title>
          <Text size="md" c="dimmed" ta="center" maw={440} lh={1.6}>
            Join millions of users who trust pdf.net for their daily PDF editing
            needs. Get started for free today.
          </Text>
          <Group gap="md">
            <Button
              color="red"
              size="lg"
              radius="xl"
              leftSection={<IconUpload size={20} />}
              className={classes.ctaBtn}
            >
              Get started free
            </Button>
          </Group>
        </Stack>
      </Container>
    </section>
  );
}
