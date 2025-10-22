// This file contains the question bank for the third reading control.  It defines
// four sets of true/false and multiple‑choice questions (16 of each per text) for
// the four readings: a 2025 Economist article on the graduate job market,
// Richard Baldwin’s chapter on the new globalisation, Cabrales & Sanz on gender
// gaps in education, and Strain’s analysis of tariffs and manufacturing
// employment.  Each set is replicated four times to build a pool of about 500
// questions.  Sources are assigned dynamically based on the order of the
// groups.  The resulting arrays are attached to the global `window` object as
// `window.baseTf` and `window.baseMc`.

(function() {
  // Questions for The Economist 2025 article: “Crammed and damned” (graduate job market)
  var tf1 = [
    { question: "El artículo del Economist señala que el tradicional camino a un trabajo bien remunerado mediante un título universitario es menos seguro que antes.", answer: true },
    { question: "En el artículo, se afirma que las grandes empresas tecnológicas están expandiendo masivamente sus contrataciones de graduados.", answer: false },
    { question: "Los graduados recientes experimentan tasas de desempleo más altas que la media nacional, según la publicación.", answer: true },
    { question: "El artículo sugiere que la 'prima salarial universitaria' está aumentando de manera constante desde 2015.", answer: false },
    { question: "Las tasas de matrícula en programas de licenciatura han disminuido en muchos países ricos, según el artículo.", answer: true },
    { question: "Los estudiantes están optando más por carreras en ingeniería y ciencias de la computación, dejando de lado las humanidades.", answer: false },
    { question: "El artículo menciona que las tendencias que afectan a los graduados comenzaron antes de la aparición de la inteligencia artificial generativa.", answer: true },
    { question: "La diferencia de satisfacción laboral entre graduados y no graduados se ha ampliado en los últimos años.", answer: false },
    { question: "Según el artículo, el número de jóvenes empleados en finanzas y seguros en Estados Unidos disminuyó entre 2009 y 2024.", answer: true },
    { question: "El artículo sugiere que los gobiernos están reduciendo el apoyo financiero a los estudios superiores para desalentar el exceso de titulados.", answer: false },
    { question: "Las universidades están admitiendo a estudiantes con menos talento debido a la expansión de plazas universitarias, según el artículo.", answer: true },
    { question: "El artículo destaca que la mayoría de los graduados siguen encontrando trabajos mucho mejor remunerados que los no graduados.", answer: false },
    { question: "La caída de la 'prima salarial universitaria' se atribuye parcialmente a un cambio en la composición de la demanda de habilidades tecnológicas.", answer: true },
    { question: "Según el Economist, la expansión universitaria ha reducido las expectativas de los empleadores sobre las capacidades de los graduados.", answer: true },
    { question: "El artículo menciona que la disminución de oportunidades para graduados es exclusiva de países como China y la India.", answer: false },
    { question: "Aun con tendencias negativas, el artículo señala que las carreras de humanidades están experimentando un aumento notable en matriculación.", answer: false }
  ];

  var mc1 = [
    { question: "¿Cuál es la idea central del artículo sobre el mercado laboral de graduados?",
      options: [
        "Los títulos universitarios garantizan salarios crecientes para todos los graduados.",
        "Los graduados enfrentan más incertidumbre laboral y una prima salarial en declive.",
        "La mayoría de las empresas tecnológicas contratan cada año más graduados.",
        "La educación superior ha dejado de existir por completo en varios países."
      ], answer: 1 },
    { question: "¿Cómo ha cambiado la prima salarial de los graduados según el artículo?",
      options: [
        "Ha aumentado hasta duplicar el salario de los no graduados.",
        "Ha permanecido constante desde la década de 1980.",
        "Se ha reducido del 69 % al 50 % entre 2015 y los últimos años.",
        "Se ha eliminado completamente en todos los sectores."
      ], answer: 2 },
    { question: "¿Qué tendencia se observa en las tasas de matrícula universitaria en muchos países ricos?",
      options: [
        "Un crecimiento acelerado de las matriculaciones en posgrados.",
        "Una caída del número de estudiantes inscritos en licenciaturas.",
        "Una estabilidad total de las matrículas en todas las disciplinas.",
        "Un cambio inmediato a programas de formación profesional."
      ], answer: 1 },
    { question: "¿Qué campo académico mencionan los datos como con menor matrícula en Estados Unidos, a pesar de que los empleos se reducen?",
      options: [
        "Ciencias de la salud y enfermería.",
        "Periodismo y medios de comunicación.",
        "Ingeniería mecánica y eléctrica.",
        "Biología y ciencias de la vida."
      ], answer: 1 },
    { question: "¿Cuál de los siguientes factores contribuye a la reducción de la prima salarial universitaria?",
      options: [
        "Aumento del capital humano y de la productividad en manufactura en múltiples regiones.",
        "Desaceleración del cambio tecnológico sesgado hacia habilidades en múltiples sectores.",
        "Incremento de la regulación laboral que favorece a los graduados en varios sectores.",
        "Escasez global de trabajadores con título universitario reduce la competencia laboral."
      ], answer: 1 },
    { question: "Según el artículo, ¿qué efecto tuvo la expansión de la educación superior sobre los empleadores?",
      options: [
        "Incrementó el entusiasmo por contratar a todos los graduados en diversos sectores.",
        "Llevó a expectativas menos estrictas y selección de candidatos menos talentosos.",
        "Obligó a todas las empresas a ofrecer salarios más altos en todos los sectores.",
        "Aumentó la concentración de graduados en sectores de baja remuneración laboral."
      ], answer: 1 },
    { question: "¿Qué cambio se observa en la diferencia de satisfacción laboral entre graduados y no graduados?",
      options: [
        "Permanece en torno a siete puntos de diferencia.",
        "Ahora la ventaja de los graduados es de unos tres puntos.",
        "Bajó de siete a unos tres puntos de ventaja para los graduados.",
        "Se incrementó de forma notable en favor de los no graduados."
      ], answer: 2 },
    { question: "¿Qué sector redujo el empleo de jóvenes graduados en Estados Unidos entre 2009 y 2024?",
      options: [
        "Producción de automóviles y vehículos pesados.",
        "Servicios financieros y de seguros.",
        "Tecnologías de la información y software.",
        "Construcción residencial y obras públicas."
      ], answer: 1 },
    { question: "¿Cuál es una posible razón histórica que ofrece el artículo para la pérdida de privilegios de los graduados?",
      options: [
        "El exceso de graduados con habilidades cada vez menos demandadas.",
        "La reducción de los programas de educación secundaria.",
        "El aumento de empleos altamente remunerados para no graduados.",
        "La obligación de que todos los estudiantes aprendan programación."
      ], answer: 0 },
    { question: "¿Qué papel juega la influencia del Estado en la expansión universitaria mencionada en el artículo?",
      options: [
        "El Estado eliminó todos los subsidios para la educación superior.",
        "La educación superior se encareció porque el Estado se retiró por completo.",
        "Los gobiernos aumentaron subsidios y becas, extendiendo el tiempo de estudio.",
        "El Estado obligó a todos los estudiantes a cursar carreras científicas."
      ], answer: 2 },
    { question: "Según el Economist, ¿cuándo se empezó a observar la caída en oportunidades para graduados?",
      options: [
        "Justo después del lanzamiento de ChatGPT y otras IA.",
        "Mucho antes del auge de la IA, con precedentes desde 2010.",
        "En 2023, al mismo tiempo que la pandemia de COVID‑19.",
        "Jamás se observó una caída en oportunidades para graduados."
      ], answer: 1 },
    { question: "¿Cuál de las siguientes afirmaciones describe mejor la tendencia en matriculación de estudiantes en carreras como periodismo?",
      options: [
        "Las inscripciones en periodismo aumentan más rápido que en otras áreas de estudio.",
        "La matriculación en periodismo cae aún más rápido que en otras áreas de estudio.",
        "La matrícula en periodismo se mantiene estable, mientras otras ciencias caen.",
        "No se menciona ninguna tendencia en periodismo en comparación con otras disciplinas."
      ], answer: 1 },
    { question: "¿En qué se asemejan los mercados de trabajo para graduados en la mayoría de los países ricos?",
      options: [
        "Hay pleno empleo para todos los graduados, sin excepciones.",
        "El desempleo de los graduados se acerca al promedio general.",
        "Solo países como China muestran desempleo de graduados muy alto.",
        "El empleo de graduados está aislado de la economía global."
      ], answer: 1 },
    { question: "¿Cómo reacciona la proporción de graduados ante la expansión de universidades, según el artículo?",
      options: [
        "Disminuye debido a que la educación superior es más barata.",
        "Se mantiene constante con respecto a la población total.",
        "Aumenta porque más estudiantes pueden acceder a la universidad.",
        "No tiene ninguna relación con el costo de estudiar."
      ], answer: 2 },
    { question: "¿Cuál es uno de los riesgos mencionados acerca de la expansión universitaria en la formación profesional?",
      options: [
        "Crear expectativas poco realistas sobre el empleo después de graduarse.",
        "Disminuir la diversidad de programas académicos ofrecidos.",
        "Reducir el desarrollo de habilidades digitales en los estudiantes.",
        "Limitar las oportunidades de investigación científica a nivel mundial."
      ], answer: 0 },
    { question: "¿Qué medida sugiere el artículo que podría ayudar a mejorar la situación de los graduados?",
      options: [
        "Limitar el número de nuevos programas universitarios en todos los niveles de estudios.",
        "Eliminar por completo las becas y subsidios educativos en todas las instituciones.",
        "Fomentar programas de aprendizaje y experiencia laboral simultáneos a los estudios.",
        "Obligar a los estudiantes a elegir exclusivamente carreras STEM para toda su formación."
      ], answer: 2 }
  ];

  // Assign source property to all Economist questions
  tf1.forEach(function(q) { q.source = 'The Economist 2025 - Crammed and damned'; });
  mc1.forEach(function(q) { q.source = 'The Economist 2025 - Crammed and damned'; });

  // Questions for Baldwin 2017 – Capítulo 5 de "La Gran Convergencia"
  var tf2 = [
    { question: "Baldwin argumenta que la nueva globalización del siglo XXI implica la fragmentación de la producción gracias a las TIC.", answer: true },
    { question: "Según Baldwin, las fábricas comenzaron a cruzar las fronteras Norte‑Sur, aumentando los flujos de personas, ideas y conocimientos.", answer: true },
    { question: "La nueva globalización hace que la ventaja comparativa se concentre aún más a nivel nacional.", answer: false },
    { question: "Los países que tratan de frenar la deslocalización corren el riesgo de acelerar su desindustrialización.", answer: true },
    { question: "El comercio del siglo XXI mezcla bienes, servicios, capital, conocimiento y personas en redes interdependientes.", answer: true },
    { question: "La curva de la sonrisa sugiere que las actividades de fabricación generan la mayor parte del valor en las cadenas globales.", answer: false },
    { question: "En el ejemplo de Apple, el diseño y el marketing permanecen en Estados Unidos, mientras la fabricación se traslada a China.", answer: true },
    { question: "Las exportaciones de partes y componentes desde países en desarrollo han disminuido en relación con las exportaciones de productos finales.", answer: false },
    { question: "La nueva globalización ha hecho que el comercio sea más sencillo y controlado por los gobiernos.", answer: false },
    { question: "La competencia se da ahora a nivel de tareas y fases de producción, no solo entre sectores o países.", answer: true },
    { question: "Los flujos de inversión y conocimiento se han vuelto cada vez más unidireccionales del Sur al Norte.", answer: false },
    { question: "Según Baldwin, los países del Sur exportan cada vez más componentes a los países del Norte.", answer: true },
    { question: "La nueva globalización reduce la importancia de la innovación tecnológica en la economía mundial.", answer: false },
    { question: "Las tensiones entre la necesidad de eficiencia y las políticas nacionales aumentan con la fragmentación de la producción.", answer: true },
    { question: "Baldwin señala que la nueva globalización está impulsada principalmente por las políticas gubernamentales de los países desarrollados.", answer: false },
    { question: "El autor describe esta globalización como menos predecible y más individual, con efectos que varían según la tarea y el trabajador.", answer: true }
  ];

  var mc2 = [
    { question: "¿Cuál es el principal motor de la 'segunda ruptura' o nueva globalización, según Baldwin?",
      options: [
        "El aumento de aranceles y proteccionismo en países desarrollados.",
        "La revolución de las TIC que permite fragmentar la producción.",
        "La falta de competencia entre corporaciones internacionales.",
        "La nacionalización de grandes empresas multinacionales."
      ], answer: 1 },
    { question: "¿Qué significa que la ventaja comparativa esté 'desnacionalizada' en la nueva globalización?",
      options: [
        "Los países compiten solamente en sectores agrícolas.",
        "La competencia se produce entre redes globales de producción más que entre países.",
        "Cada nación se especializa en un único producto final.",
        "La ventaja comparativa vuelve a las industrias locales tradicionales."
      ], answer: 1 },
    { question: "Según la 'curva de la sonrisa', ¿dónde se genera la mayor parte del valor?",
      options: [
        "En las fases de diseño y marketing previas y posteriores a la fabricación.",
        "En la manufactura física de los productos en las cadenas globales.",
        "En la distribución de mercancías a nivel minorista.",
        "En el transporte marítimo de bienes a través de océanos."
      ], answer: 0 },
    { question: "¿Qué riesgo enfrentan los países que intentan impedir la deslocalización de etapas productivas?",
      options: [
        "Acelerar su desindustrialización y perder competitividad.",
        "Aumentar su cuota de mercado en bienes manufacturados.",
        "Crear nuevos empleos en sectores de alta tecnología.",
        "Disminuir la desigualdad salarial entre trabajadores."
      ], answer: 0 },
    { question: "¿Cómo describe Baldwin el comercio del siglo XXI?",
      options: [
        "Basado solo en el intercambio de mercancías finales entre países.",
        "Una mezcla de bienes, servicios, ideas, capital y personas en red.",
        "Centrado en agricultura y producción de materias primas tradicionales.",
        "Desvinculado de las cadenas de valor y de la logística global moderna."
      ], answer: 1 },
    { question: "¿Qué ejemplo utiliza Baldwin para ilustrar la fragmentación de la producción?",
      options: [
        "La industria automotriz repartida entre Brasil y Argentina.",
        "El caso de Apple: diseño en EE.UU. y ensamblaje en China.",
        "Las exportaciones de productos agrícolas africanos hacia Europa.",
        "La fabricación de textiles en varias regiones de Europa occidental."
      ], answer: 1 },
    { question: "Según el capítulo, ¿cómo han evolucionado las exportaciones de partes y componentes desde los países en desarrollo?",
      options: [
        "Han caído drásticamente debido a barreras comerciales.",
        "Han crecido, superando las exportaciones de productos finales.",
        "Se han mantenido constantes sin cambios notables.",
        "Se han reducido a medida que los países desarrollados se autoproveen."
      ], answer: 1 },
    { question: "¿Cuál de las siguientes afirmaciones describe la competencia en la nueva globalización?",
      options: [
        "Está claramente definida por las fronteras nacionales.",
        "Se libra entre tareas y etapas de producción, no solo entre países.",
        "Se centra únicamente en los precios de los bienes finales.",
        "Se basa en acuerdos comerciales bilaterales tradicionales."
      ], answer: 1 },
    { question: "¿Qué papel juegan las políticas gubernamentales en la nueva globalización?",
      options: [
        "Son las principales responsables de fragmentar las cadenas de valor globales.",
        "Influyen menos que las innovaciones tecnológicas y las decisiones empresariales.",
        "Garantizan que todos los países mantengan su producción local intacta.",
        "Resultan tan restrictivas que impiden toda inversión extranjera."
      ], answer: 1 },
    { question: "¿Qué flujo económico aumenta especialmente del Norte al Sur en la nueva globalización?",
      options: [
        "Flujos de bienes finales manufacturados.",
        "Flujos de ideas, conocimientos y tecnología.",
        "Flujos de materias primas agrícolas.",
        "Flujos migratorios de trabajadores sin cualificación."
      ], answer: 1 },
    { question: "¿Cómo afecta la nueva globalización a la seguridad laboral de los trabajadores?",
      options: [
        "La garantiza completamente, ya que los gobiernos intervienen para proteger puestos.",
        "La hace más incierta, porque la competencia ocurre a nivel de tareas específicas.",
        "La mejora, al aumentar el número de empleos industriales permanentes.",
        "No tiene ningún efecto sobre la seguridad laboral."
      ], answer: 1 },
    { question: "¿Qué describe Baldwin como una consecuencia de la servificación en la cadena de valor?",
      options: [
        "La mayor parte del valor proviene de servicios como I+D, logística y marketing.",
        "La manufactura se vuelve más importante que el diseño y la innovación.",
        "Los países en desarrollo controlan ahora el diseño de productos.",
        "El comercio de servicios se ha detenido por completo."
      ], answer: 0 },
    { question: "¿Qué política sugiere Baldwin para que los países participen con éxito en la nueva globalización?",
      options: [
        "Prohibir las inversiones extranjeras y centrarse en la producción local.",
        "Integrarse en redes globales aportando tareas donde tengan ventajas.",
        "Eliminar todos los acuerdos comerciales y reforzar aranceles.",
        "Fomentar sólo las industrias extractivas y agrícolas."
      ], answer: 1 },
    { question: "¿Por qué la nueva globalización es menos predecible que la anterior?",
      options: [
        "Las fronteras nacionales determinan de manera clara quién gana o pierde.",
        "La rápida innovación tecnológica y la coordinación global cambian tareas.",
        "Los gobiernos ejercen un control estricto sobre la tecnología y el capital.",
        "Las reglas comerciales se consideran fijas y no experimentan cambios."
      ], answer: 1 },
    { question: "¿Qué aspecto de las cadenas de suministro destaca Baldwin?",
      options: [
        "Se concentran en un solo país para reducir costos de transporte.",
        "Están distribuidas geográficamente y coordinadas mediante TIC.",
        "Son controladas enteramente por instituciones gubernamentales.",
        "Se basan únicamente en la proximidad geográfica entre socios comerciales."
      ], answer: 1 },
    { question: "¿Cuál de las siguientes afirmaciones sobre la dirección de los flujos comerciales es correcta?",
      options: [
        "Fluyen solo del Sur al Norte buscando mercados de consumo.",
        "Son bidireccionales: componentes y conocimientos viajan Sur/Norte y bienes vuelven.",
        "Se producen únicamente entre los países desarrollados de igual nivel.",
        "Siempre se dirigen a países con idéntica moneda de referencia."
      ], answer: 1 }
  ];

  // Assign source property to all Baldwin questions
  tf2.forEach(function(q) { q.source = 'Baldwin 2017 - La Gran Convergencia Capítulo 5'; });
  mc2.forEach(function(q) { q.source = 'Baldwin 2017 - La Gran Convergencia Capítulo 5'; });

  // Questions for Cabrales & Sanz 2024 – Brechas de género en educación
  var tf3 = [
    { question: "El capítulo destaca que los niños suelen obtener peores resultados académicos que las niñas en varias materias.", answer: true },
    { question: "Las mujeres están sobrerrepresentadas en las carreras de ingeniería y tecnología según el estudio.", answer: false },
    { question: "Las brechas de género en STEM se atribuyen en parte a habilidades no cognitivas y factores familiares.", answer: true },
    { question: "El capítulo afirma que la brecha en lectura desaparece completamente a los 10 años.", answer: false },
    { question: "Se menciona que el abandono escolar temprano es mayor entre los chicos que entre las chicas.", answer: true },
    { question: "Los estereotipos de género y la ausencia de modelos femeninos en STEM reducen la participación de las mujeres.", answer: true },
    { question: "Las tasas de matriculación universitaria en España para mujeres son aproximadamente del 56 %.", answer: true },
    { question: "La brecha de género se invierte en la Formación Profesional, donde las mujeres superan ampliamente a los hombres.", answer: false },
    { question: "El capítulo cita estudios que usan el test de asociación implícita (IAT) para medir sesgos de género de los docentes.", answer: true },
    { question: "Según la evidencia, los sesgos de los profesores de matemáticas no tienen efecto en el rendimiento de las niñas.", answer: false },
    { question: "La carencia de competencia en entornos académicos puede desalentar a las chicas de elegir carreras STEM.", answer: true },
    { question: "El abandono de la escuela secundaria y la formación insuficiente están ligados a mayor desempleo y criminalidad.", answer: true },
    { question: "El capítulo subraya que las mujeres están sobrerrepresentadas en carreras de ciencias de la vida y educación.", answer: true },
    { question: "El estudio de Carlana (2019) sugiere que los estereotipos masculinos tienen un impacto positivo en el rendimiento de las niñas.", answer: false },
    { question: "Los sesgos de los docentes se corrigen completamente con la regulación de las escuelas.", answer: false },
    { question: "Una mayor paridad de género en STEM puede aumentar el crecimiento económico y la innovación, según el capítulo.", answer: true }
  ];

  var mc3 = [
    { question: "¿Cuál es uno de los principales factores que explica la infrarrepresentación de mujeres en carreras STEM, según el capítulo?",
      options: [
        "Mayor preferencia de las mujeres por ocupaciones con alta incertidumbre.",
        "Estereotipos de género y falta de modelos femeninos en STEM.",
        "Exceso de programas de becas para mujeres en ingeniería.",
        "Obligación legal de que las mujeres estudien ciencias sociales."
      ], answer: 1 },
    { question: "¿Qué porcentaje aproximado de estudiantes en las universidades españolas son mujeres, según los datos?",
      options: [
        "Alrededor del 30 %.",
        "Alrededor del 40 %.",
        "Alrededor del 56 %.",
        "Alrededor del 80 %."
      ], answer: 2 },
    { question: "¿En qué áreas se observa una sobrerrepresentación femenina?",
      options: [
        "Ingeniería y matemáticas avanzadas.",
        "Educación y ciencias de la vida.",
        "Tecnologías de la información.",
        "Ciencias físicas y astronómicas."
      ], answer: 1 },
    { question: "¿Qué técnica se menciona para medir los sesgos implícitos de los docentes?",
      options: [
        "Escala de Likert de preferencia docente.",
        "Test de asociación implícita (IAT).",
        "Encuesta de satisfacción del estudiante.",
        "Evaluación comparativa de desempeño."
      ], answer: 1 },
    { question: "¿Cómo afectan los estereotipos de género de los profesores al rendimiento en matemáticas de las niñas?",
      options: [
        "No tienen ningún efecto medible.",
        "Reducen el rendimiento de las niñas y amplían la brecha con los niños.",
        "Mejoran el rendimiento de las niñas por motivación externa.",
        "Aumentan el rendimiento de los niños pero no cambian el de las niñas."
      ], answer: 1 },
    { question: "¿Cuál es la diferencia entre la matriculación de mujeres en ingeniería y en informática, según los datos?",
      options: [
        "No hay diferencia significativa; ambas superan el 80 % de mujeres en total.",
        "Ingeniería tiene alrededor del 26,6 % de mujeres e informática cerca del 15 %.",
        "Ingeniería es 60 % mujeres e informática 40 % en promedio, según los datos.",
        "Ingeniería 10 % de mujeres e informática 5 % en sus aulas de estudio."
      ], answer: 1 },
    { question: "¿Qué consecuencia social se asocia con el abandono escolar temprano de los chicos?",
      options: [
        "Se traducen en mayores niveles de empleo y mejores salarios para ellos.",
        "Mayores riesgos de desempleo, bajos salarios y mayor delincuencia.",
        "Ofrece más oportunidades de estudiar en el extranjero para los jóvenes.",
        "No conlleva repercusiones significativas en salud ni en ingresos."
      ], answer: 1 },
    { question: "¿Qué rol juegan las habilidades no cognitivas en la brecha de género en educación?",
      options: [
        "No tienen ningún papel relevante en el rendimiento escolar.",
        "Explican parte de la mayor deserción de los chicos y sus elecciones de carrera.",
        "Influyen solo en las notas de ciencias de la vida.",
        "Se limitan al ámbito de la educación primaria y no llegan a la universidad."
      ], answer: 1 },
    { question: "¿Cuál es el efecto de la ausencia de modelos femeninos en STEM?",
      options: [
        "Aumenta la confianza de las niñas para estudiar ciencias.",
        "Reduce la participación de las chicas al no tener referentes.",
        "No produce cambios en la elección de carrera.",
        "Duplica la matrícula de mujeres en informática."
      ], answer: 1 },
    { question: "¿Cuál es la proporción aproximada de mujeres en Formación Profesional básica, según el capítulo?",
      options: [
        "Cerca del 12 %.",
        "Cerca del 33 %.",
        "Cerca del 56 %.",
        "Cerca del 90 %."
      ], answer: 0 },
    { question: "¿Cuál es una política recomendada para reducir la brecha de género en STEM?",
      options: [
        "Reducir el número de plazas en matemáticas para mujeres.",
        "Incorporar programas de mentoría y visibilizar referentes femeninos.",
        "Prohibir que las mujeres se matriculen en carreras de humanidades.",
        "Eliminar completamente la educación mixta."
      ], answer: 1 },
    { question: "¿Cómo se describe el rol de la competitividad en las brechas de género?",
      options: [
        "La menor competitividad de las mujeres afecta las carreras que eligen estudiar.",
        "La competitividad no tiene ninguna relación con la elección de carrera.",
        "La competitividad incrementa la participación de mujeres en ingeniería.",
        "Los hombres tienden a evitar la competitividad en las ciencias sociales."
      ], answer: 0 },
    { question: "¿Cuál es la relación entre sesgos docentes y la elección de estudios por parte de las niñas?",
      options: [
        "Los sesgos docentes empujan a las niñas a estudiar carreras STEM y ciencias, según algunos.",
        "Los sesgos docentes desaniman a las niñas en matemáticas y afectan sus decisiones académicas.",
        "Los sesgos docentes afectan a los alumnos varones, sin influir de forma significativa en las niñas.",
        "No existe ninguna relación entre sesgos docentes y la elección de estudios, según el estudio."
      ], answer: 1 },
    { question: "¿Qué encuentra el estudio de Carlana (2019) sobre la correlación entre estereotipos y rendimiento?",
      options: [
        "Los estereotipos positivos no ejercen ningún efecto notable sobre el rendimiento.",
        "Hay una correlación negativa entre estereotipos masculinos y el rendimiento de las niñas.",
        "Los estereotipos masculinos mejoran el rendimiento académico de las niñas según el estudio.",
        "No se midieron estereotipos de género en el marco del estudio presentado."
      ], answer: 1 },
    { question: "¿Qué diferencia hay en la participación de mujeres en carreras de ciencias de la vida versus informática?",
      options: [
        "Apenas hay diferencia; ambas están en torno al sesenta por ciento.",
        "En ciencias de la vida es de unos 60 %, en informática de cerca del 15 %.",
        "Ciencias de la vida e informática presentan menos del veinte por ciento de mujeres.",
        "Informática cuenta con un sesenta por ciento y ciencias de la vida con quince por ciento."
      ], answer: 1 },
    { question: "¿Qué efecto tiene la financiación familiar en las elecciones de estudios según el capítulo?",
      options: [
        "No tiene ningún efecto; las familias nunca influyen en la elección de campo de estudio.",
        "Las familias influyen mediante expectativas y recursos, afectando la elección de carrera.",
        "Solo los chicos reciben apoyo económico de sus familias para poder estudiar.",
        "Las familias suelen evitar hablar de estudios y del futuro profesional de los hijos e hijas."
      ], answer: 1 }
  ];

  // Assign source property to all Cabrales & Sanz questions
  tf3.forEach(function(q) { q.source = 'Cabrales & Sanz 2024 - Brechas de género en educación'; });
  mc3.forEach(function(q) { q.source = 'Cabrales & Sanz 2024 - Brechas de género en educación'; });

  // Questions for Strain 2025 – Los no efectos de los aranceles en el empleo manufacturero
  var tf4 = [
    { question: "El artículo argumenta que los aranceles han tenido un impacto mínimo en el empleo manufacturero en Estados Unidos.", answer: true },
    { question: "La política arancelaria es la principal responsable de la creación masiva de puestos de trabajo en el sector manufacturero.", answer: false },
    { question: "Se sostiene que factores como la automatización y la productividad influyen más en el empleo manufacturero que los aranceles.", answer: true },
    { question: "Según el artículo, los aranceles reducen los costos para los consumidores y aumentan la competitividad de la industria nacional.", answer: false },
    { question: "Los aranceles aplicados recientemente no han revertido las tendencias de declive en el empleo manufacturero.", answer: true },
    { question: "El artículo indica que los aranceles pueden aumentar los precios de insumos para las empresas manufactureras.", answer: true },
    { question: "Se menciona que la tasa de crecimiento del empleo manufacturero ha sido similar con o sin aranceles.", answer: true },
    { question: "El autor argumenta que las condiciones macroeconómicas, como la demanda agregada, también influyen en el empleo manufacturero.", answer: true },
    { question: "Los aranceles han demostrado ser una estrategia rentable para aumentar los salarios de los trabajadores industriales.", answer: false },
    { question: "El artículo sostiene que las políticas de capacitación laboral pueden ser más efectivas que los aranceles para fortalecer la manufactura.", answer: true },
    { question: "Según la evidencia presentada, los aranceles han estimulado una ola de relocalización de fábricas hacia Estados Unidos.", answer: false },
    { question: "La imposición de aranceles a las importaciones siempre conduce a un aumento del empleo en el sector protegido.", answer: false },
    { question: "La competitividad de las exportaciones puede verse perjudicada por aranceles que elevan los costos de producción.", answer: true },
    { question: "El autor sugiere que mejorar la infraestructura y la educación podría ayudar más a la industria que los aranceles.", answer: true },
    { question: "El estudio concluye que el impacto de los aranceles en la manufactura es uniforme en todos los sectores industriales.", answer: false },
    { question: "El artículo argumenta que los aranceles pueden redistribuir ingresos de los consumidores a los productores sin aumentar el empleo total.", answer: true }
  ];

  var mc4 = [
    { question: "¿Cuál es la conclusión principal del artículo sobre los efectos de los aranceles en el empleo manufacturero?",
      options: [
        "Los aranceles han creado millones de empleos adicionales en la manufactura industrial.",
        "Los aranceles tienen efectos limitados y no revierten la tendencia del empleo en manufactura.",
        "Los aranceles son la única herramienta disponible para proteger la industria nacional.",
        "Los aranceles han eliminado por completo la automatización en el sector industrial."
      ], answer: 1 },
    { question: "¿Qué factores se mencionan como más importantes que los aranceles para explicar el empleo manufacturero?",
      options: [
        "Automatización, productividad y condiciones macroeconómicas.",
        "Cambios en la dieta y en las preferencias alimentarias de los consumidores.",
        "El número de feriados o días libres laborales que se disfrutan al año.",
        "Las preferencias de compra y de consumo de bienes de los adolescentes."
      ], answer: 0 },
    { question: "¿Qué efecto tienen los aranceles sobre los costos de los insumos industriales?",
      options: [
        "Reducen los costos de materias primas para las fábricas.",
        "No tienen efecto sobre los costos porque se compensan con subsidios.",
        "Aumentan los costos de insumos para las empresas y afectan la competitividad.",
        "El artículo no menciona los costos de insumos."
      ], answer: 2 },
    { question: "¿Cómo afecta la imposición de aranceles a la competitividad de las exportaciones?",
      options: [
        "La mejora al incentivar la innovación tecnológica.",
        "La perjudica si sube los costos de producción para las exportadoras.",
        "La deja intacta, porque los aranceles solo afectan importaciones.",
        "La convierte en un factor irrelevante para el comercio internacional."
      ], answer: 1 },
    { question: "¿Cuál de las siguientes políticas se considera más efectiva que los aranceles para apoyar la industria manufacturera?",
      options: [
        "Capacitación laboral y desarrollo de habilidades para todos los trabajadores.",
        "Incrementar las tarifas de electricidad para los fabricantes y productores.",
        "Reducir la inversión en investigación y desarrollo en el sector industrial.",
        "Restringir la movilidad laboral entre regiones y frenar la flexibilidad sectorial."
      ], answer: 0 },
    { question: "Según el análisis, ¿qué ha sucedido con la tendencia del empleo manufacturero a pesar de los aranceles?",
      options: [
        "Se ha revertido y ha crecido de manera sostenida.",
        "Ha seguido una trayectoria similar a la de antes de los aranceles.",
        "Ha aumentado únicamente en las industrias intensivas en energía.",
        "No hay datos disponibles sobre la tendencia."
      ], answer: 1 },
    { question: "¿Qué efecto pueden tener los aranceles sobre los salarios en el sector manufacturero?",
      options: [
        "Los incrementan de forma sustancial para todos los trabajadores y sectores.",
        "Los reducen porque disminuyen la productividad laboral en la industria.",
        "Los efectos son limitados y no son un mecanismo eficaz para aumentar salarios.",
        "No existe relación entre aranceles y salarios en la mayoría de los sectores."
      ], answer: 2 },
    { question: "¿Qué alternativa se propone para mejorar la competitividad industrial sin recurrir a aranceles?",
      options: [
        "Cerrar los mercados al comercio internacional y limitar la inversión extranjera.",
        "Invertir en infraestructura y educación para aumentar la productividad a largo plazo.",
        "Aumentar los impuestos a la exportación y a la importación en todos los sectores.",
        "Derogar las leyes de competencia para las grandes empresas en mercados nacionales."
      ], answer: 1 },
    { question: "¿Cómo pueden los aranceles afectar las cadenas de suministro globales?",
      options: [
        "Promueven la eficiencia al reducir los costos de importación de insumos.",
        "Alteran las cadenas de suministro y obligan a buscar proveedores más caros.",
        "No generan cambios en la estructura de la cadena de suministro global.",
        "Ayudan a optimizar las cadenas para lograr economías de escala."
      ], answer: 1 },
    { question: "¿Qué sugiere el artículo sobre la relación entre aranceles y automatización?",
      options: [
        "Los aranceles eliminan completamente la necesidad de automatizar procesos productivos.",
        "La automatización importa mucho más que los aranceles para los cambios en el empleo.",
        "Los aranceles obligan a las empresas a automatizar menos y reducir la inversión.",
        "No se hace ninguna mención a la automatización en relación con los aranceles."
      ], answer: 1 },
    { question: "¿Qué impacto tienen los aranceles sobre los consumidores?",
      options: [
        "Reducen los precios de los productos importados de manera significativa para todos.",
        "Aumentan el costo de los bienes y transfieren ingresos de consumidores a productores.",
        "No generan efecto relevante en consumidores ni cambian de manera notable los precios.",
        "Crean nuevos empleos que compensan cualquier incremento de precios y salarios."
      ], answer: 1 },
    { question: "¿Cómo evalúa el artículo la eficacia de los aranceles para relocalizar fábricas en Estados Unidos?",
      options: [
        "Los aranceles ya han logrado repatriar casi todas las plantas.",
        "La evidencia muestra que solo han provocado relocalizaciones limitadas.",
        "Han impulsado relocalizaciones masivas, especialmente en tecnología.",
        "No hay referencia sobre relocalizaciones en el artículo."
      ], answer: 1 },
    { question: "¿Cuál de los siguientes argumentos es una crítica común a los aranceles?",
      options: [
        "Proporcionan un estímulo a la innovación en las economías locales.",
        "Redistribuyen riqueza sin generar beneficios netos para el empleo.",
        "Favorecen la transparencia de las cadenas de suministro globales.",
        "Aumentan la demanda de bienes importados."
      ], answer: 1 },
    { question: "¿Qué papel juegan las condiciones macroeconómicas en el empleo manufacturero, según el análisis?",
      options: [
        "Son irrelevantes porque solo importan los aranceles.",
        "Influyen, ya que la demanda global y el ciclo económico afectan el empleo.",
        "Determinantes principales porque sustituyen por completo el impacto de la productividad.",
        "Ninguno; el artículo no trata condiciones macroeconómicas."
      ], answer: 1 },
    { question: "¿Qué opción describe una distribución de los costos y beneficios de los aranceles?",
      options: [
        "Los aranceles benefician a los consumidores y perjudican a los productores locales.",
        "Distribuyen ingresos de consumidores a productores sin aumentar el empleo total.",
        "Los costos de los aranceles son absorbidos por gobiernos extranjeros completamente.",
        "Permiten bajar los impuestos y beneficiar a todos los sectores sin distinción."
      ], answer: 1 },
    { question: "Según el artículo, ¿cómo se comparan las políticas de capacitación laboral con los aranceles en eficacia?",
      options: [
        "Los aranceles son mucho más eficaces para mejorar la manufactura nacional y proteger empleos.",
        "Las políticas de capacitación son más eficaces para preparar a los trabajadores para nuevos puestos.",
        "Ambas políticas son idénticas en cuanto a sus efectos sobre el empleo manufacturero.",
        "Las políticas de capacitación reducen la productividad general de la economía nacional."
      ], answer: 1 }
  ];

  // Assign source property to all Strain questions
  tf4.forEach(function(q) { q.source = 'Strain 2025 - Efectos de aranceles en empleo manufacturero'; });
  mc4.forEach(function(q) { q.source = 'Strain 2025 - Efectos de aranceles en empleo manufacturero'; });

  // Combine the arrays and replicate them cuatro veces para crear un gran banco de preguntas.
  // Es importante clonar cada objeto al replicar para evitar que compartir referencias
  // sobreescriba la propiedad 'source' de las preguntas en diferentes iteraciones.
  var baseTf = [];
  var baseMc = [];
  for (var rep = 0; rep < 4; rep++) {
    // Para cada repetición, clonar las preguntas de verdadero/falso
    tf1.forEach(function(q) { baseTf.push(Object.assign({}, q)); });
    tf2.forEach(function(q) { baseTf.push(Object.assign({}, q)); });
    tf3.forEach(function(q) { baseTf.push(Object.assign({}, q)); });
    tf4.forEach(function(q) { baseTf.push(Object.assign({}, q)); });
    // Clonar las preguntas de opción múltiple
    mc1.forEach(function(q) { baseMc.push(Object.assign({}, q)); });
    mc2.forEach(function(q) { baseMc.push(Object.assign({}, q)); });
    mc3.forEach(function(q) { baseMc.push(Object.assign({}, q)); });
    mc4.forEach(function(q) { baseMc.push(Object.assign({}, q)); });
  }
  // Assign sources to each question.  We split the arrays evenly among the texts.
  var sources = [
    'The Economist 2025 - Crammed and damned',
    'Baldwin 2017 - La Gran Convergencia Capítulo 5',
    'Cabrales & Sanz 2024 - Brechas de género en educación',
    'Strain 2025 - Efectos de aranceles en empleo manufacturero'
  ];
  var tfGroupSize = Math.floor(baseTf.length / sources.length);
  var mcGroupSize = Math.floor(baseMc.length / sources.length);
  for (var i = 0; i < baseTf.length; i++) {
    var idx = Math.floor(i / tfGroupSize);
    if (idx >= sources.length) idx = sources.length - 1;
    // Only assign if the question does not already have a source
    if (!baseTf[i].source) {
      baseTf[i].source = sources[idx];
    }
  }
  for (var j = 0; j < baseMc.length; j++) {
    var idx2 = Math.floor(j / mcGroupSize);
    if (idx2 >= sources.length) idx2 = sources.length - 1;
    if (!baseMc[j].source) {
      baseMc[j].source = sources[idx2];
    }
  }

  // Balance option lengths for multiple‑choice questions.  The correct
  // respuesta a menudo es más larga porque explica la lógica del
  // argumento, mientras que los distractores son frases cortas.  Para
  // evitar que la longitud del texto indique la respuesta correcta,
  // agregamos una frase neutral a las opciones más cortas.  Si la
  // diferencia entre la longitud de la respuesta correcta y una
  // opción incorrecta supera un umbral dado, la frase se añade al
  // final de la opción incorrecta.  Esto mantiene una apariencia
  // similar en longitud y estilo entre todas las alternativas.
  function balanceOptionLengths(arr, threshold) {
    var phrase = " y otros elementos del contexto también importan.";
    arr.forEach(function(q) {
      if (!q.options) return;
      var lengths = q.options.map(function(opt) { return opt.length; });
      var correctLen = lengths[q.answer];
      for (var i = 0; i < q.options.length; i++) {
        if (i === q.answer) continue;
        var diff = correctLen - q.options[i].length;
        if (diff > threshold) {
          q.options[i] = q.options[i] + phrase;
        }
      }
    });
  }
  // Apply the balancing with a threshold of 10 characters
  balanceOptionLengths(baseMc, 10);
  // Expose the arrays globally so the main HTML can access them
  window.baseTf = baseTf;
  window.baseMc = baseMc;
})();

/* ===== EXPORTAR BANCO DE PREGUNTAS PARA LA UI =====
   La UI espera: window.baseTF (verdadero/falso) y window.baseMC (alternativas).
   Si ya existen baseTF/baseMC, se usan. Si no, se construyen desde tf1..tf4 y mc1..mc4.
*/
(function () {
  // Intenta usar las variables ya construidas
  var _tf = (typeof baseTF !== 'undefined') ? baseTF : null;
  var _mc = (typeof baseMC !== 'undefined') ? baseMC : null;

  // Si no existen, intenta concatenar por textos
  if (!_tf && (typeof tf1 !== 'undefined')) {
    try { _tf = [].concat(tf1, tf2, tf3, tf4); } catch(e) { _tf = []; }
  }
  if (!_mc && (typeof mc1 !== 'undefined')) {
    try { _mc = [].concat(mc1, mc2, mc3, mc4); } catch(e) { _mc = []; }
  }

  // Exponer en window con nombres que la UI espera
  window.baseTF = _tf || [];
  window.baseMC = _mc || [];

  // (Opcional) etiqueta de origen por si faltó
  var tag = function(q, label){ if (q && !q.source) q.source = { name: label, label: label }; return q; };

  // Si las preguntas no traen source, intenta asignar por bloques
  if (window.baseTF.length && !window.baseTF[0].source) {
    var block = Math.floor(window.baseTF.length / 4) || 1;
    var labels = ["Economist 2025", "Baldwin 2017", "Cabrales & Sanz 2024", "Strain 2025"];
    window.baseTF.forEach(function(q,i){ tag(q, labels[Math.min(3, Math.floor(i / block))]); });
  }
  if (window.baseMC.length && !window.baseMC[0].source) {
    var block2 = Math.floor(window.baseMC.length / 4) || 1;
    var labels2 = ["Economist 2025", "Baldwin 2017", "Cabrales & Sanz 2024", "Strain 2025"];
    window.baseMC.forEach(function(q,i){ tag(q, labels2[Math.min(3, Math.floor(i / block2))]); });
  }
})();

/* ===== EXPORTAR BANCO PARA LA UI ===== */
(function () {
  var _tf = (typeof baseTF !== 'undefined') ? baseTF : null;
  var _mc = (typeof baseMC !== 'undefined') ? baseMC : null;

  if (!_tf && (typeof tf1 !== 'undefined')) {
    try { _tf = [].concat(tf1, tf2, tf3, tf4); } catch(e) { _tf = []; }
  }
  if (!_mc && (typeof mc1 !== 'undefined')) {
    try { _mc = [].concat(mc1, mc2, mc3, mc4); } catch(e) { _mc = []; }
  }

  window.baseTF = _tf || [];
  window.baseMC = _mc || [];

  function tag(q, label){ if (q && !q.source) q.source = { name: label, label: label }; }
  var labels = ["Economist 2025","Baldwin 2017","Cabrales & Sanz 2024","Strain 2025"];
  if (window.baseTF.length && !window.baseTF[0].source) {
    var b = Math.max(1, Math.floor(window.baseTF.length/4));
    window.baseTF.forEach((q,i)=>tag(q, labels[Math.min(3, Math.floor(i/b))]));
  }
  if (window.baseMC.length && !window.baseMC[0].source) {
    var b2 = Math.max(1, Math.floor(window.baseMC.length/4));
    window.baseMC.forEach((q,i)=>tag(q, labels[Math.min(3, Math.floor(i/b2))]));
  }
})();

/* ===== EXPORTAR BANCO PARA LA UI ===== */
(function () {
  var _tf = (typeof baseTF !== 'undefined') ? baseTF : null;
  var _mc = (typeof baseMC !== 'undefined') ? baseMC : null;

  if (!_tf && (typeof tf1 !== 'undefined')) {
    try { _tf = [].concat(tf1, tf2, tf3, tf4); } catch(e) { _tf = []; }
  }
  if (!_mc && (typeof mc1 !== 'undefined')) {
    try { _mc = [].concat(mc1, mc2, mc3, mc4); } catch(e) { _mc = []; }
  }

  window.baseTF = _tf || [];
  window.baseMC = _mc || [];

  function tag(q, label){ if (q && !q.source) q.source = { name: label, label: label }; }
  var labels = ["Economist 2025","Baldwin 2017","Cabrales & Sanz 2024","Strain 2025"];
  if (window.baseTF.length && !window.baseTF[0].source) {
    var b = Math.max(1, Math.floor(window.baseTF.length/4));
    window.baseTF.forEach((q,i)=>tag(q, labels[Math.min(3, Math.floor(i/b))]));
  }
  if (window.baseMC.length && !window.baseMC[0].source) {
    var b2 = Math.max(1, Math.floor(window.baseMC.length/4));
    window.baseMC.forEach((q,i)=>tag(q, labels[Math.min(3, Math.floor(i/b2))]));
  }
})();

