# Module Federation: Rspack Host + Vite Guest with Different React Versions

This demo project showcases how to connect micro-frontends across different bundlers and React versions using **Module Federation**.

- **Host**: Rspack (Webpack-compatible), React 17
- **Guest**: Vite, React 18

It demonstrates how to integrate isolated builds and resolve compatibility issues using [Module Federation Bridge](https://module-federation.io/practice/bridge/react-bridge.html).

---

## ⚙️ Usage

### 🧩 Host (`rspack-host`)

```bash
cd rspack-host
npm install
npm run dev
```

> **Note:** Rspack is used for its speed and compatibility with Webpack’s Module Federation.
> However, **HMR (Hot Module Replacement) does not work** with chunked configurations in Rspack as of now.
> Expect occasional crashes during live development.

---

### 🔗 Guest (`vite-guest`)

```bash
cd vite-guest
npm install
npm run build
npm run preview
```

> **Why not `npm run dev`?**  
> Vite’s development server does not expose the `remoteEntry.js` correctly for consumption via Module Federation.
> The best workaround is to use the production build (`build`) and serve it with `vite preview`.

---

## 📓 Notes

### 🧠 Overview

This project explores cross-bundler micro-frontend architecture using **Module Federation**:

- **Host**: Rspack + React 17
- **Guest**: Vite + React 18
- **Challenge**: React versions mismatch and incompatible module formats

---

### ⚠️ Common Pitfalls

#### 1. Module Format Mismatch

- Rspack (Webpack-compatible) emits modules in **CommonJS** or **UMD** by default.
- Vite emits **native ESModules**, and **does not transpile `import` statements** in the guest’s remote code.
- This leads to runtime errors unless you explicitly configure the host to **emit as ESModules**.

#### 2. React Version Conflicts

React relies on internal shared state (like `React.currentDispatcher`) to manage hooks. If two versions of React are loaded:

- Hooks might break in runtime.
- You'll likely see errors like:

  ```
  Invalid hook call. Hooks can only be called inside of the body of a function component.
  ```

  or

  ```
  React.currentDispatcher is null
  ```

##### 🛠 Solution

- You **must share React as a singleton** in both host and guest via `shared: { react: { singleton: true } }`.
- But if the versions of React are **incompatible** (e.g. 17 vs 18), this will still fail.

➡️ Use **[Module Federation Bridge](https://module-federation.io/practice/bridge/react-bridge.html)** for React.

It provides a compatibility layer between different React versions by abstracting React’s runtime so multiple versions can coexist.

---

## ✅ Summary

This repo serves as a case study for:

- Using **Rspack as a Webpack alternative** for hosts.
- Integrating a **Vite-built guest** into a federated setup.
- Handling **React version mismatches** safely with Module Federation Bridge.

> 🔗 For more information, see the [Module Federation documentation](https://module-federation.io/).

---

## 📁 Folder Structure

```
.
├── rspack-host/     # Host app (Rspack, React 17)
└── vite-guest/      # Guest app (Vite, React 18)
```

---

Feel free to fork, clone, or adapt this setup to your needs.
