// // src/index.ts
// import { registerRoot } from "remotion";
// import * as MyCljsApp from "../public/js/main.js";

// // Ensure CLJS is initialized
// MyCljsApp.init();

// // Explicitly call registerRoot here so the CLI detects it
// const Root = MyCljsApp.get_root();
// registerRoot(Root);

// src/index.ts
import { registerRoot } from "remotion";
import { init, get_root } from "../public/js/main.js";

// 1. Initialize your CLJS logic
init();

// 2. Get the Reactified component from CLJS
const RootComponent = get_root();

// 3. Register it so Remotion CLI is happy
registerRoot(RootComponent);
