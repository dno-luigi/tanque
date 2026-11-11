/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDIT THIS FILE FIRST.
 *  Every fact, label, document and link on the site comes from here.
 *  Values marked PLACEHOLDER must be replaced before you publish.
 *  Nothing on this site should name a private individual who has not agreed
 *  to be named. Keep the record institutional: agencies, records, dates.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'The Letter That Never Arrived',
  short: 'The Letter',
  tagline: 'A public record, assembled one document at a time.',
  // Used in the footer and the email button. PLACEHOLDER — replace.
  contactEmail: 'record@example.com',
  // Optional. Leave empty to hide the repository link in the footer.
  repoUrl: '',
  // Set once the site is live, e.g. 'https://the-letter.pages.dev'.
  // Leave empty to fall back to the browser's current address when sharing.
  canonicalUrl: '',
}

export const hero = {
  kicker: 'Open case · Public record',
  line1: 'The test came back',
  line2: 'negative.',
  line3: 'They mailed the result to the wrong house.',
  sub: 'Five years and eight months in custody. A lab report that was never put in his hands. An exoneration notice sent to his sister — who died before he came home, and with her the letter. This is the record we are rebuilding in the open.',
  note: 'Built by two people who are not going to stop.',
  stats: [
    { value: '5y 8m', label: 'custody served' },
    { value: 'Negative', label: 'lab result withheld' },
    { value: '1', label: 'letter, now missing' },
    { value: '0', label: 'certified copies in hand' },
  ],
  artifact: {
    label: 'Illustrative reconstruction',
    caption:
      'No official document is reproduced here. This is a diagram of what the record is alleged to show. Certified copies will replace it as they are obtained.',
    header: 'Official notice — laboratory analysis',
    rows: [
      ['Case', '██████-████'],
      ['Analysis', 'Controlled substance screening'],
      ['Result', 'Negative — none detected'],
      ['Mailed to', 'Residential address'],
      ['Not mailed to', 'Custodial facility'],
    ],
    stamp: 'Delivered to the wrong address',
    stampSub: 'Subject in state custody at time of mailing',
  },
}

export const story = {
  number: '01',
  eyebrow: 'The short version',
  title: 'A deal is only as honest as what they show you first.',
  paragraphs: [
    'People say he took a deal like that ends the conversation. It does not. A plea is supposed to be a decision you make with the state\u2019s evidence laid out in front of you \u2014 all of it, including the part that helps you.',
    'The laboratory analysis in his case came back negative. No controlled substance detected. That result existed before he stood up in court and said the word that cost him five years and eight months. Nobody put it in front of him.',
    'The notice went to a family address, where a relative with limited English did her best with a document that was never meant for her. He was in state custody the entire time, in a facility the state could locate without effort. They had his address. They mailed it to someone else\u2019s.',
    'His sister is the one who received it. She died before he came home. He has never read it, and no one has been able to find it since. That is the hole this site sits inside \u2014 and the reason everything else goes into public view, where it can be checked by anyone.',
    'We are not asking you to take our word for it. We are asking for the paper.',
  ],
  pull: 'Five years and eight months is not a sentence you serve and finish. It is a room you are still standing in.',
}

export const timeline = {
  number: '02',
  eyebrow: 'Sequence',
  title: 'How the letter missed him.',
  intro:
    'Dates are held back until certified records are in hand. The order is not in dispute.',
  events: [
    {
      marker: 'Before the plea',
      title: 'The lab returns a negative result.',
      body: 'Analytical testing for controlled substances comes back negative. At this point, the state holds a document that undercuts its own case \u2014 and the person it charged has no idea it exists.',
      tag: 'Record point',
    },
    {
      marker: 'The plea',
      title: 'He pleads without it.',
      body: 'No one discloses the finding. He enters a plea that produces five years and eight months of custody, weighing a case he was never shown in full.',
      tag: 'Contested',
    },
    {
      marker: 'The notice',
      title: 'The notice is mailed to a house.',
      body: 'Official correspondence about the analysis is addressed to a family residence occupied by a relative with limited English proficiency \u2014 not to the facility holding him, where the state knew he was.',
      tag: 'Record point',
    },
    {
      marker: '68 months',
      title: 'He files from inside. He is denied.',
      body: 'Pro se filings are rejected. He keeps writing. The one document that would have changed the shape of everything stays outside the walls.',
      tag: 'Record point',
    },
    {
      marker: 'Release',
      title: 'He walks out with the record still standing.',
      body: 'Custody ends. The conviction does not. Under current federal doctrine, that distinction is the wall between him and every civil remedy in the country.',
      tag: 'Where we are',
    },
    {
      marker: 'Now',
      title: 'His sister is gone. The letter is gone with her.',
      body: 'The recipient of the notice has died. The letter cannot be produced by us. It can only be produced by the institutions that sent and tracked it \u2014 which is why the demands come next.',
      tag: 'Open',
    },
  ],
}

export const facts = {
  number: '03',
  eyebrow: 'The four facts that matter',
  title: 'Everything downstream rests on these.',
  items: [
    {
      n: '01',
      title: 'Continuous custody',
      claim: 'The state knew exactly where he was.',
      detail:
        'He was held in a state facility throughout the period in which critical notice was sent elsewhere. Custody is the state\u2019s own record of a person\u2019s location \u2014 the housing log is the proof.',
      source: 'Housing and movement records',
    },
    {
      n: '02',
      title: 'Misdirected notice',
      claim: 'Critical correspondence went to a private home.',
      detail:
        'Official correspondence about the analysis was addressed to a family residence occupied by a relative with limited English proficiency, rather than served to him at the facility.',
      source: 'Mail ledgers, return receipts',
    },
    {
      n: '03',
      title: 'A negative finding',
      claim: 'The report said no controlled substance.',
      detail:
        'The laboratory analysis returned a negative result. It was not disclosed to him before the plea that produced the sentence. This is the evidentiary anchor of the whole filing.',
      source: 'Raw lab data, intake log, certificate',
    },
    {
      n: '04',
      title: 'A plea without the fact',
      claim: 'You cannot knowingly plead around evidence you never saw.',
      detail:
        'A plea entered without knowledge of material exculpatory evidence is not a voluntary and intelligent plea. That is the argument the motion to vacate is built on.',
      source: 'Plea colloquy transcript',
    },
  ],
}

export const heck = {
  number: '04',
  eyebrow: 'The gate',
  title: 'Why we cannot sue yet \u2014 and exactly what opens the door.',
  body: [
    'Under Heck v. Humphrey, 512 U.S. 477 (1994), a civil rights claim for damages that would necessarily imply the invalidity of a standing criminal conviction is barred at the threshold. A civil court will not let a lawsuit do the work of a post-conviction appeal.',
    'This is not a technicality we can argue around, and it is not the same as a statute of limitations. It is a gate, and it has four keys. Our path is the third one: a state tribunal invalidating the judgment.',
  ],
  citation: 'Heck v. Humphrey, 512 U.S. 477 (1994) · 42 U.S.C. § 1983',
  closedLabel: 'Conviction standing',
  openLabel: 'Conviction vacated',
  closedState: 'Barred',
  openState: 'Open',
  closedNote:
    'Right now. Every § 1983 damages claim is dismissed before it is heard. Filings cannot fix this; only invalidation can.',
  openNote:
    'The moment the judgment falls, the civil courthouse opens: due process, malicious prosecution, statutory compensation, and the immunity fights that follow.',
  keys: [
    {
      title: 'Reversed on direct appeal',
      detail: 'An appellate court reverses the judgment or the sentence.',
    },
    {
      title: 'Executive pardon or expungement',
      detail: 'The conviction is expunged or pardoned by executive action.',
    },
    {
      title: 'Invalidated by a state tribunal',
      detail:
        'A court of competent jurisdiction vacates the judgment. This is our route: a motion to vacate built on the withheld negative analysis.',
      ours: true,
    },
    {
      title: 'Called into question by habeas',
      detail:
        'A federal court issues a writ of habeas corpus, or otherwise calls the conviction into question.',
    },
  ],
}

export const phases = {
  number: '05',
  eyebrow: 'The sequence of work',
  title: 'Four phases, in order. The order is the strategy.',
  intro:
    'Skip a phase and the next one collapses. Each step exists to make the following step possible.',
  items: [
    {
      n: 'I',
      title: 'Break the judgment',
      kicker: 'Criminal · post-conviction',
      summary:
        'One objective: vacate the conviction. Nothing else in this plan works until that order exists.',
      bullets: [
        'Retain post-conviction counsel with Brady and plea-withdrawal experience.',
        'File a motion to vacate anchored in the withheld negative analysis \u2014 not in re-argument of the old record.',
        'Frame the notice failure as a due process defect that made the plea involuntary, not as clerical inconvenience.',
        'Address the prior pro se denials head-on: newly discovered evidence and suppression are the exceptions to procedural default.',
      ],
      output: 'A signed order vacating the judgment.',
    },
    {
      n: 'II',
      title: 'Freeze the record',
      kicker: 'Preservation · subpoena',
      summary:
        'Documents disappear when nobody is watching them. Preservation letters go out with the motion, not after it.',
      bullets: [
        'Litigation hold letters to the prosecutor\u2019s office, court clerk, police department, forensic lab and custodial facility.',
        'Subpoena the mail ledgers, transmittal timestamps, returned-mail receipts and housing logs.',
        'Demand the raw analytical data, not just the summary certificate.',
        'Build one chronological dossier: every date, every custodian, every gap.',
      ],
      output: 'A certified, timestamped evidentiary dossier.',
    },
    {
      n: 'III',
      title: 'Open the civil door',
      kicker: 'Federal · statutory',
      summary:
        'With the judgment vacated, the Heck bar lifts and the same facts become a damages case.',
      bullets: [
        'Section 1983: Fourteenth Amendment due process (Brady) and Fourth Amendment malicious prosecution.',
        'Name the actors in investigative and administrative roles \u2014 lab, mail room, clerks \u2014 where qualified immunity can be pierced by deliberate indifference.',
        'File the state wrongful-imprisonment compensation claim where the statute allows it (for example California Penal Code § 4900 et seq. \u2014 the equivalent varies by state).',
        'Serve the tort claim notice inside the statutory window. Miss it and the claim is gone; deadlines run from exoneration, not from arrest.',
      ],
      output: 'A filed civil complaint and a compensation claim on the clock.',
    },
    {
      n: 'IV',
      title: 'Put it in sunlight',
      kicker: 'Public · accountability',
      summary:
        'Courts move slowly and quietly. Publication makes quiet expensive. Neither track works alone.',
      bullets: [
        'Publish only what can be verified: filings, agency correspondence, certified receipts, custody records.',
        'Keep the language institutional. The target is a process that failed, not a person to be hated online.',
        'Timestamp and archive every claim so nothing can be quietly walked back.',
        'Treat public attention as leverage on timing, never as a substitute for a court order.',
      ],
      output: 'An archive that cannot be ignored or rewritten.',
    },
  ],
}

export const evidence = {
  number: '06',
  eyebrow: 'What we are demanding',
  title: 'Four institutions. Four questions only paper can answer.',
  intro:
    'Every row below is a preservation demand and a subpoena target. Expand a row for what it proves.',
  rows: [
    {
      entity: 'Court clerk & prosecutor\u2019s file',
      objective:
        'Complete certified record of the criminal case, including service logs and returned-mail receipts.',
      proof:
        'Whether the notice was returned as undeliverable, forwarded, or simply never routed to the facility. Either answer is useful; silence is not.',
      status: 'Preservation demand',
    },
    {
      entity: 'Forensic testing laboratory',
      objective:
        'Raw analytical data, intake logs, the finalized negative certificate, transmittal timestamps.',
      proof:
        'The exact date the exculpatory result existed \u2014 and therefore exactly how long it was withheld before the plea.',
      status: 'Subpoena target',
    },
    {
      entity: 'Custodial facility',
      objective:
        'Housing logs, movement registry, and incoming mail logs for the full period of confinement.',
      proof:
        'That the state had continuous, documented knowledge of his location while mailing notice to a residence.',
      status: 'Subpoena target',
    },
    {
      entity: 'Prosecutorial mail & intake',
      objective:
        'Internal correspondence, routing notes, and dispatch records concerning the case and the notice.',
      proof:
        'Whether the misdirection was a clerical failure or deliberate indifference \u2014 the difference between negligence and a pierceable immunity.',
      status: 'Preservation demand',
    },
  ],
}

export const immunity = {
  number: '07',
  eyebrow: 'The immunity problem',
  title: 'Two doors. Only one of them opens.',
  intro:
    'Civil rights cases are not won on how badly someone behaved. They are won on which function the person was performing when they did it.',
  cards: [
    {
      kind: 'Absolute',
      title: 'Prosecutorial immunity',
      scope: 'Advocacy in the judicial phase',
      body: 'A prosecutor advocating for charges, presenting a case, or negotiating a plea in court is absolutely immune from damages. Malice does not pierce it. Bad faith does not pierce it.',
      canPierce: false,
      note: 'Do not build the complaint here.',
    },
    {
      kind: 'Qualified',
      title: 'Investigative & administrative immunity',
      scope: 'Labs, mail rooms, clerks, police, and prosecutors acting outside advocacy',
      body: 'Qualified immunity falls when the conduct violates a clearly established right \u2014 or when the record shows deliberate indifference rather than a mistake. Misdirecting mandatory notice away from a known custodial address is the kind of fact that lives here.',
      canPierce: true,
      note: 'This is where the pleading has to land.',
    },
  ],
  takeaway:
    'The winning sentence in the complaint is not that they were wrong. It is that they knew where he was, and sent it somewhere else anyway.',
}

export const archive = {
  number: '08',
  eyebrow: 'The archive',
  title: 'What we have. What we are owed.',
  intro:
    'This page changes as documents arrive. Nothing is described as verified until a certified copy is in hand.',
  docs: [
    {
      title: 'Laboratory analysis \u2014 negative result',
      type: 'Forensic record',
      status: 'requested',
      note: 'The anchor document. Requested with raw data and transmittal timestamps.',
    },
    {
      title: 'Plea colloquy transcript',
      type: 'Court record',
      status: 'requested',
      note: 'Shows precisely what he was told before entering the plea.',
    },
    {
      title: 'Notice & transmittal log',
      type: 'Agency record',
      status: 'demand',
      note: 'Proves where the notice was addressed and when it left the building.',
    },
    {
      title: 'Custodial housing & mail logs',
      type: 'Custody record',
      status: 'demand',
      note: 'The state\u2019s own proof that it knew his address for 68 months.',
    },
    {
      title: 'Returned-mail receipts',
      type: 'Postal record',
      status: 'requested',
      note: 'Whether anything came back, and who signed for what.',
    },
    {
      title: 'The letter his sister received',
      type: 'Unrecovered',
      status: 'missing',
      note: 'She died before he came home. We do not have it. Somebody\u2019s file does.',
    },
  ],
  statusLabels: {
    requested: 'Requested',
    demand: 'Preservation demand',
    missing: 'Unrecovered',
    held: 'Certified copy in hand',
  },
}

export const protocol = {
  number: '09',
  eyebrow: 'Publishing standard',
  title: 'How we publish without handing them a defamation case.',
  intro:
    'Attention is only leverage if it is clean. These are the rules this site holds itself to, in public, so they can be enforced against us.',
  rules: [
    {
      n: '01',
      statement: 'Records before adjectives.',
      detail:
        'Publish filings, correspondence, receipts and logs. If a sentence cannot be traced to a document, it does not go up.',
    },
    {
      n: '02',
      statement: 'Institutions, not individuals.',
      detail:
        'We write about offices, procedures and failures \u2014 not about named people we have not accused in a filed pleading.',
    },
    {
      n: '03',
      statement: 'Call an allegation an allegation.',
      detail:
        'Until a court rules, contested facts are labeled contested. Confidence is not evidence.',
    },
    {
      n: '04',
      statement: 'Date everything.',
      detail:
        'Every claim carries the date it was published and the document version it rests on, so the record cannot be quietly rewritten.',
    },
    {
      n: '05',
      statement: 'Correct in public.',
      detail:
        'An error is corrected on the page, with the date, not deleted. A record that edits itself is not a record.',
    },
  ],
}

export const dispatch = {
  number: '10',
  eyebrow: 'Dispatch',
  title: 'Send it where it will be read.',
  body: 'Corruption survives on quiet. The ask is not sympathy \u2014 it is distribution, and it is records. If you have either, we want to hear from you.',
  needs: [
    {
      title: 'Post-conviction counsel',
      detail: 'A lawyer who has actually vacated a plea on withheld exculpatory evidence.',
    },
    {
      title: 'Certified records',
      detail: 'Anyone who can help pry the lab file, mail log or housing record loose.',
    },
    {
      title: 'The letter itself',
      detail:
        'If you ever saw, copied, photographed or received correspondence about this case, that is the thing we are looking for.',
    },
    {
      title: 'Distribution',
      detail: 'Post it, email it, hand it to a reporter who covers courts. Attention has a clock on it.',
    },
  ],
  shareSummary:
    'Five years and eight months for a charge the lab had already tested negative \u2014 and the notice went to a family house instead of the facility holding him. His sister received it and died before he came home. The letter is gone. The records are not. A public reconstruction of the case, one certified document at a time.',
}

export const footer = {
  disclaimer:
    'This site is an independent public record and advocacy archive. It is not legal representation and does not give legal advice. Statements about contested events are allegations until a court rules otherwise, and are published for the purpose of accountability and redress. Statutes, immunities and deadlines vary by jurisdiction; nothing here substitutes for licensed counsel in the relevant state.',
  closing: 'Nothing about this is over.',
}
