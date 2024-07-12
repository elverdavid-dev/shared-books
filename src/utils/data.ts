interface Book {
  titulo: string
  sinopsis: string
  url: string
  portada?: string
  autor?: string
  slug: string
}

const baseUrl = "https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images-books"

export const dataBooks: Book[] = [{
  titulo: "Muchas vidas, muchos maestros",
  sinopsis: 'Muchas Vidas, Muchos Maestros de Brian Weiss narra la historia de Catherine, una paciente que, bajo hipnosis, recuerda vidas pasadas, ayudándola a superar sus miedos y ansiedades. A través de estas sesiones, Weiss descubre la existencia de "Maestros", seres espirituales que ofrecen lecciones sobre la vida, la muerte y la reencarnación. Este proceso transforma las creencias del autor, invitando a los lectores a considerar la posibilidad de que nuestras almas sean eternas y que reencarnen para aprender y evolucionar espiritualmente.',
  url: "/books/muchas-vidas-muchos-maestros.pdf",
  portada: `${baseUrl}/txrscqr2mndmysjshfco`,
  autor: "Brian weiss",
  slug: "muchas-vidas-muchos-maestros"
},
{
  titulo: "Ser feliz en alaska",
  sinopsis: "En Ser Feliz en Alaska, Rafael Santandreu ofrece una guía práctica para transformar nuestra mente y alcanzar la felicidad sin importar las circunstancias externas. Basado en la psicología cognitiva, el libro enseña a reprogramar nuestros pensamientos y creencias para eliminar el sufrimiento innecesario y desarrollar una mente resiliente y positiva. A través de ejemplos y ejercicios, Santandreu muestra cómo cualquier persona puede aprender a ser feliz, incluso en situaciones tan extremas como vivir en Alaska.",
  url: "/books/ser-feliz-en-alaska.pdf",
  portada: `${baseUrl}/ltmilwxrp14mtqwg8dbj`,
  autor: "Rafael Santandreu",
  slug: "ser-feliz-en-alaska"
},
{
  titulo: "El mundo de sofia",
  sinopsis: "En El mundo de Sofía, la joven Sofía Amundsen comienza a recibir misteriosas cartas que la introducen al mundo de la filosofía. A través de estas cartas, y con la ayuda de un enigmático filósofo llamado Alberto Knox, Sofía recorre la historia del pensamiento filosófico, desde los presocráticos hasta los grandes pensadores contemporáneos. A medida que Sofía avanza en su aprendizaje, descubre verdades profundas sobre la existencia, la realidad y su propio ser, llevando al lector a reflexionar sobre las grandes preguntas de la vida.",
  url: "/books/el-mundo-de-sofia.pdf",
  portada: `${baseUrl}/h4revx4kzdq6y8kgjcaw`,
  autor: "Jostein Gaarder",
  slug: "el-mundo-de-sofia"
},
{
  titulo: "En agosto nos vemos",
  sinopsis: "En En agosto nos vemos, Gabriel García Márquez nos presenta a Ana Magdalena Bach, una mujer que visita cada año la tumba de su madre en una pequeña isla caribeña. Durante estas visitas, Ana Magdalena se enfrenta a recuerdos y reflexiones sobre su vida, experimentando un romance inesperado que le hace cuestionar su existencia y sus decisiones pasadas. Aunque la novela quedó incompleta, los fragmentos disponibles revelan la maestría de García Márquez para explorar temas de amor, memoria y redención en su característico estilo mágico-realista.",
  url: "/books/en-agosto-nos-vemos.pdf",
  portada: `${baseUrl}/mvsgzeblc3m67ybnkzh2`,
  autor: "Gabriel García Márquez",
  slug: "en-agosto-nos-vemos"
},
{
  titulo: "El viaje de las almas",
  sinopsis: "En El Viaje de las Almas, Michael Newton nos lleva a un fascinante viaje a través de las experiencias de sus pacientes durante la hipnoterapia de regresión. A medida que estas personas recuerdan sus vidas pasadas y las experiencias entre vidas, revelan detalles sorprendentes sobre el proceso de reencarnación, el propósito del alma y el viaje del espíritu hacia la luz. A través de relatos detallados y conmovedores, Newton ofrece una visión profunda y reconfortante sobre la continuidad de la vida después de la muerte, desafiando nuestras concepciones tradicionales y proporcionando consuelo a aquellos que buscan comprender el misterio de la existencia más allá de la vida terrenal.",
  url: "/books/el-viaje-de-las-almas.pdf",
  portada: `${baseUrl}/jk2ky7torc5r03dkxphm`,
  autor: "Michael Newton",
  slug: "el-viaje-de-las-almas"
},
{
  titulo: "El Destino de las almas",
  sinopsis: "En El Destino de las Almas, Michael Newton continúa explorando el misterio de la vida después de la muerte a través de sus estudios en hipnoterapia de regresión. A través de las experiencias de sus pacientes, revela detalles sobre el propósito del alma, los grupos de almas, y el proceso de planificación y elección de vidas futuras. Newton nos sumerge en un viaje fascinante hacia el otro lado, proporcionando una visión más profunda y comprensiva sobre la naturaleza de la existencia más allá de la vida terrenal.",
  url: "/books/destino-de-las-almas.pdf",
  portada: `${baseUrl}/aamqg714h0xita1gw8of`,
  autor: "Michael Newton",
  slug: "el-destino-de-las-almas"
},
{
  titulo: "El diario de ana frank",
  sinopsis: "En El Diario de Ana Frank, la joven Ana narra su vida mientras se esconde junto con su familia en un anexo secreto de un edificio en Ámsterdam durante la ocupación nazi. En su diario, Ana documenta sus pensamientos, emociones y las experiencias diarias de convivir con otras personas en condiciones extremadamente difíciles y peligrosas. A través de sus palabras, los lectores obtienen una perspectiva íntima y conmovedora de la vida durante el Holocausto, así como los desafíos emocionales y físicos que enfrentaron quienes vivieron bajo la persecución nazi. Aunque Ana no sobrevivió a la guerra, su diario perdura como un poderoso testimonio de la humanidad y la resistencia en tiempos de adversidad.",
  url: "/books/diario-de-ana-frank.pdf",
  portada: `${baseUrl}/lgwa8b2v81nio1an0uie`,
  autor: "Ana Frank",
  slug: "diario-de-ana-frank"
},
{
  titulo: "cien años de soledad",
  sinopsis: "En Cien años de soledad, García Márquez narra la historia de la familia Buendía a lo largo de varias generaciones en el pueblo ficticio de Macondo. La novela mezcla realismo mágico con elementos históricos y políticos, creando un universo único y fascinante. A través de la saga de los Buendía, el autor explora temas como el amor, la soledad, el poder, la violencia y el destino. La obra está llena de personajes inolvidables, eventos extraordinarios y un lenguaje poético que cautiva al lector desde la primera página. Con su narrativa envolvente y su rica imaginación, García Márquez crea un mundo que trasciende el tiempo y el espacio, dejando una marca indeleble en la literatura universal.",
  url: "/books/cien-años-de-soledad.pdf",
  portada: `${baseUrl}/z1aca7zfwdhyvzssnkpd`,
  autor: "Gabriel García Márquez",
  slug: "cien-años-de-soledad"
},
{
  titulo: "Habitos atomicos",
  sinopsis: 'James Clear presenta una perspectiva fresca sobre la formación de hábitos y la mejora personal. Basado en la idea de que pequeños cambios consistentes pueden conducir a resultados significativos, Clear explora cómo podemos construir y mantener hábitos efectivos a través de la comprensión de la psicología del comportamiento. Utilizando ejemplos prácticos y científicos, el autor ofrece estrategias para identificar y modificar hábitos, superar la procrastinación y alcanzar nuestros objetivos. Con un enfoque claro y práctico, "Hábitos Atómicos" es una guía inspiradora para aquellos que buscan maximizar su potencial y crear una vida más saludable, productiva y significativa.',
  url: "/books/habitos-atomicos.pdf",
  portada: `${baseUrl}/ragpsmremg4jsnbppqcl`,
  autor: "James Clear",
  slug: "habitos-atomicos"
},
{
  titulo: "Como piensan los ricos",
  sinopsis: '"Como Piensan los Ricos" de Steve Siebold revela los patrones de pensamiento y creencias que distinguen a las personas ricas. A través de entrevistas con millonarios, el autor destaca la importancia del enfoque en oportunidades, la disposición para asumir riesgos y la creencia en el poder del pensamiento positivo. Este libro ofrece una guía para cambiar nuestra mentalidad y adoptar hábitos de pensamiento más alineados con el éxito financiero y profesional.',
  url: "/books/como-piensan-los-ricos.pdf",
  portada: `${baseUrl}/bn6d9ywc4bl8epdcnufj`,
  autor: "Morgan Housel",
  slug: "como-piensan-los-ricos"
},
{
  titulo: "Muchos cuerpos, una misma alma ",
  sinopsis: 'En este libro, Weiss explora la idea de la reencarnación y el viaje del alma a través de múltiples vidas. A través de sus experiencias con pacientes, el autor presenta casos donde la terapia de regresión ha ayudado a las personas a superar traumas, fobias y problemas emocionales al recordar y procesar experiencias de vidas pasadas.',
  url: "/books/muchos-cuerpos-una-misma-alma.pdf",
  portada: `${baseUrl}/vs3h05jxptd6twsqub2r`,
  autor: "Brian weiss",
  slug: "muchos-cuerpos-una-misma-alma"
},
{
  titulo: "Deja de ser tú ",
  sinopsis: '"Deja de ser tú" es un libro del Dr. Joe Dispenza que explora cómo podemos transformar nuestras vidas al cambiar nuestros pensamientos y emociones. Utilizando principios de neurociencia y meditación, Dispenza enseña cómo reprogramar el cerebro para romper hábitos y creencias limitantes, permitiéndonos crear una nueva realidad y alcanzar nuestro máximo potencial.',
  url: "/books/deja-de-ser-tu.pdf",
  portada: `${baseUrl}/eepiz7ctlvjotdzuiort`,
  autor: "Joe dispenza",
  slug: "deja-de-ser-tu"
},
{
  titulo: "El alqumista",
  sinopsis: '"El Alquimista" de Paulo Coelho es una novela que narra la historia de Santiago, un joven pastor andaluz que sueña con encontrar un tesoro escondido en las pirámides de Egipto. A lo largo de su viaje, Santiago encuentra varios personajes que le enseñan valiosas lecciones sobre la vida y la importancia de seguir sus sueños. La novela destaca temas como el destino, la espiritualidad y la búsqueda de la propia leyenda personal, inspirando a los lectores a perseguir sus aspiraciones más profundas.',
  url: "/books/el-alquimista.pdf",
  portada: `${baseUrl}/hxn5vmzfglqswuanc9ls`,
  autor: "Paulo Coelho",
  slug: "el-alquimista"
},
{
  titulo: "Viajes fuera del cuerpo",
  sinopsis: 'Libro escrito por Robert A. Monroe que explora las experiencias fuera del cuerpo del autor. Monroe, un exitoso ejecutivo de radio, comienza a experimentar fenómenos inexplicables que lo llevan a desarrollar la capacidad de viajar más allá de su cuerpo físico. A través de sus viajes, Monroe descubre nuevas dimensiones de la realidad y ofrece un relato detallado de sus aventuras, aportando una perspectiva única sobre la conciencia, la vida después de la muerte y la naturaleza del ser. El libro es considerado un clásico en el campo de la metafísica y los estudios sobre la conciencia.',
  url: "/books/viajes-fuera-del-cuerpo.pdf",
  portada: `${baseUrl}/d2uz55c4bskwjv4ao10w`,
  autor: "Robert A. Monroe ",
  slug: "viajes-fuera-del-cuerpo"
},
]
