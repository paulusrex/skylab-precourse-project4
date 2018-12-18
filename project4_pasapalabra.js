/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */

/*
Question and answers from :
 https://github.com/VGamezz19/pasaPalabra-SPA
 http://www.github.com/misan7
 https://github.com/ander94lakx/Pasapalabra
*/

const NOT_ANSWERED = 0;
const CORRECT = 1;
const WRONG = 2;
const PASAPALABRA = 3;
const END = 4;
const TIMEOUT = 5;

const baseQuestions = [
  {
    letter: 'a',
    answer: 'abducir',
    status: NOT_ANSWERED,
    question: 'CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien',
  },
  {
    letter: 'b',
    answer: 'bingo',
    status: NOT_ANSWERED,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: 'c',
    answer: 'churumbel',
    status: NOT_ANSWERED,
    question: 'CON LA C. Niño, crío, bebé',
  },
  {
    letter: 'd',
    answer: 'diarrea',
    status: NOT_ANSWERED,
    question:
      'CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida',
  },
  {
    letter: 'e',
    answer: 'ectoplasma',
    status: NOT_ANSWERED,
    question:
      'CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación',
  },
  {
    letter: 'f',
    answer: 'facil',
    status: NOT_ANSWERED,
    question: 'CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad',
  },
  {
    letter: 'g',
    answer: 'galaxia',
    status: NOT_ANSWERED,
    question: 'CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas',
  },
  {
    letter: 'h',
    answer: 'harakiri',
    status: NOT_ANSWERED,
    question: 'CON LA H. Suicidio ritual japonés por desentrañamiento',
  },
  {
    letter: 'i',
    answer: 'iglesia',
    status: NOT_ANSWERED,
    question: 'CON LA I. Templo cristiano',
  },
  {
    letter: 'j',
    answer: 'jabali',
    status: NOT_ANSWERED,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: 'k',
    answer: 'kamikaze',
    status: NOT_ANSWERED,
    question: 'CON LA K. Persona que se juega la vida realizando una acción temeraria',
  },
  {
    letter: 'l',
    answer: 'licantropo',
    status: NOT_ANSWERED,
    question: 'CON LA L. Hombre lobo',
  },
  {
    letter: 'm',
    answer: 'misantropo',
    status: NOT_ANSWERED,
    question:
      'CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas',
  },
  {
    letter: 'n',
    answer: 'necedad',
    status: NOT_ANSWERED,
    question: 'CON LA N. Demostración de poca inteligencia',
  },
  {
    letter: 'ñ',
    answer: 'señal',
    status: NOT_ANSWERED,
    question:
      'CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.',
  },
  {
    letter: 'o',
    answer: 'orco',
    status: NOT_ANSWERED,
    question:
      'CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien',
  },
  {
    letter: 'p',
    answer: 'protoss',
    status: NOT_ANSWERED,
    question:
      'CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft',
  },
  {
    letter: 'q',
    answer: 'queso',
    status: NOT_ANSWERED,
    question: 'CON LA Q. Producto obtenido por la maduración de la cuajada de la leche',
  },
  {
    letter: 'r',
    answer: 'raton',
    status: NOT_ANSWERED,
    question: 'CON LA R. Roedor',
  },
  {
    letter: 's',
    answer: 'stackoverflow',
    status: NOT_ANSWERED,
    question: 'CON LA S. Comunidad salvadora de todo desarrollador informático',
  },
  {
    letter: 't',
    answer: 'terminator',
    status: NOT_ANSWERED,
    question:
      'CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984',
  },
  {
    letter: 'u',
    answer: 'unamuno',
    status: NOT_ANSWERED,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: 'v',
    answer: 'vikingos',
    status: NOT_ANSWERED,
    question:
      'CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa',
  },
  {
    letter: 'w',
    answer: 'sandwich',
    status: NOT_ANSWERED,
    question:
      'CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso',
  },
  {
    letter: 'x',
    answer: 'botox',
    status: NOT_ANSWERED,
    question: 'CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética',
  },
  {
    letter: 'y',
    answer: 'peyote',
    status: NOT_ANSWERED,
    question:
      'CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos',
  },
  {
    letter: 'z',
    answer: 'zen',
    status: NOT_ANSWERED,
    question:
      'CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional',
  },
];

const alterQuestions1 = [
  {
    letter: 'c',
    answer: 'cantidad',
    status: NOT_ANSWERED,
    question: 'CON LA C. Más es un adverbio de… ',
  },
  {
    letter: 'c',
    answer: 'comic',
    status: NOT_ANSWERED,
    question: 'CON LA C. Historia contada en viñetas con dibujos y palabras.',
  },
  {
    letter: 'd',
    answer: 'determinantes',
    status: NOT_ANSWERED,
    question: 'CON LA D. Los artículos, demostrativos, posesivos, etc. Son…',
  },
  {
    letter: 'd',
    answer: 'diccionario',
    status: NOT_ANSWERED,
    question:
      'CON LA D. Libro en el que aparece el significado de las palabras por orden alfabético.',
  },
  {
    letter: 'e',
    answer: 'esdrújula',
    status: NOT_ANSWERED,
    question: 'CON LA E. Palabra cuya sílaba tónica es la antepenúltima.',
  },
  {
    letter: 'e',
    answer: 'estrofa',
    status: NOT_ANSWERED,
    question: 'CON LA E. Grupo de versos que riman entre sí o tratan de un tema determinado.',
  },
  {
    letter: 'f',
    answer: 'frase',
    status: NOT_ANSWERED,
    question: 'CON LA F. Tipo de enunciado que no tiene verbo.',
  },
  {
    letter: 'f',
    answer: 'futuro',
    status: NOT_ANSWERED,
    question: 'CON LA F. Tiempo verbal que indica que la acción se va a realizar.',
  },
  {
    letter: 'h',
    answer: 'hiato',
    status: NOT_ANSWERED,
    question: 'CON LA H. Dos vocales juntas que forman dos sílabas distintas.',
  },
  {
    letter: 'h',
    answer: 'homofonas',
    status: NOT_ANSWERED,
    question: 'CON LA H. Palabras que se pronunciamos igual, pero tienen significados diferentes.',
  },
  {
    letter: 'i',
    answer: 'infinitivo',
    status: NOT_ANSWERED,
    question: 'CON LA I. Forma no personal del verbo. ',
  },
  {
    letter: 'i',
    answer: 'interrogativo',
    status: NOT_ANSWERED,
    question: 'CON LA I. Enunciado que sirve para preguntar.',
  },
  {
    letter: 'j',
    answer: 'jimenez',
    status: NOT_ANSWERED,
    question: 'CON LA J. Apellido del autor de -Platero y yo-.',
  },
  {
    letter: 'j',
    answer: 'adjetivo',
    status: NOT_ANSWERED,
    question: 'CONTIENE LA J. Que expresa cualidad o estado de los nombres a los que se refiere.',
  },
  {
    letter: 'l',
    answer: 'los',
    status: NOT_ANSWERED,
    question: 'CON LA L. Artículo masculino plural',
  },
  {
    letter: 'l',
    answer: 'lope de vega',
    status: NOT_ANSWERED,
    question: 'CON LA L. Gran escritor español perteneciente al Siglo de Oro.',
  },
  {
    letter: 'm',
    answer: 'monosilaba',
    status: NOT_ANSWERED,
    question: 'CON LA M. Palabra que contiene una sola sílaba.',
  },
  {
    letter: 'm',
    answer: 'modos',
    status: NOT_ANSWERED,
    question: 'CON LA M. Los verbos españoles tienen tres: indicativo, subjuntivo e imperativo.',
  },
  {
    letter: 'n',
    answer: 'numeral',
    status: NOT_ANSWERED,
    question: 'CON LA N. Determinante que indica cantidad u orden.',
  },
  {
    letter: 'n',
    answer: 'nombre',
    status: NOT_ANSWERED,
    question: 'CON LA N. Así llamamos también al sustantivo.',
  },
  {
    letter: 'ñ',
    answer: 'añorar',
    status: NOT_ANSWERED,
    question: 'CONTIENE LA Ñ. Sinónimo de extrañar, echar de menos.',
  },
  {
    letter: 'ñ',
    answer: 'niñez.',
    status: NOT_ANSWERED,
    question: 'CONTIENE LA Ñ. Sinónimo de infancia.',
  },
  {
    letter: 'o',
    answer: 'oracion',
    status: NOT_ANSWERED,
    question: 'CON LA O. Enunciado con sentido completo y que tiene al menos un verbo',
  },
  {
    letter: 'o',
    answer: 'ortografia',
    status: NOT_ANSWERED,
    question: 'CON LA O. Conjunto de normas que regulan la escritura.',
  },
  {
    letter: 'p',
    answer: 'polisemicas',
    status: NOT_ANSWERED,
    question: 'CON LA P. Palabras con más de un significado.',
  },
  {
    letter: 'p',
    answer: 'polisilabas',
    status: NOT_ANSWERED,
    question: 'CON LA P. Palabras que tienen más de tres sílabas.',
  },
  {
    letter: 'q',
    answer: 'enclenque',
    status: NOT_ANSWERED,
    question: 'CONTIENE LA Q. Dícese de la persona débil, enfermiza, muy flaca.',
  },
  {
    letter: 'q',
    answer: 'quijano',
    status: NOT_ANSWERED,
    question: 'CON LA Q. Apellido real de Don Quijote antes de cambiarse de nombre.',
  },
  {
    letter: 'r',
    answer: 'romances',
    status: NOT_ANSWERED,
    question:
      'CON LA R. Los juglares recorrían las plazas de los pueblos recitándolos para divertir a la gente.',
  },
  {
    letter: 'r',
    answer: 'receptor',
    status: NOT_ANSWERED,
    question: 'CON LA R. El que recibe la información.',
  },
  {
    letter: 's',
    answer: 'sinonimo',
    status: NOT_ANSWERED,
    question: 'CON LA S. Que tiene el mismo significado.',
  },
  {
    letter: 's',
    answer: 'sobreesdrujula',
    status: NOT_ANSWERED,
    question: 'CON LA S. Palabra cuya sílaba tónica es la anterior a la antepenúltima.',
  },
  {
    letter: 't',
    answer: 'tragedia',
    status: NOT_ANSWERED,
    question: 'CON LA T. Obra de teatro que tiene un desenlace desgraciado.',
  },
  {
    letter: 't',
    answer: 'tonica',
    status: NOT_ANSWERED,
    question: 'CON LA T. Nombre de la sílaba que pronunciamos con más fuerza.',
  },
  {
    letter: 'u',
    answer: 'undecimo',
    status: NOT_ANSWERED,
    question: 'CON LA U. Adjetivo que sigue inmediatamente en orden al o a lo décimo.',
  },
  {
    letter: 'u',
    answer: 'ultimo',
    status: NOT_ANSWERED,
    question: 'CON LA U. Antónimo de Primero.',
  },
  {
    letter: 'v',
    answer: 'verbo',
    status: NOT_ANSWERED,
    question: 'CON LA V. Palabras que indican acción o estado.',
  },
  {
    letter: 'v',
    answer: 'verso',
    status: NOT_ANSWERED,
    question: 'CON LA V. Cada uno de los renglones cortos que forman una poesía.',
  },
  {
    letter: 'x',
    answer: 'extra',
    status: NOT_ANSWERED,
    question: 'CONTIENE LA X. Prefijo que significa añadir algo...',
  },
  {
    letter: 'x',
    answer: 'auxiliar',
    status: NOT_ANSWERED,
    question: 'CONTIENE LA X. El verbo haber es un verbo…',
  },
  {
    letter: 'y',
    answer: 'onomatopeya',
    status: NOT_ANSWERED,
    question: 'CONTIENE LA Y. Vocablo que imita o recrea un sonido.',
  },
  {
    letter: 'y',
    answer: 'yo',
    status: NOT_ANSWERED,
    question: 'CON LA Y. Pronombre personal, 1ª persona del singular.',
  },
  {
    letter: 'z',
    answer: 'raiz',
    status: NOT_ANSWERED,
    question:
      'CONTIENE LA Z. Conjunto de fonemas mínimo e irreductible que comparten las palabras de una misma familia.',
  },
  {
    letter: 'z',
    answer: 'zumbido',
    status: NOT_ANSWERED,
    question: 'CON LA Z. Ruido que hacen algunos insectos como las abejas.',
  },
  {
    letter: 'b',
    answer: 'bisilaba',
    status: NOT_ANSWERED,
    question: 'CON LA B. Palabra que tiene dos sílabas.',
  },
  {
    letter: 'b',
    answer: 'beautiful',
    status: NOT_ANSWERED,
    question: 'CON LA B. Bonita in english is… ',
  },
  {
    letter: 'a',
    answer: 'antonimo',
    status: NOT_ANSWERED,
    question: 'CON LA A. Palabra que significa lo contrario de una dada.',
  },
  {
    letter: 'a',
    answer: 'acepcion',
    status: NOT_ANSWERED,
    question: 'CON LA A. Cada uno de los significados que tiene una palabra.',
  },
  {
    letter: 'g',
    answer: 'grave',
    status: NOT_ANSWERED,
    question: 'CON LA G. Antónimo de leve.',
  },
  {
    letter: 'g',
    answer: 'genero',
    status: NOT_ANSWERED,
    question: 'CON LA G. Lo que nos indica si es masculino o femenino es el…',
  },
  {
    letter: 'A',
    question: 'CON LA A. Tienda de comestibles',
    status: NOT_ANSWERED,
    answer: 'Abacería',

  },
  {
    letter: 'A',
    question: 'CON LA A. Calzado rústico, sandalias',
    status: NOT_ANSWERED,
    answer: 'Albarca',

  },
  {
    letter: 'B',
    question: 'CON LA B. Persona de carácter desenvuelto y simpático',
    status: NOT_ANSWERED,
    answer: 'Barbián',

  },
  {
    letter: 'B',
    question: 'CON LA B. Piel de carnero',
    status: NOT_ANSWERED,
    answer: 'Badana',

  },
  {
    letter: 'B',
    question: 'CON LA B. Conjunto de hielos formados por la congelación del agua del mar en las zonas polares',
    status: NOT_ANSWERED,
    answer: 'Banquisa',

  },
  {
    letter: 'C',
    question: 'CON LA C. Buey manso que se utiliza para facilitar el manejo del ganado bravío',
    status: NOT_ANSWERED,
    answer: 'Cabestro',

  },
  {
    letter: 'C',
    question: 'CON LA C. Cayado',
    status: NOT_ANSWERED,
    answer: 'Cachaba',

  }, {
    letter: 'D',
    question: 'CON LA D. Regalos, presentes',
    status: NOT_ANSWERED,
    answer: 'Dádivas',

  },
  {
    letter: 'D',
    question: 'CON LA D. Modelo, ejemplo',
    status: NOT_ANSWERED,
    answer: 'Dechado',

  },
  {
    letter: 'E',
    question: 'CON LA E. Relativo al marfil',
    status: NOT_ANSWERED,
    answer: 'Ebúrneo',

  },
  {
    letter: 'E',
    question: 'CON LA E. Escudo, arma defensiva',
    status: NOT_ANSWERED,
    answer: 'Égida',

  },
  {
    letter: 'F',
    question: 'CON LA F. Persona de plena confianza de otra y desempeña así sus funciones',
    status: NOT_ANSWERED,
    answer: 'Factótum',

  },
  {
    letter: 'F',
    question: 'CON LA F. Provisto de hoces o con forma de hoz',
    status: NOT_ANSWERED,
    answer: 'Falcado',

  },
  {
    letter: 'G',
    question: 'CON LA G. Lenguaje oscuro por la impropiedad de la frase o por la confusión de las ideas',
    status: NOT_ANSWERED,
    answer: 'Galimatías',

  },
  {
    letter: 'G',
    question: 'CON LA G. Mozo de labranza',
    status: NOT_ANSWERED,
    answer: 'Gañán',

  },
  {
    letter: 'H',
    question: 'CON LA H. Desastre con muchas víctimas, Sacrifico',
    status: NOT_ANSWERED,
    answer: 'Hecatombe',

  },
  {
    letter: 'H',
    question: 'CON LA H. Grecia e islas del mar Egeo',
    status: NOT_ANSWERED,
    answer: 'Hélade',

  },
  {
    letter: 'I',
    question: 'CON LA I. Mamífero rumiante que vive en las montañas españolas',
    status: NOT_ANSWERED,
    answer: 'Íbex',
    answer: 'Íbice',

  },
  {
    letter: 'I',
    question: 'CON LA I. Lo mismo o el mismo',
    status: NOT_ANSWERED,
    answer: 'Ídem',

  },
  {
    letter: 'J',
    question: 'CON LA J. Adorno de las caballerías',
    status: NOT_ANSWERED,
    answer: 'Jaez',

  },
  {
    letter: 'J',
    question: 'CON LA J. Habla especial y enrevesada',
    status: NOT_ANSWERED,
    answer: 'Jerigonza',

  },
  {
    letter: 'K',
    question: 'CON LA K. Comida que es aceptable según la Torah',
    status: NOT_ANSWERED,
    answer: 'Kosher',

  },
  {
    letter: 'K',
    question: 'CON LA K. Arte marcial de origen Japones, basado en golpes secos realizados con el borde de la mano, los codos o los pies',
    status: NOT_ANSWERED,
    answer: 'Karate',

  },
  {
    letter: 'L',
    question: 'CON LA L. Estandarte',
    status: NOT_ANSWERED,
    answer: 'Lábaro',

  },
  {
    letter: 'L',
    question: 'CON LA L. Relativo a un lago',
    status: NOT_ANSWERED,
    answer: 'Lacustre',

  },
  {
    letter: 'M',
    question: 'CON LA M. Mentira, embuste',
    status: NOT_ANSWERED,
    answer: 'Macana',

  },
  {
    letter: 'M',
    question: 'CON LA M. Daño ligero que presenta la fruta',
    status: NOT_ANSWERED,
    answer: 'Maca',

  },
  {
    letter: 'N',
    question: 'CON LA N. Abuso de poder favoreciendo a parientes o amigos',
    status: NOT_ANSWERED,
    answer: 'Nepotismo',

  },
  {
    letter: 'N',
    question: 'CON LA N. Insignificante',
    status: NOT_ANSWERED,
    answer: 'Nimio',

  },
  {
    letter: 'O',
    question: 'CON LA O. Viejo, Caduco, Pasado de moda, Inútil por vejez',
    status: NOT_ANSWERED,
    answer: 'Obsoleto',

  },
  {
    letter: 'O',
    question: 'CON LA O. Masturbación',
    status: NOT_ANSWERED,
    answer: 'Onanismo',

  },
  {
    letter: 'P',
    question: 'CON LA P. Jolgorio ruidoso y desordenado',
    status: NOT_ANSWERED,
    answer: 'Pachanga',

  },
  {
    letter: 'P',
    question: 'CON LA P. Persona práctica',
    status: NOT_ANSWERED,
    answer: 'Pragmático',

  },
  {
    letter: 'Q',
    question: 'CONTIENE LA Q. Que implica anarquía o está caracterizado por ella',
    status: NOT_ANSWERED,
    answer: 'Anárquico',

  },
  {
    letter: 'Q',
    question: 'CONTIENE LA Q. Producto obtenido de la destilación de maderas resinosas, carbones, petróleo, pizarras y otros materiales vegetales y minerales.',
    status: NOT_ANSWERED,
    answer: 'Alquitrán',

  },
  {
    letter: 'R',
    question: 'CON LA R. Segmento lineal que une el centro del círculo con la circunferencia',
    status: NOT_ANSWERED,
    answer: 'Radio',

  },
  {
    letter: 'R',
    question: 'CON LA R. Conjunto de uvas sostenidas en un mismo tallo que pende del sarmiento',
    status: NOT_ANSWERED,
    answer: 'Racimo',

  },
  {
    letter: 'S',
    question: 'CON LA S. Parte interior de un templo en el que se preservan las cosas sagradas',
    status: NOT_ANSWERED,
    answer: 'Sagrario',

  },
  {
    letter: 'S',
    question: 'CON LA S. Exceder una persona u cosa a otra en la cualidad de la que se trata',
    status: NOT_ANSWERED,
    answer: 'Sobrepujar',

  },
  {
    letter: 'T',
    question: 'CON LA T. Estigma, defecto',
    status: NOT_ANSWERED,
    answer: 'Tara',

  },
  {
    letter: 'T',
    question: 'CON LA T. Lúgubre',
    status: NOT_ANSWERED,
    answer: 'Tétrico',

  },
  {
    letter: 'U',
    question: 'CON LA U. Situar o instalar en determinado espacio o lugar',
    status: NOT_ANSWERED,
    answer: 'Ubicar',

  },
  {
    letter: 'U',
    question: 'CON LA U. Aplicar a algo aceite u otra materia pingüe, extendiéndola superficialmente',
    status: NOT_ANSWERED,
    answer: 'Ungir',

  },
  {
    letter: 'V',
    question: 'CON LA V. Tratado breve que contiene las nociones elementales de una ciencia u arte',
    status: NOT_ANSWERED,
    answer: 'Vademécum',

  },
  {
    letter: 'V',
    question: 'CON LA V. Vapor que despiden los cuerpos en determinadas condiciones',
    status: NOT_ANSWERED,
    answer: 'Vaho',

  },
  {
    letter: 'W',
    question: 'CONTIENE LA W. Vivienda rústica exenta de una única planta',
    status: NOT_ANSWERED,
    answer: 'Bungalow',

  },
  {
    letter: 'W',
    question: 'CONTIENE LA W. Fruto de ésta planta, de piel marron y carne verde comestible',
    status: NOT_ANSWERED,
    answer: 'Kiwi',

  },
  {
    letter: 'X',
    question: 'CONTIENE LA X. Deporte que consiste en la lucha de dos púgiles, con las manos enfundadas en guantes especiales y de conformidad con ciertas reglas',
    status: NOT_ANSWERED,
    answer: 'Boxeo',

  },
  {
    letter: 'X',
    question: 'CONTIENE LA X. Puntual, fiel y cabal',
    status: NOT_ANSWERED,
    answer: 'Exacto',

  },
  {
    letter: 'Y',
    question: 'CONTIENE LA Y. Abstenerse total o parcialmente de comer o beber',
    status: NOT_ANSWERED,
    answer: 'Ayunar',

  },
  {
    letter: 'Y',
    question: 'CONTIENE LA Y. Macho vacuno castrado',
    status: NOT_ANSWERED,
    answer: 'Buey',

  },
  {
    letter: 'Z',
    question: 'CON LA Z. alzado que no pasa del tobillo, con la parte inferior de suela y lo demás de piel, fieltro, paño u otro tejido, más o menos escotado por el empeine',
    status: NOT_ANSWERED,
    answer: 'Zapato',

  },
  {
    letter: 'Z',
    question: 'CON LA Z. Muchacho que ha llegado a la adolescencia',
    status: NOT_ANSWERED,
    answer: 'Zagal',

  },
];

class Player {
  constructor(name, secondsToComplete, baseQ, alterQ) {
    this.name = name;
    this.secondsToComplete = secondsToComplete;
    this.questions = Player.mixQuestions(baseQ, alterQ);
    this.timeEnd = null;
    this.timeStop = null;
    this.indexNextQuestion = 0;
  }

  static mixQuestions(base, alter, exclude) {
    const result = [...base];
    for (let i = 0; i < result.length; i++) {
      const currentLetter = result[i].letter;
      const letterAlternatives = alter.filter(item => item.letter.toLowerCase() === currentLetter.toLowerCase());
      if (letterAlternatives !== 0) {
        do {
          const choose = Math.floor(Math.random() * (letterAlternatives.length + 1));
          if (choose !== 0) {
            result[i] = letterAlternatives[choose - 1];
          }
        } while (exclude[i].question === result[i].question)
      }
    }
    return result;
  }

  static whoWins(player1, player2) {
    const compare = (p1, p2, gt, lt, eq) => (p1 > p2 ? gt : p1 < p2 ? lt : eq);
    let winner = compare(player1.countCorrect(), player2.countCorrect(), player1, player2, null);
    winner = winner || compare(player1.countWrong(), player2.countWrong(), player2, player1, null);
    winner = winner || compare(player1.timeRemaining(), player2.timeRemaining(), player1, player2, null);
    return winner;
  }

  startTimer() {
    const timeToAdd = this.timeRemaining();
    this.timeEnd = new Date(new Date().getTime() + timeToAdd);
    this.timeStop = null;
  }

  stopTimer() {
    this.timeStop = new Date();
  }

  timeRemaining() {
    // In milliseconds
    if (this.timeEnd === null && this.timeStop === null) {
      return this.secondsToComplete * 1000;
    }
    let result;
    if (this.timeStop === null) {
      result = this.timeEnd.getTime() - new Date().getTime();
    } else {
      result = this.timeEnd.getTime() - this.timeStop.getTime();
    }
    return result < 0 ? -1 : result;
  }

  secondsRemaining() {
    return Math.floor(this.timeRemaining() / 1000);
  }

  checkAnswer(answer) {
    const index = this.indexNextQuestion;
    if (this.timeRemaining() < 0) {
      this.questions[index].status = TIMEOUT;
      return this.questions[index].status;
    }
    switch (answer.toLowerCase()) {
      case 'pasapalabra':
        this.questions[index].status = PASAPALABRA;
        break;
      case 'end':
        this.questions[index].status = END;
        break;
      case this.questions[index].answer:
        this.questions[index].status = CORRECT;
        break;
      default:
        this.questions[index].status = WRONG;
        break;
    }
    return this.questions[index].status;
  }

  isCompleted() {
    return this.questions.every(({ status }) => status === CORRECT || status === WRONG);
  }

  showStatistics() {
    console.log('RESULTADO FINAL');
    console.log('---------------');
    console.log(this.getDisplay());
    console.log(`Número de acertadas: ${this.countCorrect()}`);
    console.log(`Número de falladas: ${this.countWrong()}`);
  }

  countCorrect() {
    return this.countStatus(CORRECT);
  }

  countWrong() {
    return this.countStatus(WRONG);
  }

  countNotAnswered() {
    return this.countStatus(NOT_ANSWERED) + this.countStatus(PASAPALABRA);
  }

  isTimeOut() {
    return this.countStatus(TIMEOUT) > 0;
  }

  isConceded() {
    return this.countStatus(END) > 0;
  }

  isFinished() {
    return this.isTimeOut() || this.isConceded() || this.isCompleted();
  }
  
  countStatus(statusToCount) {
    return this.questions.filter(({ status }) => status === statusToCount).length;
  }

  nextQuestion() {
    if (this.isCompleted()) {
      return null;
    }
    let i = this.indexNextQuestion;
    do {
      i++;
      if (i >= this.questions.length) {
        i = 0;
      }
    } while (this.questions[i].status === CORRECT || this.questions[i].status === WRONG);
    this.indexNextQuestion = i;
    return this.indexNextQuestion;
  }

  getQuestion() {
    return this.questions[this.indexNextQuestion].question;
  }

  getStatus() {
    return this.questions[this.indexNextQuestion].status;
  }

  getAnswer() {
    return this.questions[this.indexNextQuestion].answer;
  }

  getDisplay() {
    const index = this.indexNextQuestion;
    let result = '';
    if (index !== undefined) {
      for (let i = 0; i < index; i++) {
        result += '| ';
      }
      result += '|*';
      for (let i = index + 1; i < this.questions.length; i++) {
        result += '| ';
      }
      result += '\n';
    }
    for (let i = 0; i < this.questions.length; i++) {
      switch (this.questions[i].status) {
        case CORRECT:
          result += '|+';
          break;
        case WRONG:
          result += '|-';
          break;
        default:
          result += `|${this.questions[i].letter.toUpperCase()}`;
          break;
      }
    }
    result = `Rosco de ${this.name} con ${this.secondsRemaining()} segundo todavía\n${result}`;
    return result;
  }
}

function confirmReady(player) {
  let confirm = '';
  while (!/^(s|end)$/i.test(confirm)) {
    confirm = prompt(`${player.name} ¿Estás preparado para la pregunta? (s/end)`);
  }
  return confirm.toLowerCase();
}

function pasapalabraTwoPlayers(infoPlayer1, infoPlayer2) {
  const player1 = new Player(
      infoPlayer1.name,
      infoPlayer1.secondsToFinish,
      baseQuestions,
      alterQuestions,
      []  // Exclude questions
    );
  const player2 = new Player(
      infoPlayer2.name,
      infoPlayer2.secondsToFinish,
      baseQuestions,
      alterQuestions,
      player1.questions   // Exclude questions
    ),
    const players = [player1,player2];
  let inTurn = Math.floor(Math.random() * 2);
  const otherPlayerIndex = () => (inTurn === 0 ? 1 : 0);
  const playerInTurn = () => players[inTurn];
  const playerWaiting = () => players[otherPlayerIndex()];
  const gameFinished = () => playerInTurn().isFinished() && playerWaiting().isFinished();

  console.log(`Bienvenidos ${players[0].name} y ${players[1].name}`);
  console.log(`En el sorteo ha salido que empiece ${playerInTurn().name}`);
  console.log('Comienza pasapalabra!');

  let changePlayer = false;
  while (!gameFinished()) {
    if (confirmReady(playerInTurn()) === 's') {
      playerInTurn().startTimer();
    }
    changePlayer = false;
    while (!changePlayer) {
      const answer = prompt(
        `${playerInTurn().getQuestion()}\nTe quedan: ${playerInTurn().secondsRemaining()} segundos\nRespuesta ("end" para terminar) > `,
      );
      playerInTurn().checkAnswer(answer);
      switch (playerInTurn().getStatus()) {
        case WRONG:
          console.log(`No! la respuesta correcta es ${playerInTurn().getAnswer()}`);
          if (!playerWaiting().isFinished()) {
            changePlayer = true;
          }
          playerInTurn().nextQuestion();
          break;
        case CORRECT:
          console.log('Correcto');
          if (playerInTurn().isCompleted()) {
            changePlayer = true;
          }
          playerInTurn().nextQuestion();
          break;
        case PASAPALABRA:
          if (!playerWaiting().isFinished()) {
            changePlayer = true;
          }
          playerInTurn().nextQuestion();
          break;
        case TIMEOUT:
        case END:
          changePlayer = true;
          break;
        default:
          break;
      }
    }
    playerInTurn().stopTimer();
    if (!gameFinished() && changePlayer) {
      console.log(playerInTurn().getDisplay());
      console.log(`Pasamos el turno a ${playerWaiting().name}. Le quedan ${playerWaiting().secondsRemaining()}`);
      inTurn = otherPlayerIndex();
    }
  }
  // TODO: display de resultado
}

pasapalabraTwoPlayers(
  { name: 'Pablo', secondsToFinish: 120 },
  { name: 'Jaime', secondsToFinish: 130 },
);
