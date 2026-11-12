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
      'Six years on a plea entered in one afternoon, and a laboratory result I have never read. The record, in my own words.',
    ogTitle: 'A Letter Never Read',
    ogDescription:
      'A lab result I have never read. Five years and eight months served. The record, assembled in public.',
  },
  es: {
    lang: 'es',
    title: 'Una carta que nunca se leyó',
    description:
      'Seis años por una declaración hecha en una sola tarde, y un resultado de laboratorio que nunca leí. El expediente, en mis propias palabras.',
    ogTitle: 'Una carta que nunca se leyó',
    ogDescription:
      'Un resultado de laboratorio que nunca leí. Cinco años y ocho meses. El expediente, armado en público.',
  },
}
