'use client';

import {
  Container,
  Title,
  Accordion,
  Text,
  Button,
  Group,
  Box,
} from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './FAQ.module.css';

const faqItems = [
  {
    question: 'Are my files safe?',
    answer:
      'Yes, your security and privacy is our highest priority. All files are encrypted during transfer and automatically deleted from our servers after processing. We never share your files with third parties.',
  },
  {
    question: 'Can I access pdf.net on my phone?',
    answer:
      'Yes, you can access and edit on your phone, as it is fully compatible with mobile devices and tablets, whether you are using Android or iOS. Our advanced features come with a custom interface specifically designed for smartphones, ensuring your workflow runs smoothly wherever you are.',
  },
  {
    question: 'What upload formats are supported?',
    answer:
      'We support PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, JPG, PNG, and many more popular file formats. You can convert between these formats seamlessly.',
  },
  {
    question: 'How do I convert my files?',
    answer:
      "To convert your files, simply upload the document, select the desired output format, wait for our servers to process it, and download a finished product. You'll get a high-quality file that maintains the layout and contents of the original as accurately as possible.",
  },
  {
    question: 'Do I need to create an account to use pdf.net?',
    answer:
      'No, you can use many of the essential features of pdf.net without creating an account. However, you can register for free to unlock additional features that will help you boost your productivity.',
  },
  {
    question: 'How do I print out my document?',
    answer:
      "You can print your document directly from our editor by clicking on the Print button. Alternatively, you can first download it, then print using your device's default printing application.",
  },
];

export function FAQ() {
  return (
    <section className={classes.section}>
      <Container size="md">
        <Title order={2} className={classes.sectionTitle}>
          Frequently asked questions
        </Title>

        <Text size="sm" c="dimmed" ta="center" mb="xl">
          {'Your data is Protected with enterprise-grade security '}
          <Text
            component="span"
            size="sm"
            fw={600}
            c="dark"
            style={{ cursor: 'pointer' }}
          >
            Press i Enter for Accessibility menu
          </Text>
        </Text>

        <Accordion
          variant="separated"
          radius="md"
          classNames={{
            item: classes.item,
            control: classes.control,
            label: classes.label,
            panel: classes.panel,
            chevron: classes.chevron,
          }}
        >
          {faqItems.map((item) => (
            <Accordion.Item key={item.question} value={item.question}>
              <Accordion.Control>{item.question}</Accordion.Control>
              <Accordion.Panel>
                <Text size="sm" c="dimmed" lh={1.7}>
                  {item.answer}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
