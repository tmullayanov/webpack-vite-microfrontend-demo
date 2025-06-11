# Module Federation: Webpack/Rspack host integrates Vite module, both have different React versions

This is a case study of integrating frontend applications with different bundlers and library versions using Module Federation technology.

The host application is bundled via Webpack (here we use Rspack due to their high compatibility and Rspack is somewhat easier to set up promptly). 
It also uses React v17.

The guest application is bundled via Vite and uses React v18.


## Basic setup

Module Federation fails in this setup out-of-the-box.
Webpack/rspack bundles the app in cjs format.
Vite in MF setup uses imports and refuses to transpile them into require's.

Moreover, there're caveats in Vite's MF implementation.

So, the easiest way is to have Webpack host to emit ESModules.


## Different React versions

Since v17 React heavily relies on it's global (or quasi-global) variables. Hence, React must be loaded exactly once.
If there's a component inside the component tree that refers to other instance of React, it cannot use hooks.

Usually it is signified by the errors with text similar to "Invlaid hook call" or "React.currentDispatcher is null".

The problem is mitigated by declaring React as a shared singleton module.
But it doesn't work when one of the modules relies on fundamentally incompatible React versions.

Currently the best approach is to utilize ModuleFederation Bridge (https://module-federation.io/practice/bridge/index.html) for React (https://module-federation.io/practice/bridge/react-bridge.html), both in HOST and GUEST modules.

This repository shows how this approach might be implemented.