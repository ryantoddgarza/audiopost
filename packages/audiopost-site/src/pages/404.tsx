import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout, NotFound } from '../components';

const NotFoundPage: FunctionComponent = () => {
  const helmetData = {
    title: 'Page not found',
  };

  return (
    <Layout>
      <Helmet title={helmetData.title} />
      <NotFound />
    </Layout>
  );
};

export default NotFoundPage;
