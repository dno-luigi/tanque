/**
 * Static <head> metadata per locale. Read at build time by the localizeHtml
 * plugin in vite.config.js; never imported by application code, so it stays
 * out of the shipped bundles.
 */

export const meta = {
  en: {
    lang: 'en',
    title: 'A Letter Never Read',
    description:
      'Six years on a plea entered in one afternoon, and a negative laboratory analysis I was never shown. The record, in my own words.',
    ogTitle: 'A Letter Never Read',
    ogDescription:
      'A negative lab result I never saw. Five years and eight months served. The record, assembled in public.',
  },
  es: {
    lang: 'es',
    title: 'Una carta que nunca se leyó',
    description:
      'Seis años por una declaración hecha en una sola tarde, y un análisis de laboratorio negativo que nunca vi. El expediente, en mis propias palabras.',
    ogTitle: 'Una carta que nunca se leyó',
    ogDescription:
      'Un resultado de laboratorio negativo que nunca vi. Cinco años y ocho meses. El expediente, armado en público.',
  },
}
