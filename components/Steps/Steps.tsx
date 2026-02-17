'use client';

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Box,
  Stack,
  ThemeIcon,
} from '@mantine/core';
import { IconUpload, IconEdit, IconDownload } from '@tabler/icons-react';
import classes from './Steps.module.css';

const steps = [
  {
    number: '1',
    icon: IconUpload,
    title: 'Upload your PDF file',
    description:
      'Drag and drop or click to upload your PDF file to get started.',
    color: '#E03131',
  },
  {
    number: '2',
    icon: IconEdit,
    title: 'Edit, customize, sign, merge, and more',
    description:
      'Use our powerful tools to edit your PDF exactly how you need it.',
    color: '#1971c2',
  },
  {
    number: '3',
    icon: IconDownload,
    title: 'Download the updated file',
    description:
      'Save your edited PDF and download it instantly to your device.',
    color: '#2f9e44',
  },
];

export function Steps() {
  return (
    <section className={classes.section}>
      <Container size="xl">
        <Title order={2} className={classes.sectionTitle}>
          Simple steps to get started
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={{ base: 24, md: 40 }}>
          {steps.map((step) => (
            <Stack
              key={step.number}
              align="center"
              gap="md"
              className={classes.stepCard}
            >
              <div className={classes.stepNumber}>
                <Text className={classes.number}>{step.number}</Text>
              </div>
              <ThemeIcon
                size={64}
                radius="xl"
                variant="light"
                style={{
                  backgroundColor: `${step.color}10`,
                  color: step.color,
                }}
              >
                <step.icon size={28} stroke={1.5} />
              </ThemeIcon>
              <Text
                fw={600}
                size="md"
                ta="center"
                className={classes.stepTitle}
              >
                {step.title}
              </Text>
              <Text size="sm" c="dimmed" ta="center" maw={280} lh={1.6}>
                {step.description}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
