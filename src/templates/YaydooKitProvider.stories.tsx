import React from 'react';
import { Meta, Story } from '@storybook/react';

import { YaydooKitProvider } from './YaydooKitProvider';
import { yaydooTheme } from '../themes';

const meta: Meta = {
  title: 'Templates/YaydooKitProvider',
  component: YaydooKitProvider,
};

export default meta;

const Template: Story = (args) => (
  <YaydooKitProvider {...args}>
    <pre>{JSON.stringify(yaydooTheme, null, 2)}</pre>
  </YaydooKitProvider>
);

export const Default: Story = Template.bind({});
