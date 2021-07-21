import React from 'react';
import { Meta, Story } from '@storybook/react';

import { CSSReset } from './CSSReset';

const meta: Meta = {
  title: 'Templates/CSSReset',
  component: CSSReset,
};

export default meta;

const Template: Story = (args) => <CSSReset {...args} />;

export const Default: Story = Template.bind({});
