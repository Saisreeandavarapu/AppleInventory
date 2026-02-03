import { memo } from 'react';

const Footer = () => {
  return (
    <div>
    <div className='w-full h-10 bg-black text-white/50 text-center'>
        Copyright © 2026 Trignosys Inc. All rights reserved.
    </div>
    </div>
  );
};

export default memo(Footer);