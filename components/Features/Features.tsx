'use client';

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Box,
  ThemeIcon,
} from '@mantine/core';
import {
  IconArrowMerge,
  IconFileTypePdf,
  IconSignature,
  IconTextPlus,
  IconFileExport,
  IconPhoto,
  IconPhotoScan,
  IconPhotoPlus,
  IconCut,
  IconEdit,
  IconArrowsShuffle,
  IconHighlight,
  IconListNumbers,
  IconRotate,
  IconLock,
  IconLockOpen,
  IconArrowRight,
} from '@tabler/icons-react';
import classes from './Features.module.css';

const features = [
  {
    icon: IconArrowMerge,
    title: 'Merge Files',
    description:
      'Combine multiple PDFs into one. Reorder files before merging.',
    color: '#E03131',
  },
  {
    icon: IconFileExport,
    title: 'Convert PDF to Word',
    description:
      'Convert PDF to editable DOC/DOCX files. Preserves formatting.',
    color: '#1971c2',
  },
  {
    icon: IconSignature,
    title: 'Sign Document',
    description: 'Type, draw, or upload signature. Legally binding.',
    color: '#2f9e44',
  },
  {
    icon: IconTextPlus,
    title: 'Add Text',
    description: 'Customize font, size & color. Insert text anywhere.',
    color: '#e8590c',
  },
  {
    icon: IconFileTypePdf,
    title: 'Convert to PDF',
    description:
      'Convert Word, Excel, PPT to PDF. Multiple formats to single PDF.',
    color: '#9c36b5',
  },
  {
    icon: IconPhoto,
    title: 'Convert Image to PDF',
    description: 'Convert images to PDF pages. Supports JPG/PNG images.',
    color: '#0c8599',
  },
  {
    icon: IconPhotoScan,
    title: 'Convert PDF to Image',
    description: 'Convert PDF pages to JPG/PNG images.',
    color: '#d6336c',
  },
  {
    icon: IconPhotoPlus,
    title: 'Add Image',
    description: 'Add images, photos & graphics to PDF files.',
    color: '#5c940d',
  },
  {
    icon: IconCut,
    title: 'Split File',
    description: 'Split PDF into multiple files. Extract pages.',
    color: '#e67700',
  },
  {
    icon: IconEdit,
    title: 'Convert PDF to Edit',
    description:
      'Turn PDF into editable documents to use in Excel or Google Sheets.',
    color: '#1098ad',
  },
  {
    icon: IconArrowsShuffle,
    title: 'Rearrange Pages',
    description: 'Drag & drop to rearrange. Delete, reorder pages.',
    color: '#7048e8',
  },
  {
    icon: IconHighlight,
    title: 'Annotate',
    description: 'Mark up text, draw, highlight & make comments.',
    color: '#f06595',
  },
  {
    icon: IconListNumbers,
    title: 'Add Page Numbers',
    description: 'Automatic page numbers. Custom position, format.',
    color: '#495057',
  },
  {
    icon: IconRotate,
    title: 'Rotate Pages',
    description: 'Rotate PDF pages. Oriented correctly, in all directions.',
    color: '#20c997',
  },
  {
    icon: IconLock,
    title: 'Protect PDF',
    description:
      'Secure PDF files. Set password and encryption for protection.',
    color: '#364fc7',
  },
  {
    icon: IconLockOpen,
    title: 'Unlock PDF',
    description: 'Remove passwords and restrictions in just a few clicks.',
    color: '#862e9c',
  },
];

export function Features() {
  return (
    <section className={classes.section}>
      <Container size="xl">
        <Title order={2} className={classes.sectionTitle}>
          Start editing your PDF
        </Title>

        <SimpleGrid
          cols={{ base: 1, xs: 2, sm: 3, md: 4 }}
          spacing={{ base: 16, md: 24 }}
          className={classes.grid}
        >
          {features.map((feature) => (
            <Box key={feature.title} className={classes.card}>
              <ThemeIcon
                size={48}
                radius="md"
                variant="light"
                style={{
                  backgroundColor: `${feature.color}12`,
                  color: feature.color,
                }}
                className={classes.cardIcon}
              >
                <feature.icon size={24} stroke={1.5} />
              </ThemeIcon>
              <Text fw={600} size="sm" mt="sm" className={classes.cardTitle}>
                {feature.title}{' '}
                <IconArrowRight
                  size={14}
                  style={{
                    display: 'inline',
                    verticalAlign: 'middle',
                    opacity: 0.5,
                  }}
                />
              </Text>
              <Text
                size="xs"
                c="dimmed"
                mt={4}
                lh={1.5}
                className={classes.cardDesc}
              >
                {feature.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
