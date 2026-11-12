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
  name: 'La carta que nunca se leyó',
  short: 'La carta',
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
  line3: 'Me declaré culpable sin haberlo leído.',
  paragraphs: [
    'Cumplí cinco años y ocho meses en prisión estatal. El expediente de la corte muestra que después, desde prisión, pedí los resultados del laboratorio. La corte negó mi pedido.',
    'Un aviso sobre el resultado se envió a mi familia. Mi hermana entendió lo suficiente de la carta para decirme que iba a salir antes. Ella murió antes de que yo saliera.',
    'Yo nunca he leído esa carta.',
    'Este es el registro de lo que pasó, de lo que muestra el expediente de la corte y de los documentos que siguen siendo centrales para entender mi caso.',
  ],
  note: '',
}

export const sections = [
  {
    id: 'plea',
    number: '01',
    title: 'La declaración',
    blocks: [
      { type: 'p', text: 'El 3 de marzo de 2009 me presenté en una audiencia preliminar en Victorville.' },
      {
        type: 'p',
        text: 'Retiré mi declaración de inocencia y me declaré culpable de un cargo de posesión de sustancia controlada para la venta.',
      },
      { type: 'p', text: 'Esa misma tarde me sentenciaron a seis años en prisión estatal.' },
      {
        type: 'p',
        text: 'La minuta refleja una declaración libre y consciente, una base fáctica y una sentencia de cuatro años base duplicados más dos años consecutivos. También registra 195 días de abono.',
      },
      {
        type: 'p',
        text: 'La acusación había alegado una agravante de pandilla y una condena previa. La condena previa duplicó la base. Esas alegaciones se apilaron sobre un cargo de posesión cuya sustancia dio negativo.',
      },
      { type: 'p', text: 'Cumplí cinco años y ocho meses.' },
      {
        type: 'p',
        text: 'La pregunta en el centro de este archivo es simple: qué sabía yo sobre las pruebas de laboratorio cuando me declaré culpable.',
      },
    ],
  },
  {
    id: 'result',
    number: '02',
    title: 'El resultado del laboratorio',
    blocks: [
      { type: 'p', text: 'Lo incautado se envió a análisis de laboratorio.' },
      { type: 'p', text: 'El resultado reportado fue negativo: no se detectó sustancia controlada.', strong: true },
      { type: 'p', text: 'Ese resultado va al centro del cargo del que me declaré culpable.' },
      {
        type: 'p',
        text: '¿Cuánto tarda analizar lo incautado? El expediente abona 195 días en custodia antes de mi declaración, más de seis meses. Ahí está la parte de la cronología que hay que apretar: el resultado era negativo, y hubo tiempo para que llegara al caso antes de que yo me declarara.',
      },
      {
        type: 'p',
        text: 'El certificado del laboratorio, las notas de trabajo, los registros de cadena de custodia y el historial de envíos son necesarios para establecer exactamente qué se analizó, cuándo se hizo el análisis y cuándo estuvo disponible el resultado.',
      },
      {
        type: 'p',
        text: 'El resultado no es un detalle menor. Es prueba directamente relacionada con la sustancia en la que se apoyaba el cargo.',
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
        text: 'El aviso sobre el resultado del laboratorio se envió a la dirección de mi madre, no a mí en prisión.',
      },
      {
        type: 'p',
        text: 'Mi madre lo recibió y se lo pasó a mi hermana. Mi hermana no leía el inglés lo suficiente para entender la carta completa, pero entendió lo necesario para decirme que iba a salir antes.',
      },
      { type: 'p', text: 'Supe del resultado de segunda mano.' },
      {
        type: 'p',
        text: 'Mi hermana murió antes de que yo saliera. Mi familia cree que mi madre guardó la carta. Su ubicación actual no está confirmada.',
      },
      { type: 'p', text: 'Yo nunca he leído la carta personalmente.' },
      {
        type: 'p',
        text: 'La distinción importa: mi familia recibió información sobre el resultado, pero yo no recibí ni leí el aviso.',
      },
    ],
  },
  {
    id: 'deal',
    number: '05',
    title: 'Un trato justo',
    blocks: [
      {
        type: 'p',
        text: 'En el mundo real, cuando dos partes firman un contrato, cada una recibe una copia. Cada una tiene la oportunidad de saber a qué se comprometió.',
      },
      { type: 'p', text: '¿Qué clase de trato justo es cuando una de las partes ni siquiera recibe una copia?' },
      { type: 'p', text: 'La regla de oro también aplica aquí. Trata a los demás como esperarías que te trataran.' },
    ],
  },
  {
    id: 'record',
    number: '06',
    title: 'Lo que muestra el expediente',
    blocks: [
      { type: 'p', text: 'El expediente disponible establece la siguiente secuencia:' },
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
        text: 'La declaración y la transcripción de la taquígrafa son registros importantes porque pueden mostrar qué base fáctica se presentó para la declaración y qué se dijo al tomarla.',
      },
      {
        type: 'p',
        text: 'El expediente es el registro disponible hoy en este archivo. No responde todas las preguntas.',
      },
    ],
  },
  {
    id: 'records',
    number: '07',
    title: 'Los registros',
    blocks: [
      { type: 'p', text: 'Estos son los registros centrales para establecer la cronología completa.' },
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
        text: 'En conjunto, estos registros pueden establecer qué se analizó, qué mostró el resultado, cuándo lo recibió cada parte y qué información existía cuando me declaré culpable.',
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
        text: 'El archivo se construye sobre los registros, no sobre suposiciones acerca de lo que mostrarán.',
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
        text: 'El expediente establece que pedí los resultados del laboratorio y que la corte negó el pedido. Los demás registros son necesarios para completar la cronología probatoria.',
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
        text: 'Le pido a la gente que lea el expediente, que preserve los documentos y que comparta este archivo con cualquiera que pueda ayudar a llevar la prueba a la vista pública.',
      },
      { type: 'p', text: 'Me represento a mí mismo. Comparezco en pro per.' },
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
