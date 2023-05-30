import { Fragment, h, VNode } from "preact";
import { SimpleButton } from "./SimpleButton.js";
import { theme, Title } from "./style.js";
export function Application(): VNode {
  return (
    <div>
      <Title>asd</Title>
      <SimpleButton>hi {theme.color}</SimpleButton>
    </div>
  );
}
