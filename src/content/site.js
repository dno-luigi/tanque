/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDIT THIS FILE FIRST.
 *  Every fact, label, document and link on the site comes from here.
 *  Values marked PLACEHOLDER must be replaced before you publish.
 *
 *  SOURCE OF RECORD: San Bernardino Superior Court case summary, No. FVI802230,
 *  printed 11/10/2026. Where a date or entry is quoted below it is transcribed
 *  from that docket. Everything the docket does not establish is labelled as a
 *  claim, not a fact.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'The Letter That Never Arrived',
  short: 'The Letter',
  tagline:
    'People v. Horacio Campos · San Bernardino Superior Court No. FVI802230 — a public record, assembled one document at a time.',
  // Used in the footer and the email button. PLACEHOLDER — replace.
  contactEmail: 'record@example.com',
  // Optional. Leave empty to hide the repository link in the footer.
  repoUrl: '',
  // Set once the site is live, e.g. 'https://the-letter.pages.dev'.
  // Leave empty to fall back to the browser's current address when sharing.
  canonicalUrl: 'https://tanque.nspired.cc/',
}

export const hero = {
  kicker: 'People v. Campos · San Bernardino Superior Court No. FVI802230',
  line1: 'The test came back',
  line2: 'negative.',
  line3: 'They mailed the result to the wrong house.',
  sub: 'Six years imposed. Five years and eight months served. A laboratory result he says he was never shown, a request he made from prison in 2010, and a denial by minute order. The notice went to his sister — who died before he came home, and with her the letter.',
  note: 'Filed in his own name, in pro per. Built by two people who are not going to stop.',
  stats: [
    { value: '5y 8m', label: 'custody served' },
    { value: '6 yrs', label: 'term imposed, 2009' },
    { value: 'Negative', label: 'lab result withheld' },
    { value: '2010', label: 'request denied, no hearing' },
  ],
  artifact: {
    label: 'Illustrative reconstruction',
    caption:
      'No official document is reproduced here. This is a diagram of what the record is alleged to show. Certified copies will replace it as they are obtained.',
    header: 'Official notice — laboratory analysis',
    rows: [
      { label: 'Case', value: 'FVI802230' },
      { label: 'Analysis', value: 'Controlled substance screening' },
      { label: 'Result', value: 'Negative — none detected', neg: true },
      { label: 'Mailed to', value: 'Residential address' },
      { label: 'Not mailed to', value: 'Custodial facility' },
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
    'On 3 March 2009, at a preliminary hearing in Victorville, Horacio Campos withdrew a plea of not guilty and pleaded guilty to one count of possession of a controlled substance for sale. The same afternoon he was sentenced to six years in state prison. He served five years and eight months of it.',
    'The laboratory analysis of the seized items came back negative — no controlled substance detected. That is the claim this record exists to prove, and the document that would settle it is the certificate of analysis. The county has not produced it.',
    'He asked from inside. On 14 October 2010 he wrote to the court about the results of the laboratory drug testing. The court received the letter on 21 October 2010. On 1 November 2010 a minute order denied the request, and he was notified. No hearing. No appointment of counsel. No report.',
    'Meanwhile, the notice about that analysis went to a family address, where a relative with limited English did her best with a document that was never meant for her. He was in state custody the entire time, in a facility the county had already written to. They had his address. They mailed it to someone else\u2019s.',
    'His sister is the one who received it. She died before he came home. He has never read it, and no one has been able to find it since. That is the hole this site sits inside — and the reason everything else goes into public view, where it can be checked by anyone.',
    'We are not asking you to take our word for it. We are asking for the paper.',
  ],
  pull: 'Five years and eight months is not a sentence you serve and finish. It is a room you are still standing in.',
}

export const timeline = {
  number: '02',
  eyebrow: 'Sequence',
  title: 'How the letter missed him.',
  intro:
    'Dates and entries below are transcribed from the case docket for No. FVI802230. Two things the docket does not show — the negative result itself, and where the notice was mailed — are marked as claims. Certified copies are being obtained.',
  events: [
    {
      marker: '10 / 27 / 2008',
      title: 'Arraigned in Victorville. Bail set at $250,000.',
      body: 'The complaint charges possession of a controlled substance for sale, with a street-gang enhancement and a prior strike alleged. A public defender is appointed and enters a plea of not guilty for him.',
      tag: 'Docket entry',
      kind: 'docket',
    },
    {
      marker: 'Before the plea',
      title: 'The lab returns a negative result.',
      body: 'Analytical testing for controlled substances comes back negative. If that is right, the state held a document that undercut its own case — and the man it charged had no idea it existed. This is the claim the certificate of analysis will confirm or destroy.',
      tag: 'Contested',
      kind: 'contested',
    },
    {
      marker: '03 / 03 / 2009',
      title: 'He pleads guilty at the preliminary hearing. Sentenced the same day.',
      body: 'He withdraws his not-guilty plea and pleads to count one. The minute order records the court finding the plea knowing and intelligent, imposes four years doubled under the prior strike plus two consecutive years, and fixes a total term of six years, with 195 days of credit. The prison packet is forwarded to West Valley Detention Center the following week.',
      tag: 'Docket entry',
      kind: 'docket',
    },
    {
      marker: '10 / 21 / 2010',
      title: 'A letter dated 14 October reaches the court.',
      body: 'The docket entry reads: letter dated 10/14/2010 received from defendant re: results of lab drug testing. He was in state prison, writing to the court himself, asking for the test result in his own case.',
      tag: 'Docket entry',
      kind: 'docket',
    },
    {
      marker: '11 / 01 / 2010',
      title: 'The request is denied by minute order.',
      body: 'The docket entry reads: DEFT REQUEST IS DENIED PER JUDGE TOMBERLIN. A second entry records that the defendant was notified. The docket shows no hearing, no appointment of counsel, and no production of the report.',
      tag: 'Docket entry',
      kind: 'docket',
    },
    {
      marker: '68 months',
      title: 'He serves the rest of the term.',
      body: 'Custody ends after five years and eight months. The conviction does not end with it. Under current federal doctrine, that distinction is the wall between him and every civil remedy in the country.',
      tag: 'Record point',
      kind: 'record',
    },
    {
      marker: 'Now',
      title: 'His sister is gone. The letter is gone with her.',
      body: 'The recipient of the notice has died. The letter cannot be produced by us — only by the institutions that sent and tracked it. That is what the § 1473.7 motion and the records demands are for.',
      tag: 'Open',
      kind: 'open',
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
      title: 'One afternoon',
      claim: 'The plea and the sentence happened the same day.',
      detail:
        'The minute order of 3 March 2009 records a change of plea at the preliminary hearing, an immediate sentencing, a waiver of the probation referral, and a finding that the plea was knowing and intelligent. That finding is precisely what a § 1473.7 motion has to overcome — and why the withheld analysis matters.',
      source: 'Minute order, 3/3/2009',
    },
    {
      n: '02',
      title: 'He asked, from inside',
      claim: 'The court received his request and denied it in one line.',
      detail:
        'On 21 October 2010 the court received his letter about the laboratory drug testing. On 1 November 2010 the request was denied by minute order and he was notified. Nothing in the docket shows a hearing, counsel, or the report itself. That is the due-diligence record.',
      source: 'Docket entries, 10/21/2010 and 11/1/2010',
    },
    {
      n: '03',
      title: 'Misdirected notice',
      claim: 'Critical correspondence went to a private home.',
      detail:
        'Official correspondence about the analysis was addressed to a family residence occupied by a relative with limited English proficiency, rather than served to him at the facility where the county had already forwarded his prison packet. The mailing itself is what the mail ledger has to prove.',
      source: 'Mail ledgers, transmittal sheets, returned-mail receipts',
    },
    {
      n: '04',
      title: 'A negative finding',
      claim: 'The report said no controlled substance.',
      detail:
        'The laboratory analysis returned a negative result — the evidentiary anchor of the motion and of any § 1983 count that follows. Until the certificate of analysis is produced, this remains the central contested fact of the record, not a proven one.',
      source: 'Bench notes, certificate of analysis, chain of custody',
    },
  ],
}

export const heck = {
  number: '04',
  eyebrow: 'The gate',
  title: 'Why we cannot sue yet — and exactly what opens the door.',
  body: [
    'Under Heck v. Humphrey, 512 U.S. 477 (1994), a civil rights claim for damages that would necessarily imply the invalidity of a standing criminal conviction is barred at the threshold. A civil court will not let a lawsuit do the work of a post-conviction appeal.',
    'This is not a technicality we can argue around, and it is not the same as a statute of limitations. It is a gate, and it has four keys. Our path is the third one: a state tribunal invalidating the judgment. That route has a statute number — California Penal Code section 1473.7 — and a case number: FVI802230.',
  ],
  citation:
    'Heck v. Humphrey, 512 U.S. 477 (1994) · 42 U.S.C. § 1983 · Cal. Penal Code §§ 1473, 1473.7',
  closedLabel: 'Conviction standing',
  openLabel: 'Conviction vacated',
  closedState: 'Barred',
  openState: 'Open',
  closedNote:
    'Right now. Every § 1983 damages claim is dismissed before it is heard. Filing harder cannot fix this; only invalidation can.',
  openNote:
    'The moment the judgment falls, the civil courthouse opens: due process, malicious prosecution, municipal liability, and a statutory compensation claim that runs on a hard clock.',
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
        'A court of competent jurisdiction vacates the judgment. This is our route: a § 1473.7 motion to vacate filed in San Bernardino Superior Court, built on the withheld negative analysis.',
      ours: true,
    },
    {
      title: 'Called into question by habeas',
      detail:
        'A federal court issues a writ of habeas corpus, or otherwise calls the conviction into question. Section 1473 habeas, on Form MC-275, is the parallel state track.',
    },
  ],
}

export const phases = {
  number: '05',
  eyebrow: 'The sequence of work',
  title: 'Four phases, in order. The order is the strategy.',
  intro:
    'Filed in his own name, in pro per. Records, drafting and research support come from outside the case; the pleadings are his. Skip a phase and the next one collapses.',
  items: [
    {
      n: 'I',
      title: 'Vacate the plea',
      kicker: 'Criminal · San Bernardino Superior Court, Victorville',
      summary:
        'One objective: an order vacating the 3 March 2009 judgment in No. FVI802230. Nothing else in this plan works until that order exists.',
      bullets: [
        'File a motion to vacate under Penal Code § 1473.7(a)(1), in pro per, on the prejudicial error that damaged his ability to understand the case and knowingly enter the plea.',
        'File a parallel habeas petition on Form MC-275 under § 1473(b)(3)(A) — substantial material evidence that was not reasonably available at the time of the plea.',
        'Anchor the plea claim in Brady v. Maryland: a defendant cannot knowingly waive trial rights while the state withholds the test that undercuts its case. The minute order\u2019s finding that the plea was knowing and intelligent is the finding to be attacked.',
        'Attach the docket as an exhibit. The 10/21/2010 letter and the 11/01/2010 denial answer any laches or due-diligence argument: he asked, from prison, and was refused by minute order.',
        'Ask for appointed counsel and an evidentiary hearing once a prima facie showing is on the page. Pro se status does not waive the right to be heard.',
      ],
      output: 'An order vacating the judgment, or a hearing date on the motion.',
    },
    {
      n: 'II',
      title: 'Pry the record loose',
      kicker: 'Records · CPRA, Gov. Code § 7920.000 et seq.',
      summary:
        'A pro se petitioner has no subpoena power before a case is filed. Public records law does the work instead — and every request puts the agency on notice that a human is watching.',
      bullets: [
        'Superior Court clerk, Victorville: a certified copy of the case summary for No. FVI802230, including the 10/21/2010 letter entry and the 11/1/2010 minute order.',
        'Sheriff\u2019s Department: booking logs, property receipts, custodial transport records, and incoming mail logs for the full term.',
        'District Attorney\u2019s Office: mail ledger entries, case intake notes, and discovery transmittal sheets for the case.',
        'Forensic laboratory: bench notes, the toxicology certificate, delivery receipts, and the chain-of-custody record for the seized items.',
        'Every request goes out with a litigation-hold paragraph. Build one chronological dossier with a named custodian and a date for every page.',
      ],
      output:
        'Three certified anchor documents: the docket, the certificate of analysis, and the mail and notice log.',
    },
    {
      n: 'III',
      title: 'Open the civil door',
      kicker: 'Compensation · § 1983',
      summary:
        'With the judgment vacated, the Heck bar lifts and the same facts become a damages case — one that has to be filed before its clock runs out.',
      bullets: [
        'CalVCB claim under Penal Code § 4900 et seq. once the conviction is vacated and factual innocence is established: $140 per day × 2,068 days ≈ $289,520 at the current statutory rate, before any adjustment. Vacatur alone may not satisfy the Board; the factual-innocence finding is a separate step.',
        'Count I — Fourteenth Amendment due process: deliberate suppression of the negative analysis before the plea (Brady).',
        'Count II — Fourth Amendment malicious prosecution: proceedings maintained after the exculpatory result was known.',
        'Count III — Monell v. Department of Social Services: if notice routing to a family address instead of a custodial one reflects a practice rather than a one-off, the county\u2019s policy is the claim.',
        'Watch accrual. Under Heck the § 1983 claim does not accrue until invalidation; in California the personal-injury period is two years (Code Civ. Proc. § 335.1), so the complaint is drafted before vacatur and filed the same week.',
      ],
      output: 'A filed § 1983 complaint and a compensation claim on the clock.',
    },
    {
      n: 'IV',
      title: 'Put it in sunlight',
      kicker: 'Public · accountability',
      summary:
        'Courts move slowly and quietly. Publication makes quiet expensive. Neither track works alone, and the public track must never outrun the record.',
      bullets: [
        'Publish only what can be verified: filings, agency correspondence, certified receipts, custody records.',
        'Keep the language institutional. The target is a process that failed — not a person to be hated online.',
        'Timestamp and archive every claim so nothing can be quietly walked back later.',
        'Treat attention as leverage on timing, never as a substitute for a court order.',
        'Correct in public, on the page, with the date. An archive that edits itself is not an archive.',
      ],
      output: 'An archive that cannot be ignored and cannot be rewritten.',
    },
  ],
}

export const evidence = {
  number: '06',
  eyebrow: 'What we are demanding',
  title: 'Four institutions. Four questions only paper can answer.',
  intro:
    'Every row below is a public records request, a preservation demand, and a future subpoena target. Expand a row for what it proves.',
  rows: [
    {
      entity: 'Superior Court clerk · No. FVI802230',
      objective:
        'A certified copy of the case summary docket, including the 10/21/2010 letter entry, the 11/01/2010 minute order, and the 3 March 2009 plea and sentencing minutes.',
      proof:
        'That he raised the lab result himself, from prison, years before any lawyer took the case — the diligence and timeliness foundation for § 1473.7 relief.',
      status: 'Certification request',
    },
    {
      entity: 'Forensic laboratory',
      objective:
        'Bench notes, the finalized negative certificate of analysis, chain of custody, and transmittal timestamps for the seized items.',
      proof:
        'The exact date the exculpatory result existed — and therefore exactly how long it was withheld before the plea.',
      status: 'CPRA request',
    },
    {
      entity: 'San Bernardino County Sheriff',
      objective:
        'Booking and property logs, custodial transportation records, housing history, and incoming mail logs for the full period of confinement.',
      proof:
        'That the county had continuous, documented knowledge of his location while official notice went to a residential address.',
      status: 'CPRA request',
    },
    {
      entity: 'District Attorney\u2019s Office',
      objective:
        'Mail ledger entries, case intake notes, discovery transmittal sheets, and any routing record for the notice.',
      proof:
        'Whether the misdirection was a clerical failure or deliberate indifference — the difference between negligence and a pierceable immunity.',
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
      scope: 'Labs, mail rooms, clerks, sheriff\u2019s staff, and prosecutors outside advocacy',
      body: 'Qualified immunity falls when the conduct violates a clearly established right — or when the record shows deliberate indifference rather than a mistake. Routing mandatory notice away from a known custodial address is the kind of fact that lives here.',
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
    'The docket printout dated 10 November 2026 is the only record currently in hand, and it is not certified. Nothing on this page is described as verified until a certified copy is. The 2010 entries quoted above come from that printout.',
  docs: [
    {
      title: 'Certified case summary docket — FVI802230',
      type: 'Court record',
      status: 'requested',
      note: 'Certified by the clerk, covering the 3/3/2009 plea, the 10/21/2010 letter and the 11/1/2010 minute order.',
    },
    {
      title: 'Laboratory certificate of analysis — negative',
      type: 'Forensic record',
      status: 'requested',
      note: 'The anchor document. Requested with bench notes, chain of custody and transmittal timestamps.',
    },
    {
      title: 'Custodial housing & mail logs',
      type: 'Custody record',
      status: 'demand',
      note: 'The state\u2019s own proof that it knew his address for 68 months.',
    },
    {
      title: 'Notice & transmittal log',
      type: 'Agency record',
      status: 'demand',
      note: 'Where the notice was addressed, and when it left the building.',
    },
    {
      title: 'Plea colloquy & change-of-plea form',
      type: 'Court record',
      status: 'requested',
      note: 'The declaration and plea form behind the 3 March 2009 minute order.',
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
        'We write about offices, procedures and failures — not about named people we have not accused in a filed pleading. Where a record names an official, we quote the record and add nothing to it.',
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
  body: 'Corruption survives on quiet. The ask is not sympathy — it is distribution, and it is records. If you have either, we want to hear from you.',
  needs: [
    {
      title: 'Post-conviction counsel',
      detail:
        'A lawyer who has actually vacated a plea on withheld exculpatory evidence. The filings go in his name; the help behind them matters.',
    },
    {
      title: 'Certified records',
      detail:
        'Anyone who can help pry the lab file, the mail log, or the 68-month housing record loose from a county that has had eighteen years to lose it.',
    },
    {
      title: 'The letter itself',
      detail:
        'If you ever saw, copied, photographed or received correspondence about this case, that is the thing we are looking for.',
    },
    {
      title: 'Distribution',
      detail:
        'Post it, email it, hand it to a reporter who covers San Bernardino courts. Attention has a clock on it.',
    },
  ],
  shareSummary:
    'People v. Horacio Campos, San Bernardino Superior Court No. FVI802230: six years imposed on a plea entered in a single afternoon, and a laboratory result he says was never shown to him. He wrote to the court from prison in October 2010; it was received on 21 October and denied by minute order on 1 November. His sister received the notice at a family address and died before he came home. The letter is gone. The docket is not.',
}

export const footer = {
  disclaimer:
    'This site is an independent public record and advocacy archive, maintained by the person named in the case and by supporters. It is not legal representation, does not give legal advice, and creates no attorney-client relationship. All pleadings are filed in pro per, in the petitioner\u2019s own name. Docket entries are transcribed from a case summary printout dated 10 November 2026 and are not yet certified. Statements about contested events — including the negative laboratory result and the mailing of notice to a family address — are allegations until a court or the records establish them, and are published for the purpose of accountability and redress. The six-year term is the sentence recited in the 3 March 2009 minute order; five years and eight months is the custody actually served. The § 4900 figure is a statutory-rate estimate, not an entitlement or a promise of recovery. Statutes, immunities and deadlines vary by jurisdiction and change; nothing here substitutes for licensed counsel in California.',
  closing: 'Nothing about this is over.',
}
