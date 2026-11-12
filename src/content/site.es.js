/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDICIÓN EN ESPAÑOL. Misma estructura que site.js.
 *
 *  FUENTE: resumen del caso, Corte Superior de San Bernardino, n.º FVI802230,
 *  impreso el 10/11/2026. Las entradas entre comillas están transcritas de ese
 *  expediente y se dejan en su idioma original.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Una carta que nunca se leyó',
  short: 'Una carta',
  tagline: 'People v. Campos · Corte Superior de San Bernardino, caso n.º FVI802230',
  contactEmail: 'record@example.com',
  repoUrl: '',
  canonicalUrl: 'https://lacarta.nspired.cc/',
}

export const hero = {
  kicker: 'People v. Campos',
  firm: 'Corte Superior de San Bernardino · caso n.º FVI802230',
  line1: 'Una carta',
  line2: 'que nunca se leyó.',
  line3: 'Me declaré culpable de todos modos.',
  paragraphs: [],
  stats: [
    { value: '5a 8m', label: 'tiempo cumplido' },
    { value: '6 años', label: 'condena impuesta, 2009' },
    { value: 'Sin leer', label: 'resultado del laboratorio' },
    { value: '2010', label: 'pedido negado' },
  ],
  note: 'Jugaron al póker conmigo y no me explicaron las reglas.',
}

export const sections = [
  {
    id: 'plea',
    number: '01',
    title: 'La declaración',
    blocks: [
      {
        type: 'p',
        text: 'El 23 de octubre de 2008, en Apple Valley, yo iba de pasajero en un carro que fue detenido. Me arrestaron por posesión de sustancia controlada para la venta.',
      },
      {
        type: 'p',
        text: 'La línea del arresto en el expediente está en blanco. Ni fecha, ni número de registro, ni agencia. El único lugar donde aparece el arresto es el abono: 131 días efectivos, contados hasta el día en que me declaré culpable.',
      },
      { type: 'p', text: 'Le dije a mi abogado que eso no era mío.' },
      { type: 'p', text: 'El 3 de marzo de 2009 me presenté en una audiencia preliminar en Victorville.' },
      {
        type: 'p',
        text: 'Retiré mi declaración de inocencia y me declaré culpable de un cargo de posesión de sustancia controlada para la venta.',
      },
      { type: 'p', text: 'Esa misma tarde me sentenciaron a seis años en prisión estatal.' },
      {
        type: 'p',
        text: 'Para entonces llevaba cuatro meses bajo custodia. Tenía miedo. Estaba convencido de que me enfrentaba a treinta años. Así que retiré mi declaración de inocencia y me declaré culpable. ¿Por qué haría alguien eso?',
      },
      { type: 'p', text: 'Imagínese jugar al póker contra alguien que no sabía que se podía mentir.', strong: true },
      {
        type: 'p',
        text: 'La minuta dice que renuncié a mi derecho de confrontar y contrainterrogar a los testigos en mi contra. Llama a mi declaración libre y consciente. Cuatro años, duplicados, más dos consecutivos.',
      },
      {
        type: 'p',
        text: 'Tres agravantes de pandilla — dos bajo el 186.22(b), una bajo el 186.22(a) —, dos condenas previas de prisión y una condena previa grave. La previa duplicó la base. Todo sobre un solo cargo de posesión.',
      },
      {
        type: 'table',
        head: ['Cargo', 'Delito', 'Resultado'],
        rows: [
          ['001', 'PC 186.22(b)(1)(A) — agravante de pandilla callejera', 'Negado; certificado 3/3/2009'],
          ['002', 'PC 186.22(b)(1)(A) — agravante de pandilla callejera', 'Anulado 3/3/2009'],
          ['1', 'HS 11378 — posesión de sustancia controlada para la venta', 'Culpable 3/3/2009'],
          ['2', 'PC 186.22(a) — terrorismo callejero', 'Desestimado 3/3/2009'],
          ['999', 'PC 667.5(b) — condena previa de prisión (dos cargos)', 'Negado; anulado 3/3/2009'],
        ],
      },
      {
        type: 'p',
        text: 'Una agravante no se sostiene sola. Va montada sobre un cargo. Esta iba montada sobre una prueba de drogas.',
      },
      {
        type: 'p',
        text: 'Cuando me arrestaron yo trabajaba en construcción. Tenía trabajo y estaba ganando. No consumía, estaba limpio. A ese le apilaron las agravantes.',
      },
      { type: 'p', text: 'Cumplí cinco años y ocho meses.' },
      {
        type: 'p',
        text: '¿Qué sabía yo de las pruebas de laboratorio cuando me declaré culpable?',
      },
    ],
  },
  {
    id: 'result',
    number: '02',
    title: 'El resultado del laboratorio',
    blocks: [
      { type: 'p', text: 'Lo incautado se envió a análisis de laboratorio.' },
      { type: 'p', text: 'Nunca he visto el resultado.', strong: true },
      {
        type: 'p',
        text: 'Mi familia me dijo por teléfono que la prueba salió negativa. No se encontró sustancia controlada. Nunca he leído ese papel. No sé qué dice.',
      },
      {
        type: 'p',
        text: 'Eso es lo que espero que diga. También es el documento que le llevo pidiendo a la corte desde 2010.',
      },
      {
        type: 'p',
        text: '¿Cuánto tarda una prueba de drogas? Estuve 131 días y nadie me puso un resultado por delante. Una prueba de drogas no tarda cuatro meses.',
      },
      {
        type: 'p',
        text: 'El certificado del laboratorio, las notas de trabajo, la cadena de custodia y los registros de envío son los que muestran qué se analizó, cuándo, y cuándo regresó la respuesta.',
      },
    ],
  },
  {
    id: 'letter',
    number: '03',
    title: 'La carta',
    blocks: [
      {
        type: 'p',
        text: 'El 14 de octubre de 2010, mientras estaba preso, escribí a la corte para pedir los resultados de las pruebas de laboratorio de mi caso.',
      },
      { type: 'p', text: 'El expediente registra que la carta se recibió el 21 de octubre de 2010:' },
      { type: 'quote', text: 'Letter dated 10/14/2010 received from defendant re: results of lab drug testing.' },
      { type: 'p', text: 'El 1 de noviembre de 2010 la corte dictó la siguiente orden:' },
      { type: 'quote', text: 'DEFT REQUEST IS DENIED PER JUDGE TOMBERLIN.' },
      { type: 'p', text: 'Otra entrada del expediente registra que se me notificó.' },
      {
        type: 'p',
        text: 'El expediente no muestra audiencia, ni abogado asignado, ni entrega del informe del laboratorio en respuesta a mi pedido.',
      },
      { type: 'p', text: 'Estaba pidiendo los resultados de mi propio caso. Ya estaba cumpliendo la condena.' },
    ],
  },
  {
    id: 'notice',
    number: '04',
    title: 'El aviso que recibió mi familia',
    blocks: [
      {
        type: 'p',
        text: 'El aviso sobre el resultado llegó a la dirección de mi madre, no a mí en prisión.',
      },
      {
        type: 'p',
        text: 'Mi madre lo recibió y se lo dio a mi hermana. Mi hermana no sabía suficiente inglés para leerlo todo, pero entendió lo necesario para decirme que iba a salir antes.',
      },
      {
        type: 'p',
        text: 'Mi hermana murió antes de que yo saliera.',
      },
      { type: 'p', text: 'Nunca he leído la carta.' },
    ],
  },
  {
    id: 'deal',
    number: '05',
    title: 'Sin trato',
    blocks: [
      {
        type: 'p',
        text: 'Imagínese firmar un contrato con alguien y no recibir copia — y a la cárcel directo después de firmarlo.',
      },
      {
        type: 'p',
        text: 'Si entendía lo que firmaba, ¿por qué no me dieron una copia mientras lo firmaba?',
      },
      { type: 'p', text: '¿Eso es justo?', strong: true },
      { type: 'p', text: '¿Cómo vas a entender una declaración de la que no te dan copia?' },
      { type: 'p', text: 'La regla de oro también aplica aquí. Trata a los demás como esperarías que te trataran.' },
    ],
  },
  {
    id: 'record',
    number: '06',
    title: 'Lo que muestra el expediente',
    blocks: [
      { type: 'p', text: 'El expediente muestra este orden:' },
      {
        type: 'table',
        head: ['Fecha', 'Registro'],
        rows: [
          [
            '27 de octubre de 2008',
            'Arraigo. Fianza de $250,000. La acusación incluía posesión de sustancia controlada para la venta, una agravante de pandilla y una condena previa alegada. Se asigna defensor público y se presenta declaración de inocencia.',
          ],
          [
            '3 de marzo de 2009',
            'Audiencia preliminar. Se retira la declaración de inocencia y se declara culpable de un cargo de posesión de sustancia controlada para la venta.',
          ],
          ['3 de marzo de 2009', 'Sentencia a seis años en prisión estatal.'],
          ['14 de octubre de 2010', 'Carta escrita desde la cárcel pidiendo los resultados del laboratorio.'],
          ['21 de octubre de 2010', 'La corte recibe la carta.'],
          [
            '1 de noviembre de 2010',
            'Se niega el pedido por el juez Tomberlin; otra entrada registra la notificación al acusado.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'La minuta del 3 de marzo de 2009 menciona una declaración del artículo 859a del Código Penal e identifica una taquígrafa judicial certificada.',
      },
      {
        type: 'p',
        text: 'La declaración del 859a y la transcripción mostrarían qué base fáctica quedó en el acta y qué se dijo de verdad cuando me declaré culpable.',
      },
      {
        type: 'p',
        text: 'El expediente es el único registro que tengo. No responde todo.',
      },
    ],
  },
  {
    id: 'records',
    number: '07',
    title: 'Los registros',
    blocks: [
      { type: 'p', text: 'Estos son los registros que establecerían la cronología.' },
      {
        type: 'groups',
        groups: [
          {
            title: 'Secretaría de la Corte Superior',
            items: [
              'Expediente y registro de actuaciones certificados.',
              'Minuta de la declaración y sentencia del 3 de marzo de 2009.',
              'Declaración del artículo 859a del Código Penal.',
              'Transcripción certificada de la taquígrafa de la declaración y la sentencia.',
            ],
          },
          {
            title: 'Laboratorio forense',
            items: [
              'Informe final del laboratorio o certificado de análisis.',
              'Notas de trabajo y registros de análisis.',
              'Documentación de la cadena de custodia.',
              'Marcas de tiempo de envío y recepción de la prueba.',
            ],
          },
          {
            title: 'Alguacil del condado de San Bernardino',
            items: [
              'Registros de ingreso y de propiedad.',
              'Historial de transporte bajo custodia y de alojamiento.',
              'Registros de correo recibido y enviado relacionados con el aviso.',
            ],
          },
          {
            title: 'Fiscalía',
            items: [
              'Informe del laboratorio y registros de ingreso de prueba.',
              'Registros de envío de descubrimiento.',
              'Registros que muestren cuándo recibió o revisó la Fiscalía el resultado del laboratorio.',
              'Correspondencia y notas sobre las pruebas anteriores al 3 de marzo de 2009.',
            ],
          },
          {
            title: 'Departamento de Correcciones y Rehabilitación de California',
            items: [
              'Carta del 23 de abril de 2009.',
              'Copia del 29 de abril de 2009 supuestamente enviada a la unidad de libertad condicional.',
              'Historial de dirección registrada.',
              'Correspondencia y registros de avisos relacionados.',
            ],
          },
        ],
      },
      {
        type: 'p',
        text: 'En conjunto muestran qué se analizó, cómo salió, y quién recibió el resultado y cuándo.',
      },
    ],
  },
  {
    id: 'archive',
    number: '08',
    title: 'El archivo',
    blocks: [
      { type: 'badge', text: 'Registros aún pendientes' },
      { type: 'p', text: 'Registro actual en mano: impresión del expediente fechada el 10 de noviembre de 2026.' },
      { type: 'p', text: 'Publicado: 0 de 6 categorías principales de registros.', strong: true },
      {
        type: 'p',
        text: 'Esto lo estoy construyendo sobre los registros reales, no sobre lo que supongo que dicen.',
      },
      { type: 'p', text: 'Los documentos centrales son:' },
      {
        type: 'list',
        items: [
          'Certificado de análisis del laboratorio.',
          'Notas de trabajo y registros de cadena de custodia del laboratorio.',
          'Transcripción de la declaración y sentencia del 3 de marzo de 2009.',
          'Declaración del artículo 859a del Código Penal.',
          'Registros de correo de la corte y de la custodia sobre el aviso del laboratorio.',
          'Correspondencia del CDCR e historial de dirección registrada.',
        ],
      },
      {
        type: 'p',
        text: 'El expediente muestra que pedí los resultados del laboratorio y que la corte dijo no. Todo lo demás sigue faltando.',
      },
      { type: 'docket', label: 'Expediente de la corte', meta: '13.6 KB · 10 de noviembre de 2026' },
    ],
  },
  {
    id: 'attention',
    number: '09',
    title: 'Atención',
    blocks: [
      { type: 'p', text: 'La corrupción solo puede operar en la oscuridad.' },
      { type: 'p', text: 'Este caso vive de la atención. La atención tiene reloj.' },
      {
        type: 'p',
        text: 'Los registros importan. Las fechas importan. El resultado del laboratorio importa. La carta importa.',
      },
      {
        type: 'p',
        text: 'Lee el expediente. Guarda los documentos. Mándale esto a cualquiera que pueda ayudar a sacar la prueba a la luz.',
      },
      { type: 'p', text: 'Me represento a mí mismo.' },
      { type: 'p', text: 'No pido que se crea en mi palabra. Pido que se examinen los registros.' },
      { type: 'sign', lines: ['People v. Campos', 'Corte Superior de San Bernardino, n.º FVI802230'] },
    ],
  },
]

export const footer = {
  title: 'Aviso',
  disclaimer:
    'Este archivo documenta el relato del autor y los registros relacionados con People v. Campos, Corte Superior de San Bernardino, caso n.º FVI802230. Se publica para información y discusión pública. No es asesoría legal, no crea una relación abogado-cliente y no ofrece representación legal. Los derechos, los procedimientos y los plazos dependen de los hechos y de la ley aplicable. Nada en este sitio sustituye la asesoría de un abogado con licencia en California.',
  closing: '',
}
