import { createRoot } from 'react-dom/client';
import App from './App';
import { resetCallIndex } from './myUseState';

let root = null;

export function initRenderer(container) {
  root = createRoot(container);
  render();
}

export function render() {
  if (!root) {
    throw new Error('Renderer not initialized');
  }
  resetCallIndex();
  root.render(<App />);
}
