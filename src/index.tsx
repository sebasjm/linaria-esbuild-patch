import { h, render } from "preact";
import { Application } from "./Application.js";

const container = document.getElementById("container");
render(<Application />, container!);

