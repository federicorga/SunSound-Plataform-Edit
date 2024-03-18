import React, { useMemo } from 'react';

function IconArrowReload({ color }) {
  const iconStyle = useMemo(() => {
    return { fill: color };
  }, [color]);

  return (
    <svg   xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="-2 -2 19 19">
      <path style={iconStyle}  fill-rule="evenodd" d="M9.354.146A.5.5 0 0 0 8.5.5V2h-6A2.5 2.5 0 0 0 0 4.5V6a1 1 0 0 0 2 0V4.5a.5.5 0 0 1 .5-.5h6v1.5a.5.5 0 0 0 .854.354l2.5-2.5a.5.5 0 0 0 0-.708zM5.19 8.038a.5.5 0 0 1 .31.462V10h6a.5.5 0 0 0 .5-.5V8a1 1 0 1 1 2 0v1.5a2.5 2.5 0 0 1-2.5 2.5h-6v1.5a.5.5 0 0 1-.854.354l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .545-.108Z" clip-rule="evenodd"/>
    </svg>
  );
}

export default IconArrowReload;
