import { withRouter } from 'storybook-addon-react-router-v6';
import React from 'react';

import Btn from './Btn';

export default {
    title: 'Btn',
    component: Btn,
    decorators: [withRouter],
}

export const Default = () => <Btn></Btn>