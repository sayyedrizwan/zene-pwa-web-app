export interface BingSearchResponse {
  s?: GeneratedType[];
  i?: I;
}

interface GeneratedType {
  id?: string;
  q?: string;
  u?: string;
  t?: string;
  bt?: string;
  g?: string;
  hc?: boolean;
  ext?: Ext;
}

interface Ext {
  des?: string;
  t?: string;
  im?: string;
}

interface I {
  ig?: string;
}
