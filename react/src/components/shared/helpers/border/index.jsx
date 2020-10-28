import React, { useMemo } from 'react';

const Bordered = ({ children, rounded, position, className, ...rest }) => {
  const classNameActual = useMemo(() => {
    let classNameActual = 'border-default';
    if (rounded) {
      classNameActual = classNameActual.concat(' border-rounded');
    }
    if (position) {
      classNameActual = classNameActual.concat(` border-${position}`);
    }

    return classNameActual;
  }, [rounded, position]);

  return (
    <div className={`${classNameActual} ${className ?? ''}`} {...rest}>
      {children}
    </div>
  );
};

export default Bordered;
