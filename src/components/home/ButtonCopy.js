import { useState } from 'react';
import copy from 'clipboard-copy';

const ButtonCopy = ({text}) => {
    const [isCopied, setIsCopied] = useState(false);
    const handleCopyClick = async () => {
        try {
          await copy(text);
          setIsCopied(true);
        } catch (error) {
          console.error('Failed to copy text to clipboard', error);
        }
      };
    return (
        <button onClick={handleCopyClick}>
            {isCopied ? 'Copied!' : 'Copy'}
        </button>
    );
};

export default ButtonCopy;