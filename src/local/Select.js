import React from 'react';
import {Item} from '@react-stately/collections';
import {useSelectState} from '@react-stately/select';
import {HiddenSelect, useSelect} from '@react-aria/select';

// Reuse the ListBox, Popover, and Button from your component library. See below for details.
import {Button, ListBox, Popover} from '.';

export function Select(props) {
  // Create state based on the incoming props
  let state = useSelectState(props);

  // Get props for child elements from useSelect
  let ref = React.useRef(null);
  let {
    labelProps,
    triggerProps,
    valueProps,
    menuProps
  } = useSelect(props, state, ref);

  return (
    <div style={{ display: 'inline-block' }}>
      <div {...labelProps}>{props.label}</div>
      <HiddenSelect
        isDisabled={props.isDisabled}
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <Button
        {...triggerProps}
        buttonRef={ref}
        style={{ height: 30, fontSize: 14 }}
      >
        <span {...valueProps}>
          {state.selectedItem
            ? state.selectedItem.rendered
            : 'Select an option'}
        </span>
        <span
          aria-hidden="true"
          style={{ paddingLeft: 5 }}
        >
          ▼
        </span>
      </Button>
      {state.isOpen &&
        (
          <Popover state={state} triggerRef={ref} placement="bottom start">
            <ListBox
              {...menuProps}
              state={state}
            />
          </Popover>
        )}
    </div>
  );
}

<Select label="Favorite Color">
  <Item>Red</Item>
  <Item>Orange</Item>
  <Item>Yellow</Item>
  <Item>Green</Item>
  <Item>Blue</Item>
  <Item>Purple</Item>
  <Item>Black</Item>
  <Item>White</Item>
  <Item>Lime</Item>
  <Item>Fushsia</Item>
</Select>
