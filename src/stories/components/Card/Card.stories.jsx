import React from 'react';

import Card from './Card';

export default {
  title: 'Basic/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

/*
 * Fit 6 large cards onto the grid
 */
export const small = Template.bind({});
small.args = {
  variant: 'sm',
};

/*
 * Fit 4 large cards onto the grid
 */
export const medium = Template.bind({});
medium.args = {
  variant: 'md',
};

/*
 * Fit 3 large cards onto the grid
 */
export const large = Template.bind({});
large.args = {
  variant: 'lg',
};

/*
 * Group card (containing 3 images in pyramid shape)
 */
export const group = Template.bind({});
group.args = {
  variant: 'group',
};
