import { createRoot } from "react-dom/client";
import Page from "./useEffect/App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Page />);
