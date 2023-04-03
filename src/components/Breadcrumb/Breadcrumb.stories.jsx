import { withRouter } from 'storybook-addon-react-router-v6';
import Breadcrumb from './Breadcrumb';
import React from 'react';

export default {
   title: 'Breadcrumb',
   component: Breadcrumb,
   decorators: [withRouter],
  
}

export const Default = () => <Breadcrumb></Breadcrumb>