import React, { useMemo } from 'react';

const Container = (size, props) => {
  const classNameActual = useMemo(() => props.className ?? '', [props.className]);

  return (
    <div className={`container-${size} ${classNameActual}`} id={props.id ? props.id : null}>
      {props.children}
    </div>
  );
};

export const ContainerFULL = (props) => Container('full', props);
export const ContainerXS = (props) => Container('xs', props);
export const ContainerSM = (props) => Container('sm', props);
export const ContainerMD = (props) => Container('md', props);
export const ContainerLG = (props) => Container('lg', props);
