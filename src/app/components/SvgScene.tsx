interface SvgSceneProps {
  /** Raw SVG string imported via `import raw from "file.svg?raw"` */
  raw: string;
  /** Native width/height of the SVG, e.g. "492/386" */
  aspectRatio: string;
  className?: string;
}

/**
 * Renders an inline SVG illustration that uses `position:absolute` on its root
 * element. Provides the required positioned container so it fills correctly.
 */
export function SvgScene({ raw, aspectRatio, className = "" }: SvgSceneProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio }}
      dangerouslySetInnerHTML={{ __html: raw }}
    />
  );
}
