import { useRef, useState, useEffect, useCallback } from 'react';

export interface UseLockGeometryOptions {
  /** Whether lock mode is currently active (defaults to true) */
  enabled?: boolean;
  /** Whether to lock width, height, or both */
  dimension?: 'width' | 'height' | 'both';
  /** Dependencies that should re-measure the baseline geometry */
  deps?: unknown[];
}

export interface UseLockGeometryReturn<T extends HTMLElement = HTMLElement> {
  ref: React.RefObject<T | null>;
  style: React.CSSProperties;
  recompute: () => void;
  isLocked: boolean;
  lockedDimensions: { width?: number; height?: number };
}

/**
 * Custom React 19 hook that locks an element's bounding geometry (CLS = 0)
 * prior to state morphing (e.g. idle -> loading -> success/error).
 */
export function useLockGeometry<T extends HTMLElement = HTMLElement>({
  enabled = true,
  dimension = 'width',
  deps = [],
}: UseLockGeometryOptions = {}): UseLockGeometryReturn<T> {
  const ref = useRef<T | null>(null);
  const [lockedDims, setLockedDims] = useState<{ width?: number; height?: number }>({});

  const recompute = useCallback(() => {
    if (!ref.current || !enabled) return;
    const rect = ref.current.getBoundingClientRect();
    setLockedDims({
      width: dimension === 'width' || dimension === 'both' ? Math.ceil(rect.width) : undefined,
      height: dimension === 'height' || dimension === 'both' ? Math.ceil(rect.height) : undefined,
    });
  }, [enabled, dimension]);

  useEffect(() => {
    recompute();
  }, [recompute, ...deps]);

  const style: React.CSSProperties = {
    ...(lockedDims.width ? { minWidth: `${lockedDims.width}px` } : {}),
    ...(lockedDims.height ? { minHeight: `${lockedDims.height}px` } : {}),
  };

  return {
    ref,
    style,
    recompute,
    isLocked: Boolean(lockedDims.width || lockedDims.height),
    lockedDimensions: lockedDims,
  };
}
