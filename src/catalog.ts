import { z } from 'zod';

const checkSchema = z.array(z.object({ type: z.string(), message: z.string(), args: z.any().optional() }));
const validateOnSchema = z.enum(['change', 'blur', 'submit']);

export const catalog = {
  // Layout
  Card: {
    props: z.object({
      title: z.string().nullable(),
      description: z.string().nullable(),
      maxWidth: z.enum(['sm', 'md', 'lg', 'full']).nullable(),
      centered: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'],
    description: 'Container card for content sections.',
  },
  Stack: {
    props: z.object({
      direction: z.enum(['horizontal', 'vertical']).nullable(),
      gap: z.enum(['none', 'sm', 'md', 'lg', 'xl']).nullable(),
      align: z.enum(['start', 'center', 'end', 'stretch']).nullable(),
      justify: z.enum(['start', 'center', 'end', 'between', 'around']).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'],
    description: 'Flex container for layouts',
  },
  Grid: {
    props: z.object({
      columns: z.number().nullable(),
      gap: z.enum(['sm', 'md', 'lg', 'xl']).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'],
    description: 'Grid layout (1-6 columns)',
  },
  Separator: {
    props: z.object({ orientation: z.enum(['horizontal', 'vertical']).nullable() }),
    description: 'Visual separator line',
  },

  // Navigation
  Tabs: {
    props: z.object({
      tabs: z.array(z.object({ label: z.string(), value: z.string() })),
      defaultValue: z.string().nullable(),
      value: z.string().nullable(),
    }),
    slots: ['default'],
    events: ['change'],
    description: 'Tabbed navigation — children map to tab panels',
  },
  Accordion: {
    props: z.object({
      items: z.array(z.object({ title: z.string(), content: z.string() })),
      type: z.enum(['single', 'multiple']).nullable(),
    }),
    description: 'Collapsible sections',
  },
  Collapsible: {
    props: z.object({ title: z.string(), defaultOpen: z.boolean().nullable() }),
    slots: ['default'],
    description: 'Single collapsible section',
  },
  Pagination: {
    props: z.object({ totalPages: z.number(), page: z.number().nullable() }),
    events: ['change'],
    description: 'Page navigation',
  },

  // Overlay
  Dialog: {
    props: z.object({ title: z.string(), description: z.string().nullable(), openPath: z.string().nullable() }),
    slots: ['default'],
    description: 'Modal dialog',
  },
  Drawer: {
    props: z.object({ title: z.string(), description: z.string().nullable(), openPath: z.string().nullable() }),
    slots: ['default'],
    description: 'Bottom drawer',
  },
  Tooltip: {
    props: z.object({ content: z.string(), text: z.string() }),
    description: 'Hover tooltip',
  },
  Popover: {
    props: z.object({ trigger: z.string(), content: z.string() }),
    description: 'Click-triggered popover',
  },
  DropdownMenu: {
    props: z.object({
      label: z.string(),
      items: z.array(z.object({ label: z.string(), value: z.string() })),
      value: z.string().nullable(),
    }),
    events: ['select'],
    description: 'Dropdown menu',
  },

  // Content
  Heading: {
    props: z.object({ text: z.string(), level: z.enum(['h1', 'h2', 'h3', 'h4']).nullable() }),
    description: 'Heading text',
  },
  Text: {
    props: z.object({ text: z.string(), variant: z.enum(['body', 'caption', 'muted', 'lead', 'code']).nullable() }),
    description: 'Paragraph text',
  },
  Image: {
    props: z.object({
      src: z.string().nullable(),
      alt: z.string().nullable(),
      width: z.number().nullable(),
      height: z.number().nullable(),
    }),
    description: 'Image element',
  },
  Icon: {
    props: z.object({
      name: z.string(),
      size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).nullable(),
      className: z.string().nullable(),
      strokeWidth: z.number().nullable(),
    }),
    description:
      'Lucide icon. `name` is a PascalCase lucide-react icon name from lucide.dev/icons. Size maps to xs=12, sm=16, md=20, lg=24, xl=32. Unknown names render nothing. Typically composed inline next to Button/Heading/Text labels, or standalone for decorative weight in empty states and heros.',
  },
  Avatar: {
    props: z.object({ src: z.string().nullable(), name: z.string(), size: z.enum(['sm', 'md', 'lg']).nullable() }),
    description: 'User avatar',
  },
  Badge: {
    props: z.object({
      text: z.string(),
      variant: z.enum(['default', 'secondary', 'destructive', 'outline']).nullable(),
    }),
    description: 'Status badge',
  },
  Alert: {
    props: z.object({
      title: z.string(),
      message: z.string().nullable(),
      type: z.enum(['success', 'info', 'warning', 'error']).nullable(),
    }),
    description: 'Alert banner',
  },
  Carousel: {
    props: z.object({ items: z.array(z.object({ title: z.string().nullable(), description: z.string().nullable() })) }),
    description: 'Scrollable carousel',
  },
  Table: {
    props: z.object({
      columns: z.array(z.string()),
      rows: z.array(z.array(z.string())),
      caption: z.string().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Data table',
  },

  // Feedback
  Progress: {
    props: z.object({ value: z.number(), max: z.number().nullable(), label: z.string().nullable() }),
    description: 'Progress bar',
  },
  Skeleton: {
    props: z.object({ width: z.any().nullable(), height: z.any().nullable(), rounded: z.boolean().nullable() }),
    description: 'Loading placeholder',
  },
  Spinner: {
    props: z.object({ size: z.enum(['sm', 'md', 'lg']).nullable(), label: z.string().nullable() }),
    description: 'Loading spinner',
  },

  // Input
  Button: {
    props: z.object({
      label: z.string(),
      variant: z.enum(['primary', 'secondary', 'danger']).nullable(),
      disabled: z.boolean().nullable(),
    }),
    events: ['press'],
    description: 'Button',
  },
  Link: {
    props: z.object({
      label: z.string().nullable(),
      href: z.string().nullable(),
      replace: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'],
    events: ['press'],
    description:
      'Anchor link. Renders children when given, otherwise falls back to `label`. Performs SPA navigation via NavigationProvider when one is mounted; left-clicks without modifier keys are intercepted, modifier-clicks and external URLs fall through to the browser.',
  },
  Input: {
    props: z.object({
      label: z.string().nullable(),
      name: z.string().nullable(),
      type: z.enum(['text', 'email', 'password', 'number']).nullable(),
      placeholder: z.string().nullable(),
      value: z.string().nullable(),
      checks: checkSchema.nullable(),
      validateOn: validateOnSchema.nullable(),
    }),
    events: ['change', 'submit', 'focus', 'blur'],
    description: 'Text input',
  },
  Textarea: {
    props: z.object({
      label: z.string().nullable(),
      name: z.string().nullable(),
      placeholder: z.string().nullable(),
      rows: z.number().nullable(),
      value: z.string().nullable(),
      checks: checkSchema.nullable(),
      validateOn: validateOnSchema.nullable(),
    }),
    events: ['change', 'blur'],
    description: 'Multi-line input',
  },
  Select: {
    props: z.object({
      label: z.string().nullable(),
      name: z.string().nullable(),
      options: z.array(z.string()),
      placeholder: z.string().nullable(),
      value: z.string().nullable(),
      checks: checkSchema.nullable(),
      validateOn: validateOnSchema.nullable(),
    }),
    events: ['change'],
    description: 'Dropdown select',
  },
  Checkbox: {
    props: z.object({
      label: z.string(),
      name: z.string().nullable(),
      checked: z.boolean().nullable(),
      checks: checkSchema.nullable(),
      validateOn: validateOnSchema.nullable(),
    }),
    events: ['change'],
    description: 'Checkbox',
  },
  Radio: {
    props: z.object({
      label: z.string().nullable(),
      name: z.string().nullable(),
      options: z.array(z.string()),
      value: z.string().nullable(),
      checks: checkSchema.nullable(),
      validateOn: validateOnSchema.nullable(),
    }),
    events: ['change'],
    description: 'Radio group',
  },
  Switch: {
    props: z.object({
      label: z.string(),
      name: z.string().nullable(),
      checked: z.boolean().nullable(),
      checks: checkSchema.nullable(),
      validateOn: validateOnSchema.nullable(),
    }),
    events: ['change'],
    description: 'Toggle switch',
  },
  Slider: {
    props: z.object({
      label: z.string().nullable(),
      min: z.number().nullable(),
      max: z.number().nullable(),
      step: z.number().nullable(),
      value: z.number().nullable(),
    }),
    events: ['change'],
    description: 'Range slider',
  },
  Toggle: {
    props: z.object({
      label: z.string(),
      pressed: z.boolean().nullable(),
      variant: z.enum(['default', 'outline']).nullable(),
    }),
    events: ['change'],
    description: 'Toggle button',
  },
  ToggleGroup: {
    props: z.object({
      items: z.array(z.object({ label: z.string(), value: z.string() })),
      type: z.enum(['single', 'multiple']).nullable(),
      value: z.string().nullable(),
    }),
    events: ['change'],
    description: 'Group of toggles',
  },
  ButtonGroup: {
    props: z.object({
      buttons: z.array(z.object({ label: z.string(), value: z.string() })),
      selected: z.string().nullable(),
    }),
    events: ['change'],
    description: 'Button group',
  },

  // ---------------------------------------------------------------------------
  // Universal form + empty/state
  // ---------------------------------------------------------------------------
  Field: {
    props: z.object({
      label: z.string().nullable(),
      description: z.string().nullable(),
      error: z.string().nullable(),
      required: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'],
    description:
      'Form-field wrapper. Shows a label, an optional description, and an error message around a child input (Input/Select/Combobox/etc). Use it to keep labels + inputs + error text visually grouped.',
  },
  EmptyState: {
    props: z.object({
      title: z.string(),
      description: z.string().nullable(),
      iconName: z.string().nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'],
    description:
      'Empty-state placeholder with icon, title, description, and optional action slot (e.g. a Button). `iconName` is a PascalCase lucide-react icon. Drop into otherwise-blank list/table zones.',
  },
  Callout: {
    props: z.object({
      variant: z.enum(['info', 'warning', 'error', 'success']).nullable(),
      title: z.string(),
      description: z.string().nullable(),
      iconName: z.string().nullable(),
      className: z.string().nullable(),
    }),
    description:
      'Colored left-border callout banner stronger than Alert. Use for inline tips, warnings, or highlighted context.',
  },

  // ---------------------------------------------------------------------------
  // Feedback / notifications
  // ---------------------------------------------------------------------------
  Sonner: {
    props: z.object({}),
    description:
      'Mount a global toast container (Sonner). Place once near the root. Toasts are triggered by the `Toast` component.',
  },
  Toast: {
    props: z.object({
      message: z.string(),
      variant: z.enum(['success', 'error', 'info', 'warning']).nullable(),
      show: z.boolean().nullable(),
    }),
    description:
      'Declarative toast trigger. When `show` flips true, fires a toast with `message` and `variant`. Typically bound to state ({ $bindState: "/toast/show" }).',
  },

  // ---------------------------------------------------------------------------
  // Navigation / structure
  // ---------------------------------------------------------------------------
  Sidebar: {
    props: z.object({
      title: z.string().nullable(),
      footer: z.string().nullable(),
      items: z
        .array(
          z.object({
            label: z.string(),
            value: z.string(),
            iconName: z.string().nullable(),
            active: z.boolean().nullable(),
          }),
        )
        .nullable(),
      groups: z
        .array(
          z.object({
            label: z.string().nullable(),
            items: z.array(
              z.object({
                label: z.string(),
                value: z.string(),
                iconName: z.string().nullable(),
                active: z.boolean().nullable(),
              }),
            ),
          }),
        )
        .nullable(),
      value: z.string().nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'],
    events: ['select'],
    description:
      'FULL APP-SHELL LAYOUT (not just a left strip). Renders a 256px left nav rail AND a main content pane side-by-side, already laid out as one cohesive shell. When the app shell is a sidebar+content layout, use `Sidebar` as the ROOT of the moment and put the ENTIRE main page content as its `children` — the children slot IS the main content pane. Do NOT wrap Sidebar in a Stack with siblings (that double-renders the shell). Do NOT stamp widths like `w-[256px]` on it (the component owns its own width and rail width; any width class you add will fight it). Use `items` for a flat menu or `groups` for grouped menus.',
  },
  Sheet: {
    props: z.object({
      title: z.string().nullable(),
      description: z.string().nullable(),
      side: z.enum(['left', 'right', 'top', 'bottom']).nullable(),
      openPath: z.string().nullable(),
    }),
    slots: ['default'],
    description:
      'Slide-in overlay drawer (side can be left/right/top/bottom). Typically bound via openPath to toggle from a button.',
  },
  Combobox: {
    props: z.object({
      options: z.array(z.object({ value: z.string(), label: z.string() })),
      value: z.string().nullable(),
      placeholder: z.string().nullable(),
    }),
    events: ['change'],
    description: 'Searchable single-select dropdown (Popover + Command). Good for picking one value from many.',
  },
  MultiSelect: {
    props: z.object({
      options: z.array(z.object({ value: z.string(), label: z.string() })),
      value: z.array(z.string()).nullable(),
      placeholder: z.string().nullable(),
    }),
    events: ['change'],
    description: 'Searchable multi-select dropdown (Popover + Command). Value is an array of selected option values.',
  },
  Command: {
    props: z.object({
      items: z.array(
        z.object({
          value: z.string(),
          label: z.string(),
          group: z.string().nullable(),
          iconName: z.string().nullable(),
        }),
      ),
      value: z.string().nullable(),
      placeholder: z.string().nullable(),
    }),
    events: ['select'],
    description: 'Command palette (cmdk) with searchable, grouped items — like a ⌘K menu.',
  },
  Breadcrumb: {
    props: z.object({
      items: z.array(z.object({ label: z.string(), href: z.string().nullable() })),
    }),
    description: 'Breadcrumb trail of page links. Last item renders as the current page.',
  },
  AlertDialog: {
    props: z.object({
      title: z.string(),
      description: z.string().nullable(),
      confirmLabel: z.string().nullable(),
      cancelLabel: z.string().nullable(),
      variant: z.enum(['destructive', 'default']).nullable(),
      openPath: z.string().nullable(),
    }),
    events: ['confirm', 'cancel'],
    description:
      'Confirmation modal for destructive or important actions. Destructive variant tints the confirm button red.',
  },
  HoverCard: {
    props: z.object({ openDelay: z.number().nullable() }),
    slots: ['default'],
    description: 'Hover-triggered card. First child is the trigger; remaining children render inside the hover card.',
  },

  // ---------------------------------------------------------------------------
  // Data / dashboards
  // ---------------------------------------------------------------------------
  DataTable: {
    props: z.object({
      columns: z.array(
        z.object({
          key: z.string(),
          label: z.string(),
          type: z.enum(['text', 'number', 'date', 'badge']).nullable(),
        }),
      ),
      data: z.array(z.record(z.string(), z.any())).nullable(),
      pageSize: z.number().nullable(),
      className: z.string().nullable(),
    }),
    description:
      'Sortable, paginated TanStack-backed table. `columns[].type` controls formatting (text, number, date, badge). `data` is usually bound to state.',
  },
  Chart: {
    props: z.object({
      variant: z.enum(['line', 'bar', 'area', 'pie']).nullable(),
      data: z.array(z.record(z.string(), z.any())),
      xKey: z.string().nullable(),
      yKeys: z
        .array(
          z.object({
            key: z.string(),
            label: z.string().nullable(),
            color: z.string().nullable(),
          }),
        )
        .nullable(),
      height: z.number().nullable(),
      className: z.string().nullable(),
    }),
    description:
      'Recharts-powered chart. Choose variant: line, bar, area, or pie. `xKey` is the category axis; `yKeys` lists the numeric series.',
  },
  KPICard: {
    props: z.object({
      label: z.string(),
      value: z.union([z.string(), z.number()]),
      delta: z.number().nullable(),
      trend: z.enum(['up', 'down', 'flat']).nullable(),
      sparklineData: z.array(z.any()).nullable(),
      className: z.string().nullable(),
    }),
    description:
      'Dashboard KPI card: label, large metric, optional delta/trend arrow, and optional inline sparkline. Use 3–4 in a row.',
  },
  Sparkline: {
    props: z.object({
      data: z.array(z.any()),
      color: z.string().nullable(),
      height: z.number().nullable(),
      width: z.number().nullable(),
    }),
    description:
      'Tiny inline Recharts line used to show a metric trend. `data` is an array of numbers or `{ value }` objects.',
  },

  // ---------------------------------------------------------------------------
  // Time / date
  // ---------------------------------------------------------------------------
  Calendar: {
    props: z.object({
      mode: z.enum(['single', 'range', 'multiple']).nullable(),
      selected: z.any().nullable(),
    }),
    events: ['change'],
    description: 'Date-picker calendar (react-day-picker). Mode controls single date, date range, or multiple dates.',
  },
  DatePicker: {
    props: z.object({
      value: z.string().nullable(),
      placeholder: z.string().nullable(),
    }),
    events: ['change'],
    description: 'Single-date popover picker (Button + Calendar). Value is an ISO date string.',
  },
  DateRangePicker: {
    props: z.object({
      value: z.any().nullable(),
      placeholder: z.string().nullable(),
    }),
    events: ['change'],
    description: 'Date-range popover picker (Button + Calendar). Value is { from, to } of ISO date strings.',
  },

  // ---------------------------------------------------------------------------
  // Interaction / misc
  // ---------------------------------------------------------------------------
  SegmentedControl: {
    props: z.object({
      options: z.array(z.object({ value: z.string(), label: z.string() })),
      value: z.string().nullable(),
      className: z.string().nullable(),
    }),
    events: ['change'],
    description:
      'Pill-style segmented toggle. Use when choosing one of 2–4 mutually exclusive options (e.g. Week/Month/Quarter).',
  },
  Timeline: {
    props: z.object({
      items: z.array(
        z.object({
          title: z.string(),
          description: z.string().nullable(),
          timestamp: z.string().nullable(),
          iconName: z.string().nullable(),
          variant: z.enum(['default', 'success', 'warning', 'error']).nullable(),
        }),
      ),
      className: z.string().nullable(),
    }),
    description:
      'Vertical activity timeline with dots connected by a line. Each item has title, optional description, timestamp, icon, and color variant.',
  },
  Stepper: {
    props: z.object({
      steps: z.array(z.object({ label: z.string(), description: z.string().nullable() })),
      current: z.number(),
      className: z.string().nullable(),
    }),
    description:
      'Horizontal step indicator. `current` is the zero-indexed active step. Completed steps show a checkmark.',
  },
};
