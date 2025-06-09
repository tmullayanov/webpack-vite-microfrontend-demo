import { createRemoteComponent } from "@module-federation/bridge-react";
import { loadRemote } from "@module-federation/enhanced/runtime";


// define FallbackErrorComp Component
const FallbackErrorComp = (info: any) => {
    return (
      <div>
        <h2>This is ErrorBoundary Component</h2>
        <p>Something went wrong:</p>
        <pre style={{ color: 'red' }}>{info?.error.message}</pre>
        <button onClick={() => info.resetErrorBoundary()}>
          resetErrorBoundary(try again)
        </button>
      </div>
    );
};

const FallbackComp = <div data-test-id="loading">loading...</div>;

// use createRemoteComponent to export remote component
export const BridgeBtn = createRemoteComponent({
  // loader is for loading remote module, for example: loadRemote('remote1/export-app')、import('remote1/export-app')
  loader: () => import('guest/export-app'),
  // fallback is for error handling
  fallback: FallbackErrorComp,
  // loading is for loading state
  loading: FallbackComp,
});