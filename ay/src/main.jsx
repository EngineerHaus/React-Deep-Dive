import { initRenderer } from './renderer';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container not found');
}

initRenderer(container);
