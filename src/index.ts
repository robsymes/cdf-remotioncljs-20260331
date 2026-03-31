// src/index.ts
import { registerRoot } from "remotion";
import * as MyCljsApp from "../public/js/main.js";

// Ensure CLJS is initialized
MyCljsApp.init();

// Explicitly call registerRoot here so the CLI detects it
const Root = MyCljsApp.get_root();
registerRoot(Root);
