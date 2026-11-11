/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDICIÓN EN ESPAÑOL.
 *  Misma estructura exacta que site.js. Todo hecho, etiqueta, documento y
 *  enlace de la edición en español sale de aquí.
 *
 *  FUENTE DE REGISTRO: resumen del caso de la Corte Superior de San Bernardino,
 *  n.º FVI802230, impreso el 10/11/2026. Las fechas y entradas citadas están
 *  transcritas de ese expediente. Lo que el expediente no establece se marca
 *  como alegato, no como hecho.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'La carta que nunca llegó',
  short: 'La carta',
  tagline:
    'El Pueblo contra Horacio Campos · Corte Superior del Condado de San Bernardino, caso n.º FVI802230 — un expediente público, armado documento por documento.',
  // Se usa en el pie y en el botón de correo. MARCADOR — reemplazar.
  contactEmail: 'record@example.com',
  // Opcional. Vacío oculta el enlace al repositorio en el pie.
  repoUrl: '',
  // Se define cuando el sitio esté publicado, p. ej. 'https://la-carta.pages.dev'.
  // Vacío usa la dirección actual del navegador al compartir.
  canonicalUrl: '',
}

export const hero = {
  kicker: 'El Pueblo contra Campos · Corte Superior de San Bernardino, caso n.º FVI802230',
  line1: 'La prueba salió',
  line2: 'negativa.',
  line3: 'Y mandaron el resultado a la casa equivocada.',
  sub: 'Seis años de condena. Cinco años y ocho meses en prisión. Un resultado de laboratorio que él dice que nunca vio, una petición que hizo desde la cárcel en 2010 y una negativa firmada en un solo renglón. El aviso llegó a casa de su hermana — que murió antes de que él saliera, y con ella se fue la carta.',
  note: 'Presentado a su nombre, sin abogado (pro per). Hecho por dos personas que no van a parar.',
  stats: [
    { value: '5a 8m', label: 'tiempo en prisión' },
    { value: '6 años', label: 'condena impuesta, 2009' },
    { value: 'Negativo', label: 'resultado de laboratorio ocultado' },
    { value: '2010', label: 'petición negada sin audiencia' },
  ],
  artifact: {
    label: 'Reconstrucción ilustrativa',
    caption:
      'Aquí no se reproduce ningún documento oficial. Esto es un esquema de lo que, según la versión que sostiene este expediente, muestran los registros. Las copias certificadas lo irán sustituyendo conforme se obtengan.',
    header: 'Aviso oficial — análisis de laboratorio',
    rows: [
      { label: 'Caso', value: 'FVI802230' },
      { label: 'Análisis', value: 'Prueba de sustancias controladas' },
      { label: 'Resultado', value: 'Negativo — no se detectó ninguna', neg: true },
      { label: 'Enviado a', value: 'Un domicilio particular' },
      { label: 'No enviado a', value: 'El centro de reclusión' },
    ],
    stamp: 'Entregado en la dirección equivocada',
    stampSub: 'La persona estaba bajo custodia estatal cuando se envió',
  },
}

export const story = {
  number: '01',
  eyebrow: 'La versión corta',
  title: 'Un acuerdo solo es honesto si te muestran todo antes de firmarlo.',
  paragraphs: [
    'El 3 de marzo de 2009, en una audiencia preliminar en Victorville, Horacio Campos retiró su declaración de inocencia y se declaró culpable de un cargo de posesión de sustancia controlada para la venta. Esa misma tarde fue sentenciado a seis años en prisión estatal. Cumplió cinco años y ocho meses.',
    'El análisis de laboratorio de lo que le encontraron salió negativo: no se detectó ninguna sustancia controlada. Esa es la afirmación que este expediente existe para probar, y el documento que la resolvería es el certificado de análisis. El condado no lo ha entregado.',
    'Pidió desde adentro. El 14 de octubre de 2010 escribió a la corte sobre los resultados de las pruebas de laboratorio. La corte recibió la carta el 21 de octubre de 2010. El 1 de noviembre de 2010, una orden minutada negó la petición, y se le notificó. Sin audiencia. Sin abogado designado. Sin informe.',
    'Mientras tanto, el aviso sobre ese análisis se fue a una dirección familiar, donde una pariente con poco inglés hizo lo que pudo con un documento que nunca fue para ella. Él estuvo bajo custodia estatal todo el tiempo, en un centro al que el condado ya le había escrito. Tenían su dirección. La mandaron a la de otra persona.',
    'Su hermana fue quien la recibió. Murió antes de que él volviera a casa. Él nunca la leyó, y desde entonces nadie la ha podido encontrar. Ese es el hueco en el que está parada esta página — y la razón por la que todo lo demás sale a la vista pública, donde cualquiera lo puede revisar.',
    'No le pedimos que nos crea. Le pedimos el papel.',
  ],
  pull: 'Cinco años y ocho meses no es una condena que cumples y terminas. Es un cuarto en el que sigues parado.',
}

export const timeline = {
  number: '02',
  eyebrow: 'Secuencia',
  title: 'Cómo la carta no lo encontró.',
  intro:
    'Las fechas y entradas de abajo están transcritas del registro del caso n.º FVI802230. Dos cosas que el registro no muestra —el resultado negativo en sí y a dónde se envió el aviso— están marcadas como afirmaciones. Se están obteniendo copias certificadas.',
  events: [
    {
      marker: '27 / 10 / 2008',
      title: 'Le leen los cargos en Victorville. Fianza de $250,000.',
      body: 'La acusación imputa posesión de sustancia controlada para la venta, con un agravante por pandilla callejera y una condena previa grave (strike). Se le designa un defensor público, que se declara no culpable por él.',
      tag: 'Entrada del expediente',
      kind: 'docket',
    },
    {
      marker: 'Antes de la declaración',
      title: 'El laboratorio entrega un resultado negativo.',
      body: 'El análisis de sustancias controladas sale negativo. Si eso es cierto, el Estado tenía en sus manos un documento que debilitaba su propio caso — y el hombre al que acusaba no sabía que existía. El certificado de análisis confirmará o destruirá esta afirmación.',
      tag: 'En disputa',
      kind: 'contested',
    },
    {
      marker: '03 / 03 / 2009',
      title: 'Se declara culpable en la audiencia preliminar. Lo sentencian ese mismo día.',
      body: 'Retira su declaración de inocencia y se declara culpable del cargo uno. La minuta registra que la corte consideró la declaración libre y consciente, impone cuatro años duplicados por la condena previa grave más dos años consecutivos, y fija una condena total de seis años, con 195 días de abono. La semana siguiente el paquete carcelario se envía al Centro de Detención West Valley.',
      tag: 'Entrada del expediente',
      kind: 'docket',
    },
    {
      marker: '21 / 10 / 2010',
      title: 'Llega a la corte una carta fechada el 14 de octubre.',
      body: 'La entrada dice: «carta fechada 10/14/2010 recibida del acusado en relación con los resultados de las pruebas de laboratorio». Estaba en prisión estatal, escribiéndole a la corte él mismo, pidiendo el resultado de la prueba en su propio caso.',
      tag: 'Entrada del expediente',
      kind: 'docket',
    },
    {
      marker: '01 / 11 / 2010',
      title: 'La petición se niega por orden minutada.',
      body: 'La entrada dice, en inglés: «DEFT REQUEST IS DENIED PER JUDGE TOMBERLIN» — la petición del acusado se niega. Otra entrada registra que se le notificó. El expediente no muestra audiencia, ni designación de abogado, ni entrega del informe.',
      tag: 'Entrada del expediente',
      kind: 'docket',
    },
    {
      marker: '68 meses',
      title: 'Cumple el resto de la condena.',
      body: 'Sale después de cinco años y ocho meses. La condena no termina con la salida. Según la doctrina federal vigente, esa distinción es el muro entre él y cualquier remedio civil en este país.',
      tag: 'Punto del expediente',
      kind: 'record',
    },
    {
      marker: 'Ahora',
      title: 'Su hermana ya no está. La carta se fue con ella.',
      body: 'La persona que recibió el aviso ha muerto. Nosotros no podemos producir la carta: solo las instituciones que la enviaron y la registraron pueden. Para eso son la moción del artículo 1473.7 y las solicitudes de registros.',
      tag: 'Abierto',
      kind: 'open',
    },
  ],
}

export const facts = {
  number: '03',
  eyebrow: 'Los cuatro hechos que importan',
  title: 'Todo lo demás depende de esto.',
  items: [
    {
      n: '01',
      title: 'Una sola tarde',
      claim: 'La declaración de culpabilidad y la sentencia ocurrieron el mismo día.',
      detail:
        'La minuta del 3 de marzo de 2009 registra el cambio de declaración en la audiencia preliminar, la sentencia inmediata, la renuncia a la remisión a libertad condicional y la conclusión de que la declaración fue libre y consciente. Esa conclusión es justamente lo que una moción del artículo 1473.7 tiene que vencer — y por eso importa el análisis retenido.',
      source: 'Minuta, 3/3/2009',
    },
    {
      n: '02',
      title: 'Pidió, desde adentro',
      claim: 'La corte recibió su petición y la negó en un renglón.',
      detail:
        'El 21 de octubre de 2010 la corte recibió su carta sobre las pruebas de laboratorio. El 1 de noviembre de 2010 la petición fue negada por orden minutada y se le notificó. Nada en el expediente muestra una audiencia, un abogado o el informe mismo. Ese es el registro de diligencia.',
      source: 'Entradas del expediente, 21/10/2010 y 1/11/2010',
    },
    {
      n: '03',
      title: 'Aviso mal dirigido',
      claim: 'Correspondencia crítica fue a una casa particular.',
      detail:
        'La correspondencia oficial sobre el análisis se dirigió a una vivienda familiar ocupada por una pariente con dominio limitado del inglés, en lugar de entregarse en el centro donde el condado ya había enviado su paquete carcelario. Lo que el libro de correo tiene que probar es el envío mismo.',
      source: 'Libros de correo, hojas de envío, recibos de correo devuelto',
    },
    {
      n: '04',
      title: 'Un resultado negativo',
      claim: 'El informe decía que no había sustancia controlada.',
      detail:
        'El análisis de laboratorio arrojó un resultado negativo — el ancla probatoria de la moción y de cualquier cargo bajo el artículo 1983 que venga después. Mientras no se produzca el certificado de análisis, este sigue siendo el hecho central en disputa, no un hecho probado.',
      source: 'Notas del laboratorio, certificado de análisis, cadena de custodia',
    },
  ],
}

export const heck = {
  number: '04',
  eyebrow: 'La barrera',
  title: 'Por qué todavía no podemos demandar — y exactamente qué abre la puerta.',
  body: [
    'Bajo Heck v. Humphrey, 512 U.S. 477 (1994), una demanda de derechos civiles por daños que necesariamente implicaría la invalidez de una condena penal vigente queda bloqueada desde el umbral. Un tribunal civil no va a dejar que una demanda haga el trabajo de una apelación posterior a la condena.',
    'Esto no es un tecnicismo que podamos esquivar, y no es lo mismo que un plazo de prescripción. Es una puerta, y tiene cuatro llaves. Nuestro camino es la tercera: que un tribunal estatal invalide la sentencia. Esa ruta tiene número de artículo —el 1473.7 del Código Penal de California— y número de caso: FVI802230.',
  ],
  citation:
    'Heck v. Humphrey, 512 U.S. 477 (1994) · 42 U.S.C. § 1983 · Cal. Penal Code §§ 1473, 1473.7',
  closedLabel: 'Condena vigente',
  openLabel: 'Condena anulada',
  closedState: 'Bloqueado',
  openState: 'Abierto',
  closedNote:
    'Ahora mismo. Todo reclamo de daños bajo el artículo 1983 se desestima antes de ser escuchado. Presentar con más fuerza no arregla esto; solo la anulación lo arregla.',
  openNote:
    'En el momento en que la sentencia cae, se abre el tribunal civil: debido proceso, procesamiento malicioso, responsabilidad municipal y un reclamo de compensación legal que corre con reloj.',
  keys: [
    {
      title: 'Revocada en apelación directa',
      detail: 'Un tribunal de apelaciones revoca la sentencia o la pena.',
    },
    {
      title: 'Indulto o eliminación del registro',
      detail: 'La condena se elimina o se indulta por acción ejecutiva.',
    },
    {
      title: 'Invalidada por un tribunal estatal',
      detail:
        'Un tribunal competente anula la sentencia. Esta es nuestra ruta: una moción del artículo 1473.7 para anular, presentada en la Corte Superior de San Bernardino, construida sobre el análisis negativo retenido.',
      ours: true,
    },
    {
      title: 'Cuestionada por hábeas corpus',
      detail:
        'Un tribunal federal emite un auto de hábeas corpus o de otro modo pone en duda la condena. El hábeas corpus del artículo 1473, en el formulario MC-275, es la vía estatal paralela.',
    },
  ],
}

export const phases = {
  number: '05',
  eyebrow: 'El orden del trabajo',
  title: 'Cuatro etapas, en orden. El orden es la estrategia.',
  intro:
    'Presentado a su nombre, sin abogado (pro per). El apoyo de registros, redacción e investigación viene de fuera del caso; las presentaciones son suyas. Sáltate una etapa y la siguiente se cae.',
  items: [
    {
      n: 'I',
      title: 'Anular la declaración de culpabilidad',
      kicker: 'Penal · Corte Superior de San Bernardino, Victorville',
      summary:
        'Un solo objetivo: una orden que anule la sentencia del 3 de marzo de 2009 en el caso n.º FVI802230. Nada más en este plan funciona hasta que exista esa orden.',
      bullets: [
        'Presentar una moción para anular bajo el artículo 1473.7(a)(1) del Código Penal, en pro per, por el error perjudicial que dañó su capacidad de entender el caso y de declararse culpable con conocimiento.',
        'Presentar en paralelo una petición de hábeas corpus en el formulario MC-275 bajo el artículo 1473(b)(3)(A): prueba material sustancial que no estaba razonablemente disponible al momento de la declaración.',
        'Anclar el reclamo en Brady v. Maryland: un acusado no puede renunciar con conocimiento a su derecho a juicio mientras el Estado retiene la prueba que debilita su caso. La conclusión de la minuta de que la declaración fue libre y consciente es la que se ataca.',
        'Anexar el expediente como prueba. La carta del 21/10/2010 y la negativa del 01/11/2010 responden cualquier argumento de demora o falta de diligencia: pidió, desde prisión, y se le negó por orden minutada.',
        'Pedir abogado designado y audiencia probatoria una vez que haya una demostración prima facie en el papel. Estar en pro per no renuncia al derecho a ser escuchado.',
      ],
      output: 'Una orden que anule la sentencia, o una fecha de audiencia sobre la moción.',
    },
    {
      n: 'II',
      title: 'Soltar el expediente',
      kicker: 'Registros · CPRA, Código de Gobierno § 7920.000 y siguientes',
      summary:
        'Quien pide sin abogado no tiene poder de citación antes de presentar un caso. La ley de registros públicos hace ese trabajo — y cada solicitud pone a la agencia sobre aviso de que un ser humano está mirando.',
      bullets: [
        'Secretaría de la Corte Superior, Victorville: copia certificada del resumen del caso n.º FVI802230, incluidas la entrada de la carta del 21/10/2010 y la orden minutada del 1/11/2010.',
        'Departamento del Sheriff: registros de ingreso, recibos de propiedad, registros de traslado y libros de correo recibido durante toda la condena.',
        'Fiscalía de Distrito: entradas del libro de correo, notas de admisión del caso y hojas de envío de descubrimiento.',
        'Laboratorio forense: notas del analista, certificado toxicológico, recibos de entrega y el registro de cadena de custodia de lo incautado.',
        'Cada solicitud sale con un párrafo de retención de pruebas. Armar un solo expediente cronológico, con custodio nombrado y fecha para cada página.',
      ],
      output:
        'Tres documentos ancla certificados: el expediente, el certificado de análisis y el registro de correo y avisos.',
    },
    {
      n: 'III',
      title: 'Abrir la puerta civil',
      kicker: 'Compensación · artículo 1983',
      summary:
        'Con la sentencia anulada, la barrera Heck se levanta y los mismos hechos se vuelven un caso de daños — uno que hay que presentar antes de que se acabe el plazo.',
      bullets: [
        'Reclamo ante CalVCB bajo el artículo 4900 y siguientes del Código Penal, una vez anulada la condena y establecida la inocencia de hecho: $140 por día × 2,068 días ≈ $289,520 a la tasa legal actual, antes de cualquier ajuste. La anulación por sí sola puede no satisfacer a la Junta; la declaración de inocencia de hecho es un paso aparte.',
        'Cargo I — Debido proceso, Decimocuarta Enmienda: supresión deliberada del análisis negativo antes de la declaración (Brady).',
        'Cargo II — Procesamiento malicioso, Cuarta Enmienda: un proceso mantenido después de conocido el resultado exculpatorio.',
        'Cargo III — Monell v. Department of Social Services: si enviar los avisos a una dirección familiar en lugar de una custodial refleja una práctica y no un caso aislado, la política del condado es el reclamo.',
        'Cuidar el cómputo del plazo. Bajo Heck, el reclamo del artículo 1983 no empieza a correr hasta la anulación; en California el plazo por daño personal es de dos años (Código de Procedimiento Civil § 335.1), así que la demanda se redacta antes de la anulación y se presenta esa misma semana.',
      ],
      output: 'Una demanda del artículo 1983 presentada y un reclamo de compensación con el reloj corriendo.',
    },
    {
      n: 'IV',
      title: 'Ponerlo a la luz',
      kicker: 'Público · rendición de cuentas',
      summary:
        'Las cortes se mueven despacio y en silencio. Publicar hace que el silencio cueste. Ninguna de las dos vías funciona sola, y la vía pública nunca debe ir por delante del expediente.',
      bullets: [
        'Publicar solo lo verificable: presentaciones, correspondencia de agencias, recibos certificados, registros de custodia.',
        'Mantener el lenguaje institucional. El objetivo es un proceso que falló, no una persona para odiar en internet.',
        'Poner fecha y archivar cada afirmación, para que nada se pueda retirar en silencio después.',
        'Tratar la atención como presión sobre los tiempos, nunca como sustituto de una orden judicial.',
        'Corregir en público, en la página, con la fecha. Un archivo que se edita a sí mismo no es un archivo.',
      ],
      output: 'Un archivo que no se puede ignorar y que no se puede reescribir.',
    },
  ],
}

export const evidence = {
  number: '06',
  eyebrow: 'Lo que estamos exigiendo',
  title: 'Cuatro instituciones. Cuatro preguntas que solo el papel puede contestar.',
  intro:
    'Cada fila es una solicitud de registros públicos, una exigencia de preservación y un futuro objetivo de citación. Abre una fila para ver qué prueba.',
  rows: [
    {
      entity: 'Secretaría de la Corte Superior · caso n.º FVI802230',
      objective:
        'Copia certificada del registro del caso, incluidas la entrada de la carta del 21/10/2010, la orden minutada del 1/11/2010 y la minuta de la declaración y sentencia del 3 de marzo de 2009.',
      proof:
        'Que él mismo planteó el resultado del laboratorio, desde prisión, años antes de que un abogado tomara el caso: el fundamento de diligencia y oportunidad para el artículo 1473.7.',
      status: 'Solicitud de certificación',
    },
    {
      entity: 'Laboratorio forense',
      objective:
        'Notas del analista, el certificado de análisis negativo finalizado, la cadena de custodia y las fechas de envío de lo incautado.',
      proof:
        'La fecha exacta en que existió el resultado exculpatorio — y por lo tanto exactamente cuánto tiempo se retuvo antes de la declaración.',
      status: 'Solicitud CPRA',
    },
    {
      entity: 'Sheriff del Condado de San Bernardino',
      objective:
        'Registros de ingreso y propiedad, traslados, historial de alojamiento y libros de correo recibido durante todo el encierro.',
      proof:
        'Que el condado tenía conocimiento continuo y documentado de dónde estaba él, mientras el aviso oficial iba a una dirección particular.',
      status: 'Solicitud CPRA',
    },
    {
      entity: 'Fiscalía de Distrito',
      objective:
        'Entradas del libro de correo, notas de admisión del caso, hojas de envío de descubrimiento y cualquier registro de la ruta del aviso.',
      proof:
        'Si el error de dirección fue una falla administrativa o indiferencia deliberada: la diferencia entre negligencia y una inmunidad que se puede atravesar.',
      status: 'Exigencia de preservación',
    },
  ],
}

export const immunity = {
  number: '07',
  eyebrow: 'El problema de la inmunidad',
  title: 'Dos puertas. Solo una se abre.',
  intro:
    'Los casos de derechos civiles no se ganan por lo mal que se portó alguien. Se ganan por la función que esa persona cumplía cuando lo hizo.',
  cards: [
    {
      kind: 'Absoluta',
      title: 'Inmunidad del fiscal',
      scope: 'Actuación como abogado en la fase judicial',
      body: 'Un fiscal que sostiene cargos, presenta un caso o negocia una declaración en la corte tiene inmunidad absoluta frente a daños. La malicia no la atraviesa. La mala fe tampoco.',
      canPierce: false,
      note: 'No construir la demanda aquí.',
    },
    {
      kind: 'Calificada',
      title: 'Inmunidad en la investigación y la administración',
      scope: 'Laboratorios, correo interno, secretarías, personal del sheriff y fiscales fuera de su función de abogado',
      body: 'La inmunidad calificada cae cuando la conducta viola un derecho claramente establecido — o cuando el expediente muestra indiferencia deliberada y no un error. Desviar un aviso obligatorio de una dirección custodial conocida es el tipo de hecho que vive aquí.',
      canPierce: true,
      note: 'Aquí es donde tiene que caer la demanda.',
    },
  ],
  takeaway:
    'La frase que gana en la demanda no es que se equivocaron. Es que sabían dónde estaba, y aun así lo mandaron a otro lado.',
}

export const archive = {
  number: '08',
  eyebrow: 'El archivo',
  title: 'Lo que tenemos. Lo que nos deben.',
  intro:
    'La impresión del expediente fechada el 10 de noviembre de 2026 es el único registro en mano, y no está certificada. Nada en esta página se describe como verificado hasta que una copia certificada lo esté. Las entradas de 2010 citadas arriba vienen de esa impresión.',
  docs: [
    {
      title: 'Registro certificado del caso — FVI802230',
      type: 'Registro judicial',
      status: 'requested',
      note: 'Certificado por la secretaría, con la declaración del 3/3/2009, la carta del 21/10/2010 y la orden minutada del 1/11/2010.',
    },
    {
      title: 'Certificado de análisis de laboratorio — negativo',
      type: 'Registro forense',
      status: 'requested',
      note: 'El documento ancla. Solicitado con notas del analista, cadena de custodia y fechas de envío.',
    },
    {
      title: 'Registros de alojamiento y correo',
      type: 'Registro de custodia',
      status: 'demand',
      note: 'La prueba del propio Estado de que conocía su dirección durante 68 meses.',
    },
    {
      title: 'Registro de avisos y envíos',
      type: 'Registro de agencia',
      status: 'demand',
      note: 'A qué dirección iba el aviso y cuándo salió del edificio.',
    },
    {
      title: 'Interrogatorio y formulario de cambio de declaración',
      type: 'Registro judicial',
      status: 'requested',
      note: 'La declaración y el formulario detrás de la minuta del 3 de marzo de 2009.',
    },
    {
      title: 'La carta que recibió su hermana',
      type: 'No recuperada',
      status: 'missing',
      note: 'Murió antes de que él volviera a casa. No la tenemos. El archivo de alguien la tiene.',
    },
  ],
  statusLabels: {
    requested: 'Solicitado',
    demand: 'Exigencia de preservación',
    missing: 'No recuperada',
    held: 'Copia certificada en mano',
  },
}

export const protocol = {
  number: '09',
  eyebrow: 'Norma de publicación',
  title: 'Cómo publicamos sin regalarles un caso de difamación.',
  intro:
    'La atención solo es presión si está limpia. Estas son las reglas que esta página se impone, en público, para que se nos puedan exigir.',
  rules: [
    {
      n: '01',
      statement: 'Registros antes que adjetivos.',
      detail:
        'Publicamos presentaciones, correspondencia, recibos y registros. Si una frase no se puede rastrear hasta un documento, no sube.',
    },
    {
      n: '02',
      statement: 'Instituciones, no personas.',
      detail:
        'Escribimos sobre oficinas, procedimientos y fallas — no sobre personas nombradas a las que no hemos acusado en una presentación judicial. Cuando un registro nombra a un funcionario, citamos el registro y no le agregamos nada.',
    },
    {
      n: '03',
      statement: 'Llamar alegato al alegato.',
      detail:
        'Mientras un tribunal no resuelva, los hechos en disputa se marcan como en disputa. La confianza no es prueba.',
    },
    {
      n: '04',
      statement: 'Poner fecha a todo.',
      detail:
        'Cada afirmación lleva la fecha en que se publicó y la versión del documento en que se apoya, para que el expediente no se pueda reescribir en silencio.',
    },
    {
      n: '05',
      statement: 'Corregir en público.',
      detail:
        'Un error se corrige en la página, con la fecha, no se borra. Un registro que se edita a sí mismo no es un registro.',
    },
  ],
}

export const dispatch = {
  number: '10',
  eyebrow: 'Difusión',
  title: 'Mándalo a donde lo lean.',
  body: 'La corrupción vive del silencio. Lo que pedimos no es lástima: es distribución y son registros. Si tienes cualquiera de las dos, queremos saber de ti.',
  needs: [
    {
      title: 'Abogado post-condena',
      detail:
        'Un abogado que de verdad haya anulado una declaración de culpabilidad por prueba exculpatoria retenida. Las presentaciones van a su nombre; la ayuda detrás importa.',
    },
    {
      title: 'Registros certificados',
      detail:
        'Cualquiera que pueda ayudar a soltar el archivo del laboratorio, el libro de correo o el registro de 68 meses de un condado que ha tenido dieciocho años para perderlo.',
    },
    {
      title: 'La carta misma',
      detail:
        'Si alguna vez viste, copiaste, fotografiaste o recibiste correspondencia sobre este caso, eso es lo que buscamos.',
    },
    {
      title: 'Distribución',
      detail:
        'Publícalo, mándalo por correo, pásalo a un periodista que cubra las cortes de San Bernardino. La atención tiene reloj.',
    },
  ],
  shareSummary:
    'El Pueblo contra Horacio Campos, Corte Superior de San Bernardino, caso n.º FVI802230: seis años de condena por una declaración de culpabilidad hecha en una sola tarde, y un resultado de laboratorio que él dice que nunca le mostraron. Escribió a la corte desde prisión en octubre de 2010; se recibió el 21 de octubre y se negó por orden minutada el 1 de noviembre. Su hermana recibió el aviso en una dirección familiar y murió antes de que él volviera a casa. La carta no aparece. El expediente sí.',
}

export const footer = {
  disclaimer:
    'Este sitio es un archivo público y de defensa, independiente, mantenido por la persona nombrada en el caso y por personas que la apoyan. No es representación legal, no da asesoría legal y no crea una relación abogado-cliente. Todas las presentaciones se hacen en pro per, a nombre del peticionario. Las entradas del expediente están transcritas de una impresión del resumen del caso fechada el 10 de noviembre de 2026 y todavía no están certificadas. Las afirmaciones sobre hechos en disputa —incluido el resultado negativo del laboratorio y el envío del aviso a una dirección familiar— son alegatos hasta que un tribunal o los registros los establezcan, y se publican con fines de rendición de cuentas y reparación. Los seis años son la condena que recita la minuta del 3 de marzo de 2009; los cinco años y ocho meses son el tiempo que en realidad estuvo en prisión. La cifra del artículo 4900 es un cálculo a la tasa legal, no un derecho adquirido ni una promesa de pago. Los artículos, las inmunidades y los plazos varían por jurisdicción y cambian; nada aquí sustituye a un abogado con licencia en California.',
  closing: 'Nada de esto ha terminado.',
}
