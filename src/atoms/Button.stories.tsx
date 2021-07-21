import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, IButtonProps } from './Button';

const meta: Meta = {
  title: 'Atoms/Button',
  component: Button,
  args: {
    variant: 'subtle',
    size: 'md',
    isFullWidth: false,
    disabled: false,
  },
  argTypes: {
    children: {
      defaultValue: 'Call to action',
      control: 'text',
    },
    as: {
      control: 'none',
    },
    theme: {
      control: 'none',
    },
    onClick: {
      action: 'Clicked!',
    },
  },
};

export default meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Primary: Story<IButtonProps> = Template.bind({});

Primary.args = {
  variant: 'primary',
};

export const Subtle: Story<IButtonProps> = Template.bind({});

Subtle.args = {
  variant: 'subtle',
};

export const Disabled: Story<IButtonProps> = Template.bind({});

Disabled.args = {
  variant: 'primary',
  disabled: true,
};
