# Schedule-X extension builder

You can use this project for developing views and plugins for Schedule-X.

## Adding a view: step by step

### 1. Use /packages/view-starter as a template for your new view.

The two files `/packages/view-starter/index.ts` and `/packages/view-starter/styles/index.scss`, are entry points for
your view. The former will be compiled into 3 different types of JS-files (CJS, ESM & UMD), and the latter
will be compiled into a CSS-file.

Whenever you change the name of the view, make sure to update the path to your SCSS entrypoint, in `scripts/build.mjs`

### 2. Build your view

Use the `packages/view-starter/src/components/view-wrapper.tsx` component as a starting point for building your view.

Your components are built using Preact: https://preactjs.com/

### 3. Compile

`npm run build`

This should output a dist folder inside your package. The `package.json` of your view is already
pointing to all your compiled files with the properties `module`, `main`, `umd`, `exports` and `types`.

### 4. Ship

There are a few different ways to utilize your newly built view:

1. [Publish to npm](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages): **Effort: M**
2. [Publish to a private npm registry e.g. Verdaccio](https://verdaccio.org/) **Effort: XL**
3. Target the view as a local folder **Effort: S**

If you choose the last option, keeping this entire project as a subfolder in an existing projext, you should be able to
import your view like this:

```ts
import { createView } from '{your_path_to_this_repo}/extension-builder/packages/view-starter';
import '{your_path_to_this_repo}/extension-builder/packages/view-starter/index.css'
```
