'use client';

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Box,
  Stack,
  Group,
  Avatar,
} from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';
import classes from './TrustSection.module.css';

const testimonials = [
  {
    quote:
      'I used many online editors, but this is the first one that consistently maintained formatting when I converted PDF into DOC and PNG files.',
    name: 'Astrid Larsen',
    role: 'Financial graphic designer',
    avatar: 'AL',
    color: 'pink',
    stars: 5,
  },
  {
    quote:
      'This editor instantly became my go-to for PDFs because it makes editing incredibly smooth and efficient.',
    name: 'Raj Amilton',
    role: 'Business consultant',
    avatar: 'RA',
    color: 'blue',
    stars: 5,
  },
  {
    quote:
      'I had a long PDF file that I needed to split into smaller documents. This is the only tool that did it perfectly.',
    name: 'Bryant Pod',
    role: 'Author',
    avatar: 'BP',
    color: 'green',
    stars: 5,
  },
  {
    quote:
      'I had half an hour to edit and sign over 50 PDFs before sending it for review. This tool saved my day!',
    name: 'Marta Hernandez',
    role: 'Paralegal',
    avatar: 'MH',
    color: 'grape',
    stars: 5,
  },
];

export function TrustSection() {
  return (
    <section className={classes.section}>
      <Container size="xl">
        <Title order={2} className={classes.sectionTitle}>
          People all over the world trust
          <br className={classes.titleBreak} /> pdf.net to edit their docs
        </Title>

        <SimpleGrid
          cols={{ base: 1, xs: 2, md: 4 }}
          spacing={{ base: 16, md: 24 }}
        >
          {testimonials.map((t) => (
            <Box key={t.name} className={classes.card}>
              <Group gap={2} mb="sm">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <IconStarFilled
                    key={i}
                    size={14}
                    style={{ color: '#fab005' }}
                  />
                ))}
              </Group>
              <Text size="sm" c="dimmed" lh={1.7} className={classes.quote}>
                {t.quote}
              </Text>
              <Group gap="sm" mt="md">
                <Avatar size={36} radius="xl" color={t.color}>
                  {t.avatar}
                </Avatar>
                <div>
                  <Text size="sm" fw={600} className={classes.name}>
                    {t.name}
                  </Text>
                  <Text size="xs" c="dimmed">
                    {t.role}
                  </Text>
                </div>
              </Group>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
