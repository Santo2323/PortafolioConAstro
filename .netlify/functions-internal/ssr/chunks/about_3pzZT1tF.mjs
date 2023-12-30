export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/about_yo-mG2wH.mjs').then(n => n.b);

export { page };
