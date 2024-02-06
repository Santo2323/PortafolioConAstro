export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/about_FsrbJ-S2.mjs').then(n => n.b);

export { page };
