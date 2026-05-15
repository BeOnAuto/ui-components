import { useMemo, useState } from 'react';
import { JSONUIProvider, Renderer, defineRegistry, type Spec } from '@json-render/react';
import { nestedToFlat } from '@json-render/core';
import { catalog } from '../src/catalog';
import { components } from '../src/components';

const { registry } = defineRegistry(catalog as never, { components: components as never });

export type NestedNode = {
  type: string;
  props?: Record<string, unknown>;
  children?: NestedNode[];
  on?: Record<string, unknown>;
  state?: Record<string, unknown>;
};

export function toSpec(node: NestedNode): Spec {
  return nestedToFlat(node as unknown as Record<string, unknown>);
}

export interface JSONRenderProps {
  spec: Spec | NestedNode;
  initialState?: Record<string, unknown>;
}

function isFlatSpec(s: Spec | NestedNode): s is Spec {
  return 'root' in s && 'elements' in s;
}

export function JSONRender({ spec, initialState }: JSONRenderProps) {
  const flatSpec = useMemo(() => (isFlatSpec(spec) ? spec : toSpec(spec)), [spec]);
  const [state, setState] = useState<Record<string, unknown>>(() => initialState ?? flatSpec.state ?? {});

  return (
    <JSONUIProvider
      registry={registry}
      initialState={state}
      onStateChange={(changes) => {
        setState((prev) => {
          const next = { ...prev };
          for (const { path, value } of changes) next[path] = value;
          return next;
        });
      }}
    >
      <Renderer spec={flatSpec} registry={registry} />
    </JSONUIProvider>
  );
}
