import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'string-width';
import './chunks/astro_S27EQKvg.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Kq8yhXMg.js"}],"styles":[{"type":"external","src":"/_astro/about.mO8ALVeQ.css"},{"type":"inline","content":".grid[data-astro-cid-vc5tsdmu]{display:grid;grid-auto-rows:1fr;gap:1rem;list-style:none;padding:0}.grid[data-astro-cid-vc5tsdmu].small{grid-template-columns:1fr 1fr;gap:1.5rem}.grid[data-astro-cid-vc5tsdmu].small>:last-child:nth-child(odd){grid-column:1 / 3}@media (min-width: 50em){.grid[data-astro-cid-vc5tsdmu]{grid-template-columns:1fr 1fr;gap:4rem}.grid[data-astro-cid-vc5tsdmu].offset{--row-offset: 7.5rem;padding-bottom:var(--row-offset)}.grid[data-astro-cid-vc5tsdmu].offset>:nth-child(odd){transform:translateY(var(--row-offset))}.grid[data-astro-cid-vc5tsdmu].offset>:last-child:nth-child(odd){grid-column:2 / 3;transform:none}.grid[data-astro-cid-vc5tsdmu].small{display:flex;flex-wrap:wrap;justify-content:center;gap:2rem}.grid[data-astro-cid-vc5tsdmu].small>*{flex-basis:20rem}}.card[data-astro-cid-lgkm4u2a]{display:grid;grid-template:auto 1fr / auto 1fr;height:11rem;background:var(--gradient-subtle);border:1px solid var(--gray-800);border-radius:.75rem;overflow:hidden;box-shadow:var(--shadow-sm);text-decoration:none;font-family:var(--font-brand);font-size:var(--text-lg);font-weight:500;transition:box-shadow var(--theme-transition)}.card[data-astro-cid-lgkm4u2a]:hover{box-shadow:var(--shadow-md)}.title[data-astro-cid-lgkm4u2a]{grid-area:1 / 1 / 2 / 2;z-index:1;margin:.5rem;padding:.5rem 1rem;background:var(--gray-999);color:var(--gray-200);border-radius:.375rem}img[data-astro-cid-lgkm4u2a]{grid-area:1 / 1 / 3 / 3;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}@media (min-width: 50em){.card[data-astro-cid-lgkm4u2a]{height:22rem;border-radius:1.5rem}.title[data-astro-cid-lgkm4u2a]{border-radius:.9375rem}}\n.pill[data-astro-cid-2qeywk4b]{display:flex;padding:.5rem 1rem;gap:.5rem;color:var(--accent-text-over);border:1px solid var(--accent-regular);background-color:var(--accent-regular);border-radius:999rem;justify-content:center;font-size:var(--text-md);line-height:1.35;white-space:nowrap}\na[data-astro-cid-balv45lp]{position:relative;display:flex;place-content:center;text-align:center;padding:.56em 2em;gap:.8em;color:var(--accent-text-over);text-decoration:none;line-height:1.1;border-radius:999rem;overflow:hidden;background:var(--gradient-accent-orange);box-shadow:var(--shadow-md);white-space:nowrap}@media (min-width: 20em){a[data-astro-cid-balv45lp]{font-size:var(--text-lg)}}a[data-astro-cid-balv45lp]:after{content:\"\";position:absolute;inset:0;pointer-events:none;transition:background-color var(--theme-transition);mix-blend-mode:overlay}a[data-astro-cid-balv45lp]:focus:after,a[data-astro-cid-balv45lp]:hover:after{background-color:hsla(var(--gray-999-basis),.3)}@media (min-width: 50em){a[data-astro-cid-balv45lp]{padding:1.125rem 2.5rem;font-size:var(--text-xl)}}aside[data-astro-cid-rcdzuq3a]{display:flex;flex-direction:column;align-items:center;gap:3rem;border-top:1px solid var(--gray-800);border-bottom:1px solid var(--gray-800);padding:5rem 1.5rem;background-color:var(--gray-999_40);box-shadow:var(--shadow-sm)}h2[data-astro-cid-rcdzuq3a]{font-size:var(--text-xl);text-align:center;max-width:15ch}@media (min-width: 50em){aside[data-astro-cid-rcdzuq3a]{padding:7.5rem;flex-direction:row;flex-wrap:wrap;justify-content:space-between}h2[data-astro-cid-rcdzuq3a]{font-size:var(--text-3xl);text-align:left}}\n.box[data-astro-cid-ab4ihpzs]{border:1px solid var(--gray-800);border-radius:.75rem;padding:1.5rem;background-color:var(--gray-999_40);box-shadow:var(--shadow-sm)}.skills[data-astro-cid-ab4ihpzs]{display:flex;flex-direction:column;gap:3rem}.skills[data-astro-cid-ab4ihpzs] h2[data-astro-cid-ab4ihpzs]{font-size:var(--text-lg)}.skills[data-astro-cid-ab4ihpzs] p[data-astro-cid-ab4ihpzs]{color:var(--gray-400)}@media (min-width: 50em){.box[data-astro-cid-ab4ihpzs]{border-radius:1.5rem;padding:2.5rem}.skills[data-astro-cid-ab4ihpzs]{display:grid;grid-template-columns:repeat(3,1fr);gap:5rem}.skills[data-astro-cid-ab4ihpzs] h2[data-astro-cid-ab4ihpzs]{font-size:var(--text-2xl)}}.hero[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;align-items:center;gap:2rem}.roles[data-astro-cid-j7pv25f6]{display:flex;flex-wrap:wrap}.column1[data-astro-cid-j7pv25f6]{flex:1;margin-right:1rem;margin-bottom:.5rem}.hero[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{aspect-ratio:5 / 4;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top;border-radius:1.5rem;box-shadow:var(--shadow-md)}@media (min-width: 50em){.hero[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:6fr 4fr;padding-inline:2.5rem;gap:3.75rem}.roles[data-astro-cid-j7pv25f6]{margin-top:.5rem;display:flex;gap:.5rem}.hero[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{aspect-ratio:3 / 4;border-radius:4.5rem;-o-object-fit:cover;object-fit:cover}}.section[data-astro-cid-j7pv25f6]{display:grid;gap:1rem}.with-background[data-astro-cid-j7pv25f6]{position:relative}.with-background[data-astro-cid-j7pv25f6]:before{--hero-bg: var(--bg-image-subtle-2);content:\"\";position:absolute;pointer-events:none;left:50%;width:100vw;aspect-ratio:calc(2.25 / var(--bg-scale));top:0;transform:translateY(-75%) translate(-50%);background:url(/assets/backgrounds/noise.png) top center/220px repeat,var(--hero-bg) center center / var(--bg-gradient-size) no-repeat,var(--gray-999);background-blend-mode:overlay,normal,normal,normal;mix-blend-mode:var(--bg-blend-mode);z-index:-1}.with-background[data-astro-cid-j7pv25f6].bg-variant:before{--hero-bg: var(--bg-image-subtle-1)}.section-header[data-astro-cid-j7pv25f6]{justify-self:center;text-align:center;max-width:50ch;font-size:var(--text-md);color:var(--gray-300)}.section-header[data-astro-cid-j7pv25f6] h3[data-astro-cid-j7pv25f6]{font-size:var(--text-2xl)}@media (min-width: 50em){.section[data-astro-cid-j7pv25f6]{grid-template-columns:repeat(4,1fr);grid-template-areas:\"header header header header\" \"gallery gallery gallery gallery\";gap:5rem}.section[data-astro-cid-j7pv25f6].with-cta{grid-template-areas:\"header header header cta\" \"gallery gallery gallery gallery\"}.section-header[data-astro-cid-j7pv25f6]{grid-area:header;font-size:var(--text-lg)}.section-header[data-astro-cid-j7pv25f6] h3[data-astro-cid-j7pv25f6]{font-size:var(--text-4xl)}.with-cta[data-astro-cid-j7pv25f6] .section-header[data-astro-cid-j7pv25f6]{justify-self:flex-start;text-align:left}.gallery[data-astro-cid-j7pv25f6]{grid-area:gallery}.cta[data-astro-cid-j7pv25f6]{grid-area:cta}}.mention-card[data-astro-cid-j7pv25f6]{display:flex;height:7rem;justify-content:center;align-items:center;text-align:center;border:1px solid var(--gray-800);border-radius:1.5rem;color:var(--gray-300);background:var(--gradient-subtle);box-shadow:var(--shadow-sm)}@media (min-width: 50em){.mention-card[data-astro-cid-j7pv25f6]{border-radius:1.5rem;height:9.5rem}}\nsvg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Kq8yhXMg.js"}],"styles":[{"type":"external","src":"/_astro/about.mO8ALVeQ.css"},{"type":"inline","content":"a[data-astro-cid-balv45lp]{position:relative;display:flex;place-content:center;text-align:center;padding:.56em 2em;gap:.8em;color:var(--accent-text-over);text-decoration:none;line-height:1.1;border-radius:999rem;overflow:hidden;background:var(--gradient-accent-orange);box-shadow:var(--shadow-md);white-space:nowrap}@media (min-width: 20em){a[data-astro-cid-balv45lp]{font-size:var(--text-lg)}}a[data-astro-cid-balv45lp]:after{content:\"\";position:absolute;inset:0;pointer-events:none;transition:background-color var(--theme-transition);mix-blend-mode:overlay}a[data-astro-cid-balv45lp]:focus:after,a[data-astro-cid-balv45lp]:hover:after{background-color:hsla(var(--gray-999-basis),.3)}@media (min-width: 50em){a[data-astro-cid-balv45lp]{padding:1.125rem 2.5rem;font-size:var(--text-xl)}}aside[data-astro-cid-rcdzuq3a]{display:flex;flex-direction:column;align-items:center;gap:3rem;border-top:1px solid var(--gray-800);border-bottom:1px solid var(--gray-800);padding:5rem 1.5rem;background-color:var(--gray-999_40);box-shadow:var(--shadow-sm)}h2[data-astro-cid-rcdzuq3a]{font-size:var(--text-xl);text-align:center;max-width:15ch}@media (min-width: 50em){aside[data-astro-cid-rcdzuq3a]{padding:7.5rem;flex-direction:row;flex-wrap:wrap;justify-content:space-between}h2[data-astro-cid-rcdzuq3a]{font-size:var(--text-3xl);text-align:left}}\n.about[data-astro-cid-kh7btl4r]{display:flex;flex-direction:column;gap:3.5rem}img[data-astro-cid-kh7btl4r]{margin-top:1.5rem;border-radius:1.5rem;box-shadow:var(--shadow-md)}section[data-astro-cid-kh7btl4r]{display:flex;flex-direction:column;gap:.5rem;color:var(--gray-200)}.section-title[data-astro-cid-kh7btl4r]{grid-column-start:1;font-size:var(--text-xl);color:var(--gray-0)}.content[data-astro-cid-kh7btl4r]{grid-column:2 / 4}.content[data-astro-cid-kh7btl4r] a{-webkit-text-decoration:1px solid underline transparent;text-decoration:1px solid underline transparent;text-underline-offset:.25em;transition:text-decoration-color var(--theme-transition)}.content[data-astro-cid-kh7btl4r] a:hover,.content[data-astro-cid-kh7btl4r] a:focus{text-decoration-color:currentColor}@media (min-width: 50em){.about[data-astro-cid-kh7btl4r]{display:grid;grid-template-columns:1fr 60% 1fr}.about[data-astro-cid-kh7btl4r]>:first-child{grid-column-start:2}section[data-astro-cid-kh7btl4r]{display:contents;font-size:var(--text-lg)}}\nsvg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Kq8yhXMg.js"}],"styles":[{"type":"external","src":"/_astro/about.mO8ALVeQ.css"},{"type":"inline","content":"a[data-astro-cid-balv45lp]{position:relative;display:flex;place-content:center;text-align:center;padding:.56em 2em;gap:.8em;color:var(--accent-text-over);text-decoration:none;line-height:1.1;border-radius:999rem;overflow:hidden;background:var(--gradient-accent-orange);box-shadow:var(--shadow-md);white-space:nowrap}@media (min-width: 20em){a[data-astro-cid-balv45lp]{font-size:var(--text-lg)}}a[data-astro-cid-balv45lp]:after{content:\"\";position:absolute;inset:0;pointer-events:none;transition:background-color var(--theme-transition);mix-blend-mode:overlay}a[data-astro-cid-balv45lp]:focus:after,a[data-astro-cid-balv45lp]:hover:after{background-color:hsla(var(--gray-999-basis),.3)}@media (min-width: 50em){a[data-astro-cid-balv45lp]{padding:1.125rem 2.5rem;font-size:var(--text-xl)}}aside[data-astro-cid-rcdzuq3a]{display:flex;flex-direction:column;align-items:center;gap:3rem;border-top:1px solid var(--gray-800);border-bottom:1px solid var(--gray-800);padding:5rem 1.5rem;background-color:var(--gray-999_40);box-shadow:var(--shadow-sm)}h2[data-astro-cid-rcdzuq3a]{font-size:var(--text-xl);text-align:center;max-width:15ch}@media (min-width: 50em){aside[data-astro-cid-rcdzuq3a]{padding:7.5rem;flex-direction:row;flex-wrap:wrap;justify-content:space-between}h2[data-astro-cid-rcdzuq3a]{font-size:var(--text-3xl);text-align:left}}\nsvg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}\n.pill[data-astro-cid-2qeywk4b]{display:flex;padding:.5rem 1rem;gap:.5rem;color:var(--accent-text-over);border:1px solid var(--accent-regular);background-color:var(--accent-regular);border-radius:999rem;justify-content:center;font-size:var(--text-md);line-height:1.35;white-space:nowrap}\nheader[data-astro-cid-qwekciqp]{padding-bottom:2.5rem;border-bottom:1px solid var(--gray-800)}.back-link[data-astro-cid-qwekciqp]{display:none}.details[data-astro-cid-qwekciqp]{display:flex;flex-direction:column;padding:.5rem;gap:1.5rem;justify-content:space-between;align-items:center}.tags[data-astro-cid-qwekciqp]{display:flex;gap:.5rem}.description[data-astro-cid-qwekciqp]{font-size:var(--text-lg);max-width:54ch}.content[data-astro-cid-qwekciqp]{max-width:65ch;margin-inline:auto}.content[data-astro-cid-qwekciqp]>*+*{margin-top:1rem}.content[data-astro-cid-qwekciqp] h1,.content[data-astro-cid-qwekciqp] h2,.content[data-astro-cid-qwekciqp] h3,.content[data-astro-cid-qwekciqp] h4,.content[data-astro-cid-qwekciqp] h5{margin:1.5rem 0}.content[data-astro-cid-qwekciqp] img{border-radius:1.5rem;box-shadow:var(--shadow-sm);background:var(--gradient-subtle);border:1px solid var(--gray-800)}.content[data-astro-cid-qwekciqp] blockquote{font-size:var(--text-lg);font-family:var(--font-brand);font-weight:600;line-height:1.1;padding-inline-start:1.5rem;border-inline-start:.25rem solid var(--accent-dark);color:var(--gray-0)}.back-link[data-astro-cid-qwekciqp],.content[data-astro-cid-qwekciqp] a{-webkit-text-decoration:1px solid underline transparent;text-decoration:1px solid underline transparent;text-underline-offset:.25em;transition:text-decoration-color var(--theme-transition)}.back-link[data-astro-cid-qwekciqp]:hover,.back-link[data-astro-cid-qwekciqp]:focus,.content[data-astro-cid-qwekciqp] a:hover,.content[data-astro-cid-qwekciqp] a:focus{text-decoration-color:currentColor}@media (min-width: 50em){.back-link[data-astro-cid-qwekciqp]{display:block;align-self:flex-start}.details[data-astro-cid-qwekciqp]{flex-direction:row;gap:2.5rem}.content[data-astro-cid-qwekciqp] blockquote{font-size:var(--text-2xl)}}\n"}],"routeData":{"route":"/work/[...slug]","type":"page","pattern":"^\\/work(?:\\/(.*?))?\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/work/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Kq8yhXMg.js"}],"styles":[{"type":"external","src":"/_astro/about.mO8ALVeQ.css"},{"type":"inline","content":"a[data-astro-cid-balv45lp]{position:relative;display:flex;place-content:center;text-align:center;padding:.56em 2em;gap:.8em;color:var(--accent-text-over);text-decoration:none;line-height:1.1;border-radius:999rem;overflow:hidden;background:var(--gradient-accent-orange);box-shadow:var(--shadow-md);white-space:nowrap}@media (min-width: 20em){a[data-astro-cid-balv45lp]{font-size:var(--text-lg)}}a[data-astro-cid-balv45lp]:after{content:\"\";position:absolute;inset:0;pointer-events:none;transition:background-color var(--theme-transition);mix-blend-mode:overlay}a[data-astro-cid-balv45lp]:focus:after,a[data-astro-cid-balv45lp]:hover:after{background-color:hsla(var(--gray-999-basis),.3)}@media (min-width: 50em){a[data-astro-cid-balv45lp]{padding:1.125rem 2.5rem;font-size:var(--text-xl)}}aside[data-astro-cid-rcdzuq3a]{display:flex;flex-direction:column;align-items:center;gap:3rem;border-top:1px solid var(--gray-800);border-bottom:1px solid var(--gray-800);padding:5rem 1.5rem;background-color:var(--gray-999_40);box-shadow:var(--shadow-sm)}h2[data-astro-cid-rcdzuq3a]{font-size:var(--text-xl);text-align:center;max-width:15ch}@media (min-width: 50em){aside[data-astro-cid-rcdzuq3a]{padding:7.5rem;flex-direction:row;flex-wrap:wrap;justify-content:space-between}h2[data-astro-cid-rcdzuq3a]{font-size:var(--text-3xl);text-align:left}}\n.grid[data-astro-cid-vc5tsdmu]{display:grid;grid-auto-rows:1fr;gap:1rem;list-style:none;padding:0}.grid[data-astro-cid-vc5tsdmu].small{grid-template-columns:1fr 1fr;gap:1.5rem}.grid[data-astro-cid-vc5tsdmu].small>:last-child:nth-child(odd){grid-column:1 / 3}@media (min-width: 50em){.grid[data-astro-cid-vc5tsdmu]{grid-template-columns:1fr 1fr;gap:4rem}.grid[data-astro-cid-vc5tsdmu].offset{--row-offset: 7.5rem;padding-bottom:var(--row-offset)}.grid[data-astro-cid-vc5tsdmu].offset>:nth-child(odd){transform:translateY(var(--row-offset))}.grid[data-astro-cid-vc5tsdmu].offset>:last-child:nth-child(odd){grid-column:2 / 3;transform:none}.grid[data-astro-cid-vc5tsdmu].small{display:flex;flex-wrap:wrap;justify-content:center;gap:2rem}.grid[data-astro-cid-vc5tsdmu].small>*{flex-basis:20rem}}.card[data-astro-cid-lgkm4u2a]{display:grid;grid-template:auto 1fr / auto 1fr;height:11rem;background:var(--gradient-subtle);border:1px solid var(--gray-800);border-radius:.75rem;overflow:hidden;box-shadow:var(--shadow-sm);text-decoration:none;font-family:var(--font-brand);font-size:var(--text-lg);font-weight:500;transition:box-shadow var(--theme-transition)}.card[data-astro-cid-lgkm4u2a]:hover{box-shadow:var(--shadow-md)}.title[data-astro-cid-lgkm4u2a]{grid-area:1 / 1 / 2 / 2;z-index:1;margin:.5rem;padding:.5rem 1rem;background:var(--gray-999);color:var(--gray-200);border-radius:.375rem}img[data-astro-cid-lgkm4u2a]{grid-area:1 / 1 / 3 / 3;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}@media (min-width: 50em){.card[data-astro-cid-lgkm4u2a]{height:22rem;border-radius:1.5rem}.title[data-astro-cid-lgkm4u2a]{border-radius:.9375rem}}\nsvg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}\n"}],"routeData":{"route":"/work","type":"page","pattern":"^\\/work\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work.astro","pathname":"/work","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Kq8yhXMg.js"}],"styles":[{"type":"external","src":"/_astro/about.mO8ALVeQ.css"},{"type":"inline","content":"svg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}\n"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/beron-de-astrada/Desktop/Proyectos/Proyectos Personales/portfolio-template/portafolio-template/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["/Users/beron-de-astrada/Desktop/Proyectos/Proyectos Personales/portfolio-template/portafolio-template/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["/Users/beron-de-astrada/Desktop/Proyectos/Proyectos Personales/portfolio-template/portafolio-template/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/beron-de-astrada/Desktop/Proyectos/Proyectos Personales/portfolio-template/portafolio-template/src/pages/work.astro",{"propagation":"in-tree","containsHead":true}],["/Users/beron-de-astrada/Desktop/Proyectos/Proyectos Personales/portfolio-template/portafolio-template/src/pages/work/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/beron-de-astrada/Desktop/Proyectos/Proyectos Personales/portfolio-template/portafolio-template/src/layouts/BaseLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/work@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/work/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/about.astro":"chunks/pages/about_rb7QX6HT.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_kkchnqbT.mjs","/src/pages/work.astro":"chunks/pages/work_O_B04f0R.mjs","\u0000@astrojs-manifest":"manifest_7RoYZj9H.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_MBYkaFVg.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_SBqK1fEc.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_XHU5Ytu9.mjs","\u0000@astro-page:src/pages/work/[...slug]@_@astro":"chunks/_.._zQ_GWiHd.mjs","\u0000@astro-page:src/pages/work@_@astro":"chunks/work_wZOeyF3Y.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_VWP3ltns.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Kq8yhXMg.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.mO8ALVeQ.css","/favicon.svg","/_astro/hoisted.Kq8yhXMg.js","/assets/at-work.jpg","/assets/book.png","/assets/burbuja-dialogo.png","/assets/lupa.png","/assets/makesi.png","/assets/makesi1.png","/assets/medical-app.png","/assets/mf-seguridad.png","/assets/portrait.jpg","/assets/portrait1.jpg","/assets/portrait2.jpg","/assets/portrait3.jpg","/assets/stock-1.jpg","/assets/stock-2.jpg","/assets/stock-3.jpg","/assets/stock-4.jpg","/assets/tasty-dough.png","/assets/backgrounds/bg-footer-dark-1440w.jpg","/assets/backgrounds/bg-footer-dark-800w.jpg","/assets/backgrounds/bg-footer-light-1440w.jpg","/assets/backgrounds/bg-footer-light-800w.jpg","/assets/backgrounds/bg-main-dark-1440w.jpg","/assets/backgrounds/bg-main-dark-800w.jpg","/assets/backgrounds/bg-main-dark.svg","/assets/backgrounds/bg-main-light-1440w.jpg","/assets/backgrounds/bg-main-light-800w.jpg","/assets/backgrounds/bg-main-light.svg","/assets/backgrounds/bg-subtle-1-dark-1440w.jpg","/assets/backgrounds/bg-subtle-1-dark-800w.jpg","/assets/backgrounds/bg-subtle-1-light-1440w.jpg","/assets/backgrounds/bg-subtle-1-light-800w.jpg","/assets/backgrounds/bg-subtle-2-dark-1440w.jpg","/assets/backgrounds/bg-subtle-2-dark-800w.jpg","/assets/backgrounds/bg-subtle-2-light-1440w.jpg","/assets/backgrounds/bg-subtle-2-light-800w.jpg","/assets/backgrounds/noise.png"]});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
