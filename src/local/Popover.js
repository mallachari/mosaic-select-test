import React from 'react';
import {DismissButton, useOverlayTrigger} from '@react-aria/overlays';

import { Overlay } from '.';
// import type {AriaPopoverProps} from 'react-aria';
// import type {OverlayTriggerState} from 'react-stately';

// interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
//   children: React.ReactNode;
//   state: OverlayTriggerState;
// }

export function Popover({ children, state, ...props }) {
  let popoverRef = React.useRef(null);
  // let { popoverProps, underlayProps } = usePopover({
  //   ...props,
  //   popoverRef
  // }, state);

  // const {} = useOverlayTrigger({ type: 'dialog' }, state, );
  return (
    <Overlay isOpen={state.isOpen}>
      <div style={{ position: 'fixed', inset: 0 }} />
      <div
        // {...popoverProps}
        ref={popoverRef}
        style={{
          // ...popoverProps.style,
          background: 'var(--page-background)',
          border: '1px solid gray'
        }}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}
