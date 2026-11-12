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
 *
 *  CORRECTION OF RECORD (binding): the notice was mailed to his mother's
 *  address. His mother gave it to his sister, who read it to him by telephone
 *  while he was in custody. He learned the analysis was negative from his
 *  sister, not from the letter, which he has never read. The family believes
 *  the letter was kept, most likely by his mother; that is unconfirmed, so the
 *  site calls it unconfirmed rather than lost.
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
  line3: 'He pleaded guilty before he knew it.',
  sub: 'Six years imposed. Five years and eight months served. The laboratory analysis of what was seized came back negative. He asked the court for it from prison in 2010 and was refused by minute order. The notice went to his mother’s address; she gave it to his sister, who read it to him over the phone. The result reached him — late, secondhand, after the plea was already final.',
  note: 'He represents himself, in pro per. I am telling the story. A foundation supports the work — not a law firm, and nothing owed to anyone here.',
  stats: [
    { value: '5y 8m', label: 'custody served' },
    { value: '6 yrs', label: 'term imposed, 2009' },
    { value: 'Negative', label: 'analysis of the seized items' },
    { value: '2010', label: 'request for the report, denied' },
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
      { label: 'Mailed to', value: 'Family address — his mother' },
      { label: 'On file', value: 'Custodial address, county records' },
    ],
    stamp: 'Reached him secondhand',
    stampSub: 'Read to him by phone while in custody',
  },
}

export const story = {
  number: '01',
  eyebrow: 'The short version',
  title: 'A deal is only as honest as what they show you first.',
  paragraphs: [
    'On 3 March 2009, at a preliminary hearing in Victorville, Horacio Campos withdrew a plea of not guilty and pleaded guilty to one count of possession of a controlled substance for sale. The same afternoon he was sentenced to six years in state prison. He served five years and eight months of it.',
    'The laboratory analysis of the seized items came back negative — no controlled substance detected. That is the claim this record exists to prove, and the document that would settle it is the certificate of analysis. If it holds, the factual basis recited for the plea could not have been true: Penal Code section 1192.5 requires the court to find one, and where there is no controlled substance there is no corpus delicti.',
    'He asked from inside. On 14 October 2010 he wrote to the court about the results of the laboratory drug testing. The court received the letter on 21 October 2010. On 1 November 2010 a minute order denied the request, and he was notified. No hearing. No appointment of counsel. No report.',
    'The notice about that analysis went to his mother’s address, not to the facility. His mother gave it to his sister. His sister read it to him over the phone while he was in custody. That is how he learned the analysis was negative — not from the page, which he has never read.',
    'His sister died before he came home, but she had already told him what the paper said. The family believes the letter was kept, most likely by his mother. I have not seen it, so I describe it as unconfirmed rather than lost.',
    'I am not asking you to take my word for it. I am asking for the paper.',
  ],
  pull: 'Five years and eight months is not a sentence you serve and finish. It is a room you are still standing in.',
}

export const timeline = {
  number: '02',
  eyebrow: 'Sequence',
  title: 'How the result reached him — and how late.',
  intro:
    'Dates and entries below are transcribed from the case docket for No. FVI802230. Where the docket is silent — the negative result itself, the route the notice took — the claim is labelled a claim. The family’s account of the notice is testimony, not a document, until a declaration or the letter is produced.',
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
      body: 'Analytical testing for controlled substances comes back negative. If that is right, the state held a document that undercut the factual basis for its own charge — and the man it charged had no idea it existed. This is the claim the certificate of analysis will confirm or destroy.',
      tag: 'Contested',
      kind: 'contested',
    },
    {
      marker: '03 / 03 / 2009',
      title: 'He pleads guilty at the preliminary hearing. Sentenced the same day.',
      body: 'He withdraws his not-guilty plea and pleads to count one. The minute order records the court finding the plea knowing and intelligent, imposes four years doubled under the prior strike plus two consecutive years, and fixes a total term of six years, with 195 days of credit. The prison packet is forwarded to West Valley Detention Center the following week. The minutes also name a certified court reporter present, record that a factual basis was established, and note a PC 859A declaration form filed — without saying what that basis was. Neither the form nor the transcript is in hand.',
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
      marker: '2010 → now',
      title: 'The result reached him secondhand.',
      body: 'The notice went to his mother’s address. She gave it to his sister, who read it to him by phone while he was in custody; he learned the analysis was negative from her, not from the letter. His sister died before he came home. The family believes the letter was kept. Until it is produced, that is where the record stands.',
      tag: 'Family account',
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
      title: 'Notice to a family address',
      claim: 'The notice went to his mother’s home, not the facility.',
      detail:
        'Mullane requires notice reasonably calculated to reach him. The county had his custodial address — its own transmittals show that. But the family did reach him: his mother handed the letter to his sister, and his sister read it to him by phone. That makes this a due-process problem about delay and indirection, not a notice that never arrived. It is the weaker of the claims, and the site says so.',
      source: 'Mail ledgers, transmittal sheets, DOC letters of 4/23/2009 and 4/29/2009',
    },
    {
      n: '04',
      title: 'A negative finding — and a false factual basis',
      claim: 'No controlled substance means no corpus delicti.',
      detail:
        'Penal Code § 1192.5 requires the court to find a factual basis for the plea, on the record. If the analysis was negative, the factual basis for Health and Safety Code § 11378 was false: no substance, no crime. The minutes recite that a factual basis was established; they do not say what supported it. A plea entered on a basis the state’s own evidence contradicts is not a knowing plea under Boykin. This — not the notice — is the strongest argument in the file.',
      source: 'Certificate of analysis, PC 859A form, plea colloquy',
    },
  ],
  floor: {
    title: 'The rules those facts engage.',
    intro:
      'Plea bargaining is lawful: Brady v. United States (1970), Santobello v. New York (1971), Corbitt v. New Jersey (1978). The argument here is not that a deal was a deal. It is that this plea failed the floor every plea has to meet.',
    rules: [
      {
        cite: 'Boykin v. Alabama (1969)',
        text: 'A guilty plea must be knowing, intelligent and voluntary — and the record has to show it, not assume it.',
      },
      {
        cite: 'Henderson v. Morgan (1976)',
        text: 'The defendant must be informed of the nature of the charge before pleading.',
      },
      {
        cite: 'Cal. Penal Code § 1192.5',
        text: 'The court must find a factual basis for the plea. A negative analysis leaves none for a possession-for-sale count.',
      },
      {
        cite: 'Brady v. Maryland (1963)',
        text: 'Exculpatory evidence must be disclosed. Withholding the negative analysis before the plea is the due-process violation.',
      },
      {
        cite: 'Napue v. Illinois (1959)',
        text: 'The state may not let false evidence stand uncorrected — including a false factual basis it recited itself.',
      },
      {
        cite: 'Mullane v. Central Hanover Bank (1950)',
        text: 'Notice must be reasonably calculated to reach the person. Supporting argument, not the lead: the family did reach him.',
      },
    ],
  },
}

export const heck = {
  number: '04',
  eyebrow: 'The gate',
  title: 'Why he cannot sue yet — and exactly what opens the door.',
  body: [
    'Under Heck v. Humphrey, 512 U.S. 477 (1994), a civil rights claim for damages that would necessarily imply the invalidity of a standing criminal conviction is barred at the threshold. A civil court will not let a lawsuit do the work of a post-conviction appeal.',
    'This is not a technicality that can be argued around, and it is not the same as a statute of limitations. It is a gate, and it has four keys. His path is the third one: a state tribunal invalidating the judgment. That route has a statute number — California Penal Code section 1473.7 — and a case number: FVI802230.',
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
        'A court of competent jurisdiction vacates the judgment. This is his route: a § 1473.7 motion to vacate filed in San Bernardino Superior Court, built on the withheld negative analysis.',
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
        'Lead with the factual basis, not the notice. Section 1192.5 required the court to find one; a negative analysis means the substance element of Health and Safety Code § 11378 — and the corpus delicti — was absent. A plea entered on a false factual basis is not a knowing plea under Boykin v. Alabama.',
        'Anchor the disclosure claim in Brady v. Maryland: the negative analysis was suppressed before the plea. Brady v. United States (1970) and Santobello confirm that plea bargaining itself is lawful — the argument is that this plea rested on evidence the state knew was false. Napue v. Illinois: false evidence cannot be left standing uncorrected.',
        'Demand the PC 859A plea form and the plea colloquy. They are the only contemporaneous record of the factual basis recited, and the motion turns on what they do or do not say.',
        'Attach the docket as an exhibit. The 10/21/2010 letter and the 11/01/2010 denial answer any laches or due-diligence argument. Argue notice separately and modestly: Mullane requires notice reasonably calculated to reach him, but the family did reach him, so the claim is about delay and indirection rather than non-delivery.',
        'File a parallel habeas petition on Form MC-275 under § 1473(b)(3)(A) — substantial material evidence that was not reasonably available at the time of the plea.',
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
        'Superior Court clerk, Victorville: a certified copy of the case summary for No. FVI802230, including the 10/21/2010 letter entry, the 11/1/2010 minute order, and the PC 859A plea form with its colloquy.',
        'Sheriff’s Department: booking logs, property receipts, custodial transport records, and incoming mail logs for the full term.',
        'District Attorney’s Office: mail ledger entries, case intake notes, discovery transmittal sheets, and any record of what the People knew about the analysis before 3 March 2009.',
        'Forensic laboratory: bench notes, the toxicology certificate, delivery receipts, and the chain-of-custody record for the seized items.',
        'Department of Corrections: the 23 April 2009 letter and the 29 April 2009 copy to the parole unit — the state’s own proof that it held his custodial address.',
        'Every request goes out with a litigation-hold paragraph. Build one chronological dossier with a named custodian and a date for every page.',
      ],
      output:
        'Three certified anchor documents: the docket, the certificate of analysis, and the plea form.',
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
        'Count III — Monell v. Department of Social Services: if routing notice to a family address instead of a custodial one reflects a practice rather than a one-off, the county’s policy is the claim.',
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
  eyebrow: 'What I am asking for',
  title: 'Five institutions. Five questions only paper can answer.',
  intro:
    'Every row below is a public records request, a preservation demand, and a future subpoena target. Expand a row for what it proves.',
  rows: [
    {
      entity: 'Superior Court clerk · No. FVI802230',
      objective:
        'A certified copy of the case summary docket, the 3 March 2009 plea and sentencing minutes, the PC 859A declaration form, and the reporter’s transcript of those proceedings — the minutes name a certified reporter present.',
      proof:
        'What factual basis was actually placed on the record before the plea — and whether the court had any basis at all once the analysis is set beside it.',
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
        'That the county had continuous, documented knowledge of his location while official notice went to a family address.',
      status: 'CPRA request',
    },
    {
      entity: 'District Attorney’s Office',
      objective:
        'Mail ledger entries, case intake notes, discovery transmittal sheets, and any record of what the People knew about the analysis before 3 March 2009.',
      proof:
        'Whether the negative result was known and unshared — the difference between a clerical failure and indifference to a false factual basis.',
      status: 'Preservation demand',
    },
    {
      entity: 'Department of Corrections and Rehabilitation',
      objective:
        'The 23 April 2009 letter, the 29 April 2009 copy to the parole unit, and the department’s address-of-record entries for the full term.',
      proof:
        'The state’s own proof that it held his custodial address — which makes a family mailing a choice, not a necessity.',
      status: 'CPRA request',
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
      scope: 'Labs, mail rooms, clerks, sheriff’s staff, and prosecutors outside advocacy',
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
  title: 'What I have. What is missing.',
  intro:
    'The docket printout dated 10 November 2026 is the only record currently in hand, and it is not certified. Nothing on this page is described as verified until a certified copy is. The family’s account of the notice — mother received it, sister read it to him by phone — is testimony, not a document, and stays labelled that way until a declaration or the letter is produced.',
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
      title: 'PC 859A declaration and reporter’s transcript',
      type: 'Court record',
      status: 'requested',
      note: 'The minutes say a factual basis was established and that the declaration form was filed. Neither the form nor the transcript is in hand; the transcript is what ends the argument.',
    },
    {
      title: 'Custodial housing & mail logs',
      type: 'Custody record',
      status: 'demand',
      note: 'The state’s own proof that it knew his address for 68 months.',
    },
    {
      title: 'Notice & transmittal log',
      type: 'Agency record',
      status: 'demand',
      note: 'Where the notice was addressed, and when it left the building.',
    },
    {
      title: 'The notice, as kept by the family',
      type: 'Family record',
      status: 'requested',
      note: 'The family believes his mother kept it. If it exists it settles the mailing question; until then it is unconfirmed, not lost.',
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
  title: 'The rules I hold myself to.',
  intro:
    'Attention is only worth something if it is clean. These are the rules I hold myself to, written down so they can be held against me.',
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
        'I write about offices, procedures and failures — not about named people who have not been named in a filed pleading. Where a record names an official, I quote the record and add nothing to it.',
    },
    {
      n: '03',
      statement: 'Call an allegation an allegation.',
      detail:
        'The planted-drugs claim is an allegation. The negative analysis is the evidence. The notice is the narrative. They are not the same weight, and this site does not present them as if they were.',
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
  body: 'Quiet is what this survives on. I am not asking for sympathy — I am asking for distribution, and for records. If you have either, I want to hear from you.',
  needs: [
    {
      title: 'Post-conviction counsel',
      detail:
        'A lawyer who has vacated a plea on a false factual basis or on withheld exculpatory evidence. The filings go in his name; the help behind them matters.',
    },
    {
      title: 'Certified records',
      detail:
        'Anyone who can help pry the lab file, the PC 859A plea form, the mail log, or the 68-month housing record loose from a county that has had eighteen years to lose it.',
    },
    {
      title: 'The letter and the plea file',
      detail:
        'If you ever saw, copied, photographed or received correspondence about this case — or you hold the plea paperwork — that is what I am looking for.',
    },
    {
      title: 'Distribution',
      detail:
        'Post it, email it, hand it to a reporter who covers San Bernardino courts. Attention has a clock on it.',
    },
  ],
  shareSummary:
    'People v. Horacio Campos, San Bernardino Superior Court No. FVI802230: six years imposed on a plea entered in a single afternoon, and a laboratory analysis of the seized items that came back negative. If that result is real, the factual basis for the plea was false and the corpus delicti was never there. He wrote to the court from prison in October 2010 asking for the report; it was received on 21 October and denied by minute order on 1 November. The notice went to his mother’s address, she gave it to his sister, and his sister read it to him over the phone — so he learned the result secondhand, after the plea was final. The letter is believed kept by the family. The docket is not in doubt.',
}

export const footer = {
  disclaimer:
    'This site is an independent public record and advocacy archive, maintained by a supporter of the person named in the case, with his knowledge. He represents himself, in pro per; I am not a lawyer. It is not legal representation, does not give legal advice, and creates no attorney-client relationship. All pleadings are filed in pro per, in the petitioner’s own name. Docket entries are transcribed from a case summary printout dated 10 November 2026 and are not yet certified. The account of the notice — that it was mailed to his mother’s address, that she gave it to his sister, and that his sister read it to him by telephone — is the family’s testimony, is unconfirmed by any document I hold, and is published as such; the letter is believed kept by the family, not lost. Statements about contested events — including the negative laboratory result and any claim that the drugs were planted — are allegations until a court or the records establish them, and are published for the purpose of accountability and redress. The negative analysis is the evidence in this file; the planting claim is an allegation and is not presented as established. The six-year term is the sentence recited in the 3 March 2009 minute order; five years and eight months is the custody actually served. The factual-basis argument under Penal Code section 1192.5 and the corpus delicti argument are legal contentions, not findings. The § 4900 figure is a statutory-rate estimate, not an entitlement or a promise of recovery. Statutes, immunities and deadlines vary by jurisdiction and change; nothing here substitutes for licensed counsel in California.',
  closing: 'Nothing about this is over.',
}
