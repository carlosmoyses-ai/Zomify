import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};

Loading.Spinner = function LoadingSpinner({ ...restProps }) {
  return <Spinner {...restProps} />;
};

Loading.Picture = function LoadingPicture({ src, ...restProps }) {
  return <Picture src={src} {...restProps} />;
};