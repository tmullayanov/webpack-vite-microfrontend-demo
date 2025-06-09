import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';

import Button from 'guest/Button';

const Btn1 = React.lazy(() => Promise.resolve({
  default: () => <div>Hello</div>
}));

export const ExtButton = () => {
  console.log('rendering btn...');
  console.log(Button);
  console.log(Btn1);

  return (
    <ErrorBoundary>
      <React.Suspense fallback="Loading...">
        <Button />
        <Btn1 />
      </React.Suspense>
    </ErrorBoundary>
  );
};
