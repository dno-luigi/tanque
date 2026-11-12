/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDIT THIS FILE FIRST.
 *  Every fact, label, document and link on the site comes from here.
 *
 *  SOURCE OF RECORD: San Bernardino Superior Court case summary, No. FVI802230,
 *  printed 11/10/2026. Where a date or entry is quoted below it is transcribed
 *  from that docket. Everything the docket does not establish is labelled as a
 *  claim, not a fact.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'The Letter I Never Read',
  short: 'The Letter',
  tagline: 'Nothing about this is over.',
  contactEmail: 'record@example.com',
  repoUrl: '',
  canonicalUrl: 'https://tanque.nspired.cc/',
}

export const hero = {
  kicker: 'People v. Campos · San Bernardino Superior Court No. FVI802230',
  line1: 'The test came back',
  line2: 'negative.',
  line3: 'I pleaded guilty without knowing it.',
  sub: 'The lab analyzed what was seized and found no controlled substance. I asked the court for that report from prison in 2010. A minute order refused. The notice went to my mother’s address. She gave it to my sister. My sister could not read English well — she could not read the whole letter. But she understood enough to know what it meant: I was coming home early. She told me that over the phone. I have never read it myself.',
  note: 'This is my account.',
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
      { label: 'Form', value: 'FORM 12-B' },
      { label: 'Case', value: 'FVI802230' },
      { label: 'Analysis', value: 'Controlled substance screening' },
      { label: 'Result', value: 'Negative — none detected', neg: true },
      { label: 'Mailed to', value: 'Family address — my mother' },
      { label: 'On file', value: 'Custodial address, county records — my address of record with the department' },
      {
        label: 'Reached me',
        value:
          'Secondhand — told to me by phone; my sister could not read the letter in full but understood enough to know what it meant',
      },
    ],
    stamp: 'Reached me secondhand',
    stampSub: 'Told to me by phone',
  },
}

export const story = {
  number: '01',
  eyebrow: 'The short version',
  title: 'A deal is only as honest as what they show you first.',
  intro: 'Custody ended. The conviction did not.',
  paragraphs: [
    'On 3 March 2009, at a preliminary hearing in Victorville, I withdrew a plea of not guilty and pleaded guilty to one count of possession of a controlled substance for sale. The same afternoon I was sentenced to six years in state prison. I served five years and eight months.',
    'The lab analyzed the seized items and found no controlled substance. That is the claim this record exists to prove. The document that would settle it is the certificate of analysis. If the lab result is right, the factual basis the court recited for my plea could not have been true. Penal Code section 1192.5 requires the court to find a factual basis. Where there is no controlled substance, there is no corpus delicti.',
    'I asked from inside, in my own case, for the result the whole conviction ran on. On 14 October 2010 I wrote to the court about the lab testing. The court received my letter on 21 October 2010. On 1 November 2010 a minute order denied the request. I was notified. There was no hearing. No counsel was appointed. I never got the report.',
    'The notice about the analysis went to my mother’s address, not to the prison. My mother gave it to my sister. My sister could not read English well. She could not read the whole letter. She understood enough to know what it meant — that I was coming home early — and she told me that over the phone. I have never read it myself.',
    'My sister died before I came home. She had already told me what she understood. My family believes the letter was kept, most likely by my mother. I have not seen it. I describe it as unconfirmed, not lost.',
    'I am not asking you to take my word for it. I am asking for the paper.',
  ],
  pull: '',
}

export const timeline = {
  number: '02',
  eyebrow: 'Sequence',
  title: 'How the result reached me, and how late.',
  intro:
    'Dates and entries below are transcribed from the case docket for No. FVI802230. Where the docket is silent — the lab result itself, the route the notice took — the claim is labeled a claim. My family’s account of the notice is testimony, not a document, until a declaration or the letter is produced.',
  events: [
    {
      marker: '10 / 27 / 2008',
      title: 'Arraigned in Victorville. Bail set at $250,000.',
      body: 'The complaint charges possession of a controlled substance for sale, with a street-gang enhancement and a prior strike alleged. A public defender is appointed and enters a plea of not guilty for me.',
      tag: 'Docket entry · Before the plea',
      kind: 'docket',
    },
    {
      marker: 'Before the plea',
      title: 'The lab returns a negative result.',
      body: 'Analytical testing for controlled substances comes back negative. If that is right, the state held a document that undercut the factual basis for its own charge, and I did not know it existed. This is the claim the certificate of analysis will confirm or destroy.',
      tag: 'Contested',
      kind: 'contested',
    },
    {
      marker: '03 / 03 / 2009',
      title: 'I withdrew my not-guilty plea and pleaded guilty. Sentenced the same day.',
      body: 'I withdrew the plea entered for me at arraignment and pleaded to count one. The minute order records that the court found my plea knowing and intelligent, imposed a doubled base term of four years plus two consecutive years, and fixed a total term of six years, with 195 days of credit. The prison packet went to West Valley Detention Center the following week. The minutes name a certified court reporter, record that a factual basis was established, and note a PC 859A declaration form was filed. They do not say what that basis was. Neither the form nor the transcript is in my hands.',
      tag: 'Docket entry',
      kind: 'docket',
    },
    {
      marker: '10 / 21 / 2010',
      title: 'I asked for the result in my own case.',
      body: 'A letter dated 14 October reaches the court. The docket entry reads: letter dated 10/14/2010 received from defendant re: results of lab drug testing. I was in state prison, a year and a half into a six-year term, asking the court for the result in the case I was serving. I was not asking for a favor. I was asking for the document my conviction was built on. A man has the right to ask the court for the record of his own case.',
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
      title: 'I served the rest of the term.',
      body: 'Custody ended after five years and eight months. The conviction did not end.',
      tag: 'Record point',
      kind: 'record',
    },
    {
      marker: '2010 → now',
      title: 'The result reached me secondhand.',
      body: 'The notice went to my mother’s address. She gave it to my sister. My sister could not read English well, and she could not read the whole letter. She understood enough to know what it meant — that I was coming home early — and she told me that over the phone. I have never read it. She could not read all of it herself. My sister died before I came home. My family believes the letter was kept. Until it is produced, that is where the record stands.',
      tag: 'Family account',
      kind: 'open',
    },
  ],
}

export const facts = {
  number: '03',
  eyebrow: 'A matter of facts',
  title: 'Everything downstream rests on these.',
  items: [
    {
      n: '01',
      title: 'One afternoon',
      claim: 'The plea and the sentence happened the same day.',
      detail:
        'The minute order of 3 March 2009 records my change of plea at the preliminary hearing, an immediate sentencing, a waiver of the probation referral, and a finding that my plea was knowing and intelligent. That finding is what a § 1473.7 motion has to overcome. That is why the withheld analysis matters.',
      source: 'Minute order, 3/3/2009',
    },
    {
      n: '02',
      title: 'I asked, from inside',
      claim: 'The court received my request and denied it in one line.',
      detail:
        'On 21 October 2010 the court received my letter about the lab drug testing — a request for the one document the case ran on, in my own case, while I served it. On 1 November 2010 the request was denied by minute order and I was notified. Nothing in the docket shows a hearing, counsel, or the report. That is my due-diligence record.',
      source: 'Docket entries, 10/21/2010 and 11/1/2010',
    },
    {
      n: '03',
      title: 'Notice went to a family address',
      claim: 'The notice went to my mother’s home, not the prison.',
      detail:
        'Mullane requires notice reasonably calculated to reach me. The county had my custodial address. Its own transmittals show it. But the family did reach me, as far as it could: my mother handed the letter to my sister, and my sister, who could not read English well, understood enough to know what it meant and told me over the phone that I was coming home early. So this is a due-process problem about delay and indirection, not a notice that never arrived. It is the weaker of the claims, and this site says so.',
      source: 'Mail ledgers, transmittal sheets, DOC letters of 4/23/2009 and 4/29/2009',
    },
    {
      n: '04',
      title: 'A negative finding, and a false factual basis',
      claim: 'No controlled substance means no corpus delicti.',
      detail:
        'Penal Code § 1192.5 requires the court to find a factual basis for the plea, on the record. If the analysis was negative, the factual basis for Health and Safety Code § 11378 was false. No substance, no crime. The minutes say a factual basis was established. They do not say what supported it. A plea entered on a basis the state’s own evidence contradicts is not a knowing plea under Boykin. This, not the notice, is the strongest argument in the file.',
      source: 'Certificate of analysis, PC 859A form, plea colloquy',
    },
  ],
}

export const question = {
  number: '04',
  eyebrow: 'The question the record does not answer',
  title: 'Something moved me to do that.',
  paragraphs: [
    'I withdrew a not-guilty plea and pleaded guilty on the afternoon of 3 March 2009.',
    'The record does not say what. The minutes name a certified court reporter, a PC 859A declaration form, and a factual basis. They do not say what I was told, what I was shown, or what was put in front of me before I stood up and changed my plea.',
    'Here is what I know. The same people who were pressing me to take the deal held the one piece of paper that would have set me free. Not just ended the case — set me free. If the lab result had been in my hands before that afternoon, I would not have pleaded guilty. There would have been no factual basis to plead to. I would have gone home.',
    'Due process is a fair proceeding on the evidence, with notice to the man who has to live with the outcome. The side that held the letter was the side that decided what I was allowed to know. In what plane of reality is that fair?',
    'Instead I served almost six years on a plea predicated on a fact that the state’s own evidence contradicts.',
  ],
}

export const deal = {
  number: '05',
  eyebrow: 'The deal and the paper',
  title: 'A plea bargain is a contract. Nobody signs a contract without a copy of it.',
  paragraphs: [
    'I was not given a copy. The state had the lab result. The state knew the charge rested on the seized substance. I signed anyway — in the courtroom, on the record, under a system that did not tell me what I was signing. I had a right to the paper before I spoke. The state had an obligation to give it to me.',
  ],
  rulesTitle: 'The rules the record engages:',
  rules: [
    {
      cite: 'Boykin v. Alabama (1969)',
      text: 'A plea must be knowing, intelligent and voluntary. I could not knowingly plead to a fact I was never allowed to see.',
    },
    {
      cite: 'Henderson v. Morgan (1976)',
      text: 'A plea is knowing only if I knew the charge and the facts behind it. The charge was possession for sale. The facts were negative.',
    },
    {
      cite: 'Cal. Penal Code § 1192.5',
      text: 'The court must find a factual basis for the plea. No controlled substance, no factual basis. No factual basis, no plea.',
    },
    {
      cite: 'Brady v. Maryland (1963)',
      text: 'The prosecution must disclose evidence that helps the defense. The negative analysis was that evidence. It was never given to me.',
    },
    {
      cite: 'Napue v. Illinois (1959)',
      text: 'The state cannot let a false factual basis stand uncorrected — including one it recited itself.',
    },
    {
      cite: 'Mullane v. Central Hanover Bank (1950)',
      text: 'Notice must be reasonably calculated to reach me. The notice went to my mother’s house, in English, which my family could not read.',
    },
    {
      cite: 'Brady v. United States (1970), Santobello (1971), Corbitt (1978)',
      text: 'These say plea bargaining is lawful. None of them says a plea is lawful when the state withheld the one document that would have killed the charge. Lawful deals are not excuses for hiding evidence.',
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
        'A certified copy of the case summary docket, the 3 March 2009 plea and sentencing minutes, the PC 859A declaration form, and the reporter’s transcript of those proceedings. The minutes name a certified reporter.',
      proof:
        'What factual basis was actually placed on the record before my plea, and whether the court had any basis at all once the analysis is set beside it.',
      status: 'Certification request',
    },
    {
      entity: 'Forensic laboratory',
      objective:
        'Bench notes, the finalized negative certificate of analysis, chain of custody, and transmittal timestamps for the seized items.',
      proof: '',
      status: 'CPRA request',
    },
    {
      entity: 'San Bernardino County Sheriff',
      objective:
        'Booking and property logs, custodial transportation records, housing history, and incoming mail logs for the full period of my confinement.',
      proof: '',
      status: 'CPRA request',
    },
    {
      entity: 'District Attorney’s Office',
      objective:
        'Mail ledger entries, case intake notes, discovery transmittal sheets, and any record of what the People knew about the analysis before 3 March 2009.',
      proof: '',
      status: 'Preservation demand',
    },
    {
      entity: 'Department of Corrections and Rehabilitation',
      objective:
        'The 23 April 2009 letter, the 29 April 2009 copy to the parole unit, and the department’s address-of-record entries for the full term.',
      proof: '',
      status: 'CPRA request',
    },
  ],
}

export const archive = {
  number: '07',
  eyebrow: 'The archive',
  title: 'What I have. What is missing.',
  intro: 'The docket printout dated 10 November 2026 is the only record in my hands.',
  docs: [
    {
      title: 'Case summary docket — FVI802230',
      type: 'Court record',
      status: 'requested',
      note: 'From the clerk, covering the 3/3/2009 plea, the 10/21/2010 letter, and the 11/1/2010 minute order.',
    },
    {
      title: 'Laboratory certificate of analysis — negative',
      type: 'Forensic record',
      status: 'requested',
      note: 'The anchor document. Requested with bench notes, chain of custody, and transmittal timestamps.',
    },
    {
      title: 'PC 859A declaration and reporter’s transcript',
      type: 'Court record',
      status: 'requested',
      note: 'The minutes say a factual basis was established and that the declaration form was filed. Neither the form nor the transcript is in my hands. The transcript is what ends the argument.',
    },
    {
      title: 'Custodial housing and mail logs',
      type: 'Custody record',
      status: 'demand',
      note: 'The state’s own proof that it knew my address for 68 months.',
    },
    {
      title: 'Notice and transmittal log',
      type: 'Agency record',
      status: 'demand',
      note: 'Where the notice was addressed, and when it left the building.',
    },
    {
      title: 'The notice, as kept by the family',
      type: 'Family record',
      status: 'requested',
      note: 'My family believes my mother kept it. If it exists, it settles the mailing question. Until then it is unconfirmed, not lost.',
    },
  ],
  statusLabels: {
    requested: 'Requested',
    demand: 'Preservation demand',
    missing: 'Unrecovered',
    held: 'Certified copy in hand',
  },
}

export const docket = {
  number: '08',
  eyebrow: 'The record itself',
  title: 'Read the docket.',
  note: 'The case summary for No. FVI802230, printed 10 November 2026.',
}

export const dispatch = {
  number: '09',
  eyebrow: 'Dispatch',
  lead: 'Corruption can only operate in darkness. This case survives on attention. Attention has a clock on it.',
  title: 'Send it where it will be read.',
  body: 'I am not asking for sympathy. I am asking for distribution, and for records. If you have either, I want to hear from you.',
  needs: [
    {
      title: 'In pro per',
      detail: 'I represent myself.',
    },
    {
      title: 'Certified records',
      detail:
        'The lab file. The PC 859A plea form. The mail log. The 68-month housing record. A county that has had eighteen years to lose them.',
    },
    {
      title: 'The letter and the plea file',
      detail:
        'You saw, copied, photographed, or received correspondence about this case. You hold the plea paperwork. Send it.',
    },
    {
      title: 'Distribution',
      detail: 'Post it. Email it. Hand it to a reporter who covers San Bernardino courts.',
    },
  ],
  shareSummary:
    'People v. Horacio Campos, San Bernardino Superior Court No. FVI802230: six years imposed on a plea entered in a single afternoon, and a laboratory analysis of the seized items that came back negative. If that result is real, the factual basis for the plea was false and the corpus delicti was never there. He wrote to the court from prison in October 2010 asking for the report; it was received on 21 October and denied by minute order on 1 November. The notice went to his mother’s address, she gave it to his sister, and his sister told him over the phone — so he learned the result secondhand, after the plea was final. The letter is believed kept by the family.',
}

export const footer = {
  disclaimer:
    'This site is an advocacy archive concerning People v. Campos, San Bernardino Superior Court No. FVI802230. I represent myself, in pro per. I am not a lawyer. This is not legal representation, does not give legal advice, and creates no attorney-client relationship. Statutes, deadlines, and procedures vary by jurisdiction and change. Nothing here substitutes for licensed counsel in California.',
  closing: 'Nothing about this is over.',
}
