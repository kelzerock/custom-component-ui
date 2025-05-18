import { createRoot } from "react-dom/client";
import { App } from "./component/App";

const root = document.createElement("div");
document.body.append(root);
const container = createRoot(root);
container.render(<App />);
