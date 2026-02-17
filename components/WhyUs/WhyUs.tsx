'use client';

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Box,
  Stack,
  Group,
  ThemeIcon,
} from '@mantine/core';
import {
  IconDeviceLaptop,
  IconTools,
  IconFileCheck,
} from '@tabler/icons-react';
import classes from './WhyUs.module.css';

const reasons = [
  {
    icon: IconDeviceLaptop,
    title: 'Simple and easy for daily use',
    description:
      "Our online PDF editor features a clean, intuitive, and user-friendly interface designed for amateurs and professionals alike. You can navigate it with ease and edit your PDF file, even if you've never done it before.",
    color: '#E03131',
  },
  {
    icon: IconTools,
    title: 'All-in-one PDF editor',
    description:
      'Our online editor offers a comprehensive set of features that allow you to customize your documents, merge files, sign them, and much more. No need to transfer your files between several applications anymore.',
    color: '#1971c2',
  },
  {
    icon: IconFileCheck,
    title: 'Keeping formatting without issues',
    description:
      "No more worrying about your document losing its formatting across multiple systems or devices. Our PDF editor is cross-platform compatible and maintains uniformity whether you're using a PC, MacOS, smartphone, or tablet.",
    color: '#2f9e44',
  },
];

export function WhyUs() {
  return (
    <section className={classes.section}>
      <Container size="xl">
        <Title order={2} className={classes.sectionTitle}>
          Why people prefer pdf.net
        </Title>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={{ base: 24, md: 32 }}>
          {reasons.map((reason) => (
            <Box key={reason.title} className={classes.card}>
              <ThemeIcon
                size={52}
                radius="md"
                variant="light"
                style={{
                  backgroundColor: `${reason.color}10`,
                  color: reason.color,
                }}
              >
                <reason.icon size={26} stroke={1.5} />
              </ThemeIcon>
              <Text fw={700} size="lg" mt="md" className={classes.cardTitle}>
                {reason.title}
              </Text>
              <Text size="sm" c="dimmed" mt="sm" lh={1.7}>
                {reason.description}
              </Text>

              <div className={classes.preview}>
                <div className={classes.previewBar}>
                  <Group gap={4}>
                    <div
                      className={classes.dot}
                      style={{ background: '#ff5f57' }}
                    />
                    <div
                      className={classes.dot}
                      style={{ background: '#febc2e' }}
                    />
                    <div
                      className={classes.dot}
                      style={{ background: '#28c840' }}
                    />
                  </Group>
                </div>
                <div className={classes.previewContent}>
                  <div
                    className={classes.previewLine}
                    style={{ width: '70%' }}
                  />
                  <div
                    className={classes.previewLine}
                    style={{ width: '90%' }}
                  />
                  <div
                    className={classes.previewLine}
                    style={{ width: '50%' }}
                  />
                  <div
                    className={classes.previewLine}
                    style={{ width: '80%' }}
                  />
                </div>
              </div>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
