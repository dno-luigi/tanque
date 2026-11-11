/**
 * The active locale's content bundle.
 *
 * The #content and #chrome specifiers are resolved to one language at build
 * time by the aliases in vite.config.js, so each edition ships only its own
 * copy — the Spanish build carries no English text and vice versa. Components
 * import from here and never from a locale file directly.
 *
 * To add a language: create site.<locale>.js and ui.<locale>.js, alias them,
 * add a build script, and add a wrangler.<locale>.jsonc.
 */

import * as content from '#content'
import { ui as chrome } from '#chrome'

export const locale = import.meta.env.VITE_LOCALE === 'es' ? 'es' : 'en'
export const ui = chrome

export const site = content.site
export const hero = content.hero
export const story = content.story
export const timeline = content.timeline
export const facts = content.facts
export const heck = content.heck
export const phases = content.phases
export const evidence = content.evidence
export const immunity = content.immunity
export const archive = content.archive
export const protocol = content.protocol
export const dispatch = content.dispatch
export const footer = content.footer
