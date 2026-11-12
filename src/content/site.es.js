/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDICIÓN EN ESPAÑOL.
 *  Misma estructura que site.js. Cada dato, etiqueta y documento sale de aquí.
 *
 *  FUENTE: resumen del caso, Corte Superior de San Bernardino, n.º FVI802230,
 *  impreso el 10/11/2026. Lo que el expediente no establece se presenta como
 *  alegato, no como hecho.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'La carta que nunca leí',
  short: 'La carta',
  tagline: 'Nada de esto ha terminado.',
  contactEmail: 'record@example.com',
  repoUrl: '',
  canonicalUrl: 'https://lacarta.nspired.cc/',
}

export const hero = {
  kicker: 'People v. Campos · Corte Superior de San Bernardino, caso n.º FVI802230',
  line1: 'El examen salió',
  line2: 'negativo.',
  line3: 'Me declaré culpable sin saberlo.',
  sub: 'El laboratorio analizó lo que se incautó y no encontró sustancia controlada. Pedí ese informe desde prisión en 2010. Una orden lo negó. El aviso llegó a la casa de mi madre. Ella se lo dio a mi hermana. Mi hermana no leía bien el inglés: no pudo leer la carta completa. Pero entendió lo suficiente para saber qué significaba, que yo iba a salir antes. Me lo dijo por teléfono. Yo nunca la he leído.',
  note: 'Este es mi relato.',
  stats: [
    { value: '5a 8m', label: 'tiempo cumplido' },
    { value: '6 años', label: 'condena impuesta, 2009' },
    { value: 'Negativo', label: 'análisis de lo incautado' },
    { value: '2010', label: 'pedido del informe, negado' },
  ],
  artifact: {
    label: 'Reconstrucción ilustrativa',
    caption:
      'Aquí no se reproduce ningún documento oficial. Esto es un esquema de lo que el expediente supuestamente muestra. Las copias certificadas lo reemplazarán a medida que se obtengan.',
    header: 'Aviso oficial — análisis de laboratorio',
    rows: [
      { label: 'Formulario', value: 'FORM 12-B' },
      { label: 'Caso', value: 'FVI802230' },
      { label: 'Análisis', value: 'Detección de sustancias controladas' },
      { label: 'Resultado', value: 'Negativo — no se detectó nada', neg: true },
      { label: 'Enviado a', value: 'Dirección de la familia — mi madre' },
      {
        label: 'En archivo',
        value: 'Dirección en custodia, registros del condado — mi dirección registrada ante el departamento',
      },
      {
        label: 'Cómo me llegó',
        value:
          'De segunda mano: me lo dijeron por teléfono. Mi hermana no pudo leer la carta completa, pero entendió lo suficiente para saber qué significaba',
      },
    ],
    stamp: 'Me llegó de segunda mano',
    stampSub: 'Me lo dijeron por teléfono',
  },
}

export const story = {
  number: '01',
  eyebrow: 'La versión corta',
  title: 'Un acuerdo solo es tan honesto como lo que te muestran primero.',
  intro: 'La custodia terminó. La condena no.',
  paragraphs: [
    'El 3 de marzo de 2009, en una audiencia preliminar en Victorville, retiré mi declaración de inocencia y me declaré culpable de un cargo de posesión de sustancia controlada para la venta. Esa misma tarde me sentenciaron a seis años en prisión estatal. Cumplí cinco años y ocho meses.',
    'El laboratorio analizó lo incautado y no encontró sustancia controlada. Eso es lo que este expediente existe para probar, y el documento que lo resolvería es el certificado de análisis. Si el resultado es correcto, la base fáctica que la corte recitó para mi declaración no pudo ser cierta. El artículo 1192.5 del Código Penal exige que la corte encuentre una base fáctica. Donde no hay sustancia controlada, no hay corpus delicti.',
    'Pedí desde adentro, en mi propio caso, el resultado sobre el que corrió toda la condena. El 14 de octubre de 2010 escribí a la corte sobre las pruebas de laboratorio. La corte recibió mi carta el 21 de octubre de 2010. El 1 de noviembre de 2010 una orden negó el pedido. Me notificaron. No hubo audiencia. No me asignaron abogado. Nunca recibí el informe.',
    'El aviso sobre el análisis llegó a la casa de mi madre, no a la prisión. Mi madre se lo dio a mi hermana. Mi hermana no leía bien el inglés. No pudo leer la carta completa. Entendió lo suficiente para saber qué significaba —que yo iba a salir antes— y me lo dijo por teléfono. Yo nunca la he leído.',
    'Mi hermana murió antes de que yo saliera. Ya me había dicho lo que entendió. Mi familia cree que la carta se guardó, probablemente con mi madre. No la he visto. La describo como no confirmada, no como perdida.',
    'No le pido que me crea. Le pido el papel.',
  ],
  pull: '',
}

export const timeline = {
  number: '02',
  eyebrow: 'Secuencia',
  title: 'Cómo me llegó el resultado, y cuánto tardó.',
  intro:
    'Las fechas y entradas de abajo están transcritas del expediente del caso n.º FVI802230. Donde el expediente calla —el resultado del laboratorio, el camino que tomó el aviso— el planteamiento se presenta como planteamiento. El relato de mi familia sobre el aviso es testimonio, no documento, hasta que se produzca una declaración o la carta.',
  events: [
    {
      marker: '10 / 27 / 2008',
      title: 'Arraigo en Victorville. Fianza de $250,000.',
      body: 'La acusación imputa posesión de sustancia controlada para la venta, con una agravante de pandilla y una condena previa alegada. Me asignan un defensor público, que presenta una declaración de inocencia por mí.',
      tag: 'Entrada del expediente · Antes de la declaración',
      kind: 'docket',
    },
    {
      marker: 'Antes de la declaración',
      title: 'El laboratorio devuelve un resultado negativo.',
      body: 'El análisis de sustancias controladas sale negativo. Si eso es correcto, el Estado tenía en sus manos un documento que desarmaba la base fáctica de su propio cargo, y yo no sabía que existía. Esto es lo que el certificado de análisis confirmará o destruirá.',
      tag: 'En disputa',
      kind: 'contested',
    },
    {
      marker: '03 / 03 / 2009',
      title: 'Retiré mi declaración de inocencia y me declaré culpable. Me sentenciaron ese mismo día.',
      body: 'Retiré la declaración que se había presentado por mí en el arraigo y me declaré culpable del cargo uno. La minuta registra que la corte encontró mi declaración libre y consciente, impuso cuatro años duplicados por la condena previa más dos años consecutivos, y fijó una condena total de seis años, con 195 días de abono. El paquete carcelario se envió al Centro de Detención West Valley la semana siguiente. La minuta nombra una taquígrafa judicial certificada, registra que se estableció una base fáctica y deja constancia de un formulario de declaración PC 859A presentado. No dice cuál era esa base. Ni el formulario ni la transcripción están en mi poder.',
      tag: 'Entrada del expediente',
      kind: 'docket',
    },
    {
      marker: '10 / 21 / 2010',
      title: 'Pedí el resultado de mi propio caso.',
      body: 'Una carta fechada el 14 de octubre llega a la corte. La entrada dice: letter dated 10/14/2010 received from defendant re: results of lab drug testing. Yo estaba en prisión estatal, año y medio dentro de una condena de seis años, pidiéndole a la corte el resultado del caso que estaba cumpliendo. No pedía un favor. Pedía el documento sobre el que se construyó mi condena. Un hombre tiene derecho a pedirle a la corte el expediente de su propio caso.',
      tag: 'Entrada del expediente',
      kind: 'docket',
    },
    {
      marker: '11 / 01 / 2010',
      title: 'El pedido se niega por orden.',
      body: 'La entrada dice: DEFT REQUEST IS DENIED PER JUDGE TOMBERLIN. Otra entrada registra que se notificó al acusado. El expediente no muestra audiencia, ni abogado asignado, ni entrega del informe.',
      tag: 'Entrada del expediente',
      kind: 'docket',
    },
    {
      marker: '68 meses',
      title: 'Cumplí el resto de la condena.',
      body: 'La custodia terminó a los cinco años y ocho meses. La condena no terminó.',
      tag: 'Punto del expediente',
      kind: 'record',
    },
    {
      marker: '2010 → hoy',
      title: 'El resultado me llegó de segunda mano.',
      body: 'El aviso llegó a la casa de mi madre. Ella se lo dio a mi hermana. Mi hermana no leía bien el inglés y no pudo leer la carta completa. Entendió lo suficiente para saber qué significaba —que yo iba a salir antes— y me lo dijo por teléfono. Yo nunca la he leído. Ella tampoco pudo leerla entera. Mi hermana murió antes de que yo saliera. Mi familia cree que la carta se guardó. Hasta que se produzca, ahí está el expediente.',
      tag: 'Relato de la familia',
      kind: 'open',
    },
  ],
}

export const facts = {
  number: '03',
  eyebrow: 'Cuestiones de hecho',
  title: 'Todo lo que sigue depende de esto.',
  items: [
    {
      n: '01',
      title: 'Una sola tarde',
      claim: 'La declaración y la sentencia fueron el mismo día.',
      detail:
        'La minuta del 3 de marzo de 2009 registra mi cambio de declaración en la audiencia preliminar, la sentencia inmediata, la renuncia a la remisión a libertad condicional y la conclusión de que mi declaración fue libre y consciente. Esa conclusión es lo que una moción del artículo 1473.7 tiene que vencer. Por eso importa el análisis retenido.',
      source: 'Minuta, 3/3/2009',
    },
    {
      n: '02',
      title: 'Pedí, desde adentro',
      claim: 'La corte recibió mi pedido y lo negó en una línea.',
      detail:
        'El 21 de octubre de 2010 la corte recibió mi carta sobre las pruebas de laboratorio: un pedido del único documento sobre el que corrió el caso, en mi propio caso, mientras lo cumplía. El 1 de noviembre de 2010 el pedido se negó por orden y me notificaron. Nada en el expediente muestra audiencia, abogado ni el informe. Ese es mi registro de diligencia.',
      source: 'Entradas del expediente, 21/10/2010 y 1/11/2010',
    },
    {
      n: '03',
      title: 'El aviso llegó a una dirección familiar',
      claim: 'El aviso llegó a la casa de mi madre, no a la prisión.',
      detail:
        'Mullane exige un aviso razonablemente calculado para llegar a mí. El condado tenía mi dirección en custodia: sus propios envíos lo muestran. Pero la familia sí me alcanzó, hasta donde pudo: mi madre le entregó la carta a mi hermana, y mi hermana, que no leía bien el inglés, entendió lo suficiente para saber qué significaba y me dijo por teléfono que yo iba a salir antes. Así que esto es un problema de debido proceso por demora y rodeo, no un aviso que nunca llegó. Es el más débil de los planteamientos, y este sitio lo dice.',
      source: 'Libros de correo, hojas de envío, cartas del DOC del 23/4/2009 y 29/4/2009',
    },
    {
      n: '04',
      title: 'Un hallazgo negativo y una base fáctica falsa',
      claim: 'Sin sustancia controlada no hay corpus delicti.',
      detail:
        'El artículo 1192.5 del Código Penal exige que la corte encuentre una base fáctica para la declaración, en el acta. Si el análisis era negativo, la base fáctica del artículo 11378 del Código de Salud y Seguridad era falsa. Sin sustancia no hay delito. La minuta dice que se estableció una base fáctica. No dice qué la sostenía. Una declaración hecha sobre una base que la propia prueba del Estado contradice no es una declaración con conocimiento bajo Boykin. Esto, y no el aviso, es el planteamiento más fuerte del expediente.',
      source: 'Certificado de análisis, formulario PC 859A, interrogatorio de la declaración',
    },
  ],
}

export const question = {
  number: '04',
  eyebrow: 'La pregunta que el expediente no responde',
  title: 'Algo me hizo hacerlo.',
  paragraphs: [
    'Retiré una declaración de inocencia y me declaré culpable la tarde del 3 de marzo de 2009.',
    'El expediente no dice qué. La minuta nombra una taquígrafa certificada, un formulario de declaración PC 859A y una base fáctica. No dice qué me dijeron, qué me mostraron ni qué pusieron delante de mí antes de que me levantara y cambiara mi declaración.',
    'Esto es lo que sé. Las mismas personas que me presionaban para aceptar el acuerdo tenían el único papel que me habría dejado libre. No solo habría terminado el caso: me habría dejado libre. Si el resultado del laboratorio hubiera estado en mis manos antes de esa tarde, no me habría declarado culpable. No habría base fáctica de la cual declararse. Habría ido a casa.',
    'El debido proceso es un procedimiento justo sobre la prueba, con aviso al hombre que tiene que vivir con el resultado. El lado que tenía la carta fue el lado que decidió qué se me permitía saber. ¿En qué realidad eso es justo?',
    'En cambio cumplí casi seis años por una declaración apoyada en un hecho que la propia prueba del Estado contradice.',
  ],
}

export const deal = {
  number: '05',
  eyebrow: 'El acuerdo y el papel',
  title: 'Un acuerdo de culpabilidad es un contrato. Nadie firma un contrato sin una copia.',
  paragraphs: [
    'A mí no me dieron copia. El Estado tenía el resultado del laboratorio. El Estado sabía que el cargo dependía de la sustancia incautada. Firmé de todos modos —en la sala, en el acta, dentro de un sistema que no me dijo qué estaba firmando. Tenía derecho al papel antes de hablar. El Estado tenía la obligación de dármelo.',
  ],
  rulesTitle: 'Las reglas que este expediente pone en juego:',
  rules: [
    {
      cite: 'Boykin v. Alabama (1969)',
      text: 'La declaración tiene que ser libre, consciente y voluntaria. Yo no podía declararme con conocimiento sobre un hecho que nunca me dejaron ver.',
    },
    {
      cite: 'Henderson v. Morgan (1976)',
      text: 'La declaración es con conocimiento solo si sabía el cargo y los hechos detrás. El cargo era posesión para la venta. Los hechos eran negativos.',
    },
    {
      cite: 'Código Penal de California, art. 1192.5',
      text: 'La corte debe encontrar una base fáctica para la declaración. Sin sustancia controlada no hay base fáctica. Sin base fáctica no hay declaración.',
    },
    {
      cite: 'Brady v. Maryland (1963)',
      text: 'La acusación tiene que entregar la prueba que ayuda a la defensa. El análisis negativo era esa prueba. Nunca me la dieron.',
    },
    {
      cite: 'Napue v. Illinois (1959)',
      text: 'El Estado no puede dejar en pie una base fáctica falsa sin corregirla, incluida una que él mismo recitó.',
    },
    {
      cite: 'Mullane v. Central Hanover Bank (1950)',
      text: 'El aviso tiene que ser razonablemente calculado para llegar a mí. El aviso llegó a la casa de mi madre, en inglés, que mi familia no podía leer.',
    },
    {
      cite: 'Brady v. United States (1970), Santobello (1971), Corbitt (1978)',
      text: 'Estas dicen que negociar una declaración es legal. Ninguna dice que una declaración sea legal cuando el Estado retuvo el único documento que habría matado el cargo. Los acuerdos legales no son excusa para esconder prueba.',
    },
  ],
}

export const evidence = {
  number: '06',
  eyebrow: 'Lo que estoy pidiendo',
  title: 'Cinco instituciones. Cinco preguntas que solo el papel puede contestar.',
  intro:
    'Cada fila es una solicitud de registros públicos, una exigencia de preservación y un futuro objetivo de citación. Abre una fila para ver qué prueba.',
  rows: [
    {
      entity: 'Secretaría de la Corte Superior · caso n.º FVI802230',
      objective:
        'Copia certificada del resumen del expediente, la minuta de la declaración y sentencia del 3 de marzo de 2009, el formulario de declaración PC 859A y la transcripción de esas actuaciones. La minuta nombra una taquígrafa certificada.',
      proof:
        'Qué base fáctica se puso realmente en el acta antes de mi declaración, y si la corte tenía alguna base cuando el análisis se pone al lado.',
      status: 'Solicitud de certificación',
    },
    {
      entity: 'Laboratorio forense',
      objective:
        'Notas de trabajo, el certificado negativo finalizado, la cadena de custodia y las marcas de tiempo de envío de lo incautado.',
      proof: '',
      status: 'Solicitud CPRA',
    },
    {
      entity: 'Alguacil del condado de San Bernardino',
      objective:
        'Registros de ingreso y de propiedad, registros de transporte bajo custodia, historial de alojamiento y libros de correo recibido durante todo mi encierro.',
      proof: '',
      status: 'Solicitud CPRA',
    },
    {
      entity: 'Fiscalía del distrito',
      objective:
        'Entradas del libro de correo, notas de ingreso del caso, hojas de envío de descubrimiento y cualquier registro de lo que la Fiscalía sabía del análisis antes del 3 de marzo de 2009.',
      proof: '',
      status: 'Exigencia de preservación',
    },
    {
      entity: 'Departamento de Correcciones y Rehabilitación',
      objective:
        'La carta del 23 de abril de 2009, la copia del 29 de abril de 2009 a la unidad de libertad condicional y las entradas de dirección registrada del departamento durante toda la condena.',
      proof: '',
      status: 'Solicitud CPRA',
    },
  ],
}

export const archive = {
  number: '07',
  eyebrow: 'El archivo',
  title: 'Lo que tengo. Lo que falta.',
  intro: 'La impresión del expediente fechada el 10 de noviembre de 2026 es el único registro que tengo en la mano.',
  docs: [
    {
      title: 'Resumen del expediente — FVI802230',
      type: 'Registro judicial',
      status: 'requested',
      note: 'De la secretaría, con la declaración del 3/3/2009, la carta del 21/10/2010 y la orden del 1/11/2010.',
    },
    {
      title: 'Certificado de análisis del laboratorio — negativo',
      type: 'Registro forense',
      status: 'requested',
      note: 'El documento ancla. Pedido con notas de trabajo, cadena de custodia y marcas de tiempo de envío.',
    },
    {
      title: 'Declaración PC 859A y transcripción de la taquígrafa',
      type: 'Registro judicial',
      status: 'requested',
      note: 'La minuta dice que se estableció una base fáctica y que el formulario se presentó. Ni el formulario ni la transcripción están en mi poder. La transcripción es lo que termina la discusión.',
    },
    {
      title: 'Registros de alojamiento y correo bajo custodia',
      type: 'Registro de custodia',
      status: 'demand',
      note: 'La prueba del propio Estado de que conocía mi dirección durante 68 meses.',
    },
    {
      title: 'Registro de avisos y envíos',
      type: 'Registro de agencia',
      status: 'demand',
      note: 'A qué dirección se envió el aviso, y cuándo salió del edificio.',
    },
    {
      title: 'El aviso, guardado por la familia',
      type: 'Registro familiar',
      status: 'requested',
      note: 'Mi familia cree que mi madre lo guardó. Si existe, resuelve la pregunta del envío. Hasta entonces está sin confirmar, no perdido.',
    },
  ],
  statusLabels: {
    requested: 'Pedido',
    demand: 'Exigencia de preservación',
    missing: 'Sin recuperar',
    held: 'Copia certificada en mano',
  },
}

export const docket = {
  number: '08',
  eyebrow: 'El expediente mismo',
  title: 'Lee el expediente.',
  note: 'El resumen del caso n.º FVI802230, impreso el 10 de noviembre de 2026.',
}

export const dispatch = {
  number: '09',
  eyebrow: 'Difusión',
  lead: 'La corrupción solo puede operar en la oscuridad. Este caso vive de la atención. La atención tiene reloj.',
  title: 'Mándalo a donde lo lean.',
  body: 'No pido lástima. Pido difusión y pido registros. Si tienes cualquiera de las dos, quiero saber de ti.',
  needs: [
    {
      title: 'En pro per',
      detail: 'Me represento a mí mismo.',
    },
    {
      title: 'Registros certificados',
      detail:
        'El archivo del laboratorio. El formulario PC 859A. El libro de correo. El registro de 68 meses de alojamiento. Un condado que ha tenido dieciocho años para perderlos.',
    },
    {
      title: 'La carta y el expediente de la declaración',
      detail:
        'Viste, copiaste, fotografiaste o recibiste correspondencia sobre este caso. Tienes el papeleo de la declaración. Mándalo.',
    },
    {
      title: 'Difusión',
      detail: 'Publícalo. Mándalo por correo. Ponlo en manos de un periodista que cubra las cortes de San Bernardino.',
    },
  ],
  shareSummary:
    'People v. Horacio Campos, Corte Superior de San Bernardino, caso n.º FVI802230: seis años por una declaración hecha en una sola tarde, y un análisis de laboratorio de lo incautado que salió negativo. Si ese resultado es real, la base fáctica de la declaración era falsa y el corpus delicti nunca existió. Escribió a la corte desde prisión en octubre de 2010 pidiendo el informe; se recibió el 21 de octubre y se negó por orden el 1 de noviembre. El aviso llegó a la dirección de su madre, ella se lo dio a su hermana y su hermana se lo dijo por teléfono: supo el resultado de segunda mano, cuando la declaración ya era firme. La familia cree que la carta se guardó.',
}

export const footer = {
  disclaimer:
    'Este sitio es un archivo de defensa sobre People v. Campos, Corte Superior de San Bernardino, caso n.º FVI802230. Me represento a mí mismo, en pro per. No soy abogado. Esto no es representación legal, no da asesoría legal y no crea una relación abogado-cliente. Los plazos, las leyes y los procedimientos varían según la jurisdicción y cambian. Nada de esto sustituye a un abogado con licencia en California.',
  closing: 'Nada de esto ha terminado.',
}
