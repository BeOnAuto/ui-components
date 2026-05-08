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

interface ZodInternalDef {
  type?: string;
  innerType?: unknown;
  entries?: Record<string, unknown> | unknown[];
}

function readZodDef(schema: unknown): ZodInternalDef | null {
  const v4 = (schema as { _zod?: { def?: ZodInternalDef } })?._zod?.def;
  if (v4) return v4;
  const v3 = (schema as { _def?: { typeName?: string; innerType?: unknown; values?: unknown[] } })?._def;
  if (v3) {
    const map: Record<string, string> = {
      ZodNullable: 'nullable',
      ZodOptional: 'optional',
      ZodEnum: 'enum',
      ZodString: 'string',
      ZodNumber: 'number',
      ZodBoolean: 'boolean',
      ZodArray: 'array',
      ZodObject: 'object',
      ZodAny: 'any',
    };
    return {
      type: map[v3.typeName ?? ''] ?? 'unknown',
      innerType: v3.innerType,
      entries: v3.values,
    };
  }
  return null;
}

function enumValues(entries: ZodInternalDef['entries']): string[] {
  if (!entries) return [];
  if (Array.isArray(entries)) return entries.filter((v): v is string => typeof v === 'string');
  return Object.values(entries).filter((v): v is string => typeof v === 'string');
}

function extractZodType(schema: z.ZodTypeAny): PropInfo {
  const def = readZodDef(schema);
  if (!def) return { type: 'unknown', required: true };
  const type = def.type ?? 'unknown';

  if (type === 'nullable' || type === 'optional') {
    const inner = extractZodType(def.innerType as z.ZodTypeAny);
    return { ...inner, required: false };
  }

  if (type === 'enum') {
    return { type: 'enum', required: true, values: enumValues(def.entries) };
  }

  if (type === 'string') return { type: 'string', required: true };
  if (type === 'number') return { type: 'number', required: true };
  if (type === 'boolean') return { type: 'boolean', required: true };
  if (type === 'array') return { type: 'array', required: true };
  if (type === 'object') return { type: 'object', required: true };
  if (type === 'any') return { type: 'any', required: false };

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
