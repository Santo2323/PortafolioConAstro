import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_0S3WieWb.mjs';

const _page0  = () => import('./chunks/generic_apJZ3nfd.mjs');
const _page1  = () => import('./chunks/index_rehvMoha.mjs');
const _page2  = () => import('./chunks/about_Y1nTYFaL.mjs');
const _page3  = () => import('./chunks/_.._EgLo_Hwp.mjs');
const _page4  = () => import('./chunks/work_BLrF_J2K.mjs');
const _page5  = () => import('./chunks/404_1E9kZFMg.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/about.astro", _page2],["src/pages/work/[...slug].astro", _page3],["src/pages/work.astro", _page4],["src/pages/404.astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };