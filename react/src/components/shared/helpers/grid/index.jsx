import React, { useMemo } from 'react';

const Grid = ({ children, cols, className, ...rest }) => {
  const classNameActual = useMemo(() => {
    let classNameActual = 'grid';
    if (cols) {
      classNameActual = classNameActual.concat(` grid-${cols}`);
    }

    return classNameActual;
  }, [cols]);

  return (
    <div className={`${classNameActual} ${className ?? ''}`} {...rest}>
      {children}
    </div>
  );
};

export default Grid;
