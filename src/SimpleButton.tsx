import { css } from "@linaria/core";
import { ComponentChildren, VNode, h } from "preact";
import { theme } from "./style.js";

export function SimpleButton({
  children,
}: {
  children: ComponentChildren;
}): VNode {
  return (
    <button
      class={css`
        background-color: ${theme.color};
      `}
    >
      {children}
    </button>
  );
}
