export interface WallzWallpaperComSearch {
  took?: number;
  timed_out?: boolean;
  _shards?: Shards;
  hits?: Hits;
  suggest?: Suggest;
}

interface Shards {
  total?: number;
  successful?: number;
  skipped?: number;
  failed?: number;
}

interface Hits {
  total?: Total;
  max_score?: any;
  hits?: any[];
}

interface Total {
  value?: number;
  relation?: string;
}

interface Suggest {
  words?: Word[];
}

interface Word {
  text?: string;
  offset?: number;
  length?: number;
  options?: Option[];
}

interface Option {
  text?: string;
  _index?: string;
  _type?: string;
  _id?: string;
  _score?: number;
  _source?: Source;
}

interface Source {
  term_id?: number;
  ID?: number;
  name?: string;
  slug?: string;
  term_group?: any;
  term_taxonomy_id?: number;
  taxonomy?: string;
  description?: string;
  parent?: number;
  count?: number;
  meta?: Meta;
  hierarchy?: Hierarchy;
  object_ids?: ObjectIds;
}

interface Meta {
  related?: Related[];
  thumbnail?: Thumbnail[];
  base?: Base[];
  suggestions?: Suggestion[];
  summary?: Summary[];
  description?: Description[];
  rel_tier_2?: RelTier2[];
  extra_rel?: ExtraRel[];
  extra_rel_crossbase?: ExtraRelCrossbase[];
  related_kw?: RelatedKw[];
  boost?: Boost[];
  stage?: Stage[];
  bak_sug?: BakSug[];
}

interface Related {
  value?: string;
  raw?: string;
  boolean?: boolean;
  date?: string;
  datetime?: string;
  time?: string;
}

interface Thumbnail {
  value?: string;
  raw?: string;
  boolean?: boolean;
  date?: string;
  datetime?: string;
  time?: string;
}

interface Base {
  value?: string;
  raw?: string;
  long?: number;
  double?: number;
  boolean?: boolean;
  date?: string;
  datetime?: string;
  time?: string;
}

interface Suggestion {
  value?: string;
  raw?: string;
  boolean?: boolean;
  date?: string;
  datetime?: string;
  time?: string;
}

interface Summary {
  value?: string;
  raw?: string;
  boolean?: boolean;
  date?: string;
  datetime?: string;
  time?: string;
}

interface Description {
  value?: string;
  raw?: string;
  boolean?: boolean;
  date?: string;
  datetime?: string;
  time?: string;
}

interface RelTier2 {
  value?: string;
  raw?: string;
  boolean?: boolean;
  date?: string;
  datetime?: string;
  time?: string;
}

interface ExtraRel {
  value?: string;
  raw?: string;
  boolean?: boolean;
  date?: string;
  datetime?: string;
  time?: string;
}

interface ExtraRelCrossbase {
  value?: string;
  raw?: string;
  boolean?: boolean;
  date?: string;
  datetime?: string;
  time?: string;
  long?: number;
  double?: number;
}

interface RelatedKw {
  value?: string;
  raw?: string;
  boolean?: boolean;
  date?: string;
  datetime?: string;
  time?: string;
}

interface Boost {
  value?: string;
  raw?: string;
  long?: number;
  double?: number;
  boolean?: boolean;
  date?: string;
  datetime?: string;
  time?: string;
}

interface Stage {
  value?: string;
  raw?: string;
  boolean?: boolean;
  date?: string;
  datetime?: string;
  time?: string;
}

interface BakSug {
  value?: string;
  raw?: string;
  boolean?: boolean;
  date?: string;
  datetime?: string;
  time?: string;
}

interface Hierarchy {
  children?: Children;
  ancestors?: Ancestors;
}

interface Children {
  terms?: number;
  count?: number;
}

interface Ancestors {
  terms?: number;
}

interface ObjectIds {
  value?: number[];
}
