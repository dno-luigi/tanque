/**
 * Static <head> metadata per locale. Read at build time by the localizeHtml
 * plugin in vite.config.js; never imported by application code, so it stays
 * out of the shipped bundles.
 */

export const meta = {
  en: {
    lang: 'en',
    title: 'The Letter That Never Arrived — a public record',
    description:
      'Five years and eight months in custody, a negative lab result that was never disclosed, and an exoneration notice mailed to the wrong address. A public reconstruction of the record, one certified document at a time.',
    ogTitle: 'The Letter That Never Arrived',
    ogDescription:
      'A suppressed negative lab result. A notice sent to the wrong address. Five years and eight months. The record, assembled in public.',
  },
  es: {
    lang: 'es',
    title: 'La carta que nunca llegó — un expediente público',
    description:
      'Cinco años y ocho meses en prisión, un resultado de laboratorio negativo que nunca se le mostró y un aviso enviado a la dirección equivocada. Una reconstrucción pública del expediente, un documento certificado a la vez.',
    ogTitle: 'La carta que nunca llegó',
    ogDescription:
      'Un resultado negativo que se retuvo. Un aviso enviado a la casa equivocada. Cinco años y ocho meses. El expediente, armado en público.',
  },
}
