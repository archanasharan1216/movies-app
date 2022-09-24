import { createRoot } from "react-dom/client";

import App from "./App";
import { MovieContextProvider } from "./store/movie-context";

const container = document.getElementById("root") as Element;
const root = createRoot(container);
root.render(
  <MovieContextProvider>
    <App />
  </MovieContextProvider>
);
