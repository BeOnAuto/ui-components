// Main entry — server-safe, no JSX. Used by the generation pipeline.
export { catalog } from './catalog';
export { getComponentList, getComponentDetails, getSubmitSpecJsonSchema } from './catalog-tools';
export type { ComponentListItem, ComponentDetails, PropInfo } from './catalog-tools';
