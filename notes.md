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



## Different React versions

