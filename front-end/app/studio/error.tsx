'use client';

import React, { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to the console
    console.error("Studio Page Error Captured:", error);
  }, [error]);

  return (
    <div className="bg-error/10 border border-error p-6 rounded-xl m-8 text-center">
      <h2 className="text-error font-bold text-xl mb-4">Đã xảy ra lỗi trên trang Studio!</h2>
      <p className="text-on-background mb-4 text-sm font-mono bg-surface p-4 rounded text-left overflow-auto break-words">
        {error.message}
      </p>
      <p className="text-on-surface-variant mb-4 text-xs font-mono bg-surface p-4 rounded text-left overflow-auto break-words whitespace-pre-wrap">
        {error.stack}
      </p>
      <button
        className="bg-primary text-on-primary px-4 py-2 rounded"
        onClick={() => reset()}
      >
        Thử lại
      </button>
    </div>
  );
}
