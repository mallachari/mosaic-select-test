import * as React from 'react';
import ReactDOM from 'react-dom';


function Overlay(props, ref) {
  let { children, isOpen, container } = props;

  let mountOverlay = isOpen;
  if (!mountOverlay || typeof window === 'undefined') {
    // Don't bother showing anything if we don't have to.
    return null;
  }

  let contents = (
    <div ref={ref}>
      <div>{children}</div>
    </div>
  );

  const portalContainer = container || document.body;

  return ReactDOM.createPortal(contents, portalContainer);
}

let _Overlay = React.forwardRef(Overlay);

export { _Overlay as Overlay };
