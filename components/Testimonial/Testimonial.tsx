'use client';

import { Container, Text, Avatar, Group, Stack, Box } from '@mantine/core';
import classes from './Testimonial.module.css';

export function Testimonial() {
  return (
    <section className={classes.section}>
      <Container size="sm">
        <Stack align="center" gap="md">
          <Text className={classes.quote}>
            I managed to change text, fix, reorganize pages, and convert PDF to
            Word and to PDF, all with a single tool. Just amazing.
          </Text>
          <Group gap="sm" mt="xs">
            <Avatar size={40} radius="xl" color="indigo">
              JA
            </Avatar>
            <div>
              <Text size="sm" fw={600} className={classes.name}>
                Jordan Anakins
              </Text>
              <Text size="xs" c="dimmed">
                Writer
              </Text>
            </div>
          </Group>
        </Stack>
      </Container>
    </section>
  );
}
