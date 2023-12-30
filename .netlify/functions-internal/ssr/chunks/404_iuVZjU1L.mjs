export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/404_invK-ZzS.mjs').then(n => n._);

export { page };
