import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Text, ITextProps } from './Text';

const meta: Meta = {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    children: {
      defaultValue: 'Lorem ipsum dolor sit amet',
      control: 'text',
    },
    as: {
      control: 'none',
    },
    theme: {
      control: 'none',
    },
  },
};

export default meta;

const Template: Story<ITextProps> = (args) => <Text {...args} />;

export const Heading1: Story<ITextProps> = Template.bind({});

Heading1.args = {
  variant: 'h1',
};

export const Heading2: Story<ITextProps> = Template.bind({});

Heading2.args = {
  variant: 'h2',
};

export const Heading3: Story<ITextProps> = Template.bind({});

Heading3.args = {
  variant: 'h3',
};

export const Paragraph: Story<ITextProps> = Template.bind({});

Paragraph.args = {
  variant: 'p',
};

export const Small: Story<ITextProps> = Template.bind({});

Small.args = {
  variant: 'small',
};
