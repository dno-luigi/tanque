/**
 * The active locale's content bundle.
 *
 * The #content and #chrome specifiers are resolved to one language at build
 * time by the aliases in vite.config.js, so each edition ships only its own
 * copy — the Spanish build carries no English text and vice versa. Components
 * import from here and never from a locale file directly.
 */

import * as content from '#content'
import { ui as chrome } from '#chrome'

export const locale = import.meta.env.VITE_LOCALE === 'es' ? 'es' : 'en'
export const ui = chrome

export const site = content.site
export const hero = content.hero
export const sections = content.sections
export const footer = content.footer
