/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_7Qy-BraY.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$Hero, b as $$BaseLayout } from './404_JvODm0Nx.mjs';
import { a as $$ContactCTA } from './about_FsrbJ-S2.mjs';
import { $ as $$Grid, p as projects, a as $$PortfolioPreview } from './index_LeIGfdbV.mjs';

const $$Astro = createAstro();
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Work;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Work | Santiago Beron de Astrada", "description": "Learn about Jeanine White's most recent projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack gap-8"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "My Work", "tagline": "See my most recent projects below to get an idea of my past experience.", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })} </li>`)}` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </div> ` })}
../content/data/_projects.js`;
}, "/Users/beron-de-astrada/Desktop/Proyectos/Proyectos Personales/portfolio-template/portafolio-template/src/pages/work.astro", void 0);

const $$file = "/Users/beron-de-astrada/Desktop/Proyectos/Proyectos Personales/portfolio-template/portafolio-template/src/pages/work.astro";
const $$url = "/work";

export { $$Work as default, $$file as file, $$url as url };
