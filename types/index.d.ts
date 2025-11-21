// src/custom.d.ts

declare module '*.svg' {
  import * as React from 'react';

  // Defines the type for the special named export: ReactComponent
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

  // Defines the type for the default export (often the file path string)
  const src: string;
  export default src;
}

declare module 'next-plugin-svgr';