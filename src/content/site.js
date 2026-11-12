/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDIT THIS FILE FIRST.
 *  Every line on the page comes from here.
 *
 *  SOURCE OF RECORD: San Bernardino Superior Court case summary, No. FVI802230,
 *  printed 11/10/2026. Quoted entries are transcribed from that docket.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'A Letter Never Read',
  short: 'A Letter',
  tagline: 'People v. Campos · San Bernardino Superior Court No. FVI802230',
  contactEmail: 'record@example.com',
  repoUrl: '',
  canonicalUrl: 'https://tanque.nspired.cc/',
}

export const hero = {
  kicker: 'People v. Campos',
  firm: 'San Bernardino Superior Court · Case No. FVI802230',
  line1: 'A letter',
  line2: 'never read.',
  line3: 'I pled guilty anyway.',
  paragraphs: [
    'The docket says my plea was knowing and intelligent. It says there was a factual basis, a waiver, and a declaration under Penal Code section 859a. None of that paperwork is in the file. None of it can be downloaded.',
    'There is no booking number. There is no arrest date. The only thing pointing back before the arraignment is the 195 days of credit, which counts back to August 2008 — two months before I first appear in this docket at all.',
    'The charge rested on a drug test. The test is not in the file either.',
  ],
  note: '',
}

export const sections = [
  {
    id: 'plea',
    number: '01',
    title: 'The plea',
    blocks: [
      { type: 'p', text: 'On March 3, 2009, I appeared at a preliminary hearing in Victorville.' },
      {
        type: 'p',
        text: 'I withdrew my not-guilty plea and pled guilty to one count of possession of a controlled substance for sale.',
      },
      { type: 'p', text: 'That same afternoon, I was sentenced to six years in state prison.' },
      {
        type: 'p',
        text: 'I had been in jail for almost a year by then. I was scared. I was convinced I was looking at thirty years. So I withdrew my not-guilty plea and pled guilty. Why would anyone do that?',
      },
      {
        type: 'p',
        text: 'The minute order reflects a knowing and intelligent plea, a factual basis, and a sentence consisting of a doubled four-year base term plus two consecutive years. It also records 195 days of credit.',
      },
      {
        type: 'p',
        text: 'The complaint had alleged a gang enhancement and a prior strike. The strike doubled the base term. Those allegations were stacked on a possession count whose substance tested negative.',
      },
      { type: 'p', text: 'I served five years and eight months.' },
      {
        type: 'p',
        text: 'The question at the center of this archive is straightforward: what did I know about the laboratory testing when I entered that plea?',
      },
    ],
  },
  {
    id: 'result',
    number: '02',
    title: 'The laboratory result',
    blocks: [
      { type: 'p', text: 'The seized items were submitted for laboratory analysis.' },
      { type: 'p', text: 'The reported result was negative: no controlled substance detected.', strong: true },
      { type: 'p', text: 'That result goes to the heart of the charge to which I pled guilty.' },
      {
        type: 'p',
        text: 'How long does it take to test seized items? The docket credits 195 days at sentencing, and by the time I pled I had been in custody almost a year. A laboratory analysis does not take that long. The result was negative, and there was time for it to arrive.',
      },
      {
        type: 'p',
        text: 'The laboratory certificate, bench notes, chain-of-custody records, and transmittal history are necessary to establish exactly what was tested, when the testing occurred, and when the result became available.',
      },
      {
        type: 'p',
        text: 'The result is not a minor detail. It is evidence directly related to the substance underlying the charge.',
      },
    ],
  },
  {
    id: 'letter',
    number: '03',
    title: 'The letter',
    blocks: [
      {
        type: 'p',
        text: 'On October 14, 2010, while I was incarcerated, I wrote to the court requesting the results of the laboratory testing in my case.',
      },
      { type: 'p', text: 'The court docket records that the letter was received on October 21, 2010:' },
      { type: 'quote', text: 'Letter dated 10/14/2010 received from defendant re: results of lab drug testing.' },
      { type: 'p', text: 'On November 1, 2010, the court entered the following minute order:' },
      { type: 'quote', text: 'DEFT REQUEST IS DENIED PER JUDGE TOMBERLIN.' },
      { type: 'p', text: 'A second docket entry reflects that I was notified.' },
      {
        type: 'p',
        text: 'The docket does not show a hearing, appointment of counsel, or production of the laboratory report in response to my request.',
      },
      { type: 'p', text: 'I was asking for the results in my own case. I was already serving the sentence.' },
    ],
  },
  {
    id: 'notice',
    number: '04',
    title: 'The notice my family received',
    blocks: [
      {
        type: 'p',
        text: 'The notice concerning the laboratory result was sent to my mother’s address rather than to me in prison.',
      },
      {
        type: 'p',
        text: 'My mother received it and passed it to my sister. My sister could not read English well enough to understand the entire letter, but she understood enough to tell me that I was coming home early.',
      },
      { type: 'p', text: 'I learned about the result secondhand.' },
      {
        type: 'p',
        text: 'My sister died before I came home. My family believes the letter was kept by my mother. Its present location has not been confirmed.',
      },
      { type: 'p', text: 'I have never personally read the letter.' },
      {
        type: 'p',
        text: 'The distinction matters: my family received information about the result, but I did not receive and read the notice myself.',
      },
    ],
  },
  {
    id: 'deal',
    number: '05',
    title: 'A fair deal',
    blocks: [
      {
        type: 'p',
        text: 'In the real world, when two parties enter into a contract, both get a copy. Both have the opportunity to know what they agreed to.',
      },
      {
        type: 'p',
        text: 'If I understood what I signed, why wasn’t I given a copy of it as I was signing it?',
      },
      { type: 'p', text: 'What kind of fair deal is it when one party doesn’t even get a copy?' },
      { type: 'p', text: 'The Golden Rule applies here, too. Treat others as you would expect to be treated.' },
    ],
  },
  {
    id: 'record',
    number: '06',
    title: 'What the court record shows',
    blocks: [
      { type: 'p', text: 'The available docket establishes the following sequence:' },
      {
        type: 'table',
        head: ['Date', 'Record'],
        rows: [
          [
            'October 27, 2008',
            'Arraignment. Bail set at $250,000. Complaint included possession of a controlled substance for sale, a gang enhancement, and a prior strike allegation. Public defender appointed; not-guilty plea entered.',
          ],
          [
            'March 3, 2009',
            'Preliminary hearing. Not-guilty plea withdrawn; guilty plea entered to one count of possession of a controlled substance for sale.',
          ],
          ['March 3, 2009', 'Sentenced to six years in state prison.'],
          ['October 14, 2010', 'Letter written from custody requesting laboratory results.'],
          ['October 21, 2010', 'Court received the letter.'],
          [
            'November 1, 2010',
            'Request denied per Judge Tomberlin; docket separately records notification to defendant.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'The March 3, 2009 minute order references a Penal Code section 859a declaration and identifies a certified court reporter.',
      },
      {
        type: 'p',
        text: 'The declaration and reporter’s transcript are important records because they may show what factual basis was presented for the plea and what was said when the plea was entered.',
      },
      { type: 'p', text: 'The docket is the record currently available in this archive. It does not answer every question.' },
    ],
  },
  {
    id: 'records',
    number: '07',
    title: 'The records',
    blocks: [
      { type: 'p', text: 'These are the records central to establishing the complete timeline.' },
      {
        type: 'groups',
        groups: [
          {
            title: 'Superior Court Clerk',
            items: [
              'Certified docket and register of actions.',
              'March 3, 2009 plea and sentencing minutes.',
              'Penal Code section 859a declaration.',
              'Certified reporter’s transcript of the plea and sentencing proceedings.',
            ],
          },
          {
            title: 'Forensic Laboratory',
            items: [
              'Final laboratory report or certificate of analysis.',
              'Laboratory bench notes and testing records.',
              'Chain-of-custody documentation.',
              'Evidence submission and transmittal timestamps.',
            ],
          },
          {
            title: 'San Bernardino County Sheriff’s Department',
            items: [
              'Booking and property records.',
              'Custodial transport and housing history.',
              'Incoming and outgoing mail records relevant to the notice.',
            ],
          },
          {
            title: 'District Attorney',
            items: [
              'Laboratory report and evidence intake records.',
              'Discovery transmittal records.',
              'Records showing when the prosecution received or reviewed the laboratory result.',
              'Correspondence and notes concerning the testing before March 3, 2009.',
            ],
          },
          {
            title: 'California Department of Corrections and Rehabilitation',
            items: [
              'April 23, 2009 letter.',
              'April 29, 2009 copy reportedly sent to the parole unit.',
              'Address-of-record history.',
              'Relevant correspondence and notice records.',
            ],
          },
        ],
      },
      {
        type: 'p',
        text: 'Together, these records can establish what was tested, what the result showed, when each party received it, and what information was available when I pled guilty.',
      },
    ],
  },
  {
    id: 'archive',
    number: '08',
    title: 'The archive',
    blocks: [
      { type: 'badge', text: 'Records still outstanding' },
      { type: 'p', text: 'Current record in hand: Court docket printout dated November 10, 2026.' },
      { type: 'p', text: 'Published: 0 of 6 principal record categories.', strong: true },
      {
        type: 'p',
        text: 'The archive is being built around the underlying records, not assumptions about what they will show.',
      },
      { type: 'p', text: 'The central documents are:' },
      {
        type: 'list',
        items: [
          'Laboratory certificate of analysis.',
          'Laboratory bench notes and chain-of-custody records.',
          'March 3, 2009 plea and sentencing transcript.',
          'Penal Code section 859a declaration.',
          'Court and custodial mail records concerning the laboratory notice.',
          'CDCR correspondence and address-of-record history.',
        ],
      },
      {
        type: 'p',
        text: 'The docket establishes that I asked for the laboratory results and that the court denied the request. The remaining records are needed to complete the evidentiary timeline.',
      },
      { type: 'docket', label: 'Court docket', meta: '13.6 KB · November 10, 2026' },
    ],
  },
  {
    id: 'attention',
    number: '09',
    title: 'Attention',
    blocks: [
      { type: 'p', text: 'Corruption can only operate in darkness.' },
      { type: 'p', text: 'This case survives on attention. Attention has a clock on it.' },
      {
        type: 'p',
        text: 'The records matter. The dates matter. The laboratory result matters. The letter matters.',
      },
      {
        type: 'p',
        text: 'I am asking people to read the record, preserve the documents, and share this archive with anyone who can help bring the underlying evidence into public view.',
      },
      { type: 'p', text: 'I represent myself. I am proceeding in pro per.' },
      { type: 'p', text: 'This is not a request to take my word for anything. It is a request to examine the records.' },
      { type: 'sign', lines: ['People v. Campos', 'San Bernardino Superior Court No. FVI802230'] },
    ],
  },
]

export const footer = {
  title: 'Notice',
  disclaimer:
    'This archive documents the author’s account and the records relating to People v. Campos, San Bernardino Superior Court Case No. FVI802230. It is published for public information and discussion. It is not legal advice, does not create an attorney-client relationship, and does not offer legal representation. Legal rights, procedures, and deadlines depend on the facts and applicable law. Nothing on this website substitutes for advice from a licensed California attorney.',
  closing: '',
}
