import { catalog } from './catalog';
import type { z } from 'zod';

const categoryMap: Record<string, string> = {
  Card: 'Layout',
  Stack: 'Layout',
  Grid: 'Layout',
  Separator: 'Layout',
  Sidebar: 'Layout',
  Tabs: 'Navigation',
  Accordion: 'Navigation',
  Collapsible: 'Navigation',
  Pagination: 'Navigation',
  Breadcrumb: 'Navigation',
  Stepper: 'Navigation',
  Dialog: 'Overlay',
  Drawer: 'Overlay',
  Sheet: 'Overlay',
  AlertDialog: 'Overlay',
  HoverCard: 'Overlay',
  Tooltip: 'Overlay',
  Popover: 'Overlay',
  DropdownMenu: 'Overlay',
  Command: 'Overlay',
  Heading: 'Content',
  Text: 'Content',
  Image: 'Content',
  Icon: 'Content',
  Avatar: 'Content',
  Badge: 'Content',
  Alert: 'Content',
  Callout: 'Content',
  Carousel: 'Content',
  Table: 'Content',
  DataTable: 'Content',
  Timeline: 'Content',
  EmptyState: 'Content',
  Progress: 'Feedback',
  Skeleton: 'Feedback',
  Spinner: 'Feedback',
  Sonner: 'Feedback',
  Toast: 'Feedback',
  Chart: 'Data',
  KPICard: 'Data',
  Sparkline: 'Data',
  Calendar: 'Data',
  DatePicker: 'Data',
  DateRangePicker: 'Data',
  Button: 'Input',
  Link: 'Input',
  Input: 'Input',
  Textarea: 'Input',
  Select: 'Input',
  Combobox: 'Input',
  MultiSelect: 'Input',
  Checkbox: 'Input',
  Radio: 'Input',
  Switch: 'Input',
  Slider: 'Input',
  Toggle: 'Input',
  ToggleGroup: 'Input',
  ButtonGroup: 'Input',
  SegmentedControl: 'Input',
  Field: 'Input',
};

export interface PropInfo {
  type: string;
  required: boolean;
  values?: string[];
  description?: string;
}

interface ZodV4Def {
  type: string;
  innerType?: unknown;
  entries?: Record<string, unknown>;
}

function readDef(schema: unknown): ZodV4Def {
  return (schema as { _zod: { def: ZodV4Def } })._zod.def;
}

function extractZodType(schema: z.ZodTypeAny): PropInfo {
  const def = readDef(schema);

  if (def.type === 'nullable' || def.type === 'optional') {
    const inner = extractZodType(def.innerType as z.ZodTypeAny);
    return { ...inner, required: false };
  }

  if (def.type === 'enum') {
    const values = Object.values(def.entries ?? {}).filter(
      (v): v is string => typeof v === 'string',
    );
    return { type: 'enum', required: true, values };
  }

  if (def.type === 'string') return { type: 'string', required: true };
  if (def.type === 'number') return { type: 'number', required: true };
  if (def.type === 'boolean') return { type: 'boolean', required: true };
  if (def.type === 'array') return { type: 'array', required: true };
  if (def.type === 'object') return { type: 'object', required: true };
  if (def.type === 'any') return { type: 'any', required: false };

  return { type: 'unknown', required: true };
}

function extractProps(propsSchema: z.ZodObject<z.ZodRawShape>): Record<string, PropInfo> {
  const result: Record<string, PropInfo> = {};
  const shape = propsSchema.shape;
  for (const [key, value] of Object.entries(shape)) {
    result[key] = extractZodType(value as z.ZodTypeAny);
  }
  return result;
}

export interface ComponentListItem {
  name: string;
  category: string;
  description: string;
  hasChildren: boolean;
  hasEvents: boolean;
}

export function getComponentList(): ComponentListItem[] {
  return Object.entries(catalog).map(([name, def]) => ({
    name,
    category: categoryMap[name] ?? 'Other',
    description: (def as { description?: string }).description ?? '',
    hasChildren: !!(def as { slots?: string[] }).slots?.length,
    hasEvents: !!(def as { events?: string[] }).events?.length,
  }));
}

export interface ComponentDetails {
  name: string;
  category: string;
  description: string;
  props: Record<string, PropInfo>;
  children: boolean;
  events: string[];
}

export function getComponentDetails(name: string): ComponentDetails | null {
  const def = (catalog as Record<string, unknown>)[name] as
    | {
        props: z.ZodObject<z.ZodRawShape>;
        description?: string;
        slots?: string[];
        events?: string[];
      }
    | undefined;

  if (!def) return null;

  return {
    name,
    category: categoryMap[name] ?? 'Other',
    description: def.description ?? '',
    props: extractProps(def.props),
    children: !!def.slots?.length,
    events: def.events ?? [],
  };
}

export function getSubmitSpecJsonSchema() {
  return {
    type: 'object' as const,
    properties: {
      root: {
        $ref: '#/$defs/element',
        description: 'The root element of the component tree',
      },
      state: {
        type: 'object' as const,
        additionalProperties: true,
        description: 'Optional reactive state object',
      },
    },
    required: ['root'] as const,
    $defs: {
      element: {
        type: 'object' as const,
        properties: {
          type: { type: 'string' as const, description: 'Component name from the catalog (e.g. Stack, Card, Button)' },
          props: {
            type: 'object' as const,
            additionalProperties: true,
            description: 'Component props including className for Tailwind styling',
          },
          children: {
            type: 'array' as const,
            items: { $ref: '#/$defs/element' },
            description: 'Child elements nested inline',
          },
          visible: { description: 'Visibility condition using { "$state": "/path" }' },
          repeat: {
            type: 'object' as const,
            properties: {
              statePath: { type: 'string' as const },
              key: { type: 'string' as const },
            },
            required: ['statePath'] as const,
            description: 'Repeat this element for each item at statePath',
          },
        },
        required: ['type'] as const,
      },
    },
  };
}
