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
      'Three gang allegations and a strike, stacked on one possession count. Six years imposed. The lab result is a document I have never read.',
    ogTitle: 'A Letter Never Read',
    ogDescription:
      'No arrest date on the docket. 131 actual days in custody. Six years imposed. The record of People v. Campos, FVI802230.',
  },
  es: {
    lang: 'es',
    title: 'Una carta que nunca se leyó',
    description:
      'Tres agravantes de pandilla y una condena previa, apiladas sobre un solo cargo de posesión. Seis años impuestos. El resultado del laboratorio es un documento que nunca leí.',
    ogTitle: 'Una carta que nunca se leyó',
    ogDescription:
      'Sin fecha de arresto en el expediente. 131 días efectivos bajo custodia. Seis años impuestos. El expediente de People v. Campos, FVI802230.',
  },
}
