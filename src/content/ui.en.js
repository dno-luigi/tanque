/** English interface chrome: navigation, buttons, captions, aria labels. */

export const ui = {
  // The other edition. An empty href hides the switch; fill it in once that
  // edition has a public address.
  altLocale: {
    label: 'Español',
    short: 'ES',
    lang: 'es',
    href: '',
    aria: 'Ver esta página en español',
  },
  skip: 'Skip to the record',
  nav: {
    story: 'Story',
    gate: 'Gate',
    plan: 'Plan',
    archive: 'Archive',
    dispatch: 'Dispatch',
    sections: 'Sections',
    cta: 'Dispatch',
    brandSub: '/ open record',
    topOfPage: 'top of page',
  },
  hero: {
    readRecord: 'Read the record',
    whyCannotSue: 'Why we can’t sue yet',
    paperRef: 'FORM 12-B',
    paperNote: 'Subject address on file with the department.',
  },
  story: {
    custody: 'Custody',
    custodyValue: '5 years, 8 months',
    conviction: 'Conviction',
    convictionValue: 'standing',
    nextFiling: 'Next filing',
    nextFilingValue: 'motion to vacate',
  },
  heck: { groupAria: 'Status of the criminal conviction', ourRoute: 'Our route' },
  phases: { label: 'Phase', output: 'Output' },
  evidence: { proves: 'What it proves' },
  immunity: { takeawayLabel: 'The sentence that matters' },
  archive: {
    footCertified: '{held} of {total} documents certified and published',
    footUpdated: 'Last updated on publication of each record · no unverified uploads',
  },
  dispatch: {
    copySummary: 'Copy the summary',
    copyLink: 'Copy the link',
    emailRecord: 'Email the record',
    mailSubjectSuffix: 'records and leads',
    copyFailed: 'Copy failed — select manually',
    linkCopied: 'Link copied',
    summaryCopied: 'Summary copied',
  },
  footer: {
    aria: 'Footer',
    archive: 'The archive',
    gate: 'The legal gate',
    dispatch: 'Send records',
    source: 'Source',
    notLegal: 'Not legal advice',
  },
}
