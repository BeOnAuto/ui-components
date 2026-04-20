interface RawColumnSpec {
  key?: string;
  id?: string;
  accessorKey?: string;
  label?: string;
  header?: string;
  type?: string;
}

interface NormalizedColumnSpec {
  key: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'badge';
}

const VALID_TYPES = new Set(['text', 'number', 'date', 'badge']);

export function normalizeColumnSpec(raw: RawColumnSpec): NormalizedColumnSpec {
  const key = raw.key ?? raw.id ?? raw.accessorKey ?? '';
  const label = raw.label ?? raw.header ?? '';
  const type = VALID_TYPES.has(raw.type ?? '') ? (raw.type as NormalizedColumnSpec['type']) : 'text';
  return { key, label, type };
}
