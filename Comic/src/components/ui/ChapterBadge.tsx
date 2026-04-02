import React from 'react';

export function ChapterBadge({ chapter, title, inverted = false }: { chapter: string, title: string, inverted?: boolean }) {
  return (
    <div className={`inline-block font-mono text-xs uppercase px-3 py-1 mb-4 shadow-hard-red ${inverted ? 'bg-blood text-white border-ink border-[3px]' : 'bg-ink text-paper'}`}>
      // CAPÍTULO {chapter} — {title} //
    </div>
  );
}
