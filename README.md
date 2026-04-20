# @on.auto/ui-components

Shared React component library built on [shadcn/ui](https://ui.shadcn.com/) primitives and [Radix UI](https://www.radix-ui.com/), used across the on.auto platform.

The package also exports a `json-render` component catalog so specs produced by the platform's generation pipeline can be rendered by these components at runtime.

## Install

```sh
pnpm add @on.auto/ui-components
# or
npm install @on.auto/ui-components
```

Peer dependencies: `react >= 19` and `react-dom >= 19`.

## Entry points

| Import path                             | What it is                                                 |
| --------------------------------------- | ---------------------------------------------------------- |
| `@on.auto/ui-components`                | Server-safe catalog tools (no JSX). Used by pipelines.     |
| `@on.auto/ui-components/components`     | The `components` map consumed by `@json-render/react`.     |
| `@on.auto/ui-components/catalog`        | The static component catalog (prop schemas, etc).          |
| `@on.auto/ui-components/catalog-tools`  | Helpers for listing and inspecting the catalog.            |

### Server-safe usage

```ts
import { getComponentList, getComponentDetails } from '@on.auto/ui-components';
```

### Rendering with json-render

```tsx
import { components } from '@on.auto/ui-components/components';
import { catalog } from '@on.auto/ui-components/catalog';
```

## License

MIT © on.auto
