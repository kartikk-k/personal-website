import { cn } from '@/lib/utils';
import { CopyIcon } from 'lucide-react';
import React, { useEffect, useRef } from 'react';


const CodeContainer: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className, ...attr }) => {

  const codeContainerRef = useRef<HTMLDivElement>(null);

  // const copyTextFromElement = (element: HTMLElement) => {
  //   const range = document.createRange();
  //   range.selectNodeContents(element);
  //   const selection = window.getSelection();
  //   if (selection) {
  //     selection.removeAllRanges();
  //     selection.addRange(range);
  //     const text = selection.toString().replace(/tsx|`/g, '');
  //     navigator.clipboard.writeText(text);
  //     selection.removeAllRanges();
  //   }
  // }

  return (
    <div className={cn('code-container relative group', className)} {...attr}>
      <div ref={codeContainerRef}>
        {attr?.children}

      </div>
      
    </div>
  );
};

export default CodeContainer;