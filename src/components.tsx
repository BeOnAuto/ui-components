"use client";

/**
 * @onauto/ui-components — component map for json-render.
 *
 * Each ComponentFn is an adapter that bridges json-render's spec format
 * to our shadcn/ui components. The adapter handles:
 *   - Prop mapping (spec props → component props)
 *   - State binding via useBoundProp / useStateBinding from @json-render/react
 *   - Form validation via useFieldValidation
 *   - Event emission via emit()
 */

import { createElement, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useBoundProp, useStateBinding, useFieldValidation } from '@json-render/react';
import { cn } from './lib/utils';

// shadcn/ui components
import { Button as ShadcnButton } from './ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Input as ShadcnInput } from './ui/input';
import { Textarea as ShadcnTextarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select as ShadcnSelect, SelectTrigger, SelectContent, SelectItem, SelectValue } from './ui/select';
import { Checkbox as ShadcnCheckbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Switch as ShadcnSwitch } from './ui/switch';
import { Slider as ShadcnSlider } from './ui/slider';
import { Tabs as ShadcnTabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Accordion as ShadcnAccordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { Collapsible as ShadcnCollapsible, CollapsibleTrigger, CollapsibleContent } from './ui/collapsible';
import { Dialog as ShadcnDialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Drawer as ShadcnDrawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from './ui/drawer';
import { TooltipProvider, Tooltip as ShadcnTooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';
import { Popover as ShadcnPopover, PopoverTrigger, PopoverContent } from './ui/popover';
import {
  DropdownMenu as ShadcnDropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './ui/dropdown-menu';
import { Badge as ShadcnBadge } from './ui/badge';
import { Alert as ShadcnAlert, AlertTitle, AlertDescription } from './ui/alert';
import { Progress as ShadcnProgress } from './ui/progress';
import { Separator as ShadcnSeparator } from './ui/separator';
import { Toggle as ShadcnToggle } from './ui/toggle';
import { ToggleGroup as ShadcnToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { Table as ShadcnTable, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from './ui/table';
import { Skeleton as ShadcnSkeleton } from './ui/skeleton';
import { Avatar as ShadcnAvatar, AvatarImage, AvatarFallback } from './ui/avatar';
import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from './ui/pagination';

// New components added in Wave A–H
import { Field } from './ui/field';
import { EmptyState } from './ui/empty-state';
import { Callout, type CalloutVariant } from './ui/callout';
import { SegmentedControl } from './ui/segmented-control';
import { KPICard } from './ui/kpi-card';
import { Sparkline } from './ui/sparkline';
import {
  Sheet as ShadcnSheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  type SheetSide,
} from './ui/sheet';
import {
  AlertDialog as ShadcnAlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from './ui/alert-dialog';
import { HoverCard as ShadcnHoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card';
import {
  Breadcrumb as ShadcnBreadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';
import {
  SidebarProvider,
  Sidebar as ShadcnSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from './ui/sidebar';
import {
  Command as ShadcnCommand,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from './ui/command';
import { Calendar as ShadcnCalendar } from './ui/calendar';
import { Chart, type ChartVariant, type ChartSeries } from './ui/chart';
import { Timeline, type TimelineItem, type TimelineVariant } from './ui/timeline';
import { Stepper, type StepperStep } from './ui/stepper';

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table';
import { Toaster, toast } from 'sonner';
import { format as formatDate, parseISO } from 'date-fns';
import type { DateRange } from 'react-day-picker';

import useEmblaCarousel from 'embla-carousel-react';
import * as LucideIcons from 'lucide-react';
import {
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CircleIcon,
  MoreHorizontalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
  InfoIcon,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Props = Record<string, unknown>;
type Bindings = Record<string, string | undefined>;
type ComponentFn = (ctx: {
  props: Props;
  children?: ReactNode;
  bindings?: Bindings;
  emit?: (event: string) => void;
  on?: (event: string) => { shouldPreventDefault: boolean; emit: () => void };
  loading?: boolean;
}) => ReactNode;

// ---------------------------------------------------------------------------
// Narrowing helpers — JSON props arrive as `unknown`; these return the value
// only when it matches the expected runtime shape, else `undefined`. Avoids
// type assertions at call sites.
// ---------------------------------------------------------------------------

const str = (v: unknown): string | undefined => (typeof v === 'string' ? v : undefined);
const num = (v: unknown): number | undefined => (typeof v === 'number' ? v : undefined);
const bool = (v: unknown): boolean => v === true;
const asValidateOn = (v: unknown): 'change' | 'blur' | 'submit' =>
  v === 'change' || v === 'blur' || v === 'submit' ? v : 'blur';
const asChecks = (v: unknown): Array<{ type: string; message: string }> =>
  Array.isArray(v)
    ? v.filter(
        (c): c is { type: string; message: string } =>
          typeof c === 'object' &&
          c !== null &&
          typeof (c as { type: unknown }).type === 'string' &&
          typeof (c as { message: unknown }).message === 'string',
      )
    : [];
const asSparklineData = (v: unknown): Array<{ value: number }> | number[] | undefined => {
  if (!Array.isArray(v) || v.length === 0) return undefined;
  if (typeof v[0] === 'number') return v.filter((x): x is number => typeof x === 'number');
  const objs = v.filter(
    (x): x is { value: number } =>
      typeof x === 'object' && x !== null && typeof (x as { value: unknown }).value === 'number',
  );
  return objs.length > 0 ? objs : undefined;
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function stripGap(className: string): string {
  return className
    .replace(/\bgap-\S+/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

// Convert fixed heights (h-14 on a navbar, h-12 on a toolbar, etc.) to min-h
// variants on horizontal Stacks. Fixed-height horizontal flex containers
// prevent flex-wrap from actually wrapping children to new rows — the wrapped
// rows would exceed the fixed height and get clipped. min-h-* lets the
// container grow taller when wrap kicks in at narrow viewports while behaving
// identically to h-* when content already fits. Whitelist standard Tailwind
// height tokens likely to appear on layout shells.
const fixedHeightRe = /\bh-(8|9|10|11|12|14|16|20|24|28|32)\b/g;
function softenFixedHeights(className: string): string {
  return className.replace(fixedHeightRe, (_, n) => `min-h-${n}`);
}

// Convert LLM-stamped fixed widths to responsive variants so they collapse
// to full width at mobile. We match all Tailwind width tokens from w-48
// (192px) upward — these are layout-container sizes (sidebars, filter
// panels, side drawers, detail panes) that MUST collapse on narrow
// viewports. Smaller widths (w-2..w-40) are left alone: they're typically
// icons, badges, chip rows, fixed-size media placeholders, and small
// grid cells that shouldn't expand to full width.
//
// Skipped for absolutely-positioned elements (`absolute`, `fixed`, `sticky`):
// those elements are positioned relative to a containing block, and
// `w-full` on an absolute child means 100% of the positioned parent — which
// is typically the viewport, blowing them up from a 288px overlay to a
// full-width overlay. Keep their fixed widths as-is.
const fixedWidthRe = /\bw-(48|52|56|60|64|72|80|96)\b/g;
const positionedRe = /\b(absolute|fixed|sticky)\b/;
function makeWidthsResponsive(className: string): string {
  if (positionedRe.test(className)) return className;
  return className.replace(fixedWidthRe, (_, n) => `w-full min-[900px]:w-${n}`);
}

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------

const gapMap: Record<string, string> = { none: 'gap-0', sm: 'gap-2', md: 'gap-3', lg: 'gap-4', xl: 'gap-6' };
const alignMap: Record<string, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};
const justifyMap: Record<string, string> = {
  start: '',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
};

const Stack: ComponentFn = ({ props, children }) => {
  const horiz = props.direction === 'horizontal';
  const gap = gapMap[(props.gap as string) ?? 'md'] ?? 'gap-3';
  const align = alignMap[(props.align as string) ?? 'stretch'] ?? 'items-stretch';
  const justify = justifyMap[(props.justify as string) ?? ''] ?? '';
  let userCn = typeof props.className === 'string' ? props.className : '';
  if (userCn && /\bgap-/.test(userCn)) userCn = stripGap(userCn);
  // Horizontal stacks with fixed heights prevent flex-wrap from working at
  // narrow viewports (wrapped rows would exceed the fixed height and get
  // clipped by the parent). Relax h-* → min-h-* so the container can grow
  // vertically when wrap kicks in.
  if (horiz && userCn) userCn = softenFixedHeights(userCn);
  // LLM-stamped sidebar widths don't collapse at mobile — convert to
  // w-full at xs/sm and original width at md+.
  if (userCn) userCn = makeWidthsResponsive(userCn);
  // Horizontal Stacks need min-w-0 so the parent chain can constrain their
  // width below content width at narrow viewports. NOT applied to vertical
  // Stacks — that crushes column-of-rows layouts and (as iter-8 measurement
  // showed) causes a desktop regression when nested vertical stacks try to
  // shrink below their content width.
  const horizShrink = horiz ? 'min-w-0' : '';
  return (
    <div className={cn('flex', horiz ? 'flex-row flex-wrap' : 'flex-col', horizShrink, gap, align, justify, userCn)}>
      {children}
    </div>
  );
};

// Responsive column ladders at MUI breakpoints (xs<600, sm≥600, md≥900, lg≥1200).
// Each entry is the final desktop column count → a class string that ramps up from
// 1 column at xs, ≤2 at sm, scales with N at md/lg. Literal strings required for
// Tailwind JIT extraction; arbitrary variant syntax (min-[Npx]:) keeps us aligned
// with the MUI breakpoint set the scoring harness uses.
const colsResponsiveMap: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 min-[600px]:grid-cols-2',
  3: 'grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3',
  4: 'grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-2 min-[1200px]:grid-cols-4',
  5: 'grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1200px]:grid-cols-5',
  6: 'grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1200px]:grid-cols-6',
  7: 'grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-4 min-[1200px]:grid-cols-7',
  8: 'grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-4 min-[1200px]:grid-cols-8',
  9: 'grid-cols-1 min-[600px]:grid-cols-3 min-[900px]:grid-cols-5 min-[1200px]:grid-cols-9',
  10: 'grid-cols-1 min-[600px]:grid-cols-3 min-[900px]:grid-cols-5 min-[1200px]:grid-cols-10',
  11: 'grid-cols-1 min-[600px]:grid-cols-3 min-[900px]:grid-cols-6 min-[1200px]:grid-cols-11',
  12: 'grid-cols-1 min-[600px]:grid-cols-3 min-[900px]:grid-cols-6 min-[1200px]:grid-cols-12',
};

const Grid: ComponentFn = ({ props, children }) => {
  const cols = Math.max(1, Math.min(12, (props.columns as number) ?? 1));
  const gap = gapMap[(props.gap as string) ?? 'md'] ?? 'gap-3';
  let userCn = typeof props.className === 'string' ? props.className : '';
  if (userCn && /\bgap-/.test(userCn)) userCn = stripGap(userCn);
  if (userCn) userCn = makeWidthsResponsive(userCn);
  return <div className={cn('grid', colsResponsiveMap[cols], gap, userCn)}>{children}</div>;
};

const CardAdapter: ComponentFn = ({ props, children }) => {
  const mw =
    props.maxWidth === 'sm'
      ? 'max-w-xs sm:min-w-[280px]'
      : props.maxWidth === 'md'
        ? 'max-w-sm sm:min-w-[320px]'
        : props.maxWidth === 'lg'
          ? 'max-w-md sm:min-w-[360px]'
          : 'w-full';
  const userCn = typeof props.className === 'string' ? makeWidthsResponsive(props.className) : undefined;
  return (
    <Card className={cn(mw, bool(props.centered) && 'mx-auto', userCn)}>
      {(str(props.title) || str(props.description)) && (
        <CardHeader>
          {str(props.title) && <CardTitle>{str(props.title)}</CardTitle>}
          {str(props.description) && <CardDescription>{str(props.description)}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className="flex flex-col gap-3">{children}</CardContent>
    </Card>
  );
};

const SeparatorAdapter: ComponentFn = ({ props }) => (
  <ShadcnSeparator
    orientation={(props.orientation as 'horizontal' | 'vertical') ?? 'horizontal'}
    className={(props.orientation ?? 'horizontal') === 'vertical' ? 'h-full mx-2' : 'my-3'}
  />
);

// ---------------------------------------------------------------------------
// Tabs — children properly wrapped in TabsContent
// ---------------------------------------------------------------------------

const TabsAdapter: ComponentFn = ({ props, children, emit: emitFn }) => {
  const tabs = (props.tabs as Array<{ label: string; value: string }>) ?? [];
  const defaultVal = (props.defaultValue as string) ?? tabs[0]?.value ?? '';
  const [value, setValue] = useState(defaultVal);
  const childArray = Array.isArray(children) ? children : children ? [children] : [];

  return (
    // min-w-0 lets Tabs shrink below its content width when it is a flex child
    // (e.g. tabs inside a horizontal navbar). max-w-full caps it to the parent.
    // Without these, the default flex `min-width: auto` forces the tab bar to
    // its content width and overflows narrow viewports.
    <ShadcnTabs
      className="min-w-0 max-w-full"
      value={value}
      onValueChange={(v) => {
        setValue(v);
        emitFn?.('change');
      }}
    >
      {/*
       * TabsList is inline-flex with whitespace-nowrap triggers (shadcn default),
       * so long tab bars overflow the viewport on mobile. Wrap in a horizontally
       * scrollable container so the tab bar scrolls instead of forcing the page
       * to overflow.
       */}
      <div className="w-full overflow-x-auto">
        <TabsList>
          {tabs.map((t) => (
            <TabsTrigger key={t.value} value={t.value}>
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {childArray.map((child, i) => (
        <TabsContent key={tabs[i]?.value ?? `tab-${i}`} value={tabs[i]?.value ?? `tab-${i}`}>
          {child}
        </TabsContent>
      ))}
    </ShadcnTabs>
  );
};

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const Heading: ComponentFn = ({ props }) => {
  const level = props.level ?? 'h2';
  const cls =
    level === 'h1'
      ? 'text-2xl font-bold'
      : level === 'h3'
        ? 'text-base font-semibold'
        : level === 'h4'
          ? 'text-sm font-semibold'
          : 'text-lg font-semibold';
  return createElement(level as string, { className: `${cls} text-left` }, props.text as string);
};

const Text: ComponentFn = ({ props }) => {
  const v = props.variant;
  const cls =
    v === 'caption'
      ? 'text-xs'
      : v === 'muted'
        ? 'text-sm text-muted-foreground'
        : v === 'lead'
          ? 'text-xl text-muted-foreground'
          : v === 'code'
            ? 'font-mono text-sm bg-muted px-1.5 py-0.5 rounded'
            : 'text-sm';
  return createElement(v === 'code' ? 'code' : 'p', { className: `${cls} text-left` }, props.text as string);
};

const ImageComp: ComponentFn = ({ props }) =>
  props.src ? (
    <img
      src={props.src as string}
      alt={(props.alt as string) ?? ''}
      width={props.width as number}
      height={props.height as number}
      className="rounded max-w-full h-auto"
    />
  ) : (
    // Placeholder div with explicit pixel width — cap it to the container
    // via maxWidth so it can't push a narrow flex parent past the viewport.
    <div
      className="bg-muted border border-border rounded flex items-center justify-center text-xs text-muted-foreground"
      style={{
        width: (props.width as number) ?? 80,
        height: (props.height as number) ?? 60,
        maxWidth: '100%',
      }}
    >
      {(props.alt as string) || 'img'}
    </div>
  );

const ICON_SIZE_MAP: Record<string, number> = { xs: 12, sm: 16, md: 20, lg: 24, xl: 32 };

// Build the lucide registry via a runtime loop. `Object.keys(ns)` is opaque to
// rolldown/rollup's tree-shaker, so the full namespace survives the bundle.
// Without this, dynamic `<Icon name="...">` lookups resolve to undefined for
// every icon that isn't also referenced statically.
const LUCIDE_REGISTRY: Record<string, unknown> = (() => {
  const ns = LucideIcons as unknown as Record<string, unknown>;
  const out: Record<string, unknown> = {};
  for (const key of Object.keys(ns)) out[key] = ns[key];
  if (typeof globalThis !== 'undefined') {
    (globalThis as unknown as Record<string, unknown>).__LUCIDE__ = out;
  }
  return out;
})();

const IconAdapter: ComponentFn = ({ props }) => {
  const name = props.name as string | undefined;
  if (!name) return null;
  const LucideIcon = LUCIDE_REGISTRY[name] ?? LUCIDE_REGISTRY[`${name}Icon`];
  // Lucide components are forwardRef objects, not plain functions.
  if (!LucideIcon || (typeof LucideIcon !== 'function' && typeof LucideIcon !== 'object')) {
    return null;
  }
  const sizeProp = props.size;
  const size = typeof sizeProp === 'number' ? sizeProp : (ICON_SIZE_MAP[(sizeProp as string) ?? 'md'] ?? 20);
  return createElement(LucideIcon as never, {
    size,
    strokeWidth: (props.strokeWidth as number) ?? 2,
    className: cn(props.className as string | undefined),
  });
};

const AvatarAdapter: ComponentFn = ({ props }) => {
  const name = (props.name as string) || '?';
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  const size = props.size === 'lg' ? 'size-12' : props.size === 'sm' ? 'size-8' : 'size-10';
  return (
    <ShadcnAvatar className={size}>
      {typeof props.src === 'string' ? <AvatarImage src={props.src} alt={name} /> : null}
      <AvatarFallback>{initials}</AvatarFallback>
    </ShadcnAvatar>
  );
};

const BadgeAdapter: ComponentFn = ({ props }) => (
  <ShadcnBadge variant={(props.variant as 'default' | 'secondary' | 'destructive' | 'outline') ?? 'default'}>
    {props.text as string}
  </ShadcnBadge>
);

const AlertAdapter: ComponentFn = ({ props }) => {
  const t = props.type;
  const typeClass =
    t === 'success'
      ? 'border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100'
      : t === 'warning'
        ? 'border-yellow-200 bg-yellow-50 text-yellow-900'
        : t === 'info'
          ? 'border-blue-200 bg-blue-50 text-blue-900'
          : '';
  return (
    <ShadcnAlert variant={t === 'error' ? 'destructive' : 'default'} className={typeClass}>
      <AlertTitle>{str(props.title)}</AlertTitle>
      {str(props.message) && <AlertDescription>{str(props.message)}</AlertDescription>}
    </ShadcnAlert>
  );
};

// ---------------------------------------------------------------------------
// Data Display
// ---------------------------------------------------------------------------

const TableAdapter: ComponentFn = ({ props }) => {
  const columns = (props.columns as string[]) ?? [];
  const rows = ((props.rows as string[][]) ?? []).map((r) => r.map(String));
  // Wide tables with 6+ columns overflow at narrow viewports. Wrap in a
  // horizontally scrollable container and mark it as a data-scroll-container
  // so the scoring harness excludes its children from the clipped count.
  // The outer Card-style wrapper (rounded + border) stays at full viewport
  // width; only the inner <table> scrolls.
  return (
    <div className={cn('w-full rounded-md border border-border', props.className as string)}>
      <div className="w-full overflow-x-auto">
        <ShadcnTable>
          {str(props.caption) && <TableCaption>{str(props.caption)}</TableCaption>}
          <TableHeader>
            <TableRow>
              {columns.map((c) => (
                <TableHead key={c}>{c}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, ri) => (
              <TableRow key={ri}>
                {row.map((cell, ci) => (
                  <TableCell key={ci}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </ShadcnTable>
      </div>
    </div>
  );
};

const AccordionAdapter: ComponentFn = ({ props }) => {
  const items = (props.items as Array<{ title: string; content: string }>) ?? [];
  const isMulti = props.type === 'multiple';
  const els = items.map((item, i) => (
    <AccordionItem key={i} value={`item-${i}`}>
      <AccordionTrigger>{item.title}</AccordionTrigger>
      <AccordionContent>{item.content}</AccordionContent>
    </AccordionItem>
  ));
  return isMulti ? (
    <ShadcnAccordion type="multiple" className="w-full">
      {els}
    </ShadcnAccordion>
  ) : (
    <ShadcnAccordion type="single" collapsible className="w-full">
      {els}
    </ShadcnAccordion>
  );
};

const CollapsibleAdapter: ComponentFn = ({ props, children }) => {
  const [open, setOpen] = useState(!!props.defaultOpen);
  return (
    <ShadcnCollapsible open={open} onOpenChange={setOpen} className="w-full">
      <CollapsibleTrigger asChild>
        <button className="flex w-full items-center justify-between rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors">
          {props.title as string}
          <ChevronDownIcon className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-2">{children}</CollapsibleContent>
    </ShadcnCollapsible>
  );
};

const Carousel: ComponentFn = ({ props }) => {
  const items = (props.items as Array<{ title?: string; description?: string }>) ?? [];
  const [ref] = useEmblaCarousel();
  return (
    <div className="relative w-full">
      {/* data-carousel-viewport marks this as an embla scroll container:
          slides inside extend past the visible area but are reachable via
          carousel navigation, not by document scroll. The scoring harness
          uses this attribute to exclude slide children from the "clipped"
          metric. */}
      <div ref={ref} className="overflow-hidden" data-carousel-viewport="true">
        <div className="flex -ml-4">
          {items.map((item, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-3/4 md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="border border-border rounded-lg p-4 bg-card h-full">
                {item.title && <h4 className="font-semibold text-sm mb-1">{item.title}</h4>}
                {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProgressAdapter: ComponentFn = ({ props }) => {
  const val = Math.min(100, Math.max(0, (props.value as number) || 0));
  return (
    <div className="space-y-2">
      {str(props.label) && <Label>{str(props.label)}</Label>}
      <ShadcnProgress value={val} />
    </div>
  );
};

const SkeletonAdapter: ComponentFn = ({ props }) => (
  <ShadcnSkeleton
    className={props.rounded ? 'rounded-full' : ''}
    style={{
      width: (props.width as string | number) ?? '100%',
      height: (props.height as string | number) ?? '1.25rem',
    }}
  />
);

const Spinner: ComponentFn = ({ props }) => {
  const size = props.size === 'lg' ? 'size-8' : props.size === 'sm' ? 'size-4' : 'size-6';
  return (
    <div className="flex items-center gap-2">
      <svg className={cn(size, 'animate-spin text-muted-foreground')} viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
      {str(props.label) && <span className="text-sm text-muted-foreground">{str(props.label)}</span>}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Overlay
// ---------------------------------------------------------------------------

const DialogAdapter: ComponentFn = ({ props, children }) => {
  const [open, setOpen] = useStateBinding((props.openPath as string) ?? '');
  return (
    <ShadcnDialog open={!!open} onOpenChange={(v) => setOpen(v)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{str(props.title)}</DialogTitle>
          {str(props.description) && <DialogDescription>{str(props.description)}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </ShadcnDialog>
  );
};

const DrawerAdapter: ComponentFn = ({ props, children }) => {
  const [open, setOpen] = useStateBinding((props.openPath as string) ?? '');
  return (
    <ShadcnDrawer open={!!open} onOpenChange={(v) => setOpen(v)}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{str(props.title)}</DrawerTitle>
          {str(props.description) && <DrawerDescription>{str(props.description)}</DrawerDescription>}
        </DrawerHeader>
        <div className="p-4">{children}</div>
      </DrawerContent>
    </ShadcnDrawer>
  );
};

const TooltipAdapter: ComponentFn = ({ props }) => (
  <TooltipProvider delayDuration={0}>
    <ShadcnTooltip>
      <TooltipTrigger asChild>
        <span className="text-sm underline decoration-dotted cursor-help">{props.text as string}</span>
      </TooltipTrigger>
      <TooltipContent>{props.content as string}</TooltipContent>
    </ShadcnTooltip>
  </TooltipProvider>
);

const PopoverAdapter: ComponentFn = ({ props }) => (
  <ShadcnPopover>
    <PopoverTrigger asChild>
      <ShadcnButton variant="outline" className="text-sm">
        {props.trigger as string}
      </ShadcnButton>
    </PopoverTrigger>
    <PopoverContent className="w-64">
      <p className="text-sm">{props.content as string}</p>
    </PopoverContent>
  </ShadcnPopover>
);

const DropdownMenuAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const items = (props.items as Array<{ label: string; value: string }>) ?? [];
  const [, setValue] = useBoundProp(props.value, bindings?.value);
  return (
    <ShadcnDropdownMenu>
      <DropdownMenuTrigger asChild>
        <ShadcnButton variant="outline">{props.label as string}</ShadcnButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => {
              setValue(item.value);
              emitFn?.('select');
            }}
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </ShadcnDropdownMenu>
  );
};

// ---------------------------------------------------------------------------
// Form Inputs
// ---------------------------------------------------------------------------

const ButtonAdapter: ComponentFn = ({ props, emit: emitFn }) => {
  const variantMap: Record<string, 'default' | 'secondary' | 'destructive'> = {
    primary: 'default',
    secondary: 'secondary',
    danger: 'destructive',
  };
  const variant = variantMap[(props.variant as string) ?? 'primary'] ?? 'default';
  return (
    <ShadcnButton variant={variant} disabled={!!props.disabled} onClick={() => emitFn?.('press')}>
      {props.label as string}
    </ShadcnButton>
  );
};

const LinkAdapter: ComponentFn = ({ props, on }) => (
  <a
    href={(props.href as string) ?? '#'}
    className={cn(
      'text-primary underline-offset-4 hover:underline text-sm font-medium',
      props.className as string | undefined,
    )}
    onClick={(e) => {
      const h = on?.('press');
      if (h?.shouldPreventDefault) e.preventDefault();
      h?.emit();
    }}
  >
    {props.label as string}
  </a>
);

const InputAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const b = bindings;
  const [value, setValue] = useBoundProp(props.value, b?.value);
  const [local, setLocal] = useState('');
  const isBound = !!b?.value;
  const current = isBound ? (value ?? '') : local;
  const setter = isBound ? setValue : setLocal;
  const validateOn = asValidateOn(props.validateOn);
  const checks = asChecks(props.checks);
  const hasChecks = !!(b?.value && checks.length);
  const { errors, validate } = useFieldValidation(
    b?.value ?? '',
    hasChecks ? { checks, validateOn } : undefined,
  );

  return (
    <div className="space-y-2">
      {str(props.label) && <Label htmlFor={str(props.name)}>{str(props.label)}</Label>}
      <ShadcnInput
        id={props.name as string}
        name={props.name as string}
        type={(props.type as string) ?? 'text'}
        placeholder={(props.placeholder as string) ?? ''}
        value={current as string}
        onChange={(e) => {
          setter(e.target.value);
          if (hasChecks && validateOn === 'change') validate();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') emitFn?.('submit');
        }}
        onFocus={() => emitFn?.('focus')}
        onBlur={() => {
          if (hasChecks && validateOn === 'blur') validate();
          emitFn?.('blur');
        }}
      />
      {errors.length > 0 && <p className="text-sm text-destructive">{errors[0]}</p>}
    </div>
  );
};

const TextareaAdapter: ComponentFn = ({ props, bindings }) => {
  const b = bindings;
  const [value, setValue] = useBoundProp(props.value, b?.value);
  const [local, setLocal] = useState('');
  const isBound = !!b?.value;
  const current = isBound ? (value ?? '') : local;
  const setter = isBound ? setValue : setLocal;
  const validateOn = asValidateOn(props.validateOn);
  const checks = asChecks(props.checks);
  const hasChecks = !!(b?.value && checks.length);
  const { errors, validate } = useFieldValidation(
    b?.value ?? '',
    hasChecks ? { checks, validateOn } : undefined,
  );

  return (
    <div className="space-y-2">
      {str(props.label) && <Label>{str(props.label)}</Label>}
      <ShadcnTextarea
        name={props.name as string}
        placeholder={(props.placeholder as string) ?? ''}
        rows={(props.rows as number) ?? 3}
        value={current as string}
        onChange={(e) => {
          setter(e.target.value);
          if (hasChecks && validateOn === 'change') validate();
        }}
        onBlur={() => {
          if (hasChecks && validateOn === 'blur') validate();
        }}
      />
      {errors.length > 0 && <p className="text-sm text-destructive">{errors[0]}</p>}
    </div>
  );
};

const SelectAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const b = bindings;
  const [value, setValue] = useBoundProp(props.value, b?.value);
  const [local, setLocal] = useState('');
  const isBound = !!b?.value;
  const current = (isBound ? (value ?? '') : local) as string;
  const setter = isBound ? setValue : setLocal;
  const options = ((props.options as unknown[]) ?? []).map((o) => String(o ?? ''));

  return (
    <div className="space-y-2">
      <Label>{props.label as string}</Label>
      <ShadcnSelect
        value={current}
        onValueChange={(v) => {
          setter(v);
          emitFn?.('change');
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={(props.placeholder as string) ?? 'Select...'} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt, i) => (
            <SelectItem key={`${i}-${opt}`} value={opt || `option-${i}`}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </ShadcnSelect>
    </div>
  );
};

const CheckboxAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const b = bindings;
  const [checked, setChecked] = useBoundProp(props.checked, b?.checked);
  const [local, setLocal] = useState(!!props.checked);
  const isBound = !!b?.checked;
  const current = isBound ? !!checked : local;
  const setter = isBound ? setChecked : setLocal;
  return (
    <div className="flex items-center space-x-2">
      <ShadcnCheckbox
        id={props.name as string}
        checked={current as boolean}
        onCheckedChange={(v) => {
          setter(v === true);
          emitFn?.('change');
        }}
      />
      <Label htmlFor={props.name as string} className="cursor-pointer">
        {props.label as string}
      </Label>
    </div>
  );
};

const RadioAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const b = bindings;
  const options = ((props.options as unknown[]) ?? []).map((o) => String(o ?? ''));
  const [value, setValue] = useBoundProp(props.value, b?.value);
  const [local, setLocal] = useState(options[0] ?? '');
  const isBound = !!b?.value;
  const current = (isBound ? (value ?? '') : local) as string;
  const setter = isBound ? setValue : setLocal;
  return (
    <div className="space-y-2">
      {str(props.label) && <Label>{str(props.label)}</Label>}
      <RadioGroup
        value={current}
        onValueChange={(v) => {
          setter(v);
          emitFn?.('change');
        }}
      >
        {options.map((opt, i) => (
          <div key={`${i}-${opt}`} className="flex items-center space-x-2">
            <RadioGroupItem value={opt || `option-${i}`} id={`${props.name}-${i}-${opt}`} />
            <Label htmlFor={`${props.name}-${i}-${opt}`} className="cursor-pointer">
              {opt}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

const SwitchAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const b = bindings;
  const [checked, setChecked] = useBoundProp(props.checked, b?.checked);
  const [local, setLocal] = useState(!!props.checked);
  const isBound = !!b?.checked;
  const current = isBound ? !!checked : local;
  const setter = isBound ? setChecked : setLocal;
  return (
    <div className="flex items-center justify-between space-x-2">
      <Label htmlFor={props.name as string} className="cursor-pointer">
        {props.label as string}
      </Label>
      <ShadcnSwitch
        id={props.name as string}
        checked={current as boolean}
        onCheckedChange={(v) => {
          setter(v);
          emitFn?.('change');
        }}
      />
    </div>
  );
};

const SliderAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const b = bindings;
  const min = (props.min as number) ?? 0;
  const max = (props.max as number) ?? 100;
  const [value, setValue] = useBoundProp(props.value, b?.value);
  const [local, setLocal] = useState(min);
  const isBound = !!b?.value;
  const current = (isBound ? (value ?? min) : local) as number;
  const setter = isBound ? setValue : setLocal;
  return (
    <div className="space-y-2">
      {str(props.label) && (
        <div className="flex justify-between">
          <Label>{str(props.label)}</Label>
          <span className="text-sm text-muted-foreground">{current}</span>
        </div>
      )}
      <ShadcnSlider
        value={[current]}
        min={min}
        max={max}
        step={(props.step as number) ?? 1}
        onValueChange={(v) => {
          setter(v[0] ?? 0);
          emitFn?.('change');
        }}
      />
    </div>
  );
};

const ToggleAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const b = bindings;
  const [pressed, setPressed] = useBoundProp(props.pressed, b?.pressed);
  const [local, setLocal] = useState(!!props.pressed);
  const isBound = !!b?.pressed;
  const current = isBound ? !!pressed : local;
  const setter = isBound ? setPressed : setLocal;
  return (
    <ShadcnToggle
      variant={(props.variant as 'default' | 'outline') ?? 'default'}
      pressed={current as boolean}
      onPressedChange={(v) => {
        setter(v);
        emitFn?.('change');
      }}
    >
      {props.label as string}
    </ShadcnToggle>
  );
};

const ToggleGroupAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const b = bindings;
  const items = (props.items as Array<{ label: string; value: string }>) ?? [];
  const isMulti = props.type === 'multiple';
  const [value, setValue] = useBoundProp(props.value, b?.value);
  const [local, setLocal] = useState(items[0]?.value ?? '');
  const isBound = !!b?.value;
  const current = (isBound ? (value ?? '') : local) as string;
  const setter = isBound ? setValue : setLocal;
  const itemEls = items.map((item) => (
    <ToggleGroupItem key={item.value} value={item.value}>
      {item.label}
    </ToggleGroupItem>
  ));
  if (isMulti) {
    return (
      <ShadcnToggleGroup
        type="multiple"
        value={current ? current.split(',').filter(Boolean) : []}
        onValueChange={(v) => {
          setter(v.join(','));
          emitFn?.('change');
        }}
      >
        {itemEls}
      </ShadcnToggleGroup>
    );
  }
  return (
    <ShadcnToggleGroup
      type="single"
      value={current}
      onValueChange={(v) => {
        if (v) {
          setter(v);
          emitFn?.('change');
        }
      }}
    >
      {itemEls}
    </ShadcnToggleGroup>
  );
};

const ButtonGroupAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const b = bindings;
  const buttons = (props.buttons as Array<{ label: string; value: string }>) ?? [];
  const [selected, setSelected] = useBoundProp(props.selected, b?.selected);
  const [local, setLocal] = useState(buttons[0]?.value ?? '');
  const isBound = !!b?.selected;
  const current = (isBound ? (selected ?? '') : local) as string;
  const setter = isBound ? setSelected : setLocal;
  return (
    <div className="inline-flex rounded-md border border-border">
      {buttons.map((btn, i) => (
        <button
          key={btn.value}
          className={cn(
            'px-3 py-1.5 text-sm transition-colors',
            current === btn.value ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-muted',
            i > 0 && 'border-l border-border',
            i === 0 && 'rounded-l-md',
            i === buttons.length - 1 && 'rounded-r-md',
          )}
          onClick={() => {
            setter(btn.value);
            emitFn?.('change');
          }}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

const PaginationAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const b = bindings;
  const total = (props.totalPages as number) ?? 1;
  const [page, setPage] = useBoundProp(props.page, b?.page);
  const [local, setLocal] = useState(1);
  const isBound = !!b?.page;
  const current = (isBound ? (page ?? 1) : local) as number;
  const setter = isBound ? setPage : setLocal;

  function range(): (number | 'ellipsis')[] {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const r: (number | 'ellipsis')[] = [1];
    if (current > 3) r.push('ellipsis');
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) r.push(i);
    if (current < total - 2) r.push('ellipsis');
    r.push(total);
    return r;
  }

  return (
    <ShadcnPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (current > 1) {
                setter(current - 1);
                emitFn?.('change');
              }
            }}
          />
        </PaginationItem>
        {range().map((item, i) =>
          item === 'ellipsis' ? (
            <PaginationItem key={`e${i}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={item}>
              <PaginationLink
                href="#"
                isActive={current === item}
                onClick={(e) => {
                  e.preventDefault();
                  setter(item);
                  emitFn?.('change');
                }}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          ),
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (current < total) {
                setter(current + 1);
                emitFn?.('change');
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
};

// ---------------------------------------------------------------------------
// New adapters — Wave A–H
// ---------------------------------------------------------------------------

// Helper — resolve a lucide icon name to a React element, reusing the
// registry from IconAdapter so spec authors can pass `iconName` props.
function resolveLucideIcon(name: string | undefined, size = 16): ReactNode {
  if (!name) return null;
  const LucideIcon = LUCIDE_REGISTRY[name] ?? LUCIDE_REGISTRY[`${name}Icon`];
  if (!LucideIcon || (typeof LucideIcon !== 'function' && typeof LucideIcon !== 'object')) return null;
  return createElement(LucideIcon as never, { size });
}

const FieldAdapter: ComponentFn = ({ props, children }) => (
  <Field
    label={props.label as string | undefined}
    description={props.description as string | undefined}
    error={props.error as string | undefined}
    required={props.required as boolean | undefined}
    className={props.className as string | undefined}
  >
    {children}
  </Field>
);

const EmptyStateAdapter: ComponentFn = ({ props, children }) => (
  <EmptyState
    title={(props.title as string) ?? ''}
    description={props.description as string | undefined}
    icon={resolveLucideIcon(props.iconName as string | undefined, 24)}
    action={children}
    className={props.className as string | undefined}
  />
);

const CalloutAdapter: ComponentFn = ({ props }) => {
  const variant = (props.variant as CalloutVariant) ?? 'info';
  const iconName =
    (props.iconName as string | undefined) ??
    (variant === 'warning'
      ? 'AlertTriangle'
      : variant === 'error'
        ? 'AlertCircle'
        : variant === 'success'
          ? 'CheckCircle'
          : 'Info');
  return (
    <Callout
      variant={variant}
      title={(props.title as string) ?? ''}
      description={props.description as string | undefined}
      icon={resolveLucideIcon(iconName, 18)}
      className={props.className as string | undefined}
    />
  );
};

const SegmentedControlAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const b = bindings;
  const options = (props.options as Array<{ value: string; label: string }>) ?? [];
  const [value, setValue] = useBoundProp(props.value, b?.value);
  const [local, setLocal] = useState((options[0]?.value as string | undefined) ?? '');
  const isBound = !!b?.value;
  const current = (isBound ? (value ?? '') : local) as string;
  const setter = isBound ? setValue : setLocal;
  return (
    <SegmentedControl
      options={options}
      value={current}
      onValueChange={(v) => {
        setter(v);
        emitFn?.('change');
      }}
      className={props.className as string | undefined}
    />
  );
};

const KPICardAdapter: ComponentFn = ({ props }) => {
  const rawValue = props.value;
  const value = typeof rawValue === 'string' || typeof rawValue === 'number' ? rawValue : '';
  const trend = props.trend === 'up' || props.trend === 'down' || props.trend === 'flat' ? props.trend : undefined;
  return (
    <KPICard
      label={str(props.label) ?? ''}
      value={value}
      delta={num(props.delta)}
      trend={trend}
      sparklineData={asSparklineData(props.sparklineData)}
      className={str(props.className)}
    />
  );
};

const SparklineAdapter: ComponentFn = ({ props }) => {
  return (
    <Sparkline
      data={asSparklineData(props.data) ?? []}
      color={str(props.color) ?? '#3b82f6'}
      height={num(props.height) ?? 30}
      width={num(props.width) ?? 120}
    />
  );
};

// ---------------------------------------------------------------------------
// Sheet — slide-in drawer (shadcn Sheet on Radix Dialog)
// ---------------------------------------------------------------------------

const SheetAdapter: ComponentFn = ({ props, children }) => {
  const [open, setOpen] = useStateBinding((props.openPath as string) ?? '');
  return (
    <ShadcnSheet open={!!open} onOpenChange={(v) => setOpen(v)}>
      <SheetContent side={(props.side as SheetSide) ?? 'right'}>
        <SheetHeader>
          {str(props.title) && <SheetTitle>{str(props.title)}</SheetTitle>}
          {str(props.description) && <SheetDescription>{str(props.description)}</SheetDescription>}
        </SheetHeader>
        <div className="flex flex-col gap-3">{children}</div>
      </SheetContent>
    </ShadcnSheet>
  );
};

// ---------------------------------------------------------------------------
// AlertDialog — confirmation modal
// ---------------------------------------------------------------------------

const AlertDialogAdapter: ComponentFn = ({ props, emit: emitFn }) => {
  const [open, setOpen] = useStateBinding((props.openPath as string) ?? '');
  const variant = (props.variant as 'destructive' | 'default' | undefined) ?? 'default';
  return (
    <ShadcnAlertDialog open={!!open} onOpenChange={(v) => setOpen(v)}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{str(props.title)}</AlertDialogTitle>
          {str(props.description) && <AlertDialogDescription>{str(props.description)}</AlertDialogDescription>}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              emitFn?.('cancel');
            }}
          >
            {(props.cancelLabel as string) ?? 'Cancel'}
          </AlertDialogCancel>
          <AlertDialogAction
            className={variant === 'destructive' ? 'bg-destructive text-white hover:bg-destructive/90' : undefined}
            onClick={() => {
              emitFn?.('confirm');
            }}
          >
            {(props.confirmLabel as string) ?? 'Confirm'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </ShadcnAlertDialog>
  );
};

// ---------------------------------------------------------------------------
// HoverCard
// ---------------------------------------------------------------------------

const HoverCardAdapter: ComponentFn = ({ props, children }) => {
  const childArray = Array.isArray(children) ? children : children ? [children] : [];
  const [trigger, ...content] = childArray;
  return (
    <ShadcnHoverCard openDelay={(props.openDelay as number | undefined) ?? 200}>
      <HoverCardTrigger asChild>
        <span className="inline-flex cursor-help">{trigger}</span>
      </HoverCardTrigger>
      <HoverCardContent>{content.length > 0 ? content : null}</HoverCardContent>
    </ShadcnHoverCard>
  );
};

// ---------------------------------------------------------------------------
// Breadcrumb
// ---------------------------------------------------------------------------

const BreadcrumbAdapter: ComponentFn = ({ props }) => {
  const items = (props.items as Array<{ label: string; href?: string }>) ?? [];
  return (
    <ShadcnBreadcrumb>
      <BreadcrumbList>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <BreadcrumbItem key={`${i}-${item.label}`} className="flex items-center gap-1.5">
              {isLast ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink href={item.href ?? '#'}>{item.label}</BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </ShadcnBreadcrumb>
  );
};

// ---------------------------------------------------------------------------
// Sidebar family — single declarative Sidebar adapter wraps everything
// ---------------------------------------------------------------------------

interface SidebarItem {
  label: string;
  value: string;
  iconName?: string;
  active?: boolean;
}

interface SidebarGroup {
  label?: string;
  items: SidebarItem[];
}

const SidebarAdapter: ComponentFn = ({ props, children, bindings, emit: emitFn }) => {
  const b = bindings;
  const groups = ((props.groups as SidebarGroup[] | undefined) ?? null) as SidebarGroup[] | null;
  const flatItems = (props.items as SidebarItem[] | undefined) ?? null;
  const [value, setValue] = useBoundProp(props.value, b?.value);
  const [local, setLocal] = useState<string>(
    (flatItems?.find((i) => i.active)?.value as string | undefined) ??
      (groups?.[0]?.items?.find((i) => i.active)?.value as string | undefined) ??
      '',
  );
  const isBound = !!b?.value;
  const current = (isBound ? (value ?? '') : local) as string;
  const setter = isBound ? setValue : setLocal;

  const renderItem = (item: SidebarItem) => {
    const isActive = current ? current === item.value : !!item.active;
    return (
      <SidebarMenuItem key={item.value}>
        <SidebarMenuButton
          isActive={isActive}
          onClick={() => {
            setter(item.value);
            emitFn?.('select');
          }}
        >
          {resolveLucideIcon(item.iconName, 16)}
          <span className="flex-1 truncate">{item.label}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <SidebarProvider className={cn('w-full', props.className as string | undefined)}>
      <ShadcnSidebar className="hidden min-[900px]:flex min-[900px]:w-64">
        {str(props.title) && (
          <SidebarHeader>
            <p className="text-sm font-semibold">{str(props.title)}</p>
          </SidebarHeader>
        )}
        <SidebarContent>
          {groups ? (
            <div className="flex flex-col gap-4">
              {groups.map((group, gi) => (
                <div key={gi} className="flex flex-col gap-1">
                  {group.label && (
                    <p className="px-3 pb-1 text-xs font-medium uppercase text-muted-foreground">{group.label}</p>
                  )}
                  <SidebarMenu>{group.items.map(renderItem)}</SidebarMenu>
                </div>
              ))}
            </div>
          ) : flatItems ? (
            <SidebarMenu>{flatItems.map(renderItem)}</SidebarMenu>
          ) : null}
        </SidebarContent>
        {str(props.footer) && (
          <SidebarFooter>
            <span className="text-xs text-muted-foreground">{str(props.footer)}</span>
          </SidebarFooter>
        )}
      </ShadcnSidebar>
      <SidebarInset className="flex-1">{children}</SidebarInset>
    </SidebarProvider>
  );
};

// ---------------------------------------------------------------------------
// Command palette — cmdk
// ---------------------------------------------------------------------------

interface CommandItemEntry {
  value: string;
  label: string;
  group?: string;
  iconName?: string;
}

const CommandAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const b = bindings;
  const items = (props.items as CommandItemEntry[] | undefined) ?? [];
  const [value, setValue] = useBoundProp(props.value, b?.value);
  const [local, setLocal] = useState('');
  const isBound = !!b?.value;
  const setter = isBound ? setValue : setLocal;
  // group items by optional group key
  const grouped = items.reduce<Map<string, CommandItemEntry[]>>((acc, item) => {
    const key = item.group ?? 'Commands';
    if (!acc.has(key)) acc.set(key, []);
    acc.get(key)!.push(item);
    return acc;
  }, new Map());
  return (
    <div className="rounded-md border border-border">
      <ShadcnCommand>
        <CommandInput placeholder={(props.placeholder as string) ?? 'Type a command or search...'} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Array.from(grouped.entries()).map(([groupName, groupItems]) => (
            <CommandGroup key={groupName} heading={groupName}>
              {groupItems.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={() => {
                    setter(item.value);
                    emitFn?.('select');
                  }}
                >
                  {resolveLucideIcon(item.iconName, 16)}
                  <span>{item.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </ShadcnCommand>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Combobox — Popover + Command
// ---------------------------------------------------------------------------

interface OptionEntry {
  value: string;
  label: string;
}

const ComboboxAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const b = bindings;
  const options = (props.options as OptionEntry[] | undefined) ?? [];
  const [open, setOpen] = useState(false);
  const [value, setValue] = useBoundProp(props.value, b?.value);
  const [local, setLocal] = useState('');
  const isBound = !!b?.value;
  const current = (isBound ? (value ?? '') : local) as string;
  const setter = isBound ? setValue : setLocal;
  const selected = options.find((o) => o.value === current);
  return (
    <ShadcnPopover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <ShadcnButton variant="outline" className="w-full justify-between">
          {selected?.label ?? (props.placeholder as string) ?? 'Select option...'}
          <ChevronDownIcon className="size-4 opacity-50" />
        </ShadcnButton>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <ShadcnCommand>
          <CommandInput placeholder={(props.placeholder as string) ?? 'Search...'} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((opt) => (
                <CommandItem
                  key={opt.value}
                  value={opt.value}
                  onSelect={() => {
                    setter(opt.value);
                    setOpen(false);
                    emitFn?.('change');
                  }}
                >
                  <CheckIcon className={cn('mr-2 size-4', current === opt.value ? 'opacity-100' : 'opacity-0')} />
                  {opt.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </ShadcnCommand>
      </PopoverContent>
    </ShadcnPopover>
  );
};

// ---------------------------------------------------------------------------
// MultiSelect — Popover + Command, array value
// ---------------------------------------------------------------------------

const MultiSelectAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const b = bindings;
  const options = (props.options as OptionEntry[] | undefined) ?? [];
  const [open, setOpen] = useState(false);
  const [value, setValue] = useBoundProp(props.value, b?.value);
  const [local, setLocal] = useState<string[]>([]);
  const isBound = !!b?.value;
  const rawCurrent = isBound ? value : local;
  const current = Array.isArray(rawCurrent) ? (rawCurrent as string[]) : [];
  const setter = (next: string[]) => {
    if (isBound) setValue(next);
    else setLocal(next);
  };
  const toggle = (val: string) => {
    const next = current.includes(val) ? current.filter((v) => v !== val) : [...current, val];
    setter(next);
    emitFn?.('change');
  };
  const labelParts = current.map((v) => options.find((o) => o.value === v)?.label ?? v);
  return (
    <ShadcnPopover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <ShadcnButton variant="outline" className="w-full justify-between">
          <span className="truncate text-left">
            {labelParts.length ? labelParts.join(', ') : ((props.placeholder as string) ?? 'Select options...')}
          </span>
          <ChevronDownIcon className="size-4 opacity-50" />
        </ShadcnButton>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <ShadcnCommand>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((opt) => (
                <CommandItem key={opt.value} value={opt.value} onSelect={() => toggle(opt.value)}>
                  <CheckIcon className={cn('mr-2 size-4', current.includes(opt.value) ? 'opacity-100' : 'opacity-0')} />
                  {opt.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </ShadcnCommand>
      </PopoverContent>
    </ShadcnPopover>
  );
};

// ---------------------------------------------------------------------------
// Calendar
// ---------------------------------------------------------------------------

const CalendarAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const b = bindings;
  const mode = (props.mode as 'single' | 'range' | 'multiple' | undefined) ?? 'single';
  const [value, setValue] = useBoundProp(props.selected, b?.selected);
  const [local, setLocal] = useState<unknown>(undefined);
  const isBound = !!b?.selected;
  const current = isBound ? value : local;
  const setter = isBound ? setValue : setLocal;
  const handleSelect = (next: unknown) => {
    setter(next);
    emitFn?.('change');
  };
  if (mode === 'range') {
    return (
      <ShadcnCalendar
        mode="range"
        selected={current as DateRange | undefined}
        onSelect={handleSelect as (v: DateRange | undefined) => void}
      />
    );
  }
  if (mode === 'multiple') {
    return (
      <ShadcnCalendar
        mode="multiple"
        selected={current as Date[] | undefined}
        onSelect={handleSelect as (v: Date[] | undefined) => void}
      />
    );
  }
  return (
    <ShadcnCalendar
      mode="single"
      selected={current as Date | undefined}
      onSelect={handleSelect as (v: Date | undefined) => void}
    />
  );
};

// ---------------------------------------------------------------------------
// DatePicker — Popover + Calendar, single date
// ---------------------------------------------------------------------------

function toDate(v: unknown): Date | undefined {
  if (!v) return undefined;
  if (v instanceof Date) return v;
  if (typeof v === 'string') {
    try {
      return parseISO(v);
    } catch {
      return undefined;
    }
  }
  return undefined;
}

const DatePickerAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const b = bindings;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useBoundProp(props.value, b?.value);
  const [local, setLocal] = useState<string | undefined>(undefined);
  const isBound = !!b?.value;
  const current = (isBound ? value : local) as string | undefined;
  const setter = isBound ? setValue : setLocal;
  const dateValue = toDate(current);
  return (
    <ShadcnPopover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <ShadcnButton variant="outline" className="w-[240px] justify-start text-left font-normal">
          <CalendarIcon className="mr-2 size-4" />
          {dateValue ? formatDate(dateValue, 'PPP') : ((props.placeholder as string) ?? 'Pick a date')}
        </ShadcnButton>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <ShadcnCalendar
          mode="single"
          selected={dateValue}
          onSelect={(d) => {
            if (d) {
              setter(d.toISOString());
              setOpen(false);
              emitFn?.('change');
            }
          }}
        />
      </PopoverContent>
    </ShadcnPopover>
  );
};

// ---------------------------------------------------------------------------
// DateRangePicker — Popover + Calendar, range mode
// ---------------------------------------------------------------------------

const DateRangePickerAdapter: ComponentFn = ({ props, bindings, emit: emitFn }) => {
  const b = bindings;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useBoundProp(props.value, b?.value);
  const [local, setLocal] = useState<DateRange | undefined>(undefined);
  const isBound = !!b?.value;
  const rawCurrent = isBound ? value : local;
  const current: DateRange | undefined =
    rawCurrent && typeof rawCurrent === 'object'
      ? {
          from: toDate((rawCurrent as DateRange).from),
          to: toDate((rawCurrent as DateRange).to),
        }
      : undefined;
  const setter = (next: DateRange | undefined) => {
    if (isBound) setValue(next);
    else setLocal(next);
  };
  const label =
    current?.from && current?.to
      ? `${formatDate(current.from, 'MMM d')} – ${formatDate(current.to, 'MMM d, yyyy')}`
      : current?.from
        ? formatDate(current.from, 'PPP')
        : ((props.placeholder as string) ?? 'Pick a date range');
  return (
    <ShadcnPopover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <ShadcnButton variant="outline" className="w-[280px] justify-start text-left font-normal">
          <CalendarIcon className="mr-2 size-4" />
          {label}
        </ShadcnButton>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <ShadcnCalendar
          mode="range"
          selected={current}
          onSelect={(d: DateRange | undefined) => {
            setter(d);
            emitFn?.('change');
          }}
        />
      </PopoverContent>
    </ShadcnPopover>
  );
};

// ---------------------------------------------------------------------------
// Chart — Recharts wrapper
// ---------------------------------------------------------------------------

const ChartAdapter: ComponentFn = ({ props }) => {
  const rawData = props.data;
  const data = Array.isArray(rawData) ? (rawData as Array<Record<string, unknown>>) : [];
  const yKeys = (props.yKeys as ChartSeries[] | undefined) ?? undefined;
  return (
    <Chart
      variant={(props.variant as ChartVariant | undefined) ?? 'line'}
      data={data}
      xKey={(props.xKey as string | undefined) ?? 'name'}
      yKeys={yKeys}
      height={(props.height as number | undefined) ?? 260}
      className={props.className as string | undefined}
    />
  );
};

// ---------------------------------------------------------------------------
// DataTable — TanStack Table
// ---------------------------------------------------------------------------

import { normalizeColumnSpec } from './normalize-column-spec';

interface DataTableColumnSpec {
  key: string;
  label: string;
  type?: 'text' | 'number' | 'date' | 'badge';
}

const DataTableAdapter: ComponentFn = ({ props, bindings }) => {
  const b = bindings;
  const rawColumns = (props.columns as Record<string, unknown>[] | undefined) ?? [];
  const columnSpecs = rawColumns.map(normalizeColumnSpec) as DataTableColumnSpec[];
  const [data] = useBoundProp(props.data, b?.data);
  const pageSize = (props.pageSize as number | undefined) ?? 10;
  const rawRows = Array.isArray(data) ? (data as Array<Record<string, unknown>>) : [];

  const columns = useMemo<ColumnDef<Record<string, unknown>>[]>(
    () =>
      columnSpecs.map((col) => ({
        accessorKey: col.key,
        header: col.label,
        cell: ({ getValue }) => {
          const v = getValue();
          if (v === null || v === undefined) return '';
          if (col.type === 'badge') {
            return <ShadcnBadge variant="secondary">{String(v)}</ShadcnBadge>;
          }
          if (col.type === 'date' && typeof v === 'string') {
            try {
              const d = toDate(v);
              return d && !isNaN(d.getTime()) ? formatDate(d, 'PP') : String(v);
            } catch {
              return String(v);
            }
          }
          if (col.type === 'number' && typeof v === 'number') {
            return v.toLocaleString();
          }
          return String(v);
        },
      })),
    [columnSpecs],
  );

  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: rawRows,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize } },
  });

  return (
    <div className={cn('w-full rounded-md border border-border', props.className as string)}>
      <div className="w-full overflow-x-auto">
        <ShadcnTable>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-sm text-muted-foreground">
                  No data available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </ShadcnTable>
      </div>
      {rawRows.length > pageSize && (
        <div className="flex items-center justify-between gap-2 border-t border-border p-2">
          <span className="text-xs text-muted-foreground">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </span>
          <div className="flex gap-1">
            <ShadcnButton
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeftIcon className="size-4" />
            </ShadcnButton>
            <ShadcnButton
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRightIcon className="size-4" />
            </ShadcnButton>
          </div>
        </div>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Sonner Toaster + declarative Toast trigger
// ---------------------------------------------------------------------------

const SonnerAdapter: ComponentFn = () => <Toaster position="bottom-right" richColors closeButton />;

const ToastAdapter: ComponentFn = ({ props }) => {
  const message = (props.message as string) ?? '';
  const variant = (props.variant as 'success' | 'error' | 'info' | 'warning' | undefined) ?? 'info';
  const show = props.show as boolean | undefined;
  useEffect(() => {
    if (!show || !message) return;
    if (variant === 'success') toast.success(message);
    else if (variant === 'error') toast.error(message);
    else if (variant === 'warning') toast.warning(message);
    else toast.info(message);
  }, [show, message, variant]);
  return null;
};

// ---------------------------------------------------------------------------
// Timeline + Stepper
// ---------------------------------------------------------------------------

const TimelineAdapter: ComponentFn = ({ props }) => {
  const rawItems =
    (props.items as Array<{
      title: string;
      description?: string;
      timestamp?: string;
      iconName?: string;
      variant?: TimelineVariant;
    }>) ?? [];
  const items: TimelineItem[] = rawItems.map((it) => ({
    title: it.title,
    description: it.description,
    timestamp: it.timestamp,
    variant: it.variant,
    icon: resolveLucideIcon(it.iconName, 14),
  }));
  return <Timeline items={items} className={props.className as string | undefined} />;
};

const StepperAdapter: ComponentFn = ({ props }) => {
  const steps = (props.steps as StepperStep[]) ?? [];
  const current = (props.current as number) ?? 0;
  return <Stepper steps={steps} current={current} className={props.className as string | undefined} />;
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export const components: Record<string, ComponentFn> = {
  Card: CardAdapter,
  Stack,
  Grid,
  Separator: SeparatorAdapter,
  Tabs: TabsAdapter,
  Accordion: AccordionAdapter,
  Collapsible: CollapsibleAdapter,
  Carousel,
  Dialog: DialogAdapter,
  Drawer: DrawerAdapter,
  Tooltip: TooltipAdapter,
  Popover: PopoverAdapter,
  DropdownMenu: DropdownMenuAdapter,
  Heading,
  Text,
  Image: ImageComp,
  Icon: IconAdapter,
  Avatar: AvatarAdapter,
  Badge: BadgeAdapter,
  Alert: AlertAdapter,
  Table: TableAdapter,
  Progress: ProgressAdapter,
  Skeleton: SkeletonAdapter,
  Spinner,
  Button: ButtonAdapter,
  Link: LinkAdapter,
  Input: InputAdapter,
  Textarea: TextareaAdapter,
  Select: SelectAdapter,
  Checkbox: CheckboxAdapter,
  Radio: RadioAdapter,
  Switch: SwitchAdapter,
  Slider: SliderAdapter,
  Toggle: ToggleAdapter,
  ToggleGroup: ToggleGroupAdapter,
  ButtonGroup: ButtonGroupAdapter,
  Pagination: PaginationAdapter,
  // New components
  Field: FieldAdapter,
  EmptyState: EmptyStateAdapter,
  Callout: CalloutAdapter,
  SegmentedControl: SegmentedControlAdapter,
  KPICard: KPICardAdapter,
  Sparkline: SparklineAdapter,
  Sheet: SheetAdapter,
  AlertDialog: AlertDialogAdapter,
  HoverCard: HoverCardAdapter,
  Breadcrumb: BreadcrumbAdapter,
  Sidebar: SidebarAdapter,
  Command: CommandAdapter,
  Combobox: ComboboxAdapter,
  MultiSelect: MultiSelectAdapter,
  Calendar: CalendarAdapter,
  DatePicker: DatePickerAdapter,
  DateRangePicker: DateRangePickerAdapter,
  Chart: ChartAdapter,
  DataTable: DataTableAdapter,
  Sonner: SonnerAdapter,
  Toast: ToastAdapter,
  Timeline: TimelineAdapter,
  Stepper: StepperAdapter,
};
