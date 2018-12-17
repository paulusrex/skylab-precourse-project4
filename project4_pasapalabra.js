/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */

/*
Question and answers from :
 https://github.com/VGamezz19/pasaPalabra-SPA
 http://www.github.com/misan7
*/

const NOT_ANSWERED = 0;
const CORRECT = 1;
const WRONG = 2;
const PASAPALABRA = 3;
const END = 4;
const TIMEOUT = 5;


const alternativeQuestions = [
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
];

const sampleQuestions = [
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

class Control {
  constructor(baseQuestions, alter) {
    this.questions = Control.mixQuestions(baseQuestions, alter);
    this.timeInit = null;
    this.timeEnd = null;
    this.timeStop = null;
  }

  static mixQuestions(base, alter) {
    const result = [...base];
    for (let i = 0; i < result.length; i++) {
      const currentLetter = result[i].letter;
      const letterAlternatives = alter.filter(item => item.letter === currentLetter);
      const choose = Math.floor(Math.random() * (letterAlternatives.length + 1));
      if (choose !== 0) {
        result[i] = letterAlternatives[choose - 1];
      }
    }
    return result;
  }

  startTime(secondsToFinish) {
    if (this.timeInit === null) {
      this.timeInit = new Date();
      this.timeEnd = new Date(this.timeInit.getTime() + secondsToFinish * 1000);
      this.timeStop = null;
    } else {
      this.timeEnd = new Date() + this.timeRemaining();
      this.timeStop = null;
    }
  }

  timeRemaining() {
    // In milliseconds
    if (this.timeStop === null) {
      return this.timeEnd.getTime() - new Date().getTime();
    }
    return this.timeEnd.getTime() - this.timeStop.getTime();
  }

  secondsRemaining() {
    return Math.floor(this.timeRemaining() / 1000);
  }

  checkAnswer(index, answer) {
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

  countStatus(statusToCount) {
    return this.questions.filter(({ status }) => status === statusToCount).length;
  }

  getQuestion(index) {
    return this.questions[index].question;
  }

  getStatus(index) {
    return this.questions[index].status;
  }

  getAnswer(index) {
    return this.questions[index].answer;
  }

  getDisplay(index) {
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
    return result;
  }
}

function pasapalabra(questions, alternatives) {
  const maxTime = 120;
  const control = new Control(questions, alternatives);
  let pending = true;
  let confirm = '';
  while (!/^(s|n)$/i.test(confirm)) {
    confirm = prompt('¿Estás preparado para empezar tus 2 minutos? (s/n)');
  }
  if (confirm.toLocaleLowerCase() === 's') {
    control.startTime(maxTime);
  } else {
    pending = false;
  }
  let index = 0;
  while (pending) {
    console.log();
    const answer = prompt(`${control.getQuestion(index)}\nTe quedan: ${control.secondsRemaining()}\nRespuesta ("end" para terminar) > `);
    control.checkAnswer(index, answer);
    switch (control.getStatus(index)) {
      case WRONG:
        console.log(`No! la respuesta correcta es ${control.getAnswer(index)}`);
        pending = !control.isCompleted();
        index++;
        break;
      case CORRECT:
        console.log('Correcto');
        pending = !control.isCompleted();
        index++;
        break;
      case PASAPALABRA:
        index++;
        break;
      case TIMEOUT:
      case END:
        pending = false;
        break;
      default:
        break;
    }
    console.log(control.getDisplay(index));
  }
  console.log('JUEGO FINALIZADO');
  control.showStatistics();
  if (control.isCompleted()) {
    console.log('Completado. Ciao.');
  } else if (control.getStatus(index) === TIMEOUT) {
    console.log('Tiempo finalizado');
  } else if (control.getStatus(index) === END) {
    console.log('Retirada del concursante. Sin puntos para acumular');
  }
  return control;
}

pasapalabra(sampleQuestions, alternativeQuestions);
