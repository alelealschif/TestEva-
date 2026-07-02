const practiceData = {
  french: {
    categories: [
      {
        name: "Grammaire",
        prompt: "Choisis la forme correcte : Nous ___ à Genève demain.",
        answers: ["allons", "allez", "va"],
        correct: 0,
        feedback: "Avec « nous », le verbe aller se conjugue « allons » au présent."
      },
      {
        name: "Vocabulaire",
        prompt: "Quel mot signifie « livre » en français ?",
        answers: ["livre", "cahier", "stylo"],
        correct: 0,
        feedback: "« Livre » désigne un ouvrage ; « cahier » désigne un carnet d’exercices."
      },
      {
        name: "Conjugaison",
        prompt: "Complète : Je ___ une révision chaque soir.",
        answers: ["fait", "fais", "font"],
        correct: 1,
        feedback: "Avec « je », le verbe faire se conjugue « fais »."
      },
      {
        name: "Compréhension de texte",
        prompt: "Texte : « Le candidat lit attentivement. » Que fait le candidat ?",
        answers: ["Il lit rapidement", "Il lit attentivement", "Il écrit une lettre"],
        correct: 1,
        feedback: "« Attentivement » signifie avec attention."
      },
      {
        name: "Exercices",
        prompt: "Quelle phrase est correcte ?",
        answers: ["Elle sont prête.", "Elle est prête.", "Elle sommes prête."],
        correct: 1,
        feedback: "« Elle » s’accorde avec « est »."
      }
    ]
  },
  math: {
    categories: [
      {
        name: "Opérations de base",
        prompt: "Calcule : 48 + 27.",
        answers: ["65", "75", "85"],
        correct: 1,
        feedback: "48 + 27 = 75."
      },
      {
        name: "Fractions",
        prompt: "Combien font 1/2 + 1/4 ?",
        answers: ["2/6", "3/4", "1/8"],
        correct: 1,
        feedback: "1/2 vaut 2/4 ; 2/4 + 1/4 = 3/4."
      },
      {
        name: "Pourcentages",
        prompt: "20 % de 150 est égal à :",
        answers: ["15", "30", "45"],
        correct: 1,
        feedback: "150 x 0,20 = 30."
      },
      {
        name: "Équations",
        prompt: "Si x + 9 = 21, alors x vaut :",
        answers: ["10", "12", "14"],
        correct: 1,
        feedback: "21 - 9 = 12."
      },
      {
        name: "Géométrie",
        prompt: "L’aire d’un rectangle de 8 sur 5 est :",
        answers: ["13", "30", "40"],
        correct: 2,
        feedback: "Aire du rectangle = base x hauteur = 8 x 5 = 40."
      },
      {
        name: "Problèmes mathématiques",
        prompt: "Un élève répond à 16 questions en 20 minutes. Au même rythme, combien en 60 minutes ?",
        answers: ["32", "48", "64"],
        correct: 1,
        feedback: "60 minutes, c’est 3 fois 20 minutes ; 16 x 3 = 48."
      }
    ]
  }
};

const demoTests = {
  math: {
    label: "Math&eacute;matiques",
    duration: 60 * 60,
    description: "80 questions de math&eacute;matiques avec la r&eacute;partition EVA : 23 nombres et op&eacute;rations, 12 proportionnalit&eacute;, 17 alg&egrave;bre, 18 grandeurs et mesures, 10 espace.",
    questions: buildEvaMathDemoQuestions()
  },
  french: {
    label: "Fran&ccedil;ais",
    duration: 80 * 60,
    description: "82 questions de fran&ccedil;ais avec la r&eacute;partition EVA : 37 compr&eacute;hension de l'&eacute;crit et 45 fonctionnement de la langue.",
    questions: buildEvaFrenchDemoQuestions()
  }
};
let activeDemoKey = "math";
let quizQuestions = demoTests[activeDemoKey].questions;

function choiceQuestion(category, question, answers, correct, feedback) {
  return { subject: "Math&eacute;matiques", category, type: "choice", question, answers, correct, feedback };
}

function inputQuestion(category, question, accepted, feedback) {
  return { subject: "Math&eacute;matiques", category, type: "input", question, accepted: accepted.map(String), feedback };
}

function trueFalseQuestion(category, question, isTrue, feedback) {
  return choiceQuestion(category, question, ["Vrai", "Faux"], isTrue ? 0 : 1, feedback);
}

function buildEvaMathDemoQuestions() {
  const questions = [];
  const add = (items) => questions.push(...items);

  add([
    choiceQuestion("Nombres et op&eacute;rations", "Calculer : (-5) + (+3) = ?", ["-2", "+2", "-8", "+8"], 0, "Signes diff&eacute;rents : 5 - 3 = 2, on garde le signe du plus grand nombre, donc -2."),
    inputQuestion("Nombres et op&eacute;rations", "Calculer : (+6) - (-2) = ?", ["8", "+8"], "Soustraire -2 revient &agrave; ajouter +2 : 6 + 2 = 8."),
    choiceQuestion("Nombres et op&eacute;rations", "Calculer : (-7) + (-3) = ?", ["-10", "-4", "+10", "+4"], 0, "Deux nombres n&eacute;gatifs s'additionnent et le r&eacute;sultat reste n&eacute;gatif."),
    choiceQuestion("Nombres et op&eacute;rations", "Calculer : (-6) &times; (+4) = ?", ["-24", "+24", "-10", "+10"], 0, "Signes diff&eacute;rents : le r&eacute;sultat est n&eacute;gatif."),
    choiceQuestion("Nombres et op&eacute;rations", "Calculer : (-18) &divide; (-3) = ?", ["+6", "-6", "+15", "-15"], 0, "M&ecirc;mes signes : le r&eacute;sultat est positif."),
    choiceQuestion("Nombres et op&eacute;rations", "Calculer : 7/10 - 3/10 = ?", ["4/10", "10/10", "4/0", "3/10"], 0, "Les d&eacute;nominateurs sont identiques : on soustrait les num&eacute;rateurs."),
    choiceQuestion("Nombres et op&eacute;rations", "Calculer : 5/6 - 1/4 = ?", ["7/12", "4/2", "6/10", "1/2"], 0, "PPCM(6 ; 4) = 12, donc 10/12 - 3/12 = 7/12."),
    inputQuestion("Nombres et op&eacute;rations", "Calculer : 1/2 + 2/3 = ?", ["7/6", "1 1/6"], "PPCM(2 ; 3) = 6, donc 3/6 + 4/6 = 7/6."),
    choiceQuestion("Nombres et op&eacute;rations", "Calculer : 3/7 &times; 6/4 = ?", ["9/14", "18/11", "3/14", "2/7"], 0, "On multiplie les num&eacute;rateurs et les d&eacute;nominateurs : 18/28 = 9/14."),
    choiceQuestion("Nombres et op&eacute;rations", "Calculer : 13/7 &divide; 9/2 = ?", ["26/63", "117/14", "13/63", "22/16"], 0, "Diviser par 9/2 revient &agrave; multiplier par 2/9."),
    inputQuestion("Nombres et op&eacute;rations", "Calculer : 2,57 + 1,63 = ?", ["4,20", "4.20", "4,2", "4.2"], "On aligne les virgules : 2,57 + 1,63 = 4,20."),
    choiceQuestion("Nombres et op&eacute;rations", "Calculer : 1,23 &divide; 0,5 = ?", ["2,46", "0,246", "24,6", "1,73"], 0, "On peut calculer 123 &divide; 50 = 2,46."),
    choiceQuestion("Nombres et op&eacute;rations", "Calculer : 5<sup>2</sup> = ?", ["25", "10", "7", "125"], 0, "5<sup>2</sup> signifie 5 &times; 5."),
    choiceQuestion("Nombres et op&eacute;rations", "R&eacute;duire : 3a<sup>3</sup> &middot; 3a = ?", ["9a<sup>4</sup>", "3a<sup>4</sup>", "6a<sup>3</sup>", "9a<sup>3</sup>"], 0, "On multiplie les coefficients et on additionne les exposants de a."),
    choiceQuestion("Nombres et op&eacute;rations", "Calculer : &radic;64 = ?", ["8", "32", "16", "6"], 0, "8 &times; 8 = 64."),
    choiceQuestion("Nombres et op&eacute;rations", "&radic;50 est compris entre...", ["7 et 8", "5 et 6", "8 et 9", "10 et 11"], 0, "49 &lt; 50 &lt; 64, donc &radic;50 est entre 7 et 8."),
    choiceQuestion("Nombres et op&eacute;rations", "Calculer : 3 + 4 &times; 2 = ?", ["11", "14", "10", "24"], 0, "La multiplication est prioritaire : 4 &times; 2 = 8, puis 3 + 8 = 11."),
    choiceQuestion("Nombres et op&eacute;rations", "Calculer : (3 + 4) &times; 2 = ?", ["14", "11", "10", "9"], 0, "Les parenth&egrave;ses sont prioritaires."),
    choiceQuestion("Nombres et op&eacute;rations", "Calculer : 18 &divide; 3 + 2<sup>2</sup> = ?", ["10", "8", "12", "36"], 0, "18 &divide; 3 = 6 et 2<sup>2</sup> = 4, donc 10."),
    choiceQuestion("Nombres et op&eacute;rations", "Sur une droite gradu&eacute;e de 0 &agrave; 1 divis&eacute;e en 10 parties, une graduation vaut...", ["0,1", "1", "10", "0,01"], 0, "1 &divide; 10 = 0,1."),
    choiceQuestion("Nombres et op&eacute;rations", "Comparer : 0,03 km ... 300 m", ["&lt;", "&gt;", "="], 0, "0,03 km = 30 m, donc c'est plus petit que 300 m."),
    choiceQuestion("Nombres et op&eacute;rations", "Estimer : 49 &times; 21 est proche de...", ["1000", "100", "5000", "70"], 0, "49 &times; 21 est proche de 50 &times; 20 = 1000."),
    inputQuestion("Nombres et op&eacute;rations", "Si j'ai d&eacute;pens&eacute; 1/4 de 48 CHF, il me reste ... CHF", ["36"], "1/4 de 48 = 12, donc il reste 48 - 12 = 36 CHF.")
  ]);

  add([
    choiceQuestion("Proportionnalit&eacute;", "25 % de 80 = ?", ["20", "25", "40", "60"], 0, "25 % = 1/4, donc 80 &divide; 4 = 20."),
    inputQuestion("Proportionnalit&eacute;", "3/4 de 60 = ?", ["45"], "60 &divide; 4 &times; 3 = 45."),
    choiceQuestion("Proportionnalit&eacute;", "20 % d'un prix repr&eacute;sentent 30 CHF. Le prix total est...", ["150 CHF", "60 CHF", "120 CHF", "600 CHF"], 0, "30 &divide; 0,20 = 150."),
    choiceQuestion("Proportionnalit&eacute;", "3 kg co&ucirc;tent 12 CHF. 5 kg co&ucirc;tent...", ["20 CHF", "15 CHF", "24 CHF", "17 CHF"], 0, "1 kg co&ucirc;te 4 CHF, donc 5 kg co&ucirc;tent 20 CHF."),
    inputQuestion("Proportionnalit&eacute;", "Une recette pour 4 personnes demande 200 g de riz. Pour 6 personnes, il faut ... g", ["300"], "200 &divide; 4 = 50 g par personne, puis 50 &times; 6 = 300."),
    choiceQuestion("Proportionnalit&eacute;", "120 km en 2 h. En 3 h, &agrave; la m&ecirc;me vitesse, on parcourt...", ["180 km", "160 km", "240 km", "80 km"], 0, "120 &divide; 2 = 60 km/h, puis 60 &times; 3 = 180."),
    choiceQuestion("Proportionnalit&eacute;", "Une r&eacute;duction de 10 % sur 90 CHF vaut...", ["9 CHF", "10 CHF", "81 CHF", "99 CHF"], 0, "10 % de 90 = 9."),
    inputQuestion("Proportionnalit&eacute;", "Apr&egrave;s une r&eacute;duction de 10 % sur 90 CHF, le prix final est ... CHF", ["81"], "90 - 9 = 81."),
    choiceQuestion("Proportionnalit&eacute;", "2 stylos co&ucirc;tent 3 CHF. 6 stylos co&ucirc;tent...", ["9 CHF", "6 CHF", "12 CHF", "18 CHF"], 0, "6 stylos, c'est 3 fois 2 stylos, donc 3 &times; 3 = 9 CHF."),
    trueFalseQuestion("Proportionnalit&eacute;", "Si on double la quantit&eacute; dans une situation proportionnelle, on double aussi le prix.", true, "C'est le principe de proportionnalit&eacute;."),
    choiceQuestion("Proportionnalit&eacute;", "Une carte indique 1 cm pour 5 km. 4 cm repr&eacute;sentent...", ["20 km", "9 km", "25 km", "1,25 km"], 0, "4 &times; 5 = 20 km."),
    inputQuestion("Proportionnalit&eacute;", "15 % de 200 = ?", ["30"], "200 &times; 0,15 = 30.")
  ]);

  add([
    choiceQuestion("Alg&egrave;bre", "V&eacute;rifier : x + 5 = 12 avec x = 7", ["Vrai", "Faux"], 0, "7 + 5 = 12."),
    choiceQuestion("Alg&egrave;bre", "V&eacute;rifier : 2x = 10 avec x = 4", ["Vrai", "Faux"], 1, "2 &times; 4 = 8, pas 10."),
    choiceQuestion("Alg&egrave;bre", "D&eacute;velopper : 3(x + 2)", ["3x + 6", "3x + 2", "x + 6", "5x"], 0, "3 multiplie x et 2."),
    choiceQuestion("Alg&egrave;bre", "R&eacute;duire : 2x + 5x - 3", ["7x - 3", "10x - 3", "7x", "4x"], 0, "2x + 5x = 7x."),
    choiceQuestion("Alg&egrave;bre", "Factoriser : 3x + 6", ["3(x + 2)", "x(3 + 6)", "6(x + 3)", "3x(6)"], 0, "3 est le facteur commun."),
    choiceQuestion("Alg&egrave;bre", "Factoriser : 5x + 10", ["5(x + 2)", "10(x + 5)", "x(5 + 10)", "5x + 2"], 0, "5 est commun aux deux termes."),
    choiceQuestion("Alg&egrave;bre", "Un nombre augment&eacute; de 5 s'&eacute;crit...", ["x + 5", "5x", "x - 5", "x/5"], 0, "Augment&eacute; de 5 signifie + 5."),
    choiceQuestion("Alg&egrave;bre", "Le double d'un nombre s'&eacute;crit...", ["2x", "x + 2", "x/2", "x - 2"], 0, "Le double signifie multiplier par 2."),
    inputQuestion("Alg&egrave;bre", "R&eacute;soudre : x + 7 = 15. x = ?", ["8"], "x = 15 - 7 = 8."),
    inputQuestion("Alg&egrave;bre", "R&eacute;soudre : 3x = 21. x = ?", ["7"], "x = 21 &divide; 3 = 7."),
    choiceQuestion("Alg&egrave;bre", "R&eacute;soudre : x - 4 = 9", ["13", "5", "-13", "36"], 0, "x = 9 + 4 = 13."),
    choiceQuestion("Alg&egrave;bre", "R&eacute;soudre : x/5 = 6", ["30", "11", "1", "25"], 0, "x = 6 &times; 5 = 30."),
    choiceQuestion("Alg&egrave;bre", "Un nombre augment&eacute; de 4 vaut 13. Ce nombre vaut...", ["9", "17", "52", "4"], 0, "x + 4 = 13, donc x = 9."),
    inputQuestion("Alg&egrave;bre", "3 billets co&ucirc;tent 24 CHF. Un billet co&ucirc;te ... CHF", ["8"], "3x = 24, donc x = 8."),
    choiceQuestion("Alg&egrave;bre", "Dans 4x + 2, le coefficient de x est...", ["4", "2", "6", "x"], 0, "Le coefficient est le nombre qui multiplie x."),
    trueFalseQuestion("Alg&egrave;bre", "Dans l'&eacute;quation x + 3 = 10, x = 7.", true, "7 + 3 = 10."),
    choiceQuestion("Alg&egrave;bre", "R&eacute;duire : 4a + 2a + 1", ["6a + 1", "6a", "7a", "4a + 3"], 0, "4a + 2a = 6a.")
  ]);

  add([
    choiceQuestion("Grandeurs et mesures", "Aire d'un rectangle de 8 cm sur 5 cm", ["40 cm<sup>2</sup>", "26 cm", "13 cm<sup>2</sup>", "80 cm"], 0, "A = longueur &times; largeur = 8 &times; 5."),
    choiceQuestion("Grandeurs et mesures", "P&eacute;rim&egrave;tre d'un carr&eacute; de c&ocirc;t&eacute; 6 cm", ["24 cm", "36 cm<sup>2</sup>", "12 cm", "18 cm"], 0, "P = 4 &times; 6 = 24 cm."),
    choiceQuestion("Grandeurs et mesures", "Aire d'un triangle de base 10 cm et hauteur 6 cm", ["30 cm<sup>2</sup>", "60 cm<sup>2</sup>", "16 cm<sup>2</sup>", "20 cm<sup>2</sup>"], 0, "A = base &times; hauteur &divide; 2 = 10 &times; 6 &divide; 2."),
    inputQuestion("Grandeurs et mesures", "Volume d'une bo&icirc;te 4 cm &times; 3 cm &times; 2 cm = ... cm3", ["24"], "V = 4 &times; 3 &times; 2 = 24."),
    choiceQuestion("Grandeurs et mesures", "Volume d'un cube de c&ocirc;t&eacute; 5 cm", ["125 cm<sup>3</sup>", "25 cm<sup>2</sup>", "15 cm", "100 cm<sup>3</sup>"], 0, "5 &times; 5 &times; 5 = 125."),
    choiceQuestion("Grandeurs et mesures", "Convertir : 2,5 m = ... cm", ["250 cm", "25 cm", "2500 cm", "0,25 cm"], 0, "1 m = 100 cm, donc 2,5 m = 250 cm."),
    inputQuestion("Grandeurs et mesures", "Convertir : 3 h = ... minutes", ["180"], "3 &times; 60 = 180."),
    choiceQuestion("Grandeurs et mesures", "Convertir : 1 km = ... m", ["1000", "100", "10", "0,001"], 0, "1 km = 1000 m."),
    choiceQuestion("Grandeurs et mesures", "Convertir : 1 L = ... cL", ["100", "10", "1000", "0,1"], 0, "1 L = 100 cL."),
    choiceQuestion("Grandeurs et mesures", "Triangle rectangle : c&ocirc;t&eacute;s 3 et 4. Hypot&eacute;nuse = ?", ["5", "7", "12", "25"], 0, "3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25, donc l'hypot&eacute;nuse vaut 5."),
    choiceQuestion("Grandeurs et mesures", "Triangle rectangle : hypot&eacute;nuse 13, c&ocirc;t&eacute; 5. Autre c&ocirc;t&eacute; = ?", ["12", "18", "8", "14"], 0, "13<sup>2</sup> - 5<sup>2</sup> = 169 - 25 = 144, donc 12."),
    trueFalseQuestion("Grandeurs et mesures", "Le th&eacute;or&egrave;me de Pythagore s'utilise seulement dans un triangle rectangle.", true, "C'est une condition indispensable."),
    choiceQuestion("Grandeurs et mesures", "Si un triangle a pour c&ocirc;t&eacute;s 6, 8 et 10, il est...", ["rectangle", "&eacute;quilat&eacute;ral", "isoc&egrave;le", "impossible"], 0, "6<sup>2</sup> + 8<sup>2</sup> = 36 + 64 = 100 = 10<sup>2</sup>."),
    inputQuestion("Grandeurs et mesures", "P&eacute;rim&egrave;tre d'un rectangle 7 cm sur 3 cm = ... cm", ["20"], "P = 2(7 + 3) = 20."),
    choiceQuestion("Grandeurs et mesures", "Comparer : 0,5 h ... 30 min", ["=", "&lt;", "&gt;"], 0, "0,5 h = une demi-heure = 30 min."),
    choiceQuestion("Grandeurs et mesures", "Une surface se mesure en...", ["cm<sup>2</sup>", "cm", "cm<sup>3</sup>", "litres"], 0, "Une aire se mesure en unit&eacute;s carr&eacute;es."),
    choiceQuestion("Grandeurs et mesures", "Un volume se mesure en...", ["cm<sup>3</sup>", "cm", "cm<sup>2</sup>", "degr&eacute;s"], 0, "Un volume se mesure en unit&eacute;s cubes."),
    choiceQuestion("Grandeurs et mesures", "Dans un triangle rectangle, le plus grand c&ocirc;t&eacute; s'appelle...", ["l'hypot&eacute;nuse", "la hauteur", "la base", "le rayon"], 0, "L'hypot&eacute;nuse est le c&ocirc;t&eacute; oppos&eacute; &agrave; l'angle droit.")
  ]);

  add([
    choiceQuestion("Espace", "Un cube poss&egrave;de...", ["6 faces carr&eacute;es", "4 faces", "8 ar&ecirc;tes", "12 sommets"], 0, "Un cube a 6 faces carr&eacute;es."),
    choiceQuestion("Espace", "Un cube poss&egrave;de combien d'ar&ecirc;tes ?", ["12", "6", "8", "4"], 0, "Un cube a 12 ar&ecirc;tes."),
    choiceQuestion("Espace", "Un cercle est d&eacute;fini par...", ["un centre et un rayon", "4 c&ocirc;t&eacute;s", "6 faces", "3 sommets"], 0, "Tous les points du cercle sont &agrave; la m&ecirc;me distance du centre."),
    choiceQuestion("Espace", "Un triangle &eacute;quilat&eacute;ral a...", ["3 c&ocirc;t&eacute;s &eacute;gaux", "1 angle droit", "2 c&ocirc;t&eacute;s &eacute;gaux seulement", "4 c&ocirc;t&eacute;s"], 0, "Tous ses c&ocirc;t&eacute;s sont &eacute;gaux."),
    choiceQuestion("Espace", "Un rectangle poss&egrave;de...", ["4 angles droits", "3 c&ocirc;t&eacute;s", "aucun axe", "6 sommets"], 0, "Un rectangle a quatre angles droits."),
    choiceQuestion("Espace", "Pour tracer un cercle, on utilise...", ["un compas", "une &eacute;querre", "un rapporteur", "une gomme"], 0, "Le compas sert &agrave; tracer des cercles."),
    choiceQuestion("Espace", "Pour v&eacute;rifier un angle droit, on utilise...", ["une &eacute;querre", "un compas", "une calculatrice", "un crayon"], 0, "L'&eacute;querre permet de v&eacute;rifier 90&deg;."),
    choiceQuestion("Espace", "Un d&eacute;veloppement de cube doit contenir...", ["6 carr&eacute;s", "4 triangles", "2 disques", "1 rectangle seulement"], 0, "Un cube a 6 faces carr&eacute;es."),
    choiceQuestion("Espace", "Le point A(3 ; 2) a pour abscisse...", ["3", "2", "5", "-3"], 0, "On lit d'abord l'abscisse x."),
    choiceQuestion("Espace", "Un carr&eacute; poss&egrave;de combien d'axes de sym&eacute;trie ?", ["4", "2", "1", "0"], 0, "Un carr&eacute; a 4 axes de sym&eacute;trie.")
  ]);

  return questions;
}

function frenchChoiceQuestion(category, question, answers, correct, feedback) {
  return { subject: "Fran&ccedil;ais", category, type: "choice", question, answers, correct, feedback };
}

function frenchInputQuestion(category, question, accepted, feedback) {
  return { subject: "Fran&ccedil;ais", category, type: "input", question, accepted: accepted.map(String), feedback };
}

function frenchTrueFalseQuestion(category, question, isTrue, feedback) {
  return frenchChoiceQuestion(category, question, ["Vrai", "Faux"], isTrue ? 0 : 1, feedback);
}

function buildEvaFrenchDemoQuestions() {
  const questions = [];
  const c = "Compr&eacute;hension de l'&eacute;crit";
  const l = "Fonctionnement de la langue";
  const add = (items) => questions.push(...items);

  add([
    frenchChoiceQuestion(c, "Texte : Lina arrive dans un nouveau coll&egrave;ge. Elle ne conna&icirc;t personne, puis un &eacute;l&egrave;ve l'aide &agrave; trouver sa classe. Quel est le th&egrave;me principal ?", ["L'int&eacute;gration", "Le sport", "La cuisine", "La m&eacute;t&eacute;o"], 0, "Le texte parle d'une arriv&eacute;e dans un nouveau lieu et de l'aide re&ccedil;ue."),
    frenchChoiceQuestion(c, "Dans un texte narratif, on cherche d'abord...", ["les personnages et les actions", "uniquement les chiffres", "la th&egrave;se", "le prix final"], 0, "Un r&eacute;cit raconte des actions v&eacute;cues par des personnages."),
    frenchChoiceQuestion(c, "Dans le r&eacute;cit de Lina, le personnage principal est...", ["Lina", "le professeur", "le bus", "la biblioth&egrave;que"], 0, "Le personnage principal est celui que l'on suit dans l'histoire."),
    frenchChoiceQuestion(c, "L'expression 'le matin de la rentr&eacute;e' indique...", ["le moment", "le lieu", "la th&egrave;se", "le destinataire"], 0, "C'est un rep&egrave;re temporel."),
    frenchChoiceQuestion(c, "Si une histoire se termine mieux qu'elle ne commence, on parle d'une...", ["&eacute;volution de la situation", "liste d'arguments", "d&eacute;finition", "consigne"], 0, "Il faut suivre ce qui change entre le d&eacute;but et la fin."),
    frenchChoiceQuestion(c, "Un conte, une nouvelle ou un extrait de roman sont souvent des textes...", ["narratifs", "informatifs", "administratifs", "publicitaires"], 0, "Ils racontent une histoire."),
    frenchChoiceQuestion(c, "Dans un texte narratif, le d&eacute;cor correspond...", ["au lieu et &agrave; l'ambiance", "au verbe conjugu&eacute;", "au prix", "au connecteur logique"], 0, "Le d&eacute;cor aide &agrave; situer l'histoire."),
    frenchChoiceQuestion(c, "La question 'Que se passe-t-il ensuite ?' demande de rep&eacute;rer...", ["l'ordre des actions", "le genre grammatical", "un homophone", "un antonyme"], 0, "Elle porte sur la chronologie."),
    frenchChoiceQuestion(c, "Dans un r&eacute;cit, le probl&egrave;me est souvent...", ["la difficult&eacute; rencontr&eacute;e par le personnage", "la formule de politesse", "le titre du journal", "le pourcentage"], 0, "Il faut rep&eacute;rer ce qui complique la situation."),

    frenchChoiceQuestion(c, "Texte : 'La lecture devrait occuper une place plus importante &agrave; l'&eacute;cole, car elle enrichit le vocabulaire.' Ce texte est plut&ocirc;t...", ["argumentatif", "narratif", "po&eacute;tique", "th&eacute;&acirc;tral"], 0, "Il d&eacute;fend une opinion avec un argument."),
    frenchChoiceQuestion(c, "Dans un texte argumentatif, la th&egrave;se est...", ["l'opinion d&eacute;fendue", "le lieu de l'histoire", "le nom du narrateur", "une date"], 0, "La th&egrave;se est ce que l'auteur veut faire accepter."),
    frenchChoiceQuestion(c, "Dans 'car elle enrichit le vocabulaire', le mot 'car' introduit...", ["une cause", "une opposition", "un lieu", "une conclusion sans lien"], 0, "'Car' explique pourquoi."),
    frenchChoiceQuestion(c, "Un exemple sert souvent &agrave;...", ["rendre un argument plus concret", "supprimer la th&egrave;se", "cacher le sujet", "remplacer le titre"], 0, "L'exemple illustre l'id&eacute;e."),
    frenchChoiceQuestion(c, "Dans un texte argumentatif, il faut distinguer...", ["arguments et exemples", "personnages et dialogue uniquement", "rimes et syllabes", "prix et monnaie"], 0, "C'est essentiel pour comprendre la construction du raisonnement."),
    frenchChoiceQuestion(c, "Le connecteur 'cependant' marque...", ["l'opposition", "l'addition", "le temps", "le lieu"], 0, "Il oppose deux id&eacute;es."),
    frenchChoiceQuestion(c, "La vis&eacute;e d'un texte argumentatif est souvent de...", ["convaincre", "mesurer", "dessiner", "calculer"], 0, "L'auteur cherche &agrave; faire adh&eacute;rer le lecteur &agrave; une opinion."),
    frenchChoiceQuestion(c, "Une lettre d'opinion peut &ecirc;tre un texte...", ["argumentatif", "narratif seulement", "informatif seulement", "sans vis&eacute;e"], 0, "Elle d&eacute;fend souvent un point de vue."),

    frenchChoiceQuestion(c, "Texte : 'Les trams, les bus et les trains relient les quartiers de Gen&egrave;ve.' Ce texte donne surtout...", ["des informations", "une th&egrave;se", "une histoire imaginaire", "un ordre"], 0, "Il pr&eacute;sente des informations sur un sujet."),
    frenchChoiceQuestion(c, "Un texte informatif a pour but principal de...", ["expliquer ou faire comprendre", "convaincre &agrave; tout prix", "raconter une aventure", "donner seulement des sentiments"], 0, "Sa vis&eacute;e est informative."),
    frenchChoiceQuestion(c, "Dans un texte informatif, le sujet principal est...", ["ce dont le texte parle", "le dernier mot", "la premi&egrave;re virgule", "le nombre de lignes"], 0, "Le sujet r&eacute;sume le th&egrave;me trait&eacute;."),
    frenchChoiceQuestion(c, "Une fiche explicative ou un article documentaire sont souvent des textes...", ["informatifs", "narratifs", "argumentatifs uniquement", "dialogu&eacute;s"], 0, "Ils transmettent des informations."),
    frenchChoiceQuestion(c, "Une information essentielle est...", ["une id&eacute;e importante pour comprendre le texte", "un d&eacute;tail sans importance", "une faute", "une rime"], 0, "Elle aide &agrave; comprendre le sujet."),
    frenchChoiceQuestion(c, "Une question globale porte sur...", ["le sens g&eacute;n&eacute;ral", "un seul mot isol&eacute;", "la ponctuation uniquement", "le nombre exact de lettres"], 0, "Elle concerne l'ensemble du texte."),
    frenchChoiceQuestion(c, "Une question locale porte sur...", ["une information pr&eacute;cise", "tout le texte", "le genre du document uniquement", "la couverture"], 0, "Elle demande de retrouver un d&eacute;tail."),
    frenchChoiceQuestion(c, "Pour r&eacute;pondre &agrave; une question de compr&eacute;hension, il faut...", ["retourner au texte", "r&eacute;pondre au hasard", "ignorer les indices", "choisir toujours la premi&egrave;re r&eacute;ponse"], 0, "Les indices du texte justifient la r&eacute;ponse."),

    frenchChoiceQuestion(c, "La situation d'&eacute;nonciation permet d'identifier...", ["qui parle, &agrave; qui, o&ugrave; et quand", "seulement les adjectifs", "les calculs", "les fractions"], 0, "Elle situe la communication."),
    frenchChoiceQuestion(c, "Le destinataire est...", ["la personne &agrave; qui le texte s'adresse", "la personne qui &eacute;crit toujours", "le lieu", "le temps du verbe"], 0, "C'est celui ou celle qui re&ccedil;oit le message."),
    frenchChoiceQuestion(c, "Le narrateur est...", ["celui qui raconte", "toujours l'auteur", "un adjectif", "un connecteur"], 0, "Le narrateur raconte le r&eacute;cit."),
    frenchChoiceQuestion(c, "Le genre d'un texte peut &ecirc;tre...", ["conte, article, lettre", "sujet, COD, COI", "addition, division", "rayon, diam&egrave;tre"], 0, "Le genre indique la famille du texte."),
    frenchChoiceQuestion(c, "La vis&eacute;e d'un texte correspond...", ["&agrave; son objectif", "&agrave; sa longueur", "au nombre de virgules", "au nom du lecteur"], 0, "Informer, convaincre ou raconter sont des vis&eacute;es possibles."),
    frenchChoiceQuestion(c, "Pour rep&eacute;rer l'ordre chronologique, on cherche des mots comme...", ["d'abord, ensuite, enfin", "mais, pourtant", "sous, sur", "le, la"], 0, "Ces marqueurs organisent le temps."),
    frenchChoiceQuestion(c, "Le th&egrave;me d'un texte, c'est...", ["le sujet dont il parle", "la derni&egrave;re phrase", "une terminaison", "un signe de ponctuation"], 0, "Le th&egrave;me r&eacute;sume le sujet."),
    frenchChoiceQuestion(c, "Dans un texte argumentatif, un argument sert &agrave;...", ["soutenir la th&egrave;se", "d&eacute;crire un lieu seulement", "donner une date", "remplacer le titre"], 0, "Il justifie l'opinion d&eacute;fendue."),
    frenchChoiceQuestion(c, "Dans une question EVA, 'Choisir la bonne r&eacute;ponse' signifie...", ["s&eacute;lectionner l'option correcte", "r&eacute;diger un long texte", "changer la question", "ne rien faire"], 0, "Les exemples EVA utilisent souvent des choix multiples."),
    frenchTrueFalseQuestion(c, "Un texte peut avoir une vis&eacute;e informative m&ecirc;me s'il ne raconte pas d'histoire.", true, "Informer ne signifie pas raconter une histoire."),
    frenchTrueFalseQuestion(c, "Une question locale demande toujours de comprendre tout le texte sans chercher de d&eacute;tail.", false, "Une question locale porte sur un passage ou une information pr&eacute;cise."),
    frenchChoiceQuestion(c, "Si une consigne demande 'le mot de sens contraire', il faut trouver...", ["un antonyme", "un synonyme", "un homonyme", "un pronom"], 0, "Un antonyme a un sens contraire.")
  ]);

  add([
    frenchChoiceQuestion(l, "Choisir le mot de sens contraire de 'punition'.", ["r&eacute;compense", "sanction", "privation", "prix"], 0, "Le contraire de punition est r&eacute;compense."),
    frenchChoiceQuestion(l, "Un synonyme de 'rapide' est...", ["vite", "lent", "contraire", "impossible"], 0, "Un synonyme a un sens proche."),
    frenchChoiceQuestion(l, "Un antonyme de 'grand' est...", ["petit", "large", "immense", "haut"], 0, "Un antonyme a un sens contraire."),
    frenchChoiceQuestion(l, "Un homonyme de 'verre' est...", ["vers", "vertu", "vitesse", "voiture"], 0, "Verre, vers et vert peuvent se prononcer de fa&ccedil;on proche."),
    frenchChoiceQuestion(l, "Le champ lexical de l'&eacute;cole contient...", ["classe, professeur, cahier", "four, assiette, soupe", "train, quai, billet", "pluie, vent, nuage"], 0, "Ces mots appartiennent au m&ecirc;me domaine."),
    frenchChoiceQuestion(l, "Dans 'maltrait&eacute;s', le pr&eacute;fixe 'mal-' signifie...", ["de mani&egrave;re mauvaise", "avant", "contre", "encore"], 0, "Le pr&eacute;fixe modifie le sens du mot."),
    frenchChoiceQuestion(l, "Le sens figur&eacute; de 'avoir le coeur serr&eacute;' signifie...", ["&ecirc;tre triste ou inquiet", "avoir un probl&egrave;me de calcul", "porter un objet", "courir vite"], 0, "C'est une expression imag&eacute;e."),
    frenchChoiceQuestion(l, "Le registre familier de 'travail' est...", ["boulot", "profession", "ouvrage", "emploi"], 0, "Boulot appartient au registre familier."),

    frenchInputQuestion(l, "Compl&eacute;ter : L'an dernier, ce sont elles qui sont arriv... les premi&egrave;res.", ["ées", "ees"], "Avec l'auxiliaire &ecirc;tre, le participe pass&eacute; s'accorde avec le sujet : elles sont arriv&eacute;es."),
    frenchChoiceQuestion(l, "Choisir l'adjectif correctement accord&eacute; : On voit des animaux de compagnie ... par leur ma&icirc;tre.", ["maltrait&eacute;s", "maltrait&eacute;e", "maltraiter"], 0, "Animaux est masculin pluriel, donc maltrait&eacute;s."),
    frenchInputQuestion(l, "Compl&eacute;ter : Les feuilles des arbres &eacute;taient tomb&eacute;... sur le gravier.", ["es"], "Feuilles est f&eacute;minin pluriel : tomb&eacute;es."),
    frenchChoiceQuestion(l, "Quelle phrase est correcte ?", ["Les exercices corrig&eacute;s sont utiles.", "Les exercice corrig&eacute; sont utiles.", "Les exercices corrig&eacute; est utile."], 0, "Nom, adjectif et verbe sont accord&eacute;s au pluriel."),
    frenchChoiceQuestion(l, "Quelle expression est correcte ?", ["Des fleurs orange", "Des fleurs oranges", "Des fleur orange"], 0, "Orange vient d'un nom : il reste invariable."),
    frenchChoiceQuestion(l, "Dans 'Les boissons qu'elles ont apport&eacute;es', pourquoi 'apport&eacute;es' s'accorde ?", ["Le COD est plac&eacute; avant l'auxiliaire avoir", "Le sujet est masculin", "C'est un adverbe"], 0, "Avec avoir, le participe pass&eacute; s'accorde avec le COD plac&eacute; avant."),

    frenchChoiceQuestion(l, "Choisir la bonne terminaison : Je fin... mon exercice.", ["is", "it", "issent", "ons"], 0, "Je finis."),
    frenchChoiceQuestion(l, "Choisir : Nous all... &agrave; Gen&egrave;ve demain.", ["ons", "ez", "ent", "e"], 0, "Nous allons."),
    frenchChoiceQuestion(l, "Le verbe est au futur proche dans...", ["Je vais partir.", "Je pars.", "Je partais.", "Je partis."], 0, "Aller + infinitif forme le futur proche."),
    frenchChoiceQuestion(l, "Dans 'Nous quittons l'a&eacute;roport dans quelques minutes', le pr&eacute;sent sert &agrave;...", ["rapporter une action qui va bient&ocirc;t se passer", "raconter le pass&eacute;", "exprimer une v&eacute;rit&eacute; g&eacute;n&eacute;rale", "donner un ordre"], 0, "Le compl&eacute;ment 'dans quelques minutes' indique un futur proche."),
    frenchTrueFalseQuestion(l, "Dans 'Pierre, Jean, Louis et moi mettrons les ordinateurs sous tension', le verbe est correctement accord&eacute;.", true, "Avec 'moi' dans le sujet, on utilise nous : mettrons."),
    frenchChoiceQuestion(l, "Le conditionnel pr&eacute;sent de 'je manger' est...", ["je mangerais", "je mangerai", "je mangeais", "je mange"], 0, "Le conditionnel utilise les terminaisons de l'imparfait."),
    frenchChoiceQuestion(l, "L'imparfait de 'vous manger' est...", ["vous mangiez", "vous mangez", "vous mangerez", "vous mange&acirc;tes"], 0, "La terminaison est -iez."),

    frenchChoiceQuestion(l, "Dans 'Maria lit un livre', 'Maria' est...", ["sujet", "COD", "COI", "attribut"], 0, "Maria fait l'action."),
    frenchChoiceQuestion(l, "Dans 'Je conduis la voiture', 'la voiture' est...", ["COD", "COI", "sujet", "compl&eacute;ment du nom"], 0, "Je conduis quoi ? la voiture."),
    frenchChoiceQuestion(l, "Dans 'Pascal parle &agrave; son fr&egrave;re', '&agrave; son fr&egrave;re' est...", ["COI", "COD", "sujet", "attribut"], 0, "Il parle &agrave; qui ? &agrave; son fr&egrave;re."),
    frenchChoiceQuestion(l, "Dans 'Marie est heureuse', 'heureuse' est...", ["attribut du sujet", "COD", "COI", "d&eacute;terminant"], 0, "Apr&egrave;s le verbe &ecirc;tre, l'adjectif qualifie le sujet."),
    frenchChoiceQuestion(l, "La classe grammaticale de 'rapidement' est...", ["adverbe", "nom", "d&eacute;terminant", "pronom"], 0, "Rapidement est un adverbe."),
    frenchChoiceQuestion(l, "Dans 'le nouveau coll&egrave;ge', le groupe est...", ["groupe nominal", "groupe verbal", "groupe pr&eacute;positionnel", "phrase imp&eacute;rative"], 0, "Il est organis&eacute; autour du nom coll&egrave;ge."),

    frenchChoiceQuestion(l, "Le connecteur 'mais' exprime...", ["l'opposition", "la cause", "le but", "le temps"], 0, "Mais oppose deux id&eacute;es."),
    frenchChoiceQuestion(l, "Le connecteur 'parce que' exprime...", ["la cause", "l'addition", "le lieu", "la conclusion"], 0, "Il donne une raison."),
    frenchChoiceQuestion(l, "Le connecteur 'donc' exprime...", ["la cons&eacute;quence", "l'opposition", "le temps", "le lieu"], 0, "Donc introduit un r&eacute;sultat."),
    frenchChoiceQuestion(l, "L'organisateur 'ensuite' indique...", ["l'ordre chronologique", "l'opposition", "le but", "le lieu"], 0, "Il situe une action apr&egrave;s une autre."),
    frenchChoiceQuestion(l, "L'expression '&agrave; c&ocirc;t&eacute; de' indique...", ["un lieu", "une cause", "un temps", "une opposition"], 0, "C'est un organisateur spatial."),

    frenchChoiceQuestion(l, "La forme passive de 'Marion mangera une p&ecirc;che' est...", ["Une p&ecirc;che sera mang&eacute;e par Marion.", "Une p&ecirc;che est mangera Marion.", "Marion sera mang&eacute;e par une p&ecirc;che."], 0, "Au futur, l'auxiliaire &ecirc;tre devient sera."),
    frenchChoiceQuestion(l, "Dans 'Lucile regarde la t&eacute;l&eacute;vision', quel &eacute;l&eacute;ment devient sujet au passif ?", ["La t&eacute;l&eacute;vision", "Lucile", "Regarde"], 0, "Le COD devient sujet dans la phrase passive."),
    frenchChoiceQuestion(l, "Quel est le type de phrase : 'Viens ici !'", ["imp&eacute;ratif", "interrogatif", "d&eacute;claratif", "exclamatif"], 0, "La phrase donne un ordre."),
    frenchChoiceQuestion(l, "Quel est le type de phrase : 'As-tu compris ?'", ["interrogatif", "imp&eacute;ratif", "d&eacute;claratif", "exclamatif"], 0, "Elle pose une question."),
    frenchChoiceQuestion(l, "Quel est le type de phrase : 'Comme c'est beau !'", ["exclamatif", "interrogatif", "imp&eacute;ratif", "neutre"], 0, "Elle exprime une &eacute;motion forte."),
    frenchChoiceQuestion(l, "Dans 'Lina cherche sa classe. Elle est inqui&egrave;te.', 'Elle' renvoie &agrave;...", ["Lina", "la classe", "la cour", "la rentr&eacute;e"], 0, "Le pronom reprend Lina."),

    frenchChoiceQuestion(l, "Choisir le bon homophone : Il ... son cahier.", ["a", "&agrave;", "as", "ah"], 0, "On peut remplacer par avait : il a son cahier."),
    frenchChoiceQuestion(l, "Choisir : Je vais ... Gen&egrave;ve.", ["&agrave;", "a", "as", "ah"], 0, "&Agrave; est une pr&eacute;position."),
    frenchChoiceQuestion(l, "La ponctuation correcte est...", ["Bonjour, je vous &eacute;cris au sujet de l'annonce.", "Bonjour je vous &eacute;cris au sujet de l'annonce", "Bonjour je vous &eacute;cris, au sujet de l'annonce ?"], 0, "La virgule apr&egrave;s Bonjour et le point final sont attendus."),
    frenchChoiceQuestion(l, "Dans un courriel, l'objet sert &agrave;...", ["annoncer le sujet", "signer", "remplacer le texte", "poser la ponctuation"], 0, "L'objet r&eacute;sume le contenu du message."),
    frenchChoiceQuestion(l, "Une formule de politesse adapt&eacute;e est...", ["Cordialement", "Salut toi", "R&eacute;ponds vite", "Aucune"], 0, "Cordialement convient dans un message simple et poli."),
    frenchChoiceQuestion(l, "Dans un courriel de candidature, il faut surtout...", ["&ecirc;tre clair, poli et structur&eacute;", "oublier l'objet", "ne pas signer", "utiliser seulement des abr&eacute;viations"], 0, "Un courriel doit &ecirc;tre compr&eacute;hensible et poli."),
    frenchTrueFalseQuestion(l, "Une phrase commence par une majuscule et se termine par un signe de ponctuation.", true, "C'est une r&egrave;gle de base de ponctuation.")
  ]);

  return questions;
}


const frenchRevisionTopics = [
  {
    id: "comprehension",
    icon: "CE",
    title: "Compréhension de l’écrit",
    intro: "Lire un texte avec autonomie, comprendre son sens général, repérer les informations utiles et répondre aux questions avec précision.",
    sections: [
      {
        title: "Texte narratif",
        html: `
          <div class="literary-study">
            <div class="study-hero">
              <h4>Texte narratif : une arrivée au collège</h4>
              <p>Un texte narratif raconte une histoire réelle ou imaginaire. Pour le comprendre, observe les personnages, le lieu, le moment, les actions et l’évolution de la situation.</p>
            </div>
            <div class="study-main">
              <article class="text-excerpt">
                <p>Le matin de la rentrée, Lina arriva devant son nouveau collège avec le cœur serré. Dans la cour, les élèves parlaient déjà entre eux. Elle ne connaissait personne.</p>
                <p>Soudain, un garçon s’approcha et lui demanda si elle cherchait sa classe. Grâce à lui, Lina retrouva la salle 204.</p>
                <p>À la fin de la journée, elle se sentit beaucoup plus rassurée. Elle avait encore beaucoup de choses à découvrir, mais elle savait désormais qu’elle n’était plus seule.</p>
              </article>
              <aside class="study-sidebar">
                <div class="analysis-card"><h5>Résumé</h5><p>Lina arrive dans un nouveau collège. Elle se sent inquiète, puis reçoit de l’aide et finit la journée plus rassurée.</p></div>
                <div class="analysis-card"><h5>Éléments à repérer</h5><dl><dt>Personnage</dt><dd>Lina</dd><dt>Lieu</dt><dd>Le collège</dd><dt>Moment</dt><dd>Le matin de la rentrée</dd><dt>Problème</dt><dd>Elle ne connaît personne</dd><dt>Thème</dt><dd>La rentrée et l’intégration</dd></dl></div>
                <div class="analysis-card"><h5>Questions types</h5><ul><li>Qui est le personnage principal ?</li><li>Où se déroule l’histoire ?</li><li>Qu’est-ce qui change à la fin ?</li></ul></div>
              </aside>
            </div>
          </div>
        `
      },
      {
        title: "Texte argumentatif",
        html: `
          <div class="literary-study">
            <div class="study-hero">
              <h4>Texte argumentatif : défendre une opinion</h4>
              <p>Un texte argumentatif présente une thèse et cherche à convaincre. Il faut distinguer le thème, les arguments et les exemples.</p>
            </div>
            <div class="study-main">
              <article class="text-excerpt">
                <p>La lecture devrait occuper une place plus importante dans la vie des élèves. D’abord, elle permet d’enrichir le vocabulaire et d’améliorer l’expression écrite.</p>
                <p>Ensuite, lire développe l’imagination et aide à mieux comprendre le monde. Par exemple, un roman peut faire découvrir une époque, une culture ou une situation différente de la nôtre.</p>
                <p>C’est pourquoi il est essentiel d’encourager les élèves à lire régulièrement, à l’école comme à la maison.</p>
              </article>
              <aside class="study-sidebar">
                <div class="analysis-card"><h5>Résumé</h5><p>Le texte défend l’idée que la lecture est importante pour progresser et mieux comprendre le monde.</p></div>
                <div class="analysis-card"><h5>Analyse</h5><dl><dt>Thème</dt><dd>La lecture</dd><dt>Thèse</dt><dd>La lecture doit avoir plus de place</dd><dt>Argument 1</dt><dd>Elle enrichit le vocabulaire</dd><dt>Argument 2</dt><dd>Elle développe l’imagination</dd><dt>Visée</dt><dd>Convaincre</dd></dl></div>
                <div class="analysis-card"><h5>À retenir</h5><ul><li>Un argument explique pourquoi la thèse est défendue.</li><li>Un exemple rend l’argument plus concret.</li></ul></div>
              </aside>
            </div>
          </div>
        `
      },
      {
        title: "Texte informatif",
        html: `
          <div class="literary-study">
            <div class="study-hero">
              <h4>Texte informatif : comprendre des informations</h4>
              <p>Un texte informatif transmet des informations précises. Il sert à expliquer, présenter ou faire comprendre un sujet.</p>
            </div>
            <div class="study-main">
              <article class="text-excerpt">
                <p>À Genève, les transports publics permettent chaque jour à de nombreuses personnes de se déplacer. Les trams, les bus et les trains relient les quartiers, les communes et le centre-ville.</p>
                <p>Ce réseau facilite les trajets des élèves, des travailleurs et des visiteurs. Il contribue aussi à réduire le nombre de voitures en ville.</p>
                <p>En limitant certains déplacements individuels, les transports publics participent également à la réduction de la pollution.</p>
              </article>
              <aside class="study-sidebar">
                <div class="analysis-card"><h5>Résumé</h5><p>Le texte explique l’utilité des transports publics à Genève pour les déplacements et l’environnement.</p></div>
                <div class="analysis-card"><h5>Informations clés</h5><dl><dt>Sujet</dt><dd>Les transports publics à Genève</dd><dt>Moyens cités</dt><dd>Trams, bus, trains</dd><dt>Public</dt><dd>Élèves, travailleurs, visiteurs</dd><dt>Avantage</dt><dd>Moins de voitures et moins de pollution</dd><dt>Visée</dt><dd>Informer</dd></dl></div>
                <div class="analysis-card"><h5>Questions types</h5><ul><li>Quel est le sujet principal ?</li><li>Quelles informations sont essentielles ?</li><li>Quelle est la visée du texte ?</li></ul></div>
              </aside>
            </div>
          </div>
        `
      },
      {
        title: "Méthode EVA",
        html: `
          <p>Pour répondre efficacement, il faut lire avec méthode et toujours revenir au texte.</p>
          <div class="method-panel compact"><h5>Comment répondre aux questions</h5><ol><li>Lire le texte une première fois sans répondre</li><li>Identifier le type de texte</li><li>Souligner les mots importants</li><li>Repérer les informations demandées dans la question</li><li>Justifier la réponse avec un élément du texte</li></ol></div>
          <div class="study-box"><h5>Astuce</h5><p><strong>Compréhension globale :</strong> elle concerne l’idée générale du texte.</p><p><strong>Compréhension locale :</strong> elle concerne une information précise dans une phrase ou un paragraphe.</p></div>
        `
      },
    ]
    ,
    quiz: [
      { question: "Quel type de texte raconte une histoire ?", options: ["Narratif", "Informatif", "Argumentatif"], correct: 0, feedback: "Un texte narratif raconte une histoire réelle ou imaginaire." },
      { question: "Dans un texte argumentatif, que faut-il repérer ?", options: ["La thèse et les arguments", "Uniquement les personnages", "Seulement le lieu"], correct: 0, feedback: "La thèse est l’opinion défendue, les arguments la soutiennent." },
      { question: "Une question locale porte sur...", options: ["Une information précise", "Le message général", "Le genre littéraire uniquement"], correct: 0, feedback: "La compréhension locale concerne un passage ou une information précise." }
    ]
  },
  {
    id: "grammaire",
    icon: "GR",
    title: "Grammaire",
    intro: "Comprendre comment une phrase est construite, reconnaître le rôle des mots et repérer les indices qui organisent le texte.",
    sections: [
      {
        title: "Classe grammaticale et fonction",
        html: `
          <p><strong>La classe grammaticale</strong> indique le type d’un mot ou d’un groupe de mots : ce qu’il est dans la langue. <strong>La fonction</strong> indique son rôle dans la phrase : à quoi il sert par rapport au verbe, au sujet ou à un autre mot.</p>
          <div class="study-box"><h5>Classes grammaticales : types de mots et groupes</h5><ul><li><strong>Nom :</strong> Maria, collège, livre.</li><li><strong>Verbe :</strong> partir, lire, comprendre.</li><li><strong>Adjectif :</strong> il donne une caractéristique au nom. Exemple : dans « une voiture rouge », rouge caractérise voiture.</li><li><strong>Pronom :</strong> il, elle, nous, le, qui.</li><li><strong>Préposition :</strong> à, de, dans, avec, pour.</li><li><strong>Conjonction :</strong> et, mais, ou, donc, parce que.</li><li><strong>Déterminant :</strong> le, une, des, ce, mon.</li><li><strong>Adverbe :</strong> rapidement, souvent, très, demain.</li><li><strong>Groupe nominal :</strong> il est organisé autour d’un nom, souvent avec un déterminant, et peut contenir un adjectif ou un complément. Exemple : « la voiture rouge », « le nouveau collège ».</li><li><strong>Groupe prépositionnel :</strong> dans la cour, avec son ami, à Genève.</li><li><strong>Groupe verbal :</strong> lit un livre, est arrivée, va partir.</li></ul></div>
          <div class="study-box"><h5>Fonctions : rôle dans la phrase</h5><ul><li><strong>Sujet :</strong> Dans « Maria lit un livre », Maria fait l’action : c’est le sujet.</li><li><strong>COD :</strong> le complément d’objet direct répond aux questions « qui ? » ou « quoi ? » posées après le verbe, sans préposition. Exemple : « Je conduis la voiture. » Je conduis quoi ? la voiture : c’est le COD.</li><li><strong>COI :</strong> le complément d’objet indirect répond aux questions « à qui ? », « à quoi ? », « de qui ? » ou « de quoi ? ». Exemple : « Pascal parle à son frère. » Il parle à qui ? à son frère : c’est le COI.</li><li><strong>Attribut du sujet :</strong> il qualifie ou identifie le sujet après un verbe d’état comme être, devenir, sembler, paraître ou rester. Exemple : « Marie est heureuse. » Heureuse donne une information sur Marie : c’est l’attribut du sujet.</li><li><strong>Complément circonstanciel :</strong> il précise les circonstances de l’action : lieu, temps, cause ou manière. Exemples : « Il travaille à Genève » (lieu), « le matin » (temps), « à cause du bruit » (cause), « avec attention » (manière).</li></ul></div>
          <div class="study-box"><h5>Différence à retenir</h5><p>La classe grammaticale ne dépend pas toujours de la phrase : un mot comme « collège » reste un nom. La fonction dépend de la phrase : un même groupe peut être sujet dans une phrase et complément dans une autre.</p><p><strong>Exemple :</strong> Dans « Le collège ouvre à huit heures », « le collège » est sujet. Dans « Lina découvre le collège », « le collège » est COD.</p></div>
          <div class="study-box"><h5>Méthode</h5><p>Demande-toi d’abord : « quelle est la classe grammaticale ? » Puis demande-toi : « quelle est sa fonction dans cette phrase ? »</p></div>
        `
      },
      {
        title: "Organisateurs et connecteurs",
        html: `
          <p>Les organisateurs textuels et les connecteurs aident à comprendre l’ordre des idées, les déplacements, les lieux et les relations logiques entre les phrases.</p>
          <div class="study-box"><h5>Organisateurs temporels</h5><p>Ils situent les actions dans le temps ou indiquent leur ordre.</p><ul><li><strong>Exemples :</strong> d’abord, ensuite, puis, enfin, avant, après, pendant, le lendemain, hier, aujourd’hui.</li><li><strong>Phrase :</strong> « D’abord, Lina arrive au collège ; ensuite, elle cherche sa classe. »</li></ul></div>
          <div class="study-box"><h5>Organisateurs spatiaux</h5><p>Ils situent un élément dans l’espace ou indiquent un lieu.</p><ul><li><strong>Exemples :</strong> ici, là-bas, devant, derrière, à gauche, à droite, loin de, près de, à côté de, au-dessus de, en face de.</li><li><strong>Phrase :</strong> « La salle 204 se trouve à côté de la bibliothèque, près de l’escalier. »</li></ul></div>
          <div class="study-box"><h5>Connecteurs logiques</h5><p>Ils relient les idées et montrent le lien logique entre deux informations.</p><ul><li><strong>Addition :</strong> on ajoute une idée. Exemples : et, de plus, aussi, également, en outre. Phrase : « Lina lit le texte et souligne les mots importants. »</li><li><strong>Opposition :</strong> on oppose deux idées. Exemples : mais, pourtant, cependant, toutefois, en revanche. Phrase : « Le texte est court, mais il contient beaucoup d’informations. »</li><li><strong>Cause :</strong> on explique la raison. Exemples : parce que, car, puisque, comme, à cause de. Phrase : « Lina est inquiète parce qu’elle ne connaît personne. »</li><li><strong>Conséquence :</strong> on indique le résultat. Exemples : donc, alors, ainsi, c’est pourquoi, par conséquent. Phrase : « Elle reçoit de l’aide, donc elle se sent rassurée. »</li><li><strong>But :</strong> on indique l’objectif. Exemples : pour, afin de, dans le but de, pour que, afin que. Phrase : « Elle relit le texte afin de mieux comprendre la question. »</li></ul></div>
          <div class="study-box"><h5>Méthode</h5><p>Quand tu lis un texte, entoure ces mots. Ils t’aident à comprendre si le texte avance dans le temps, change de lieu, explique une cause, oppose deux idées ou donne un exemple.</p></div>
        `
      },
      {
        title: "Forme passive",
        html: `
          <p><strong>La voix passive</strong> met l’accent sur l’élément qui subit l’action. Elle se construit avec l’auxiliaire <strong>être</strong> suivi du <strong>participe passé</strong> du verbe.</p>
          <div class="study-box">
            <h5>Comment transformer une phrase active en phrase passive ?</h5>
            <ul>
              <li><strong>Voix active :</strong> Lucile et Bridg regardent la télévision.</li>
              <li><strong>Voix passive :</strong> La télévision est regardée par Lucile et Bridg.</li>
              <li><strong>À retenir :</strong> le COD de la phrase active devient le sujet de la phrase passive.</li>
            </ul>
          </div>
          <div class="study-box">
            <h5>La règle de construction</h5>
            <p>La voix passive se forme avec <strong>être conjugué au même temps</strong> que le verbe de la voix active, puis le participe passé.</p>
            <p><strong>Voix active :</strong> Marion mange une pêche. Le verbe <em>mange</em> est au présent.</p>
            <p><strong>Voix passive :</strong> Une pêche est mangée par Marion. L’auxiliaire <em>être</em> est aussi au présent : <em>est</em>.</p>
          </div>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead>
                <tr>
                  <th>Temps</th>
                  <th>Voix active</th>
                  <th>Voix passive</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Présent</td><td>Marion mange une pêche.</td><td>Une pêche est mangée par Marion.</td></tr>
                <tr><td>Futur simple</td><td>Marion mangera une pêche.</td><td>Une pêche sera mangée par Marion.</td></tr>
                <tr><td>Passé simple</td><td>Marion mangea une pêche.</td><td>Une pêche fut mangée par Marion.</td></tr>
                <tr><td>Passé composé</td><td>Marion a mangé une pêche.</td><td>Une pêche a été mangée par Marion.</td></tr>
                <tr><td>Imparfait</td><td>Marion mangeait une pêche.</td><td>Une pêche était mangée par Marion.</td></tr>
                <tr><td>Plus-que-parfait</td><td>Marion avait mangé une pêche.</td><td>Une pêche avait été mangée par Marion.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="study-box">
            <h5>Terminaisons utiles à connaître</h5>
            <p>Pour identifier le temps du verbe actif, observe ses terminaisons. Ensuite, conjugue <strong>être</strong> au même temps à la voix passive.</p>
            <div class="ending-grid">
              <div class="ending-card"><strong>Présent</strong><span>-e, -es, -e, -ons, -ez, -ent</span><small>Ex. : je mange, nous mangeons</small></div>
              <div class="ending-card"><strong>Futur simple</strong><span>-ai, -as, -a, -ons, -ez, -ont</span><small>Ex. : je mangerai, ils mangeront</small></div>
              <div class="ending-card"><strong>Imparfait</strong><span>-ais, -ais, -ait, -ions, -iez, -aient</span><small>Ex. : tu mangeais, vous mangiez</small></div>
              <div class="ending-card"><strong>Passé simple</strong><span>-ai, -as, -a, -âmes, -âtes, -èrent</span><small>Ex. : il mangea, elles mangèrent</small></div>
              <div class="ending-card"><strong>Conditionnel présent</strong><span>-ais, -ais, -ait, -ions, -iez, -aient</span><small>Ex. : je mangerais, nous mangerions</small></div>
              <div class="ending-card"><strong>Subjonctif présent</strong><span>-e, -es, -e, -ions, -iez, -ent</span><small>Ex. : que je mange, que vous mangiez</small></div>
            </div>
          </div>
          <div class="study-box">
            <h5>Méthode</h5>
            <p>1. Repère le verbe et son temps. 2. Trouve le COD de la phrase active. 3. Place ce COD au début de la phrase passive. 4. Conjugue <strong>être</strong> au même temps. 5. Ajoute le participe passé et fais l’accord si nécessaire.</p>
          </div>
        `
      },
      {
        title: "Les 4 types de phrase",
        html: `
          <p>Le <strong>type de phrase</strong> indique l’intention de la phrase : informer, poser une question, exprimer une émotion ou donner une consigne.</p>
          <div class="ending-grid">
            <div class="ending-card">
              <strong>Phrase déclarative</strong>
              <span>Elle donne une information.</span>
              <small>Ex. : Le candidat lit le texte avec attention.</small>
            </div>
            <div class="ending-card">
              <strong>Phrase interrogative</strong>
              <span>Elle pose une question.</span>
              <small>Ex. : Que comprend le candidat ?</small>
            </div>
            <div class="ending-card">
              <strong>Phrase exclamative</strong>
              <span>Elle exprime une émotion, une surprise ou une réaction forte.</span>
              <small>Ex. : Quel texte intéressant !</small>
            </div>
            <div class="ending-card">
              <strong>Phrase impérative</strong>
              <span>Elle donne un ordre, un conseil ou une consigne.</span>
              <small>Ex. : Relis le passage attentivement.</small>
            </div>
          </div>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead>
                <tr>
                  <th>Type de phrase</th>
                  <th>À quoi sert-elle ?</th>
                  <th>Signe fréquent</th>
                  <th>Exemple</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Déclaratif</td><td>Donner une information, raconter ou expliquer.</td><td>Point final.</td><td>La réponse se trouve dans le deuxième paragraphe.</td></tr>
                <tr><td>Interrogatif</td><td>Poser une question directe ou demander une information.</td><td>Point d’interrogation.</td><td>Pourquoi le personnage change-t-il d’avis ?</td></tr>
                <tr><td>Exclamatif</td><td>Exprimer une émotion : joie, surprise, colère, admiration.</td><td>Point d’exclamation.</td><td>Comme cette explication est claire !</td></tr>
                <tr><td>Impératif</td><td>Donner un ordre, un conseil, une interdiction ou une consigne.</td><td>Point final ou point d’exclamation.</td><td>Souligne les mots importants.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="study-box">
            <h5>Comment les identifier ?</h5>
            <ul>
              <li><strong>Déclaratif :</strong> la phrase informe. Tu peux souvent répondre : « Qu’est-ce qu’on apprend ? »</li>
              <li><strong>Interrogatif :</strong> la phrase demande quelque chose. Elle contient souvent un mot interrogatif : qui, que, quoi, où, quand, pourquoi, comment.</li>
              <li><strong>Exclamatif :</strong> la phrase montre une émotion forte. Elle utilise souvent « quel », « comme », « que » ou un point d’exclamation.</li>
              <li><strong>Impératif :</strong> la phrase demande de faire quelque chose. Le sujet n’est souvent pas écrit : « Lis », « Observe », « Réponds ».</li>
            </ul>
          </div>
          <div class="study-box">
            <h5>Attention à ne pas confondre</h5>
            <p>Le type de phrase dépend de l’intention. Une phrase impérative peut finir par un point simple : « Relis le texte. » Ce n’est pas une phrase déclarative, car elle donne une consigne.</p>
          </div>
        `
      },
      {
        title: "Référent d’un pronom",
        html: `
          <p><strong>Identifier le référent d’un pronom</strong>, c’est retrouver le mot ou le groupe de mots que ce pronom remplace. Le référent peut être une personne, un objet, un lieu, une idée ou une phrase entière.</p>
          <div class="study-box">
            <h5>Exemple simple</h5>
            <p><strong>Emma lit un livre. Elle le résume.</strong></p>
            <ul>
              <li><strong>Elle</strong> renvoie à <strong>Emma</strong>.</li>
              <li><strong>Le</strong> renvoie à <strong>un livre</strong>.</li>
            </ul>
          </div>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead>
                <tr>
                  <th>Pronom</th>
                  <th>Ce qu’il peut remplacer</th>
                  <th>Exemple</th>
                  <th>Référent</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>il / elle</td><td>Une personne, un animal, un objet ou une idée au singulier.</td><td>Lina arrive au collège. Elle est inquiète.</td><td>Elle = Lina</td></tr>
                <tr><td>ils / elles</td><td>Plusieurs personnes, objets ou idées.</td><td>Les élèves entrent en classe. Ils s’assoient.</td><td>Ils = les élèves</td></tr>
                <tr><td>le / la / les</td><td>Un complément déjà mentionné.</td><td>Tom lit le texte. Il le comprend.</td><td>Le = le texte</td></tr>
                <tr><td>lui / leur</td><td>Une personne à qui l’on parle ou à qui l’on donne quelque chose.</td><td>Sarah écrit à son professeur. Elle lui envoie un message.</td><td>Lui = son professeur</td></tr>
                <tr><td>y</td><td>Un lieu ou une idée introduite par « à ».</td><td>Lina va à la bibliothèque. Elle y travaille.</td><td>Y = à la bibliothèque</td></tr>
                <tr><td>en</td><td>Une quantité ou une idée introduite par « de ».</td><td>Il parle de son projet. Il en parle souvent.</td><td>En = de son projet</td></tr>
              </tbody>
            </table>
          </div>
          <div class="study-box">
            <h5>Méthode pour trouver le référent</h5>
            <ul>
              <li><strong>1. Repère le pronom</strong> dans la phrase : il, elle, le, la, les, lui, leur, y, en...</li>
              <li><strong>2. Remonte dans le texte</strong> pour chercher le nom ou le groupe de mots déjà mentionné.</li>
              <li><strong>3. Vérifie le genre et le nombre :</strong> « elle » renvoie souvent à un nom féminin singulier ; « ils » à un nom masculin pluriel ou mixte.</li>
              <li><strong>4. Vérifie le sens :</strong> remplace le pronom par son référent. Si la phrase reste logique, tu as probablement trouvé la bonne réponse.</li>
            </ul>
          </div>
          <div class="study-box">
            <h5>Exemple guidé</h5>
            <p><strong>Le professeur distribue les exercices. Les élèves les corrigent en groupe.</strong></p>
            <p>Le pronom <strong>les</strong> remplace <strong>les exercices</strong>. On peut vérifier en remplaçant : « Les élèves corrigent les exercices en groupe. » La phrase garde le même sens.</p>
          </div>
        `
      }
    ]
    ,
    quiz: [
      { question: "La classe grammaticale indique...", options: ["La nature du mot", "Le lieu du texte", "La conclusion"], correct: 0, feedback: "Nom, verbe, adjectif ou pronom sont des classes grammaticales." },
      { question: "« Mais » est souvent...", options: ["Un connecteur logique", "Un personnage", "Un temps verbal"], correct: 0, feedback: "« Mais » exprime une opposition entre deux idées." },
      { question: "Une phrase interrogative sert à...", options: ["Poser une question", "Donner un ordre", "Exprimer une action subie"], correct: 0, feedback: "Elle se termine souvent par un point d’interrogation." }
    ]
  },
  {
    id: "orthographe",
    icon: "OR",
    title: "Orthographe",
    intro: "Réviser les règles qui permettent d’écrire correctement, d’accorder les mots et d’utiliser la ponctuation avec précision.",
    sections: [
      {
        title: "Accords grammaticaux",
        html: `
          <p><strong>Maîtriser les accords grammaticaux</strong>, c’est vérifier que les déterminants, les adjectifs, les verbes et certains participes passés changent correctement selon le genre, le nombre et leur rôle dans la phrase.</p>
          <div class="study-box">
            <h5>Dans le groupe nominal</h5>
            <p>Le <strong>groupe nominal</strong> est constitué d’un <strong>nom principal</strong>, appelé aussi <strong>nom noyau</strong>, accompagné d’un déterminant et parfois d’un ou plusieurs adjectifs.</p>
            <p>Les déterminants et les adjectifs qualificatifs s’accordent en <strong>genre</strong> masculin ou féminin et en <strong>nombre</strong> singulier ou pluriel avec le nom noyau.</p>
            <ul>
              <li><strong>Exemple :</strong> Ces grandes bouches noires. Le nom noyau est <strong>bouches</strong>, féminin pluriel : ces, grandes et noires sont accordés.</li>
              <li><strong>Remarque :</strong> quand le noyau comprend un nom masculin et un nom féminin, l’adjectif se met au masculin pluriel. Exemple : Cet homme et sa fille étaient laids.</li>
            </ul>
          </div>
          <div class="ending-grid">
            <div class="ending-card"><strong>Accord sujet-verbe</strong><span>Le verbe s’accorde avec son sujet.</span><small>Ex. : Les élèves révisent. Le sujet « les élèves » est pluriel, donc le verbe prend -ent.</small></div>
            <div class="ending-card"><strong>Accord de l’adjectif</strong><span>L’adjectif s’accorde toujours avec le nom noyau.</span><small>Ex. : Ces souvenirs confus. « confus » s’accorde avec « souvenirs ».</small></div>
            <div class="ending-card"><strong>Accord du déterminant</strong><span>Le déterminant annonce le genre et le nombre du nom.</span><small>Ex. : un exercice, une consigne, des textes.</small></div>
            <div class="ending-card"><strong>Participe passé</strong><span>Son accord dépend de l’auxiliaire et parfois de la place du COD.</span><small>Ex. : Elles sont parties. Les boissons qu’elles ont apportées.</small></div>
          </div>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Cas</th><th>Règle</th><th>Exemple</th></tr></thead>
              <tbody>
                <tr><td>Adjectif qualificatif</td><td>Il s’accorde avec le nom noyau.</td><td>Ces souvenirs confus.</td></tr>
                <tr><td>Couleur simple</td><td>Les adjectifs de couleur ordinaires s’accordent.</td><td>Des crayons jaunes, une peau blanche.</td></tr>
                <tr><td>Couleur venant d’un nom</td><td>Les couleurs formées à partir d’un nom restent invariables.</td><td>Des fleurs orange, des pianos marron.</td></tr>
                <tr><td>Exceptions</td><td>Rose, mauve, fauve, pourpre et écarlate s’accordent.</td><td>Des livres roses, des habits mauves.</td></tr>
                <tr><td>Couleur composée</td><td>Les adjectifs de couleur composés sont invariables.</td><td>Une mer bleu clair, des feuilles vert foncé.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="study-box">
            <h5>Accord du participe passé</h5>
            <ul>
              <li><strong>Avec l’auxiliaire avoir :</strong> le participe passé ne s’accorde pas avec le sujet. Exemple : Les serveuses ont apporté des boissons aux clients.</li>
              <li><strong>Avec avoir + COD placé avant :</strong> le participe passé s’accorde avec le COD si celui-ci est placé avant l’auxiliaire. Exemple : Les boissons qu’elles ont apportées étaient fraîches. Le COD « les boissons » est avant « ont » : apportées s’accorde au féminin pluriel.</li>
              <li><strong>Avec l’auxiliaire être :</strong> le participe passé s’accorde en genre et en nombre avec le sujet. Exemple : Les serveuses sont allées apporter des boissons aux clients. Le sujet « les serveuses » est féminin pluriel : allées prend -es.</li>
            </ul>
          </div>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Accord</th><th>Question à se poser</th><th>Exemple incorrect</th><th>Correction</th></tr></thead>
              <tbody>
                <tr><td>Sujet-verbe</td><td>Qui fait l’action ?</td><td>Les candidats prépare le test.</td><td>Les candidats préparent le test.</td></tr>
                <tr><td>Nom-adjectif</td><td>Quel nom est qualifié ?</td><td>Des questions difficile.</td><td>Des questions difficiles.</td></tr>
                <tr><td>Féminin / masculin</td><td>Le nom est-il féminin ou masculin ?</td><td>Une réponse clair.</td><td>Une réponse claire.</td></tr>
                <tr><td>Singulier / pluriel</td><td>Y a-t-il un ou plusieurs éléments ?</td><td>Les exercice corrigé.</td><td>Les exercices corrigés.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="study-box">
            <h5>Méthode de relecture</h5>
            <ul>
              <li><strong>1. Trouve le sujet</strong> pour vérifier le verbe.</li>
              <li><strong>2. Repère le nom</strong> pour accorder le déterminant et l’adjectif.</li>
              <li><strong>3. Vérifie le genre et le nombre</strong> : masculin/féminin, singulier/pluriel.</li>
              <li><strong>4. Relis lentement</strong> les groupes nominaux : déterminant + nom + adjectif.</li>
            </ul>
          </div>
        `
      },
      {
        title: "Homophones grammaticaux",
        html: `
          <p>Les <strong>homophones grammaticaux</strong> se prononcent de la même façon ou presque, mais ils ne s’écrivent pas pareil et n’ont pas la même fonction.</p>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Homophones</th><th>Comment vérifier ?</th><th>Exemple correct</th></tr></thead>
              <tbody>
                <tr><td>a / à</td><td>« a » peut être remplacé par « avait ». « à » est une préposition.</td><td>Il a compris. Il va à Genève.</td></tr>
                <tr><td>et / est</td><td>« est » peut être remplacé par « était ». « et » ajoute une idée.</td><td>Le texte est court et clair.</td></tr>
                <tr><td>son / sont</td><td>« sont » peut être remplacé par « étaient ». « son » indique la possession.</td><td>Son exercice est terminé. Ils sont prêts.</td></tr>
                <tr><td>ou / où</td><td>« ou » indique un choix. « où » indique souvent un lieu ou un moment.</td><td>Tu veux réviser ou t’entraîner ? Où est la réponse ?</td></tr>
                <tr><td>ce / se</td><td>« ce » accompagne ou remplace un nom. « se » accompagne un verbe pronominal.</td><td>Ce texte est utile. Il se concentre.</td></tr>
                <tr><td>ces / ses</td><td>« ces » montre. « ses » indique la possession.</td><td>Ces questions sont difficiles. Lina relit ses réponses.</td></tr>
                <tr><td>on / ont</td><td>« ont » peut être remplacé par « avaient ». « on » est un pronom sujet.</td><td>On révise. Ils ont compris.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="study-box">
            <h5>Méthode</h5>
            <p>Quand tu hésites, fais un <strong>test de remplacement</strong>. Si la phrase garde son sens, l’orthographe choisie est probablement correcte.</p>
            <ul>
              <li><strong>Il a fini</strong> → Il avait fini : on écrit <strong>a</strong>.</li>
              <li><strong>Il est prêt</strong> → Il était prêt : on écrit <strong>est</strong>.</li>
              <li><strong>Ils ont réussi</strong> → Ils avaient réussi : on écrit <strong>ont</strong>.</li>
            </ul>
          </div>
        `
      },
      {
        title: "Ponctuation",
        html: `
          <p>La <strong>ponctuation</strong> organise le texte, marque les pauses et aide le lecteur à comprendre les relations entre les idées.</p>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Signe</th><th>Rôle</th><th>Exemple</th></tr></thead>
              <tbody>
                <tr><td>.</td><td>Terminer une phrase déclarative ou impérative.</td><td>Le texte est clair.</td></tr>
                <tr><td>?</td><td>Terminer une question.</td><td>Quelle est l’idée principale ?</td></tr>
                <tr><td>!</td><td>Exprimer une émotion, une surprise ou un ordre fort.</td><td>Comme c’est utile !</td></tr>
                <tr><td>,</td><td>Séparer des éléments, marquer une pause courte.</td><td>Pour réussir, il faut lire, comprendre et vérifier.</td></tr>
                <tr><td>:</td><td>Introduire une explication, une liste ou une citation.</td><td>Il doit revoir trois points : l’accord, le sens et la ponctuation.</td></tr>
                <tr><td>« »</td><td>Encadrer des paroles ou une citation.</td><td>Elle répond : « Je comprends mieux. »</td></tr>
                <tr><td>( )</td><td>Ajouter une précision secondaire.</td><td>Le test EVA (français et mathématiques) demande de la méthode.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="study-box">
            <h5>Méthode</h5>
            <ul>
              <li><strong>Question :</strong> utilise un point d’interrogation.</li>
              <li><strong>Énumération :</strong> sépare les éléments par des virgules.</li>
              <li><strong>Explication :</strong> utilise souvent les deux-points.</li>
              <li><strong>Dialogue ou citation :</strong> utilise les guillemets.</li>
            </ul>
          </div>
        `
      }
    ]
    ,
    quiz: [
      { question: "Dans « les grandes maisons », que faut-il accorder ?", options: ["L’adjectif avec le nom", "Le pronom avec le verbe", "La virgule avec le sujet"], correct: 0, feedback: "« grandes » s’accorde avec « maisons »." },
      { question: "« a » peut souvent être remplacé par...", options: ["avait", "et", "où"], correct: 0, feedback: "Ce test aide à distinguer « a » et « à »." },
      { question: "La ponctuation sert surtout à...", options: ["Organiser le sens", "Changer le thème", "Créer un personnage"], correct: 0, feedback: "Elle marque les pauses, les questions, les énumérations ou les explications." }
    ]
  },
  {
    id: "vocabulaire",
    icon: "VO",
    title: "Vocabulaire",
    intro: "Comprendre le sens des mots, enrichir ses réponses et reconnaître les relations entre les termes dans un texte.",
    sections: [
      {
        title: "Termes langagiers",
        html: `
          <p>Les <strong>termes langagiers</strong> servent à parler du sens des mots et de leur usage. Ils aident à comprendre un texte et à enrichir ses réponses.</p>
          <div class="ending-grid">
            <div class="ending-card"><strong>Synonyme</strong><span>Mot de sens proche.</span><small>Ex. : rapide / vite, difficile / compliqué.</small></div>
            <div class="ending-card"><strong>Antonyme</strong><span>Mot de sens contraire.</span><small>Ex. : grand / petit, accepter / refuser.</small></div>
            <div class="ending-card"><strong>Homonyme</strong><span>Mot qui se prononce ou s’écrit comme un autre, mais avec un sens différent.</span><small>Ex. : le ver / le verre / vers.</small></div>
            <div class="ending-card"><strong>Registre de langue</strong><span>Niveau de langage adapté à la situation.</span><small>Familier : boulot. Courant : travail. Soutenu : profession.</small></div>
          </div>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead>
                <tr>
                  <th>Mot fréquent</th>
                  <th>Synonymes utiles</th>
                  <th>Antonyme possible</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>grand</td><td>immense, vaste, important</td><td>petit</td></tr>
                <tr><td>petit</td><td>minuscule, court, réduit</td><td>grand</td></tr>
                <tr><td>rapide</td><td>vite, prompt, accéléré</td><td>lent</td></tr>
                <tr><td>difficile</td><td>compliqué, ardu, délicat</td><td>facile</td></tr>
                <tr><td>content</td><td>heureux, satisfait, ravi</td><td>triste</td></tr>
                <tr><td>triste</td><td>malheureux, peiné, abattu</td><td>joyeux</td></tr>
                <tr><td>commencer</td><td>débuter, démarrer, entamer</td><td>terminer</td></tr>
                <tr><td>accepter</td><td>admettre, approuver, consentir</td><td>refuser</td></tr>
                <tr><td>augmenter</td><td>grandir, progresser, croître</td><td>diminuer</td></tr>
                <tr><td>clair</td><td>compréhensible, évident, précis</td><td>confus</td></tr>
              </tbody>
            </table>
          </div>
          <div class="study-box">
            <h5>Comment les utiliser ?</h5>
            <ul>
              <li><strong>Synonyme :</strong> utile pour reformuler sans répéter le même mot.</li>
              <li><strong>Antonyme :</strong> utile pour comprendre une opposition dans un texte.</li>
              <li><strong>Homonyme :</strong> il faut regarder le contexte pour trouver le bon sens.</li>
              <li><strong>Registre :</strong> choisis un vocabulaire adapté au destinataire et à la situation.</li>
            </ul>
          </div>
          <div class="study-box">
            <h5>Exemple guidé</h5>
            <p>Dans la phrase « Ce problème est compliqué », on peut remplacer <strong>compliqué</strong> par <strong>difficile</strong>. Ce sont des synonymes. Son antonyme pourrait être <strong>simple</strong>.</p>
          </div>
        `
      },
      {
        title: "Champ lexical",
        html: `
          <p>Un <strong>champ lexical</strong> regroupe plusieurs mots liés à un même thème. Le repérer aide à comprendre le sujet principal et l’atmosphère d’un texte.</p>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Champ lexical</th><th>Mots possibles</th><th>Ce que cela indique</th></tr></thead>
              <tbody>
                <tr><td>École</td><td>élève, classe, professeur, cahier, exercice</td><td>Le texte parle d’apprentissage ou de vie scolaire.</td></tr>
                <tr><td>Nature</td><td>forêt, arbre, feuille, rivière, animal</td><td>Le texte évoque un environnement naturel.</td></tr>
                <tr><td>Peur</td><td>inquiet, trembler, danger, peur, sombre</td><td>Le texte crée une atmosphère inquiétante.</td></tr>
                <tr><td>Transport</td><td>bus, tram, train, trajet, arrêt</td><td>Le texte parle de déplacement.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="study-box">
            <h5>Méthode</h5>
            <ul>
              <li><strong>1. Souligne les mots importants</strong> qui appartiennent au même univers.</li>
              <li><strong>2. Regroupe-les</strong> par idée ou par thème.</li>
              <li><strong>3. Donne un nom au champ lexical</strong> : école, voyage, peur, nature, travail...</li>
              <li><strong>4. Utilise-le pour trouver le thème</strong> ou l’ambiance du texte.</li>
            </ul>
          </div>
        `
      },
      {
        title: "Familles de mots",
        html: `
          <p>Une <strong>famille de mots</strong> rassemble des mots formés à partir d’une même base et qui partagent une idée commune.</p>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Élément</th><th>Définition</th><th>Exemple</th></tr></thead>
              <tbody>
                <tr><td>Base / radical</td><td>Partie commune qui porte le sens principal.</td><td>lire, lecteur, lecture</td></tr>
                <tr><td>Préfixe</td><td>Élément placé avant la base pour modifier le sens.</td><td>relire, impossible, défaire</td></tr>
                <tr><td>Suffixe</td><td>Élément placé après la base pour créer un nouveau mot.</td><td>lecture, lecteur, lisible</td></tr>
                <tr><td>Dérivation</td><td>Formation d’un mot à partir d’un autre mot.</td><td>clair → clairement, éclaircir</td></tr>
              </tbody>
            </table>
          </div>
          <div class="study-box">
            <h5>Exemples de familles</h5>
            <ul>
              <li><strong>lire :</strong> lire, relire, lecteur, lecture, lisible.</li>
              <li><strong>écrire :</strong> écrire, écrivain, écriture, réécrire.</li>
              <li><strong>heureux :</strong> heureux, bonheur, malheureusement, malheureux.</li>
            </ul>
          </div>
          <div class="study-box">
            <h5>Méthode</h5>
            <p>Cherche la partie commune entre les mots, puis observe ce que le préfixe ou le suffixe change : négation, répétition, métier, qualité, action...</p>
          </div>
        `
      },
      {
        title: "Sens propre et sens figuré",
        html: `
          <p>Un mot peut être utilisé au <strong>sens propre</strong> ou au <strong>sens figuré</strong>. Le contexte permet de comprendre s’il s’agit du sens réel ou d’une image.</p>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Expression</th><th>Sens propre</th><th>Sens figuré</th></tr></thead>
              <tbody>
                <tr><td>Une montagne</td><td>Un relief élevé.</td><td>Une grande quantité : une montagne de devoirs.</td></tr>
                <tr><td>Dévorer</td><td>Manger très vite.</td><td>Lire avec passion : dévorer un livre.</td></tr>
                <tr><td>Un cœur</td><td>Un organe.</td><td>Le courage ou les sentiments : avoir du cœur.</td></tr>
                <tr><td>Briller</td><td>Produire de la lumière.</td><td>Réussir particulièrement bien : briller à un examen.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="study-box">
            <h5>Méthode</h5>
            <ul>
              <li><strong>Sens propre :</strong> le mot est utilisé de manière concrète et réelle.</li>
              <li><strong>Sens figuré :</strong> le mot crée une image pour exprimer une idée.</li>
              <li><strong>Pour choisir :</strong> remplace l’expression par une formulation plus simple et vérifie le contexte.</li>
            </ul>
          </div>
        `
      }
    ]
    ,
    quiz: [
      { question: "Un synonyme est un mot...", options: ["De sens proche", "De sens contraire", "Qui remplace un pronom"], correct: 0, feedback: "« Rapide » et « vite » sont proches par le sens." },
      { question: "Un champ lexical regroupe...", options: ["Des mots liés au même thème", "Des verbes au futur", "Des phrases passives"], correct: 0, feedback: "Il aide à reconnaître le thème d’un texte." },
      { question: "Le sens figuré est...", options: ["Une image", "Le sens concret", "Une faute d’accord"], correct: 0, feedback: "« Une montagne de devoirs » est une image." }
    ]
  },
  {
    id: "conjugaison",
    icon: "CO",
    title: "Conjugaison",
    intro: "Savoir reconnaître, construire et écrire correctement les verbes selon le mode, le temps, le sujet et le contexte.",
    sections: [
      {
        title: "Construire et orthographier les verbes",
        html: `
          <p><strong>Construire et orthographier correctement un verbe</strong>, c’est choisir le bon radical, la bonne terminaison, le bon auxiliaire si nécessaire et l’accord avec le sujet.</p>
          <div class="study-box">
            <h5>Les étapes à suivre</h5>
            <ul>
              <li><strong>1. Identifier le sujet :</strong> qui fait l’action ? je, tu, il/elle, nous, vous, ils/elles.</li>
              <li><strong>2. Identifier le temps :</strong> présent, imparfait, futur, passé composé...</li>
              <li><strong>3. Trouver le radical :</strong> la base du verbe. Exemple : parl- dans parler.</li>
              <li><strong>4. Ajouter la terminaison :</strong> elle dépend du sujet et du temps.</li>
              <li><strong>5. Relire l’accord :</strong> surtout avec nous, vous, ils/elles et les temps composés.</li>
            </ul>
          </div>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Temps</th><th>Terminaisons utiles</th><th>Exemple</th></tr></thead>
              <tbody>
                <tr><td>Présent</td><td>-e, -es, -e, -ons, -ez, -ent</td><td>je parle, nous parlons, ils parlent</td></tr>
                <tr><td>Imparfait</td><td>-ais, -ais, -ait, -ions, -iez, -aient</td><td>tu parlais, elle parlait, vous parliez</td></tr>
                <tr><td>Futur simple</td><td>-ai, -as, -a, -ons, -ez, -ont</td><td>je parlerai, il parlera, elles parleront</td></tr>
                <tr><td>Conditionnel présent</td><td>-ais, -ais, -ait, -ions, -iez, -aient</td><td>je parlerais, nous parlerions</td></tr>
                <tr><td>Passé composé</td><td>avoir ou être au présent + participe passé</td><td>j’ai parlé, elle est partie</td></tr>
              </tbody>
            </table>
          </div>
          <div class="ending-grid">
            <div class="ending-card"><strong>Verbe du 1er groupe</strong><span>-er</span><small>parler → je parle, nous parlons.</small></div>
            <div class="ending-card"><strong>Verbe du 2e groupe</strong><span>-ir / -issons</span><small>finir → je finis, nous finissons.</small></div>
            <div class="ending-card"><strong>Verbes fréquents</strong><span>être, avoir, aller, faire</span><small>Ils sont très utilisés et doivent être bien connus.</small></div>
          </div>
          <div class="study-box">
            <h5>Attention aux erreurs fréquentes</h5>
            <ul>
              <li><strong>Nous :</strong> prend souvent -ons au présent : nous travaillons.</li>
              <li><strong>Vous :</strong> prend souvent -ez : vous révisez.</li>
              <li><strong>Ils / elles :</strong> prennent souvent -ent au présent : ils comprennent.</li>
              <li><strong>Passé composé :</strong> vérifie l’auxiliaire : j’ai compris, je suis arrivé(e).</li>
            </ul>
          </div>
        `
      },
      {
        title: "Identifier modes et temps en contexte",
        html: `
          <p>Le <strong>mode</strong> indique la manière dont l’action est présentée. Le <strong>temps</strong> situe l’action : maintenant, avant, après ou dans une hypothèse.</p>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Mode</th><th>Valeur principale</th><th>Exemple</th></tr></thead>
              <tbody>
                <tr><td>Indicatif</td><td>Action présentée comme réelle.</td><td>Il révise chaque soir.</td></tr>
                <tr><td>Impératif</td><td>Ordre, conseil ou consigne.</td><td>Relis la question.</td></tr>
                <tr><td>Conditionnel</td><td>Hypothèse, souhait ou politesse.</td><td>Je voudrais réussir ce test.</td></tr>
                <tr><td>Subjonctif</td><td>Souhait, doute, nécessité ou obligation après certaines expressions.</td><td>Il faut que tu comprennes la consigne.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Temps</th><th>Indice utile</th><th>Exemple</th></tr></thead>
              <tbody>
                <tr><td>Présent</td><td>Action actuelle ou habitude.</td><td>Elle lit le texte.</td></tr>
                <tr><td>Imparfait</td><td>Description ou habitude dans le passé.</td><td>Elle lisait souvent.</td></tr>
                <tr><td>Passé composé</td><td>Action terminée dans le passé.</td><td>Elle a lu le texte.</td></tr>
                <tr><td>Plus-que-parfait</td><td>Action passée avant une autre action passée.</td><td>Elle avait lu le texte avant de répondre.</td></tr>
                <tr><td>Futur simple</td><td>Action à venir.</td><td>Elle lira le texte demain.</td></tr>
                <tr><td>Conditionnel présent</td><td>Action possible ou souhaitée.</td><td>Elle lirait plus vite avec de l’entraînement.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="study-box">
            <h5>Méthode pour identifier le temps</h5>
            <ul>
              <li><strong>Observe la terminaison :</strong> -ais indique souvent l’imparfait ou le conditionnel.</li>
              <li><strong>Observe l’auxiliaire :</strong> « a terminé » indique un temps composé.</li>
              <li><strong>Repère les mots de temps :</strong> hier, demain, autrefois, maintenant, plus tard.</li>
              <li><strong>Regarde le sens :</strong> l’action est-elle réelle, passée, future, hypothétique ou demandée ?</li>
            </ul>
          </div>
          <div class="study-box">
            <h5>Exemples guidés</h5>
            <p><strong>Il avait terminé son exercice.</strong> L’auxiliaire « avait » + participe passé indique le plus-que-parfait.</p>
            <p><strong>Relis la consigne.</strong> Le verbe donne un ordre ou un conseil : c’est l’impératif.</p>
            <p><strong>Je réussirais avec plus d’entraînement.</strong> La terminaison -ais et l’idée d’hypothèse indiquent le conditionnel présent.</p>
          </div>
        `
      }
    ]
    ,
    quiz: [
      { question: "Pour conjuguer, on cherche d’abord...", options: ["Le sujet", "Le décor", "Le champ lexical"], correct: 0, feedback: "Le sujet détermine souvent la terminaison du verbe." },
      { question: "Le temps situe l’action...", options: ["Dans le temps", "Dans l’espace", "Dans le registre de langue"], correct: 0, feedback: "Présent, passé ou futur situent l’action." },
      { question: "« Il avait terminé » renvoie à...", options: ["Un temps du passé", "Un ordre", "Un nom commun"], correct: 0, feedback: "L’auxiliaire « avait » indique un temps composé du passé." }
    ]
  },
  {
    id: "production",
    icon: "PE",
    title: "Production de l’écrit",
    intro: "Rédiger un texte personnel clair, cohérent et adapté à la consigne, en respectant la forme attendue.",
    sections: [
      {
        title: "Rédiger un courriel cohérent",
        html: `
          <p>Un <strong>courriel cohérent</strong> doit répondre clairement à la situation donnée : qui écrit, à qui, pourquoi et avec quel ton. Avant d’écrire, repère toujours le destinataire, l’objectif et les informations importantes à donner.</p>
          <div class="study-box">
            <h5>Structure simple à respecter</h5>
            <ul>
              <li><strong>Objet :</strong> indique rapidement le sujet du message.</li>
              <li><strong>Formule d’appel :</strong> commence poliment : Madame, Monsieur, Bonjour...</li>
              <li><strong>Introduction :</strong> explique pourquoi tu écris.</li>
              <li><strong>Développement :</strong> donne les informations utiles, dans un ordre logique.</li>
              <li><strong>Conclusion :</strong> demande une réponse, propose une suite ou remercie.</li>
              <li><strong>Formule de politesse :</strong> termine avec une phrase adaptée.</li>
            </ul>
          </div>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Étape</th><th>Exemples de phrases</th></tr></thead>
              <tbody>
                <tr><td>Commencer</td><td>Je vous écris au sujet de... / Je me permets de vous contacter concernant...</td></tr>
                <tr><td>Se présenter</td><td>Je m’appelle... / Je suis actuellement à la recherche de...</td></tr>
                <tr><td>Expliquer</td><td>Je souhaiterais obtenir plus d’informations. / Je suis intéressé(e) par votre annonce.</td></tr>
                <tr><td>Demander</td><td>Pourriez-vous me préciser...? / Serait-il possible de...?</td></tr>
                <tr><td>Conclure</td><td>Je vous remercie pour votre réponse. / Je reste à votre disposition.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="study-box">
            <h5>Connecteurs utiles</h5>
            <p>Pour organiser tes idées, utilise : <strong>d’abord</strong>, <strong>ensuite</strong>, <strong>de plus</strong>, <strong>cependant</strong>, <strong>donc</strong>, <strong>enfin</strong>.</p>
          </div>
        `
      },
      {
        title: "Mise en page du courriel",
        html: `
          <p>La <strong>mise en page</strong> rend le courriel plus clair et plus professionnel. Même si le texte est court, il doit être organisé en petits paragraphes.</p>
          <div class="study-box">
            <h5>Modèle : répondre à une offre d’emploi</h5>
            <p><strong>Objet :</strong> Candidature pour le poste de vendeur/vendeuse</p>
            <p><strong>Madame, Monsieur,</strong></p>
            <p>Je vous écris afin de vous proposer ma candidature pour le poste publié dans votre annonce. Ce poste m’intéresse particulièrement, car j’aimerais développer mes compétences dans le contact avec la clientèle et le travail en équipe.</p>
            <p>Je suis une personne sérieuse, motivée et ponctuelle. Je suis disponible pour un entretien afin de vous présenter ma motivation plus en détail.</p>
            <p>Je vous remercie pour l’attention portée à ma candidature et je reste à votre disposition pour toute information complémentaire.</p>
            <p><strong>Veuillez agréer, Madame, Monsieur, mes salutations distinguées.</strong></p>
          </div>
          <div class="study-box">
            <h5>Modèle : répondre à une annonce pour un téléphone</h5>
            <p><strong>Objet :</strong> Demande d’informations concernant le téléphone en vente</p>
            <p><strong>Bonjour,</strong></p>
            <p>Je vous contacte au sujet du téléphone que vous vendez. Votre annonce m’intéresse et j’aimerais avoir quelques informations supplémentaires avant de prendre une décision.</p>
            <p>Pourriez-vous me préciser l’état général du téléphone, la capacité de stockage, l’autonomie de la batterie et si le chargeur est inclus ? J’aimerais également savoir si le prix est négociable.</p>
            <p>Si le téléphone est toujours disponible, je serais intéressé(e) par une rencontre pour le voir.</p>
            <p><strong>Je vous remercie d’avance pour votre réponse. Cordialement,</strong></p>
          </div>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Élément</th><th>À vérifier</th></tr></thead>
              <tbody>
                <tr><td>Objet</td><td>Il doit être court et précis.</td></tr>
                <tr><td>Formule d’appel</td><td>Bonjour, Madame, Monsieur, Madame, Monsieur.</td></tr>
                <tr><td>Paragraphes</td><td>Une idée principale par paragraphe.</td></tr>
                <tr><td>Formule finale</td><td>Elle doit être adaptée au destinataire.</td></tr>
                <tr><td>Signature</td><td>Prénom, nom, éventuellement téléphone.</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "Correction de la langue",
        html: `
          <p>La correction de la langue permet d’avoir un texte clair, sérieux et crédible. Dans un courriel, les erreurs les plus fréquentes concernent les accords, les temps verbaux, la ponctuation et les phrases trop longues.</p>
          <div class="ending-grid">
            <div class="ending-card"><strong>Temps verbaux</strong><span>Choisis le temps adapté.</span><small>Ex. : Je vous écris... / Je souhaiterais... / Je reste disponible...</small></div>
            <div class="ending-card"><strong>Syntaxe</strong><span>Fais des phrases complètes.</span><small>Évite : Moi intéressé téléphone. Préfère : Je suis intéressé(e) par le téléphone.</small></div>
            <div class="ending-card"><strong>Ponctuation</strong><span>Utilise des points et des virgules.</span><small>Une phrase trop longue devient difficile à comprendre.</small></div>
            <div class="ending-card"><strong>Accords</strong><span>Vérifie sujet-verbe, nom-adjectif et participe passé.</span><small>Ex. : Les informations demandées sont importantes.</small></div>
          </div>
          <div class="study-box">
            <h5>Relire en 4 passages</h5>
            <ul>
              <li><strong>1. Le sens :</strong> est-ce que je réponds bien à la consigne ?</li>
              <li><strong>2. L’organisation :</strong> les idées sont-elles dans le bon ordre ?</li>
              <li><strong>3. La langue :</strong> accords, verbes, ponctuation, orthographe.</li>
              <li><strong>4. Le ton :</strong> le message est-il poli et adapté ?</li>
            </ul>
          </div>
          <div class="study-box">
            <h5>Expressions utiles et correctes</h5>
            <ul>
              <li>Je me permets de vous contacter...</li>
              <li>Je souhaiterais obtenir des informations complémentaires.</li>
              <li>Pourriez-vous me préciser... ?</li>
              <li>Je vous remercie d’avance pour votre réponse.</li>
              <li>Je reste à votre disposition.</li>
            </ul>
          </div>
        `
      },
      {
        title: "Langage riche et adapté",
        html: `
          <p>Le <strong>registre de langue</strong> doit être adapté à la situation. Pour une candidature ou un message à une personne que tu ne connais pas, utilise un ton poli, clair et soigné.</p>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>À éviter</th><th>À préférer</th><th>Pourquoi ?</th></tr></thead>
              <tbody>
                <tr><td>Salut</td><td>Bonjour / Madame, Monsieur</td><td>Plus poli dans un message formel.</td></tr>
                <tr><td>Je veux le téléphone.</td><td>Je suis intéressé(e) par le téléphone.</td><td>Moins direct, plus courtois.</td></tr>
                <tr><td>Répondez vite.</td><td>Je vous remercie d’avance pour votre réponse.</td><td>Plus respectueux.</td></tr>
                <tr><td>C’est combien ?</td><td>Pourriez-vous me confirmer le prix ?</td><td>Plus précis et plus poli.</td></tr>
                <tr><td>Je cherche un job.</td><td>Je suis à la recherche d’un emploi / d’une place d’apprentissage.</td><td>Registre plus professionnel.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="study-box">
            <h5>Formules de politesse au début</h5>
            <ul>
              <li><strong>Bonjour,</strong> pour un message courant ou semi-formel.</li>
              <li><strong>Madame, Monsieur,</strong> pour une candidature ou une personne inconnue.</li>
              <li><strong>Madame Dubois, / Monsieur Martin,</strong> si tu connais le nom de la personne.</li>
            </ul>
          </div>
          <div class="study-box">
            <h5>Formules de politesse à la fin</h5>
            <ul>
              <li><strong>Cordialement,</strong> simple et courant.</li>
              <li><strong>Je vous remercie d’avance pour votre réponse.</strong></li>
              <li><strong>Je reste à votre disposition pour toute information complémentaire.</strong></li>
              <li><strong>Veuillez agréer, Madame, Monsieur, mes salutations distinguées.</strong> très formel, utile pour une candidature.</li>
            </ul>
          </div>
        `
      }
    ]
    ,
    quiz: [
      { question: "Dans un courriel, l’objet sert à...", options: ["Annoncer le sujet", "Signer le texte", "Remplacer la ponctuation"], correct: 0, feedback: "L’objet indique rapidement de quoi parle le courriel." },
      { question: "Une formule de politesse doit être...", options: ["Adaptée au destinataire", "Toujours familière", "Placée au hasard"], correct: 0, feedback: "Le registre doit correspondre à la situation." },
      { question: "Pour relire efficacement, on vérifie...", options: ["Sens puis langue", "Seulement la couleur", "Uniquement le titre"], correct: 0, feedback: "Une bonne relecture sépare le contenu et les erreurs de langue." }
    ]
  }
];

function fractionHtml(top, bottom) {
  return `<span class="math-frac"><span>${top}</span><span>${bottom}</span></span>`;
}

function mathOp(symbol) {
  return `<span class="math-op">${symbol}</span>`;
}

function visualMathBlock(title, lines, note = "") {
  return `
    <div class="visual-calc">
      <h5>${title}</h5>
      <div class="calc-board">
        ${lines.map((line) => `<div class="calc-line">${line}</div>`).join("")}
      </div>
      ${note ? `<p class="math-note">${note}</p>` : ""}
    </div>
  `;
}

function formatMathRule(rule) {
  if (!rule) return "";
  if (rule.includes("<ul") || rule.includes("<ol") || rule.includes("<div")) return rule;

  const items = rule
    .split(/(?<=[.!?])\s+/)
    .map((item) => item.trim())
    .filter(Boolean);

  if (items.length < 2) return `<p>${rule}</p>`;
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function mathStudyHtml({ intro, rule, examples = [], method = [], visual = "", commonErrors = [] }) {
  return `
    <p>${intro}</p>
    ${rule ? `<div class="study-box"><h5>&Agrave; comprendre</h5>${formatMathRule(rule)}</div>` : ""}
    ${visual}
    ${examples.length ? `
      <div class="grammar-table-wrap">
        <table class="grammar-table">
          <thead><tr><th>Exemple</th><th>R&eacute;solution guid&eacute;e</th><th>R&eacute;sultat</th></tr></thead>
          <tbody>
            ${examples.map((item) => `<tr><td>${item[0]}</td><td>${item[1]}</td><td>${item[2]}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    ` : ""}
    ${method.length ? `
      <div class="study-box">
        <h5>M&eacute;thode pas &agrave; pas</h5>
        <ul>${method.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    ` : ""}
    ${commonErrors.length ? `
      <div class="study-box math-warning">
        <h5>Erreurs fr&eacute;quentes &agrave; &eacute;viter</h5>
        <ul>${commonErrors.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    ` : ""}
  `;
}

const mathRevisionTopics = [
  {
    id: "nombres",
    icon: "NO",
    title: "Nombres et opérations",
    intro: "Réviser les calculs, les priorités opératoires, les nombres décimaux, relatifs, rationnels, les puissances, les racines et l’estimation.",
    sections: [
      {
        title: "Probl&egrave;mes avec les 4 op&eacute;rations",
        html: `
          <p>Un <strong>probl&egrave;me concret</strong> demande d'abord de comprendre la situation avant de calculer. Il faut rep&eacute;rer les donn&eacute;es utiles, comprendre ce que la question demande, puis choisir entre <strong>addition</strong>, <strong>soustraction</strong>, <strong>multiplication</strong> et <strong>division</strong>.</p>
          <div class="operation-grid">
            <div class="operation-card"><strong>+</strong><h5>Additionner</h5><p>On r&eacute;unit plusieurs quantit&eacute;s.</p><small>Ex. : 12 &eacute;l&egrave;ves + 8 &eacute;l&egrave;ves = 20 &eacute;l&egrave;ves.</small></div>
            <div class="operation-card"><strong>-</strong><h5>Soustraire</h5><p>On enl&egrave;ve, on compare ou on cherche une diff&eacute;rence.</p><small>Ex. : 90 &euro; - 48 &euro; = 42 &euro; de diff&eacute;rence.</small></div>
            <div class="operation-card"><strong>&times;</strong><h5>Multiplier</h5><p>On r&eacute;p&egrave;te la m&ecirc;me quantit&eacute; plusieurs fois.</p><small>Ex. : 3 cahiers &agrave; 4 CHF = 3 &times; 4 = 12 CHF.</small></div>
            <div class="operation-card"><strong>&divide;</strong><h5>Diviser</h5><p>On partage ou on cherche la valeur d'une unit&eacute;.</p><small>Ex. : 42 &euro; pour 7 sachets = 42 &divide; 7 = 6 &euro;.</small></div>
          </div>
          <div class="study-box"><h5>Comment choisir l'op&eacute;ration ?</h5><ul><li><strong>Total / ensemble :</strong> pense &agrave; une addition.</li><li><strong>Diff&eacute;rence / reste / de plus / de moins :</strong> pense &agrave; une soustraction.</li><li><strong>M&ecirc;me prix plusieurs fois :</strong> pense &agrave; une multiplication.</li><li><strong>Prix d'un seul objet / partage en groupes :</strong> pense &agrave; une division.</li></ul></div>
          ${visualMathBlock("Exemple 1 : acheter plusieurs objets identiques", [
            "3 cahiers co&ucirc;tent 4 CHF chacun",
            "Prix total = 3 &times; 4",
            "Prix total = 12 CHF"
          ], "Quand le m&ecirc;me prix se r&eacute;p&egrave;te plusieurs fois, on multiplie.")}
          ${visualMathBlock("Exemple 2 : partager en groupes", [
            "25 &eacute;l&egrave;ves sont r&eacute;partis en 5 groupes",
            "Nombre d'&eacute;l&egrave;ves par groupe = 25 &divide; 5",
            "Nombre d'&eacute;l&egrave;ves par groupe = 5"
          ], "Quand on partage une quantit&eacute; en parts &eacute;gales, on divise.")}
          <div class="problem-card">
            <h5>Probl&egrave;me guid&eacute; : les sachets de graines</h5>
            <p><strong>&Eacute;nonc&eacute; :</strong> Alexandre ach&egrave;te des sachets de graines qui co&ucirc;tent tous le m&ecirc;me prix. Il paie 48 &euro;. Marion ach&egrave;te 7 sachets de plus qu'Alexandre et paie 90 &euro;.</p>
            <p><strong>Questions :</strong> a. Quel est le prix d'un sachet de graines ? b. Combien de sachets Marion et Alexandre ont-ils achet&eacute;s ?</p>
          </div>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>&Eacute;tape</th><th>Pourquoi ?</th><th>Calcul</th></tr></thead>
              <tbody>
                <tr><td>1. Chercher la diff&eacute;rence de prix</td><td>Marion paie plus parce qu'elle ach&egrave;te 7 sachets de plus.</td><td>90 - 48 = 42 &euro;</td></tr>
                <tr><td>2. Comprendre ce que repr&eacute;sentent 42 &euro;</td><td>Ces 42 &euro; correspondent exactement aux 7 sachets suppl&eacute;mentaires.</td><td>7 sachets = 42 &euro;</td></tr>
                <tr><td>3. Trouver le prix d'un sachet</td><td>On cherche le prix d'une unit&eacute;, donc on divise.</td><td>42 &divide; 7 = 6 &euro;</td></tr>
                <tr><td>4. Trouver les sachets d'Alexandre</td><td>Alexandre paie 48 &euro; et chaque sachet co&ucirc;te 6 &euro;.</td><td>48 &divide; 6 = 8 sachets</td></tr>
                <tr><td>5. Trouver les sachets de Marion</td><td>Marion en ach&egrave;te 7 de plus qu'Alexandre.</td><td>8 + 7 = 15 sachets</td></tr>
              </tbody>
            </table>
          </div>
          ${visualMathBlock("V&eacute;rification", [
            "Alexandre : 8 &times; 6 = 48 &euro;",
            "Marion : 15 &times; 6 = 90 &euro;",
            "Diff&eacute;rence : 15 - 8 = 7 sachets"
          ], "Les r&eacute;sultats correspondent bien &agrave; l'&eacute;nonc&eacute;, donc la solution est coh&eacute;rente.")}
          <div class="study-box"><h5>Phrase-r&eacute;ponse</h5><ul><li><strong>a.</strong> Un sachet de graines co&ucirc;te <strong>6 &euro;</strong>.</li><li><strong>b.</strong> Alexandre a achet&eacute; <strong>8 sachets</strong> et Marion a achet&eacute; <strong>15 sachets</strong>. Ensemble, ils ont achet&eacute; <strong>23 sachets</strong>.</li></ul></div>
          <div class="study-box math-warning"><h5>Erreurs fr&eacute;quentes</h5><ul><li>Ne commence pas par 48 &divide; 7 : les 7 sachets ne sont pas tous les sachets d'Alexandre, ce sont seulement les sachets en plus de Marion.</li><li>Ne confonds pas la diff&eacute;rence de prix avec le prix total.</li><li>N'oublie pas de v&eacute;rifier la r&eacute;ponse dans l'&eacute;nonc&eacute;.</li></ul></div>
        `
      },
      {
        title: "Calculer avec des relatifs",
        html: `
          <p>Un <strong>nombre relatif</strong> est un nombre positif ou n&eacute;gatif. On l'utilise pour repr&eacute;senter une temp&eacute;rature, une dette, une altitude ou un d&eacute;placement sur une droite gradu&eacute;e.</p>
          <div class="study-box">
            <h5>&Agrave; comprendre</h5>
            <ul>
              <li>Un nombre positif est plus grand que 0 : +4, +12, +1,5.</li>
              <li>Un nombre n&eacute;gatif est plus petit que 0 : -3, -8, -2,5.</li>
              <li>Pour additionner deux nombres de m&ecirc;me signe, on additionne les nombres et on garde le signe.</li>
              <li>Pour additionner deux nombres de signes diff&eacute;rents, on soustrait le plus petit du plus grand et on garde le signe du nombre le plus grand.</li>
              <li>Pour soustraire un nombre relatif, on ajoute son oppos&eacute;.</li>
              <li>Pour multiplier ou diviser, on d&eacute;cide d'abord le signe du r&eacute;sultat.</li>
            </ul>
          </div>
          ${visualMathBlock("Exemple 1 : addition avec deux signes diff&eacute;rents", [
            `(+8) ${mathOp("+")} (-3)`,
            `8 ${mathOp("-")} 3 ${mathOp("=")} 5`,
            `<span class="math-chip">8 est plus grand que 3, donc le r&eacute;sultat garde le signe +</span>`,
            `(+8) ${mathOp("+")} (-3) ${mathOp("=")} +5`
          ], "Quand les signes sont diff&eacute;rents, on compare les nombres sans le signe. Le plus grand nombre d&eacute;cide du signe final.")}
          ${visualMathBlock("Exemple 2 : addition de deux nombres n&eacute;gatifs", [
            `(-7) ${mathOp("+")} (-3)`,
            `7 ${mathOp("+")} 3 ${mathOp("=")} 10`,
            `<span class="math-chip">les deux nombres sont n&eacute;gatifs, donc le r&eacute;sultat est n&eacute;gatif</span>`,
            `(-7) ${mathOp("+")} (-3) ${mathOp("=")} -10`
          ], "Deux nombres n&eacute;gatifs s'additionnent comme une dette qui augmente : le r&eacute;sultat reste n&eacute;gatif.")}
          ${visualMathBlock("Exemple 3 : soustraire un nombre n&eacute;gatif", [
            `(+6) ${mathOp("-")} (-2)`,
            `<span class="math-chip">soustraire -2 revient &agrave; ajouter +2</span>`,
            `(+6) ${mathOp("+")} (+2) ${mathOp("=")} +8`
          ], "La soustraction se transforme en addition de l'oppos&eacute;. L'oppos&eacute; de -2 est +2.")}
          ${visualMathBlock("Exemple 4 : multiplier ou diviser avec les signes", [
            `(-6) ${mathOp("&times;")} (+4) ${mathOp("=")} -24 <span class="math-chip">signes diff&eacute;rents : r&eacute;sultat n&eacute;gatif</span>`,
            `(-18) ${mathOp("&divide;")} (-3) ${mathOp("=")} +6 <span class="math-chip">m&ecirc;mes signes : r&eacute;sultat positif</span>`
          ], "Pour &times; et &divide;, calcule d'abord le signe, puis calcule les nombres.")}
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Situation</th><th>R&egrave;gle</th><th>Exemple</th></tr></thead>
              <tbody>
                <tr><td>+ avec +</td><td>On additionne et le r&eacute;sultat reste positif.</td><td>(+5) + (+3) = +8</td></tr>
                <tr><td>- avec -</td><td>On additionne et on garde le signe n&eacute;gatif.</td><td>(-5) + (-3) = -8</td></tr>
                <tr><td>+ avec -</td><td>On soustrait et on garde le signe du plus grand nombre.</td><td>(+9) + (-4) = +5</td></tr>
                <tr><td>- avec +</td><td>On soustrait et on garde le signe du plus grand nombre.</td><td>(-9) + (+4) = -5</td></tr>
                <tr><td>Soustraction</td><td>On ajoute l'oppos&eacute; du nombre soustrait.</td><td>6 - (-2) = 6 + 2 = 8</td></tr>
                <tr><td>&times; ou &divide;</td><td>M&ecirc;mes signes : +. Signes diff&eacute;rents : -.</td><td>(-18) &divide; (-3) = +6</td></tr>
              </tbody>
            </table>
          </div>
          <div class="study-box">
            <h5>M&eacute;thode pas &agrave; pas</h5>
            <ul>
              <li>Rep&egrave;re l'op&eacute;ration : addition, soustraction, multiplication ou division.</li>
              <li>Pour une soustraction, transforme d'abord en addition de l'oppos&eacute;.</li>
              <li>Pour + et -, compare les nombres sans leur signe.</li>
              <li>Pour &times; et &divide;, d&eacute;cide d'abord si le r&eacute;sultat est positif ou n&eacute;gatif.</li>
              <li>Calcule ensuite les nombres et v&eacute;rifie le signe final.</li>
            </ul>
          </div>
          <div class="study-box math-warning">
            <h5>Erreurs fr&eacute;quentes &agrave; &eacute;viter</h5>
            <ul>
              <li>Ne fais pas toujours une addition : avec des signes diff&eacute;rents, on soustrait les nombres.</li>
              <li>Ne garde pas automatiquement le signe moins : le signe final d&eacute;pend du plus grand nombre.</li>
              <li>Attention : <strong>6 - (-2)</strong> devient <strong>6 + 2</strong>, pas <strong>6 - 2</strong>.</li>
              <li>Pour la multiplication et la division, deux signes n&eacute;gatifs donnent un r&eacute;sultat positif.</li>
            </ul>
          </div>
        `
      },
      {
        title: "Calculer avec des rationnels",
        html: `
          <p>Un <strong>nombre rationnel</strong> est un nombre que l'on peut &eacute;crire sous forme de fraction. Les fractions, les nombres entiers et les nombres d&eacute;cimaux sont donc des rationnels.</p>
          <div class="study-box">
            <h5>Avant de commencer</h5>
            <p>Regarde d'abord si tu travailles avec des <strong>fractions</strong> ou avec des <strong>nombres d&eacute;cimaux</strong>. La m&eacute;thode change selon l'op&eacute;ration : additionner deux fractions ne se fait pas comme les multiplier.</p>
          </div>
          ${visualMathBlock("Exemple 1 : soustraire deux fractions avec le m&ecirc;me d&eacute;nominateur", [
            `${fractionHtml("7", "10")} ${mathOp("-")} ${fractionHtml("3", "10")} ${mathOp("=")} ${fractionHtml("7 - 3", "10")} ${mathOp("=")} ${fractionHtml("4", "10")} ${mathOp("=")} ${fractionHtml("2", "5")}`
          ], "Quand les d&eacute;nominateurs sont identiques, on garde le d&eacute;nominateur et on calcule seulement les num&eacute;rateurs. Ici, 4/10 peut &ecirc;tre simplifi&eacute; en 2/5, car 4 et 10 sont divisibles par 2 : 4 &divide; 2 = 2 et 10 &divide; 2 = 5. Dans d'autres cas, on peut simplifier par 3, par 5 ou par un autre diviseur commun. Exemple : 3/9 se simplifie par 3, car 3 &divide; 3 = 1 et 9 &divide; 3 = 3, donc 3/9 = 1/3.")}
          ${visualMathBlock("Exemple 2 : soustraire deux fractions avec des d&eacute;nominateurs diff&eacute;rents", [
            `${fractionHtml("5", "6")} ${mathOp("-")} ${fractionHtml("1", "4")}`,
            `<span class="math-chip">PPCM(6 ; 4) = 12</span>`,
            `${fractionHtml("5", "6")} ${mathOp("=")} ${fractionHtml("10", "12")} <span class="math-chip">on multiplie 6 par 2, donc aussi 5 par 2</span>`,
            `${fractionHtml("1", "4")} ${mathOp("=")} ${fractionHtml("3", "12")} <span class="math-chip">on multiplie 4 par 3, donc aussi 1 par 3</span>`,
            `${fractionHtml("10", "12")} ${mathOp("-")} ${fractionHtml("3", "12")} ${mathOp("=")} ${fractionHtml("7", "12")}`
          ], "Le PPCM est le plus petit commun multiple. Il sert &agrave; trouver un d&eacute;nominateur commun. On ne soustrait jamais les d&eacute;nominateurs entre eux.")}
          ${visualMathBlock("Exemple 3 : additionner deux fractions", [
            `${fractionHtml("1", "2")} ${mathOp("+")} ${fractionHtml("2", "3")}`,
            `<span class="math-chip">PPCM(2 ; 3) = 6</span>`,
            `${fractionHtml("1", "2")} ${mathOp("=")} ${fractionHtml("3", "6")} ${mathOp("et")} ${fractionHtml("2", "3")} ${mathOp("=")} ${fractionHtml("4", "6")}`,
            `${fractionHtml("3", "6")} ${mathOp("+")} ${fractionHtml("4", "6")} ${mathOp("=")} ${fractionHtml("7", "6")} ${mathOp("=")} 1 ${fractionHtml("1", "6")}`
          ], "On met les fractions au m&ecirc;me d&eacute;nominateur avec le PPCM, puis on additionne les num&eacute;rateurs.")}
          ${visualMathBlock("Exemple 4 : multiplier puis diviser des fractions", [
            `${fractionHtml("3", "7")} ${mathOp("&times;")} ${fractionHtml("6", "4")} ${mathOp("=")} ${fractionHtml("3 &times; 6", "7 &times; 4")} ${mathOp("=")} ${fractionHtml("18", "28")} ${mathOp("=")} ${fractionHtml("9", "14")}`,
            `${fractionHtml("13", "7")} ${mathOp("&divide;")} ${fractionHtml("9", "2")} ${mathOp("=")} ${fractionHtml("13", "7")} ${mathOp("&times;")} ${fractionHtml("2", "9")} ${mathOp("=")} ${fractionHtml("26", "63")}`
          ], "Pour multiplier, on multiplie directement. Pour diviser, on multiplie par l'inverse de la deuxi&egrave;me fraction.")}
          ${visualMathBlock("Exemple 5 : calculer avec des nombres d&eacute;cimaux", [
            `<span class="math-vertical"><span>2,57</span><span>+ 1,63</span><strong>4,20</strong></span> <span class="math-chip">on aligne les virgules</span>`,
            `1,23 ${mathOp("&divide;")} 0,5 ${mathOp("=")} 123 ${mathOp("&divide;")} 50 ${mathOp("=")} 2,46`
          ], "Pour une division d&eacute;cimale, on peut multiplier les deux nombres par 10, 100 ou 1000 afin d'enlever la virgule du diviseur.")}
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Si tu vois...</th><th>M&eacute;thode &agrave; choisir</th><th>Point d'attention</th></tr></thead>
              <tbody>
                <tr><td>Fractions avec + ou -</td><td>Calculer le PPCM des d&eacute;nominateurs, transformer les fractions, puis additionner ou soustraire les num&eacute;rateurs.</td><td>Ne change jamais la valeur d'une fraction : si tu multiplies le bas par 3, tu multiplies aussi le haut par 3.</td></tr>
                <tr><td>Fractions avec &times;</td><td>Multiplier les num&eacute;rateurs entre eux et les d&eacute;nominateurs entre eux, puis simplifier si possible.</td><td>Tu peux parfois simplifier avant de multiplier pour rendre le calcul plus court.</td></tr>
                <tr><td>Fractions avec &divide;</td><td>Garder la premi&egrave;re fraction et multiplier par l'inverse de la seconde.</td><td>L'inverse de 9/2 est 2/9. On inverse seulement la deuxi&egrave;me fraction.</td></tr>
                <tr><td>D&eacute;cimaux avec + ou -</td><td>&Eacute;crire les nombres l'un sous l'autre en alignant les virgules.</td><td>Tu peux ajouter des z&eacute;ros : 3,5 = 3,50.</td></tr>
                <tr><td>D&eacute;cimaux avec &times;</td><td>Multiplier sans virgule, puis replacer la virgule &agrave; la fin.</td><td>2,4 &times; 1,2 : il y a deux chiffres apr&egrave;s la virgule au total, donc 288 devient 2,88.</td></tr>
                <tr><td>D&eacute;cimaux avec &divide;</td><td>Multiplier les deux nombres par 10, 100 ou 1000 pour obtenir un diviseur entier.</td><td>On doit multiplier les deux nombres par le m&ecirc;me nombre pour garder le m&ecirc;me quotient.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="study-box">
            <h5>M&eacute;thode pas &agrave; pas</h5>
            <ul>
              <li>Observe le signe de l'op&eacute;ration : +, -, &times; ou &divide;.</li>
              <li>Si ce sont des fractions avec + ou -, cherche le <strong>PPCM</strong> des d&eacute;nominateurs.</li>
              <li>Transforme chaque fraction pour avoir le m&ecirc;me d&eacute;nominateur.</li>
              <li>Calcule les num&eacute;rateurs, puis garde le d&eacute;nominateur commun.</li>
              <li>Simplifie la fraction finale si c'est possible.</li>
              <li>Pour les d&eacute;cimaux, aligne les virgules ou transforme la division pour enlever la virgule du diviseur.</li>
            </ul>
          </div>
          <div class="study-box math-warning">
            <h5>Erreurs fr&eacute;quentes &agrave; &eacute;viter</h5>
            <ul>
              <li>Ne fais pas <strong>1/2 + 2/3 = 3/5</strong>. On n'additionne pas les d&eacute;nominateurs.</li>
              <li>Ne soustrais pas les d&eacute;nominateurs : <strong>5/6 - 1/4</strong> ne donne pas <strong>4/2</strong>.</li>
              <li>Dans une division de fractions, inverse seulement la <strong>deuxi&egrave;me</strong> fraction.</li>
              <li>Avec les d&eacute;cimaux, n'oublie pas d'aligner les virgules pour + et -.</li>
            </ul>
          </div>
        `
      },
      {
        title: "Calculer des puissances",
        html: mathStudyHtml({
          intro: "Une puissance sert &agrave; &eacute;crire une multiplication r&eacute;p&eacute;t&eacute;e. Dans 4<sup>2</sup>, le nombre 4 est la base et 2 est l'exposant.",
          rule: `<ul><li><strong>a<sup>2</sup></strong> signifie : a &times; a.</li><li><strong>a<sup>3</sup></strong> signifie : a &times; a &times; a.</li><li><strong>5<sup>2</sup></strong> signifie : 5 &times; 5 = 25.</li><li><strong>2<sup>4</sup></strong> signifie : 2 &times; 2 &times; 2 &times; 2 = 16.</li><li><strong>Attention aux parenth&egrave;ses :</strong> (-3)<sup>2</sup> = 9, mais -3<sup>2</sup> = -9.</li></ul>`,
          examples: [["5<sup>2</sup>", "5 &times; 5", "25"], ["2<sup>4</sup>", "2 &times; 2 &times; 2 &times; 2", "16"], ["10<sup>3</sup>", "10 &times; 10 &times; 10", "1000"], ["(-3)<sup>2</sup>", "(-3) &times; (-3)", "9"]],
          method: ["Lis la base et l'exposant.", "R&eacute;&eacute;cris la puissance sous forme de multiplication.", "Fais attention aux parenth&egrave;ses avec les nombres n&eacute;gatifs.", "V&eacute;rifie si le r&eacute;sultat doit &ecirc;tre positif ou n&eacute;gatif."]
        })
      },
      {
        title: "Calculer des racines",
        html: mathStudyHtml({
          intro: "Calculer une racine carr&eacute;e, c'est retrouver le nombre qui, multipli&eacute; par lui-m&ecirc;me, donne le nombre de d&eacute;part. La racine carr&eacute;e est l'op&eacute;ration inverse du carr&eacute;.",
          rule: `<ul><li><strong>&radic;25 = 5</strong>, car 5 &times; 5 = 25.</li><li><strong>&radic;36 = 6</strong>, car 6 &times; 6 = 36.</li><li><strong>&radic;81 = 9</strong>, car 9 &times; 9 = 81.</li><li>Les racines les plus utiles viennent des <strong>carr&eacute;s parfaits</strong> : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.</li><li>Pour les racines, on n'utilise pas le PPCM comme pour les fractions. Quand on ne sait pas, on cherche les carr&eacute;s parfaits autour du nombre ou on d&eacute;compose le nombre.</li></ul>`,
          visual: visualMathBlock("Exemple guid&eacute; : trouver une racine connue", [
            `${mathOp("&radic;36")} ${mathOp("=")} 6 <span class="math-chip">car 6 &times; 6 = 36</span>`,
            `${mathOp("&radic;100")} ${mathOp("=")} 10 <span class="math-chip">car 10 &times; 10 = 100</span>`
          ], "La question &agrave; se poser est toujours : quel nombre multipli&eacute; par lui-m&ecirc;me donne le nombre sous la racine ?"),
          examples: [["&radic;49", "Je cherche le nombre qui donne 49 quand il est multipli&eacute; par lui-m&ecirc;me : 7 &times; 7 = 49.", "7"], ["&radic;64 + 5", "Je calcule d'abord la racine : &radic;64 = 8, puis 8 + 5.", "13"], ["&radic;144", "12 &times; 12 = 144, donc la racine carr&eacute;e de 144 est 12.", "12"], ["&radic;50", "50 n'est pas un carr&eacute; parfait. Il est entre 49 et 64, donc &radic;50 est entre 7 et 8.", "environ 7,1"]],
          method: ["Regarde si le nombre est un carr&eacute; parfait : 25, 36, 49, 64, 81, 100...", "Pose la question : quel nombre multipli&eacute; par lui-m&ecirc;me donne ce nombre ?", "Si tu ne connais pas la racine, cherche les carr&eacute;s parfaits les plus proches. Exemple : 50 est entre 49 et 64, donc &radic;50 est entre 7 et 8.", "Si le calcul contient plusieurs op&eacute;rations, calcule la racine avant l'addition ou la soustraction.", "V&eacute;rifie toujours en multipliant le r&eacute;sultat par lui-m&ecirc;me."],
          commonErrors: ["Ne confonds pas racine carr&eacute;e et division par 2 : &radic;36 n'est pas 18, c'est 6.", "Le PPCM sert surtout aux fractions avec des d&eacute;nominateurs diff&eacute;rents, pas au calcul d'une racine carr&eacute;e.", "N'oublie pas la hi&eacute;rarchie : dans &radic;49 + 3, on fait d'abord &radic;49 = 7, puis 7 + 3 = 10."]
        })
      },
      {
        title: "Appliquer la hiérarchie des opérations",
        html: `
          <p>La <strong>hi&eacute;rarchie des op&eacute;rations</strong> indique l'ordre dans lequel effectuer les calculs. Sans cette r&egrave;gle, un m&ecirc;me calcul pourrait donner plusieurs r&eacute;sultats diff&eacute;rents.</p>
          <div class="study-box">
            <h5>&Agrave; comprendre</h5>
            <ul>
              <li>On calcule d'abord les parenth&egrave;ses.</li>
              <li>On calcule ensuite les puissances et les racines.</li>
              <li>On effectue les multiplications et les divisions.</li>
              <li>On termine par les additions et les soustractions.</li>
              <li>Quand deux op&eacute;rations ont la m&ecirc;me priorit&eacute;, on calcule de gauche &agrave; droite.</li>
            </ul>
          </div>
          ${visualMathBlock("Exemple 1 : multiplication avant addition", [
            `3 ${mathOp("+")} 4 ${mathOp("&times;")} 2`,
            `3 ${mathOp("+")} 8`,
            `11`
          ], "On ne commence pas par 3 + 4. La multiplication 4 &times; 2 est prioritaire.")}
          ${visualMathBlock("Exemple 2 : parenth&egrave;ses en premier", [
            `(3 ${mathOp("+")} 4) ${mathOp("&times;")} 2`,
            `7 ${mathOp("&times;")} 2`,
            `14`
          ], "Les parenth&egrave;ses changent l'ordre du calcul. Ici, on calcule 3 + 4 avant de multiplier.")}
          ${visualMathBlock("Exemple 3 : puissance avant multiplication", [
            `5<sup>2</sup> ${mathOp("-")} 3 ${mathOp("&times;")} 4`,
            `25 ${mathOp("-")} 12`,
            `13`
          ], "La puissance 5<sup>2</sup> se calcule avant la multiplication et avant la soustraction.")}
          ${visualMathBlock("Exemple 4 : division et puissance dans le m&ecirc;me calcul", [
            `18 ${mathOp("&divide;")} 3 ${mathOp("+")} 2<sup>2</sup>`,
            `6 ${mathOp("+")} 4`,
            `10`
          ], "On calcule la division et la puissance avant l'addition finale.")}
          <div class="study-box">
            <h5>M&eacute;thode pas &agrave; pas</h5>
            <ul>
              <li>Entoure les parenth&egrave;ses et calcule-les en premier.</li>
              <li>Calcule les puissances et les racines.</li>
              <li>Calcule les multiplications et divisions de gauche &agrave; droite.</li>
              <li>Calcule les additions et soustractions de gauche &agrave; droite.</li>
              <li>&Eacute;cris chaque &eacute;tape sur une nouvelle ligne pour &eacute;viter les erreurs.</li>
            </ul>
          </div>
          <div class="study-box math-warning">
            <h5>Erreurs fr&eacute;quentes &agrave; &eacute;viter</h5>
            <ul>
              <li>Ne calcule pas toujours de gauche &agrave; droite : les priorit&eacute;s passent avant.</li>
              <li>Dans <strong>3 + 4 &times; 2</strong>, ne fais pas 3 + 4 en premier.</li>
              <li>Dans <strong>(3 + 4) &times; 2</strong>, les parenth&egrave;ses obligent &agrave; commencer par 3 + 4.</li>
              <li>Ne confonds pas <strong>5<sup>2</sup></strong> avec <strong>5 &times; 2</strong> : 5<sup>2</sup> = 25.</li>
            </ul>
          </div>
        `
      },
      {
        title: "Lire la valeur d’un nombre sur une droite graduée",
        html: mathStudyHtml({
          intro: "Une droite graduée permet de lire ou placer des nombres. Elle peut contenir des nombres entiers, décimaux ou relatifs.",
          rule: "Pour lire une droite graduée, il faut connaître la valeur d’un intervalle entre deux graduations.",
          examples: [["De 0 à 10 avec 5 intervalles", "10 ÷ 5 = 2 par intervalle", "0, 2, 4, 6, 8, 10"], ["De -5 à 5 avec 10 intervalles", "10 unités ÷ 10 = 1 par intervalle", "-5, -4, -3, ..., 5"], ["De 0 à 1 avec 10 intervalles", "1 ÷ 10 = 0,1", "0,1 par graduation"]],
          method: ["Repère deux nombres écrits sur la droite.", "Compte le nombre d’intervalles entre ces deux nombres.", "Divise l’écart par le nombre d’intervalles.", "Avance graduation par graduation pour lire la valeur demandée.", "Attention aux nombres négatifs : vers la gauche, les valeurs diminuent."]
        })
      },
      {
        title: "Estimer le résultat d’un calcul",
        html: mathStudyHtml({
          intro: "Estimer un résultat permet de vérifier rapidement si un calcul est raisonnable. On ne cherche pas une réponse exacte, mais un ordre de grandeur.",
          rule: "Pour estimer, on arrondit les nombres puis on effectue un calcul plus simple.",
          examples: [["19,8 × 5", "20 × 5", "environ 100"], ["398 + 204", "400 + 200", "environ 600"], ["49 × 21", "50 × 20", "environ 1000"], ["121 ÷ 6", "120 ÷ 6", "environ 20"]],
          method: ["Arrondis les nombres pour simplifier.", "Choisis des nombres proches mais faciles à calculer.", "Effectue le calcul mentalement.", "Compare l’estimation avec le résultat exact.", "Si le résultat exact est très loin de l’estimation, vérifie ton calcul."]
        })
      }
    ]
  },
  {
    id: "proportionnalite",
    icon: "%",
    title: "Proportionnalité",
    intro: "Réviser les fractions, les pourcentages, les proportions et les problèmes concrets de proportionnalité.",
    sections: [
      {
        title: "Fraction ou pourcentage d’une quantité",
        html: mathStudyHtml({
          intro: "Calculer une fraction ou un pourcentage d’une quantité revient à prendre une partie de cette quantité.",
          rule: "20 % = 20/100 = 0,20. Pour calculer 20 % de 150, on fait 150 × 0,20.",
          examples: [["25 % de 80", "80 × 0,25", "20"], ["3/4 de 60", "60 ÷ 4 × 3", "45"]],
          method: ["Transforme le pourcentage en nombre décimal ou en fraction.", "Multiplie par la quantité totale.", "Vérifie que le résultat est logique."]
        })
      },
      {
        title: "Retrouver une grandeur",
        html: mathStudyHtml({
          intro: "Parfois, on connaît un pourcentage et sa valeur, puis on doit retrouver la quantité totale.",
          rule: "Si 30 représente 20 %, alors 100 % vaut 30 ÷ 0,20.",
          examples: [["20 % d’un prix = 30 CHF", "30 ÷ 0,20", "150 CHF"], ["50 % d’un groupe = 12 personnes", "12 ÷ 0,5", "24 personnes"]],
          method: ["Identifie le pourcentage connu.", "Transforme-le en nombre décimal.", "Divise la valeur connue par ce nombre."]
        })
      },
      {
        title: "Poser une proportion",
        html: mathStudyHtml({
          intro: "Une proportion permet de comparer deux rapports égaux.",
          rule: "Si les grandeurs sont proportionnelles, on peut utiliser un tableau ou un produit en croix.",
          examples: [["3 kg coûtent 12 CHF, 5 kg coûtent ?", "12 ÷ 3 = 4 CHF par kg, puis 5 × 4", "20 CHF"], ["2 stylos coûtent 3 CHF, 6 stylos coûtent ?", "6 est 3 fois 2, donc 3 × 3", "9 CHF"]],
          method: ["Vérifie que la situation est proportionnelle.", "Cherche le prix ou la quantité pour 1 unité.", "Multiplie pour obtenir la quantité demandée."]
        })
      },
      {
        title: "Problèmes concrets de proportionnalité",
        html: mathStudyHtml({
          intro: "Les problèmes de proportionnalité parlent souvent de prix, recettes, vitesse, quantité ou échelle.",
          rule: "Quand deux grandeurs augmentent ou diminuent dans le même rapport, elles sont proportionnelles.",
          examples: [["Une recette pour 4 personnes demande 200 g de riz. Pour 6 personnes ?", "200 ÷ 4 = 50 g, puis 50 × 6", "300 g"], ["120 km en 2 h. Distance en 3 h ?", "120 ÷ 2 = 60 km/h, puis 60 × 3", "180 km"]],
          method: ["Repère les deux grandeurs.", "Passe par l’unité si possible.", "Écris une phrase-réponse avec l’unité."]
        })
      }
    ]
  },
  {
    id: "algebre",
    icon: "X",
    title: "Algèbre",
    intro: "Réviser les équations, les expressions algébriques, le développement, la factorisation et la traduction d’un problème.",
    sections: [
      {
        title: "Vérifier une solution",
        html: mathStudyHtml({
          intro: "Vérifier si un nombre est solution d’une équation consiste à remplacer l’inconnue par ce nombre.",
          rule: "Si les deux côtés de l’équation donnent le même résultat, le nombre est solution.",
          examples: [["x + 5 = 12 avec x = 7", "7 + 5 = 12", "oui"], ["2x = 10 avec x = 4", "2 × 4 = 8", "non"]],
          method: ["Remplace x par le nombre proposé.", "Calcule chaque membre.", "Compare les deux résultats."]
        })
      },
      {
        title: "Développer et réduire",
        html: mathStudyHtml({
          intro: "Développer consiste à supprimer les parenthèses. Réduire consiste à regrouper les termes semblables.",
          rule: "a(b + c) = ab + ac.",
          examples: [["3(x + 2)", "3x + 6", "3x + 6"], ["2x + 5x - 3", "regrouper 2x et 5x", "7x - 3"]],
          method: ["Distribue le facteur devant la parenthèse.", "Attention aux signes.", "Regroupe les termes de même nature."]
        })
      },
      {
        title: "Factoriser",
        html: mathStudyHtml({
          intro: "Factoriser consiste à transformer une somme en produit en mettant un facteur commun en évidence.",
          rule: "ab + ac = a(b + c).",
          examples: [["3x + 6", "3 est commun : 3(x + 2)", "3(x + 2)"], ["5x + 10", "5 est commun : 5(x + 2)", "5(x + 2)"]],
          method: ["Cherche le facteur commun.", "Place-le devant une parenthèse.", "Vérifie en développant mentalement."]
        })
      },
      {
        title: "Traduire un problème",
        html: mathStudyHtml({
          intro: "Traduire un problème en expression algébrique consiste à remplacer une quantité inconnue par une lettre.",
          rule: "On utilise souvent x pour représenter le nombre inconnu.",
          examples: [["Un nombre augmenté de 5", "x + 5", "expression"], ["Le double d’un nombre", "2x", "expression"]],
          method: ["Choisis l’inconnue.", "Traduis chaque information en calcul.", "Garde le même ordre que dans la phrase si possible."]
        })
      },
      {
        title: "Résoudre une équation",
        html: mathStudyHtml({
          intro: "Résoudre une équation signifie trouver la valeur de l’inconnue.",
          rule: "On garde l’équilibre : ce qu’on fait d’un côté, on le fait de l’autre.",
          examples: [["x + 7 = 15", "x = 15 - 7", "x = 8"], ["3x = 21", "x = 21 ÷ 3", "x = 7"]],
          method: ["Isole l’inconnue.", "Utilise l’opération inverse.", "Vérifie la solution dans l’équation de départ."]
        })
      },
      {
        title: "Problème avec équation",
        html: mathStudyHtml({
          intro: "Un problème peut être résolu avec une équation quand une quantité inconnue doit être trouvée.",
          rule: "Définis x clairement avant d’écrire l’équation.",
          examples: [["Un nombre augmenté de 4 vaut 13", "x + 4 = 13", "x = 9"], ["3 billets coûtent 24 CHF", "3x = 24", "x = 8 CHF"]],
          method: ["Définis x.", "Écris l’équation.", "Résous-la.", "Réponds avec l’unité."]
        })
      }
    ]
  },
  {
    id: "mesures",
    icon: "M",
    title: "Grandeurs et mesures + Pythagore",
    intro: "R&eacute;viser les longueurs, p&eacute;rim&egrave;tres, aires, volumes, conversions d'unit&eacute;s et le th&eacute;or&egrave;me de Pythagore avec des exemples guid&eacute;s.",
    sections: [
      {
        title: "P&eacute;rim&egrave;tres et aires",
        html: `
          <p><strong>Le p&eacute;rim&egrave;tre</strong> mesure le contour d'une figure. Il s'exprime en unit&eacute;s de longueur : cm, m, km. <strong>L'aire</strong> mesure la surface &agrave; l'int&eacute;rieur de la figure. Elle s'exprime en unit&eacute;s carr&eacute;es : cm&sup2;, m&sup2;.</p>
          <div class="measure-grid">
            <div class="measure-card"><div class="measure-figure measure-rect"><span>8 cm</span><em>5 cm</em></div><h5>Rectangle</h5><p><strong>P&eacute;rim&egrave;tre :</strong> P = 2 &times; (L + l)</p><p><strong>Aire :</strong> A = L &times; l</p></div>
            <div class="measure-card"><div class="measure-figure measure-square"><span>6 cm</span></div><h5>Carr&eacute;</h5><p><strong>P&eacute;rim&egrave;tre :</strong> P = 4 &times; c</p><p><strong>Aire :</strong> A = c &times; c</p></div>
            <div class="measure-card"><div class="measure-figure measure-triangle"><span>base 10 cm</span><em>h = 6 cm</em></div><h5>Triangle</h5><p><strong>Aire :</strong> A = base &times; hauteur &divide; 2</p><p>La hauteur est perpendiculaire &agrave; la base.</p></div>
          </div>
          ${visualMathBlock("Exemple guid&eacute; : rectangle de 8 cm sur 5 cm", [
            `P ${mathOp("=")} 2 ${mathOp("&times;")} (8 + 5)`,
            `P ${mathOp("=")} 2 ${mathOp("&times;")} 13 ${mathOp("=")} 26 cm`,
            `A ${mathOp("=")} 8 ${mathOp("&times;")} 5 ${mathOp("=")} 40 cm&sup2;`
          ], "Le p&eacute;rim&egrave;tre est une longueur : cm. L'aire est une surface : cm&sup2;.")}
          ${visualMathBlock("Exemple guid&eacute; : triangle de base 10 cm et hauteur 6 cm", [
            `A ${mathOp("=")} base ${mathOp("&times;")} hauteur ${mathOp("&divide;")} 2`,
            `A ${mathOp("=")} 10 ${mathOp("&times;")} 6 ${mathOp("&divide;")} 2`,
            `A ${mathOp("=")} 60 ${mathOp("&divide;")} 2 ${mathOp("=")} 30 cm&sup2;`
          ], "On divise par 2 car un triangle correspond &agrave; la moiti&eacute; d'un rectangle de m&ecirc;me base et de m&ecirc;me hauteur.")}
          <div class="study-box"><h5>Erreur fr&eacute;quente</h5><p>Ne confonds pas p&eacute;rim&egrave;tre et aire : si on demande le contour, on additionne des longueurs. Si on demande la surface, on utilise une formule d'aire.</p></div>
        `
      },
      {
        title: "Volumes",
        html: `
          <p>Le <strong>volume</strong> mesure l'espace occup&eacute; par un solide. Il s'exprime en unit&eacute;s cubes : cm&sup3;, m&sup3;. Pour un pav&eacute; droit ou une bo&icirc;te rectangulaire, on multiplie les trois dimensions.</p>
          <div class="measure-grid"><div class="measure-card"><div class="volume-box"><span>L</span><em>l</em><strong>h</strong></div><h5>Pav&eacute; droit</h5><p>V = longueur &times; largeur &times; hauteur</p></div><div class="measure-card"><div class="volume-cube"><span>c</span></div><h5>Cube</h5><p>V = c &times; c &times; c = c&sup3;</p></div></div>
          ${visualMathBlock("Exemple guid&eacute; : bo&icirc;te de 4 cm, 3 cm et 2 cm", [
            `V ${mathOp("=")} longueur ${mathOp("&times;")} largeur ${mathOp("&times;")} hauteur`,
            `V ${mathOp("=")} 4 ${mathOp("&times;")} 3 ${mathOp("&times;")} 2`,
            `V ${mathOp("=")} 12 ${mathOp("&times;")} 2 ${mathOp("=")} 24 cm&sup3;`
          ], "Le r&eacute;sultat est en cm&sup3; parce qu'on multiplie trois longueurs en centim&egrave;tres.")}
          ${visualMathBlock("Exemple guid&eacute; : cube de c&ocirc;t&eacute; 5 cm", [
            `V ${mathOp("=")} c ${mathOp("&times;")} c ${mathOp("&times;")} c`,
            `V ${mathOp("=")} 5 ${mathOp("&times;")} 5 ${mathOp("&times;")} 5`,
            `V ${mathOp("=")} 25 ${mathOp("&times;")} 5 ${mathOp("=")} 125 cm&sup3;`
          ], "Dans un cube, les trois dimensions sont identiques.")}
        `
      },
      {
        title: "Transformations d'unit&eacute;s",
        html: `
          <p>Avant de calculer ou de comparer, il faut souvent mettre les grandeurs dans la <strong>m&ecirc;me unit&eacute;</strong>. Les conversions d&eacute;pendent du type de grandeur : longueur, aire, volume, dur&eacute;e ou capacit&eacute;.</p>
          <div class="grammar-table-wrap"><table class="grammar-table"><thead><tr><th>Grandeur</th><th>&Agrave; retenir</th><th>Exemple</th></tr></thead><tbody><tr><td>Longueur</td><td>1 m = 100 cm ; 1 km = 1000 m</td><td>2,5 m = 250 cm</td></tr><tr><td>Aire</td><td>1 m&sup2; = 10 000 cm&sup2;</td><td>1 m &times; 1 m = 100 cm &times; 100 cm</td></tr><tr><td>Volume</td><td>1 m&sup3; = 1 000 000 cm&sup3;</td><td>1 m &times; 1 m &times; 1 m</td></tr><tr><td>Dur&eacute;e</td><td>1 h = 60 min ; 1 min = 60 s</td><td>3 h = 180 min</td></tr><tr><td>Capacit&eacute;</td><td>1 L = 100 cL ; 1 L = 1000 mL</td><td>2 L = 200 cL</td></tr></tbody></table></div>
          ${visualMathBlock("Exemple guid&eacute; : convertir 2,5 m en cm", [`1 m ${mathOp("=")} 100 cm`, `2,5 m ${mathOp("=")} 2,5 ${mathOp("&times;")} 100`, `2,5 m ${mathOp("=")} 250 cm`], "On multiplie par 100 car on passe des m&egrave;tres aux centim&egrave;tres.")}
          ${visualMathBlock("Exemple guid&eacute; : comparer 0,5 h et 30 min", [`1 h ${mathOp("=")} 60 min`, `0,5 h ${mathOp("=")} 0,5 ${mathOp("&times;")} 60 ${mathOp("=")} 30 min`, `0,5 h ${mathOp("=")} 30 min`], "On convertit dans la m&ecirc;me unit&eacute; avant de comparer.")}
          <div class="study-box"><h5>Attention</h5><p>Pour les aires et les volumes, on ne convertit pas comme une longueur simple. Une aire a deux dimensions, un volume en a trois.</p></div>
        `
      },
      {
        title: "Th&eacute;or&egrave;me de Pythagore",
        html: `
          <p>Le <strong>th&eacute;or&egrave;me de Pythagore</strong> s'utilise uniquement dans un <strong>triangle rectangle</strong>. Il sert &agrave; calculer une longueur manquante.</p>
          <div class="pythagore-demo"><div class="pythagore-triangle"><span class="side-a">3</span><span class="side-b">4</span><span class="side-c">?</span></div><div class="pythagore-note"><h5>Formule</h5><p>Si le triangle est rectangle, alors :</p><p><strong>hypot&eacute;nuse&sup2; = c&ocirc;t&eacute;1&sup2; + c&ocirc;t&eacute;2&sup2;</strong></p><p>L'hypot&eacute;nuse est toujours le plus grand c&ocirc;t&eacute;, en face de l'angle droit.</p></div></div>
          ${visualMathBlock("Cas 1 : chercher l'hypot&eacute;nuse", [`Triangle rectangle avec deux c&ocirc;t&eacute;s : 3 cm et 4 cm`, `hypot&eacute;nuse&sup2; ${mathOp("=")} 3&sup2; + 4&sup2;`, `hypot&eacute;nuse&sup2; ${mathOp("=")} 9 + 16 ${mathOp("=")} 25`, `hypot&eacute;nuse ${mathOp("=")} &radic;25 ${mathOp("=")} 5 cm`], "Quand on cherche le plus grand c&ocirc;t&eacute;, on additionne les carr&eacute;s des deux autres c&ocirc;t&eacute;s.")}
          ${visualMathBlock("Cas 2 : chercher un c&ocirc;t&eacute; de l'angle droit", [`Triangle rectangle : hypot&eacute;nuse = 13 cm, autre c&ocirc;t&eacute; = 5 cm`, `c&ocirc;t&eacute; manquant&sup2; ${mathOp("=")} 13&sup2; - 5&sup2;`, `c&ocirc;t&eacute; manquant&sup2; ${mathOp("=")} 169 - 25 ${mathOp("=")} 144`, `c&ocirc;t&eacute; manquant ${mathOp("=")} &radic;144 ${mathOp("=")} 12 cm`], "Quand on conna&icirc;t l'hypot&eacute;nuse et un autre c&ocirc;t&eacute;, on soustrait les carr&eacute;s.")}
          <div class="study-box"><h5>M&eacute;thode EVA</h5><ul><li>V&eacute;rifie d'abord que le triangle est rectangle.</li><li>Rep&egrave;re l'hypot&eacute;nuse : c'est le plus grand c&ocirc;t&eacute;.</li><li>Si tu cherches l'hypot&eacute;nuse, additionne les carr&eacute;s.</li><li>Si tu cherches un autre c&ocirc;t&eacute;, soustrais les carr&eacute;s.</li><li>&Agrave; la fin, prends la racine carr&eacute;e.</li></ul></div>
        `
      }
    ]
  },
  {
    id: "espace",
    icon: "ES",
    title: "Espace",
    intro: "R&eacute;viser les figures planes, les solides, les instruments, les d&eacute;veloppements, les coordonn&eacute;es et la sym&eacute;trie avec des rep&egrave;res visuels.",
    sections: [
      {
        title: "Figures planes",
        html: `
          <p>Une <strong>figure plane</strong> est une figure dessin&eacute;e sur une surface plate. Elle n'a pas de volume : on parle de c&ocirc;t&eacute;s, de sommets, d'angles, de centre, de rayon ou de diam&egrave;tre.</p>
          <div class="geometry-grid">
            <div class="geometry-card"><div class="shape-demo square-shape"><span>c&ocirc;t&eacute;</span></div><h5>Carr&eacute;</h5><ul><li>4 c&ocirc;t&eacute;s &eacute;gaux</li><li>4 angles droits</li><li>4 axes de sym&eacute;trie</li></ul></div>
            <div class="geometry-card"><div class="shape-demo rectangle-shape"><span>longueur</span><em>largeur</em></div><h5>Rectangle</h5><ul><li>4 angles droits</li><li>C&ocirc;t&eacute;s oppos&eacute;s &eacute;gaux</li><li>2 axes de sym&eacute;trie</li></ul></div>
            <div class="geometry-card"><div class="shape-demo circle-shape"><span>rayon</span><em>centre</em></div><h5>Cercle</h5><ul><li>Un centre</li><li>Un rayon : du centre jusqu'au bord</li><li>Un diam&egrave;tre : deux rayons align&eacute;s</li></ul></div>
            <div class="geometry-card"><div class="shape-demo triangle-shape"><span>angle droit</span></div><h5>Triangle rectangle</h5><ul><li>3 c&ocirc;t&eacute;s</li><li>1 angle droit</li><li>Le plus grand c&ocirc;t&eacute; est l'hypot&eacute;nuse</li></ul></div>
          </div>
          <div class="study-box"><h5>M&eacute;thode pour reconna&icirc;tre une figure</h5><ul><li>Compte le nombre de c&ocirc;t&eacute;s.</li><li>V&eacute;rifie s'il y a des angles droits.</li><li>Rep&egrave;re les c&ocirc;t&eacute;s &eacute;gaux.</li><li>Pour un cercle, cherche le centre, le rayon et le diam&egrave;tre.</li></ul></div>
        `
      },
      {
        title: "Solides",
        html: `
          <p>Un <strong>solide</strong> est une forme en volume. Il occupe de l'espace. Pour le d&eacute;crire, on utilise les mots <strong>face</strong>, <strong>ar&ecirc;te</strong> et <strong>sommet</strong>.</p>
          <div class="geometry-grid">
            <div class="geometry-card"><div class="solid-demo cube-demo"><span></span></div><h5>Cube</h5><ul><li>6 faces carr&eacute;es</li><li>12 ar&ecirc;tes</li><li>8 sommets</li></ul></div>
            <div class="geometry-card"><div class="solid-demo cuboid-demo"><span></span></div><h5>Pav&eacute; droit</h5><ul><li>6 faces rectangulaires</li><li>Longueur, largeur, hauteur</li><li>Volume : L &times; l &times; h</li></ul></div>
            <div class="geometry-card"><div class="solid-demo cylinder-demo"><span></span></div><h5>Cylindre</h5><ul><li>2 disques</li><li>1 surface courbe</li><li>Exemple : une bo&icirc;te ronde</li></ul></div>
            <div class="geometry-card"><div class="solid-demo pyramid-demo"><span></span></div><h5>Pyramide</h5><ul><li>Une base</li><li>Des faces triangulaires</li><li>Un sommet principal</li></ul></div>
          </div>
          <div class="study-box"><h5>Vocabulaire essentiel</h5><ul><li><strong>Face :</strong> surface plate du solide.</li><li><strong>Ar&ecirc;te :</strong> ligne o&ugrave; deux faces se rencontrent.</li><li><strong>Sommet :</strong> point o&ugrave; plusieurs ar&ecirc;tes se rencontrent.</li></ul></div>
        `
      },
      {
        title: "Instruments de g&eacute;om&eacute;trie",
        html: `
          <p>En g&eacute;om&eacute;trie, chaque instrument a une fonction pr&eacute;cise. Le bon r&eacute;flexe est de choisir l'instrument selon ce que la consigne demande.</p>
          <div class="grammar-table-wrap"><table class="grammar-table"><thead><tr><th>Instrument</th><th>&Agrave; quoi sert-il ?</th><th>Exemple de consigne</th></tr></thead><tbody><tr><td>R&egrave;gle</td><td>Tracer une droite, mesurer une longueur.</td><td>Tracer un segment de 6 cm.</td></tr><tr><td>&Eacute;querre</td><td>Tracer ou v&eacute;rifier un angle droit.</td><td>Construire un rectangle.</td></tr><tr><td>Compas</td><td>Tracer un cercle ou reporter une longueur.</td><td>Tracer un cercle de rayon 3 cm.</td></tr><tr><td>Rapporteur</td><td>Mesurer ou construire un angle.</td><td>Construire un angle de 60&deg;.</td></tr></tbody></table></div>
          <div class="study-box"><h5>Exemple guid&eacute;</h5><p>Pour tracer un cercle de centre O et de rayon 4 cm : place la pointe du compas sur O, ouvre le compas &agrave; 4 cm avec la r&egrave;gle, puis trace le cercle sans changer l'ouverture.</p></div>
        `
      },
      {
        title: "D&eacute;veloppements de solides",
        html: `
          <p>Le <strong>d&eacute;veloppement</strong> d'un solide est la forme obtenue quand on d&eacute;plie toutes ses faces &agrave; plat. Il doit permettre de reconstruire le solide par pliage.</p>
          <div class="net-showcase"><div class="cube-net" aria-label="Developpement de cube"><span></span><span></span><span></span><span></span><span></span><span></span></div><div class="net-notes"><h5>D&eacute;veloppement d'un cube</h5><ul><li>Il doit contenir <strong>6 carr&eacute;s</strong>.</li><li>Les carr&eacute;s doivent &ecirc;tre reli&eacute;s correctement.</li><li>Au pliage, chaque carr&eacute; devient une face du cube.</li></ul></div></div>
          <div class="study-box"><h5>Comment v&eacute;rifier ?</h5><ul><li>Compte le nombre de faces.</li><li>V&eacute;rifie la forme de chaque face.</li><li>Imagine les faces qui se replient autour d'une face centrale.</li><li>Si deux faces se superposent au pliage, ce n'est pas un bon d&eacute;veloppement.</li></ul></div>
        `
      },
      {
        title: "Rep&eacute;rage dans un rep&egrave;re",
        html: `
          <p>Un point dans un rep&egrave;re se note souvent <strong>A(x ; y)</strong>. Le premier nombre est l'<strong>abscisse</strong>, le deuxi&egrave;me est l'<strong>ordonn&eacute;e</strong>.</p>
          <div class="coordinate-demo"><div class="axis x-axis"></div><div class="axis y-axis"></div><span class="tick x1">1</span><span class="tick x2">2</span><span class="tick x3">3</span><span class="tick y1">1</span><span class="tick y2">2</span><strong class="point-a">A</strong></div>
          <div class="study-box"><h5>Exemple : A(3 ; 2)</h5><ul><li>On lit d'abord <strong>3</strong> sur l'axe horizontal : c'est l'abscisse.</li><li>On lit ensuite <strong>2</strong> sur l'axe vertical : c'est l'ordonn&eacute;e.</li><li>Le point A se trouve donc 3 unit&eacute;s vers la droite et 2 unit&eacute;s vers le haut.</li></ul></div>
        `
      },
      {
        title: "Axes et centre de sym&eacute;trie",
        html: `
          <p>Une figure a un <strong>axe de sym&eacute;trie</strong> si on peut la plier sur une ligne et superposer parfaitement les deux parties. Elle a un <strong>centre de sym&eacute;trie</strong> si un demi-tour donne exactement la m&ecirc;me figure.</p>
          <div class="geometry-grid"><div class="geometry-card"><div class="symmetry-demo symmetry-square"><span></span><em></em></div><h5>Carr&eacute;</h5><p>4 axes de sym&eacute;trie : vertical, horizontal et deux diagonales.</p></div><div class="geometry-card"><div class="symmetry-demo symmetry-rectangle"><span></span></div><h5>Rectangle non carr&eacute;</h5><p>2 axes de sym&eacute;trie : vertical et horizontal.</p></div><div class="geometry-card"><div class="symmetry-demo symmetry-circle"><span></span></div><h5>Cercle</h5><p>Une infinit&eacute; d'axes de sym&eacute;trie qui passent par le centre.</p></div></div>
          <div class="study-box"><h5>M&eacute;thode</h5><ul><li>Pour un axe : imagine un pliage.</li><li>Pour un centre : imagine un demi-tour de 180&deg;.</li><li>Si la figure ne se superpose pas exactement, ce n'est pas une sym&eacute;trie.</li></ul></div>
        `
      }
    ]
  }
];

const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

function renderPractice(subjectKey) {
  const subject = practiceData[subjectKey];
  const list = document.querySelector(`[data-subject="${subjectKey}"]`);
  const panel = document.querySelector(subjectKey === "french" ? "#french-panel" : "#math-panel");

  list.innerHTML = subject.categories
    .map((category, index) => {
      const active = index === 0 ? " active" : "";
      return `<button class="category-button${active}" type="button" data-index="${index}">${category.name}</button>`;
    })
    .join("");

  function showExercise(index) {
    const exercise = subject.categories[index];
    panel.innerHTML = `
      <h3>${exercise.name}</h3>
      <p class="exercise-question">${exercise.prompt}</p>
      <div class="answers">
        ${exercise.answers
          .map((answer, answerIndex) => `<button class="answer-button" type="button" data-answer="${answerIndex}">${answer}</button>`)
          .join("")}
      </div>
      <p class="feedback" hidden></p>
    `;

    panel.querySelectorAll(".answer-button").forEach((button) => {
      button.addEventListener("click", () => {
        const answerIndex = Number(button.dataset.answer);
        const isCorrect = answerIndex === exercise.correct;
        panel.querySelectorAll(".answer-button").forEach((item) => {
          item.disabled = true;
          const itemIndex = Number(item.dataset.answer);
          if (itemIndex === exercise.correct) item.classList.add("correct");
        });
        if (!isCorrect) button.classList.add("wrong");
        const feedback = panel.querySelector(".feedback");
        feedback.hidden = false;
        feedback.textContent = `${isCorrect ? "Bonne réponse." : "Presque. Regarde la correction."} ${exercise.feedback}`;
      });
    });
  }

  list.querySelectorAll(".category-button").forEach((button) => {
    button.addEventListener("click", () => {
      list.querySelectorAll(".category-button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      showExercise(Number(button.dataset.index));
    });
  });

  showExercise(0);
}

function getRevisionQuiz(topic, section) {
  const fallback = [
    { question: `Quel est le point principal de « ${section.title} » ?`, options: ["Comprendre la notion et son rôle", "Ignorer le contexte", "Retenir seulement le titre"], correct: 0, feedback: "Le but est de comprendre la notion et de savoir l’utiliser dans une phrase ou un texte." },
    { question: "Quelle méthode aide le plus à répondre correctement ?", options: ["Relire l’exemple et vérifier les indices", "Répondre au hasard", "Ne lire que la première ligne"], correct: 0, feedback: "Les indices du texte ou de la phrase permettent de justifier la réponse." },
    { question: "Pourquoi faut-il regarder le contexte ?", options: ["Parce qu’il donne le sens précis", "Parce qu’il remplace la consigne", "Parce qu’il supprime les règles"], correct: 0, feedback: "Le contexte aide à choisir la bonne analyse." }
  ];

  const quizzes = {
    "Texte narratif": [
      { question: "Un texte narratif sert principalement à...", options: ["Raconter une histoire", "Donner une définition", "Défendre une opinion"], correct: 0, feedback: "Le texte narratif présente des actions, des personnages et une évolution." },
      { question: "Dans l’exemple de Lina, quel est le problème ?", options: ["Elle ne connaît personne", "Elle rate son bus", "Elle refuse de lire"], correct: 0, feedback: "Lina arrive dans un nouveau collège et se sent seule." },
      { question: "Quel indice aide à situer le moment ?", options: ["Le matin de la rentrée", "La voiture rouge", "La thèse"], correct: 0, feedback: "Cette expression donne un repère temporel." }
    ],
    "Texte argumentatif": [
      { question: "Un texte argumentatif cherche à...", options: ["Convaincre", "Raconter seulement", "Lister des horaires"], correct: 0, feedback: "Il défend une thèse avec des arguments." },
      { question: "Dans l’exemple, quelle est la thèse ?", options: ["La lecture doit avoir plus de place", "Les transports sont gratuits", "Lina change de classe"], correct: 0, feedback: "Le texte défend l’importance de la lecture." },
      { question: "Un exemple sert à...", options: ["Rendre un argument concret", "Remplacer la thèse", "Cacher le thème"], correct: 0, feedback: "L’exemple illustre l’argument." }
    ],
    "Texte informatif": [
      { question: "Un texte informatif sert à...", options: ["Expliquer ou informer", "Donner un ordre", "Exprimer seulement une émotion"], correct: 0, feedback: "Il transmet des informations précises sur un sujet." },
      { question: "Dans l’exemple, quel est le sujet ?", options: ["Les transports publics à Genève", "La rentrée de Lina", "La lecture"], correct: 0, feedback: "Le texte explique leur utilité." },
      { question: "Quelle information est essentielle ?", options: ["Les transports relient différents lieux", "Lina cherche la salle 204", "Un roman développe l’imagination"], correct: 0, feedback: "C’est une information centrale du texte informatif." }
    ],
    "Méthode EVA": [
      { question: "Quelle est la première étape conseillée ?", options: ["Lire le texte sans répondre", "Choisir au hasard", "Lire seulement les réponses"], correct: 0, feedback: "La première lecture sert à comprendre le sens général." },
      { question: "Une question globale concerne...", options: ["L’idée générale", "Un seul mot isolé", "La couleur du bouton"], correct: 0, feedback: "Elle porte sur le thème, le message ou la visée." },
      { question: "Une question locale concerne...", options: ["Une information précise", "Tout le texte uniquement", "Le menu du site"], correct: 0, feedback: "Elle demande de retrouver un détail dans une phrase ou un paragraphe." }
    ],
    "Classe grammaticale et fonction": [
      { question: "La classe grammaticale indique...", options: ["Le type du mot", "Le rôle dans la phrase", "Le lieu de l’action"], correct: 0, feedback: "Nom, verbe, adjectif ou pronom sont des classes grammaticales." },
      { question: "Le COD répond souvent à...", options: ["Qui ? ou quoi ?", "Quand ?", "Pourquoi seulement ?"], correct: 0, feedback: "Exemple : Je conduis quoi ? la voiture." },
      { question: "Dans « Marie est heureuse », heureuse est...", options: ["Attribut du sujet", "COD", "Préposition"], correct: 0, feedback: "Il qualifie le sujet Marie après le verbe être." }
    ],
    "Organisateurs et connecteurs": [
      { question: "« Ensuite » est un organisateur...", options: ["Temporel", "Spatial", "Attributif"], correct: 0, feedback: "Il indique l’ordre dans le temps." },
      { question: "« Devant » est un organisateur...", options: ["Spatial", "Temporel", "COD"], correct: 0, feedback: "Il situe dans l’espace." },
      { question: "« Mais » indique souvent...", options: ["Une opposition", "Un lieu", "Un nom"], correct: 0, feedback: "C’est un connecteur logique d’opposition." }
    ],
    "Forme passive": [
      { question: "La voix passive se construit avec...", options: ["Être + participe passé", "Avoir + infinitif", "Aller + adjectif"], correct: 0, feedback: "Exemple : Une pêche est mangée par Marion." },
      { question: "Quelle est la forme passive de « Marion mangera une pêche » ?", options: ["Une pêche sera mangée par Marion", "Une pêche est mangera Marion", "Marion sera mangée par une pêche"], correct: 0, feedback: "Au futur simple, l’auxiliaire être devient « sera »." },
      { question: "Dans « Lucile regarde la télévision », quel élément devient sujet au passif ?", options: ["La télévision", "Lucile", "Regarde"], correct: 0, feedback: "Le COD de la phrase active devient le sujet de la phrase passive." }
    ],
    "Les 4 types de phrase": [
      { question: "Une phrase déclarative sert surtout à...", options: ["Donner une information", "Poser une question", "Donner un ordre"], correct: 0, feedback: "Exemple : Le candidat lit le texte." },
      { question: "Une phrase interrogative sert à...", options: ["Poser une question", "Donner seulement une information", "Nommer un objet"], correct: 0, feedback: "Elle se termine souvent par un point d’interrogation." },
      { question: "« Relis le texte. » est une phrase...", options: ["Impérative", "Exclamative", "Interrogative"], correct: 0, feedback: "Elle donne une consigne, même si elle finit par un point." },
      { question: "« Quel beau texte ! » est...", options: ["Exclamative", "Déclarative neutre", "Passive"], correct: 0, feedback: "Elle exprime une réaction forte." }
    ],
    "Référent d’un pronom": [
      { question: "Le référent d’un pronom est...", options: ["Le mot ou groupe remplacé", "Le temps du verbe", "La ponctuation"], correct: 0, feedback: "Il faut retrouver à qui ou à quoi renvoie le pronom." },
      { question: "Dans « Emma lit un livre. Elle le résume », « le » renvoie à...", options: ["un livre", "Emma", "résume"], correct: 0, feedback: "Le pronom « le » remplace le groupe « un livre »." },
      { question: "Dans « Lina va à la bibliothèque. Elle y travaille », « y » renvoie à...", options: ["à la bibliothèque", "Lina", "travaille"], correct: 0, feedback: "Le pronom « y » remplace souvent un lieu introduit par « à »." },
      { question: "Pour vérifier un référent, on peut...", options: ["Remplacer le pronom par le groupe trouvé", "Ignorer la phrase précédente", "Changer le temps du verbe"], correct: 0, feedback: "Si la phrase garde son sens, le référent est probablement correct." }
    ],
    "Accords grammaticaux": [
      { question: "Dans « les grandes maisons », grandes s’accorde avec...", options: ["maisons", "les", "aucun mot"], correct: 0, feedback: "L’adjectif s’accorde avec le nom qu’il qualifie." },
      { question: "Pour accorder un verbe, on cherche...", options: ["Le sujet", "Le COD uniquement", "Le titre"], correct: 0, feedback: "Le sujet commande la terminaison du verbe." },
      { question: "Un accord grammatical concerne souvent...", options: ["Genre et nombre", "Uniquement la couleur", "La mise en page"], correct: 0, feedback: "Masculin/féminin et singulier/pluriel sont essentiels." },
      { question: "Quelle phrase est correcte ?", options: ["Les exercices corrigés sont utiles", "Les exercice corrigé sont utiles", "Les exercices corrigé est utile"], correct: 0, feedback: "Le nom, l’adjectif et le verbe sont accordés au pluriel." },
      { question: "Quelle expression est correcte ?", options: ["Des fleurs orange", "Des fleurs oranges", "Des fleur orange"], correct: 0, feedback: "Orange vient d’un nom : l’adjectif de couleur reste invariable." },
      { question: "Dans « Les boissons qu’elles ont apportées », pourquoi « apportées » s’accorde ?", options: ["Le COD est placé avant l’auxiliaire avoir", "Le sujet est féminin pluriel", "Le mot est une couleur"], correct: 0, feedback: "Avec avoir, le participe passé s’accorde avec le COD si celui-ci est placé avant." }
    ],
    "Homophones grammaticaux": [
      { question: "Pour distinguer « a » et « à », on peut remplacer « a » par...", options: ["avait", "et", "son"], correct: 0, feedback: "Si « avait » fonctionne, on écrit souvent « a »." },
      { question: "« et » exprime généralement...", options: ["Une addition", "Le verbe être", "Un lieu"], correct: 0, feedback: "Il relie deux mots ou groupes." },
      { question: "Les homophones ont...", options: ["Une prononciation proche ou identique", "Toujours le même sens", "Toujours la même orthographe"], correct: 0, feedback: "Ils peuvent se prononcer pareil mais s’écrire différemment." },
      { question: "Dans « Ils ___ compris », il faut écrire...", options: ["ont", "on", "son"], correct: 0, feedback: "On peut dire : ils avaient compris." }
    ],
    "Ponctuation": [
      { question: "Le point d’interrogation marque...", options: ["Une question", "Une énumération", "Un COD"], correct: 0, feedback: "Il termine une phrase interrogative." },
      { question: "La virgule peut servir à...", options: ["Séparer des éléments", "Conjuguer un verbe", "Remplacer un nom"], correct: 0, feedback: "Elle organise la phrase." },
      { question: "Les deux-points introduisent souvent...", options: ["Une explication ou une liste", "Un adjectif obligatoire", "Un sujet"], correct: 0, feedback: "Ils annoncent une précision." },
      { question: "Les guillemets servent souvent à...", options: ["Encadrer une citation", "Accorder un verbe", "Remplacer un adjectif"], correct: 0, feedback: "Ils signalent des paroles ou une citation." }
    ],
    "Termes langagiers": [
      { question: "Un synonyme est un mot de sens...", options: ["Proche", "Contraire", "Impossible"], correct: 0, feedback: "Rapide et vite ont un sens proche." },
      { question: "Un antonyme est un mot de sens...", options: ["Contraire", "Identique", "Familier"], correct: 0, feedback: "Grand et petit sont des mots de sens contraire : ce sont des antonymes." },
      { question: "Un registre de langue peut être...", options: ["Familier, courant ou soutenu", "COD, COI ou sujet", "Présent, passé ou futur"], correct: 0, feedback: "Le registre dépend de la situation de communication." },
      { question: "« Travail » et « boulot » appartiennent surtout à...", options: ["Deux registres différents", "Deux temps verbaux", "Deux ponctuations"], correct: 0, feedback: "« Boulot » est familier, « travail » est courant." }
    ],
    "Champ lexical": [
      { question: "Un champ lexical regroupe des mots liés...", options: ["Au même thème", "Au même verbe uniquement", "Au hasard"], correct: 0, feedback: "Forêt, arbre et feuille appartiennent au thème de la nature." },
      { question: "Repérer un champ lexical aide à trouver...", options: ["Le thème", "Le COD seulement", "La ponctuation"], correct: 0, feedback: "Les mots répétés orientent vers le thème." },
      { question: "« Bus, tram, train » appartiennent au champ lexical...", options: ["Des transports", "De la lecture", "De la ponctuation"], correct: 0, feedback: "Ces mots relèvent des moyens de transport." },
      { question: "« Inquiet, danger, trembler » indiquent plutôt le champ lexical...", options: ["De la peur", "De l’école", "Du calcul"], correct: 0, feedback: "Ces mots créent une atmosphère de peur." }
    ],
    "Familles de mots": [
      { question: "Une famille de mots partage souvent...", options: ["Une base commune", "Une ponctuation", "Un même sujet"], correct: 0, feedback: "Lire, lecture et lecteur partagent une base de sens." },
      { question: "Un préfixe se place...", options: ["Avant la base", "Après la phrase", "Entre deux virgules"], correct: 0, feedback: "Exemple : relire." },
      { question: "Un suffixe se place...", options: ["Après la base", "Avant le déterminant", "Dans le sujet"], correct: 0, feedback: "Exemple : lecteur." },
      { question: "Quel mot appartient à la famille de « écrire » ?", options: ["écriture", "école", "écouter"], correct: 0, feedback: "Écrire et écriture partagent la même base de sens." }
    ],
    "Sens propre et sens figuré": [
      { question: "Le sens propre est...", options: ["Le sens direct", "Une image", "Une faute"], correct: 0, feedback: "Une montagne est un relief au sens propre." },
      { question: "« Une montagne de devoirs » est...", options: ["Un sens figuré", "Un lieu réel", "Un sujet"], correct: 0, feedback: "C’est une image pour dire beaucoup de devoirs." },
      { question: "Pour distinguer les deux, on regarde...", options: ["Le contexte", "Seulement la majuscule", "Le nombre de lignes"], correct: 0, feedback: "Le contexte indique si le mot est concret ou imagé." },
      { question: "« Dévorer un livre » signifie...", options: ["Lire avec passion", "Manger un livre", "Écrire une lettre"], correct: 0, feedback: "C’est un sens figuré." }
    ],
    "Construire et orthographier les verbes": [
      { question: "Pour conjuguer, on identifie d’abord...", options: ["Le sujet", "La police du texte", "Le champ lexical"], correct: 0, feedback: "Le sujet aide à choisir la terminaison." },
      { question: "La terminaison dépend souvent...", options: ["Du temps et du sujet", "Du titre seulement", "Du nombre de paragraphes"], correct: 0, feedback: "Temps, mode et sujet guident la forme verbale." },
      { question: "« Nous parlons » est au...", options: ["Présent", "Futur", "Conditionnel passé"], correct: 0, feedback: "La terminaison -ons indique le présent avec nous." },
      { question: "Le passé composé se construit souvent avec...", options: ["avoir ou être + participe passé", "un adjectif + un nom", "un point d’interrogation"], correct: 0, feedback: "Exemple : j’ai compris, elle est arrivée." }
    ],
    "Identifier modes et temps en contexte": [
      { question: "Le temps verbal situe l’action...", options: ["Dans le temps", "Dans l’espace uniquement", "Dans une liste"], correct: 0, feedback: "Présent, passé et futur situent l’action." },
      { question: "L’impératif sert souvent à...", options: ["Donner un ordre ou une consigne", "Décrire un nom", "Indiquer un lieu"], correct: 0, feedback: "Exemple : Relis le texte." },
      { question: "« Il avait terminé » renvoie à...", options: ["Un temps du passé", "Un futur simple", "Une préposition"], correct: 0, feedback: "Avait + participe passé indique un temps composé du passé." },
      { question: "« Je voudrais réussir » est au...", options: ["Conditionnel", "Impératif", "Présent de l’indicatif"], correct: 0, feedback: "« Voudrais » exprime ici une demande ou un souhait." }
    ],
    "Rédiger un courriel cohérent": [
      { question: "Avant d’écrire un courriel, il faut d’abord identifier...", options: ["Le destinataire et l’objectif", "La couleur du téléphone", "Le nombre de lignes seulement"], correct: 0, feedback: "Il faut savoir à qui l’on écrit et pourquoi." },
      { question: "Dans une candidature, l’introduction doit expliquer...", options: ["Pourquoi on écrit", "Le prix d’un objet", "Une citation littéraire"], correct: 0, feedback: "L’introduction annonce la raison du message." },
      { question: "Les connecteurs servent à...", options: ["Relier les idées", "Supprimer la ponctuation", "Remplacer le sujet"], correct: 0, feedback: "D’abord, ensuite, de plus et enfin organisent le texte." }
    ],
    "Mise en page du courriel": [
      { question: "L’objet du courriel sert à...", options: ["Annoncer le sujet", "Finir la phrase", "Remplacer la signature"], correct: 0, feedback: "Il indique rapidement le contenu du message." },
      { question: "Une formule de politesse se place souvent...", options: ["À la fin", "Au milieu d’un mot", "Dans le COD"], correct: 0, feedback: "Elle clôt le message de façon adaptée." },
      { question: "Une bonne mise en page rend le texte...", options: ["Plus lisible", "Plus long seulement", "Moins clair"], correct: 0, feedback: "Elle aide le lecteur à comprendre rapidement." },
      { question: "Pour répondre à une annonce de téléphone, un objet correct serait...", options: ["Demande d’informations concernant le téléphone", "Salut téléphone", "Je veux"], correct: 0, feedback: "L’objet doit être précis et poli." }
    ],
    "Correction de la langue": [
      { question: "À la relecture, on vérifie...", options: ["Syntaxe, ponctuation et orthographe", "Seulement les images", "Uniquement la couleur"], correct: 0, feedback: "La correction concerne la phrase et les mots." },
      { question: "Une phrase correcte doit être...", options: ["Claire et complète", "Toujours très longue", "Sans verbe"], correct: 0, feedback: "La syntaxe rend le message compréhensible." },
      { question: "Relire deux fois permet de vérifier...", options: ["Le sens puis les erreurs", "Seulement le titre", "Le menu"], correct: 0, feedback: "C’est une méthode efficace." },
      { question: "Quelle phrase est la plus correcte ?", options: ["Je suis intéressé(e) par le téléphone.", "Moi intéressé téléphone.", "Téléphone moi veux."], correct: 0, feedback: "La phrase correcte contient un sujet, un verbe et un complément bien organisé." }
    ],
    "Langage riche et adapté": [
      { question: "Un langage adapté dépend...", options: ["Du destinataire", "Du hasard", "Du nombre de boutons"], correct: 0, feedback: "On n’écrit pas de la même manière à un ami ou à une entreprise." },
      { question: "Un vocabulaire varié permet...", options: ["D’éviter les répétitions", "De supprimer le sens", "De remplacer la grammaire"], correct: 0, feedback: "Il rend le texte plus précis." },
      { question: "Dans un courriel professionnel, le registre doit être...", options: ["Poli et soigné", "Toujours familier", "Incompréhensible"], correct: 0, feedback: "Le ton doit correspondre à la situation." },
      { question: "Quelle formule convient pour terminer un message poli ?", options: ["Cordialement", "Réponds vite", "Salut"], correct: 0, feedback: "« Cordialement » est une formule simple et polie." }
    ]
  };

  const selectedQuiz = quizzes[section.title] || fallback;
  const completionQuestions = [
    { question: `Pour réussir « ${section.title} », il faut surtout...`, options: ["Comprendre la règle et l’appliquer", "Répondre sans lire", "Ignorer les exemples"], correct: 0, feedback: "La règle doit être comprise puis utilisée dans une phrase ou un texte." },
    { question: "Quel réflexe aide à éviter les erreurs ?", options: ["Relire l’exemple et vérifier les indices", "Choisir la réponse la plus longue", "Changer de sujet"], correct: 0, feedback: "Les indices et les exemples permettent de contrôler la réponse." },
    { question: "Quand une réponse semble correcte, il faut...", options: ["La justifier avec la règle", "Effacer la consigne", "Ne pas relire"], correct: 0, feedback: "Une réponse est plus solide quand elle s’appuie sur une règle précise." },
    { question: "Dans un exercice de révision, le contexte sert à...", options: ["Choisir le bon sens ou la bonne règle", "Décorer la question", "Remplacer la correction"], correct: 0, feedback: "Le contexte aide à comprendre exactement ce qui est demandé." },
    { question: "La meilleure méthode de correction consiste à...", options: ["Lire la phrase complète", "Regarder seulement un mot", "Répondre au hasard"], correct: 0, feedback: "La phrase complète donne les informations nécessaires pour répondre." },
    { question: "Après une erreur, il faut surtout...", options: ["Lire la correction et repérer l’indice", "Passer sans comprendre", "Changer toutes les réponses"], correct: 0, feedback: "Comprendre l’indice permet de ne pas répéter la même erreur." }
  ];

  return [...selectedQuiz, ...completionQuestions].slice(0, 6);
}

function getMathRevisionQuiz(topic, section) {
  const baseQuestions = [
    { question: `Dans « ${section.title} », la première étape est souvent de...`, options: ["Lire la consigne et repérer les données", "Calculer au hasard", "Ignorer les unités"], correct: 0, feedback: "En mathématiques, la lecture de la consigne évite beaucoup d’erreurs." },
    { question: "Pour éviter une erreur de calcul, il faut...", options: ["Écrire les étapes", "Effacer les unités", "Changer les nombres"], correct: 0, feedback: "Les étapes permettent de vérifier le raisonnement." },
    { question: "Une réponse complète doit souvent contenir...", options: ["Un résultat et une unité", "Seulement un dessin", "Une phrase sans calcul"], correct: 0, feedback: "Quand une grandeur est demandée, l’unité est importante." },
    { question: "Si le résultat paraît impossible, il faut...", options: ["Estimer et vérifier", "Le garder sans réfléchir", "Supprimer la question"], correct: 0, feedback: "L’estimation aide à repérer les résultats incohérents." },
    { question: "Une bonne méthode consiste à...", options: ["Identifier la formule ou l’opération utile", "Utiliser toujours la division", "Répondre avec le premier nombre"], correct: 0, feedback: "Chaque problème demande de choisir l’outil adapté." },
    { question: "À la fin d’un exercice, il faut...", options: ["Relire la question posée", "Changer toutes les valeurs", "Écrire une autre consigne"], correct: 0, feedback: "Relire la question permet de vérifier que la réponse correspond bien à ce qui est demandé." }
  ];

  const quizzes = {
    "Problèmes avec les 4 opérations": [
      { question: "Dans le problème des sachets, quelle différence de prix faut-il calculer ?", options: ["90 - 48", "90 + 48", "48 ÷ 7"], correct: 0, feedback: "La différence entre les deux achats est 90 - 48 = 42 €." },
      { question: "Les 42 € de différence correspondent à...", options: ["7 sachets", "48 sachets", "90 sachets"], correct: 0, feedback: "Marion achète 7 sachets de plus qu’Alexandre." },
      { question: "Quel est le prix d’un sachet ?", options: ["6 €", "7 €", "42 €"], correct: 0, feedback: "42 ÷ 7 = 6 €." },
      { question: "Combien de sachets Alexandre a-t-il achetés ?", options: ["8", "15", "23"], correct: 0, feedback: "48 ÷ 6 = 8 sachets." },
      { question: "Combien de sachets Marion a-t-elle achetés ?", options: ["15", "8", "7"], correct: 0, feedback: "Marion achète 7 sachets de plus qu’Alexandre : 8 + 7 = 15." },
      { question: "Combien de sachets ont-ils achetés ensemble ?", options: ["23", "15", "42"], correct: 0, feedback: "8 + 15 = 23 sachets au total." }
    ],
    "Calculer avec des relatifs": [
      { question: "(+9) + (-4) vaut...", options: ["+5", "-5", "+13"], correct: 0, feedback: "Signes différents : 9 - 4 = 5, on garde le signe du plus grand nombre, donc +5." },
      { question: "(-9) + (+4) vaut...", options: ["-5", "+5", "-13"], correct: 0, feedback: "Signes différents : 9 - 4 = 5, et le nombre le plus grand est 9 avec un signe négatif, donc -5." },
      { question: "(-7) + (-3) vaut...", options: ["-10", "+10", "-4"], correct: 0, feedback: "Deux nombres négatifs s’additionnent et on garde le signe négatif." },
      { question: "(+6) - (-2) vaut...", options: ["+8", "+4", "-8"], correct: 0, feedback: "Soustraire un négatif revient à additionner son opposé : 6 + 2 = 8." },
      { question: "(-6) × (+4) vaut...", options: ["-24", "+24", "-10"], correct: 0, feedback: "Deux signes contraires donnent un résultat négatif." },
      { question: "(-18) ÷ (-3) vaut...", options: ["+6", "-6", "+15"], correct: 0, feedback: "Deux signes identiques donnent un résultat positif." }
    ],
    "Calculer avec des rationnels": [
      { question: "1/2 + 2/3 vaut...", options: ["7/6", "3/5", "3/6"], correct: 0, feedback: "1/2 = 3/6 et 2/3 = 4/6, donc 3/6 + 4/6 = 7/6." },
      { question: "5/6 - 1/3 vaut...", options: ["1/2", "4/3", "4/6"], correct: 0, feedback: "1/3 = 2/6, donc 5/6 - 2/6 = 3/6 = 1/2." },
      { question: "3/7 × 6/4 vaut...", options: ["9/14", "18/11", "9/28"], correct: 0, feedback: "3 × 6 = 18 et 7 × 4 = 28, donc 18/28 = 9/14." },
      { question: "13/7 ÷ 9/2 revient à calculer...", options: ["13/7 × 2/9", "13/7 × 9/2", "7/13 × 9/2"], correct: 0, feedback: "Pour diviser par une fraction, on multiplie par son inverse." },
      { question: "2,57 + 1,63 vaut...", options: ["4,20", "3,110", "4,10"], correct: 0, feedback: "On aligne les virgules : 2,57 + 1,63 = 4,20." },
      { question: "1,23 ÷ 0,5 vaut...", options: ["2,46", "0,246", "24,6"], correct: 0, feedback: "On peut multiplier les deux nombres par 100 : 123 ÷ 50 = 2,46." }
    ],
    "Calculer des puissances": [
      { question: "5² vaut...", options: ["25", "10", "7"], correct: 0, feedback: "5² = 5 × 5 = 25." },
      { question: "2⁴ vaut...", options: ["16", "8", "6"], correct: 0, feedback: "2⁴ = 2 × 2 × 2 × 2 = 16." },
      { question: "10³ vaut...", options: ["1000", "30", "100"], correct: 0, feedback: "10 × 10 × 10 = 1000." },
      { question: "(-3)² vaut...", options: ["9", "-9", "-6"], correct: 0, feedback: "Avec les parenthèses, (-3) × (-3) = 9." }
    ],
    "Calculer des racines": [
      { question: "√36 vaut...", options: ["6", "18", "9"], correct: 0, feedback: "6 × 6 = 36." },
      { question: "√81 vaut...", options: ["9", "8", "7"], correct: 0, feedback: "9 × 9 = 81." },
      { question: "√49 + 3 vaut...", options: ["10", "52", "7"], correct: 0, feedback: "√49 = 7, donc 7 + 3 = 10." },
      { question: "√100 vaut...", options: ["10", "50", "20"], correct: 0, feedback: "10 × 10 = 100." }
    ],
    "Appliquer la hiérarchie des opérations": [
      { question: "Dans 3 + 4 × 2, on calcule d’abord...", options: ["4 × 2", "3 + 4", "3 × 2"], correct: 0, feedback: "La multiplication passe avant l’addition." },
      { question: "(3 + 4) × 2 vaut...", options: ["14", "11", "10"], correct: 0, feedback: "Les parenthèses se calculent d’abord : 7 × 2 = 14." },
      { question: "5² - 3 × 4 vaut...", options: ["13", "88", "8"], correct: 0, feedback: "5² = 25 et 3 × 4 = 12, donc 25 - 12 = 13." },
      { question: "18 ÷ 3 + 2² vaut...", options: ["10", "8", "12"], correct: 0, feedback: "18 ÷ 3 = 6 et 2² = 4, donc 6 + 4 = 10." }
    ],
    "Lire la valeur d’un nombre sur une droite graduée": [
      { question: "De 0 à 10 avec 5 intervalles, chaque intervalle vaut...", options: ["2", "5", "10"], correct: 0, feedback: "10 ÷ 5 = 2." },
      { question: "De 0 à 1 avec 10 intervalles, chaque graduation vaut...", options: ["0,1", "1", "10"], correct: 0, feedback: "1 ÷ 10 = 0,1." },
      { question: "Sur une droite, vers la gauche les nombres...", options: ["diminuent", "augmentent toujours", "deviennent tous positifs"], correct: 0, feedback: "Plus on va vers la gauche, plus la valeur diminue." },
      { question: "Pour lire une droite graduée, il faut d’abord trouver...", options: ["la valeur d’un intervalle", "la couleur de la droite", "le nombre de lettres"], correct: 0, feedback: "Le pas entre deux graduations permet de lire les valeurs." }
    ],
    "Estimer le résultat d’un calcul": [
      { question: "19,8 × 5 est environ égal à...", options: ["100", "50", "200"], correct: 0, feedback: "19,8 est proche de 20, donc 20 × 5 = 100." },
      { question: "398 + 204 est environ égal à...", options: ["600", "400", "800"], correct: 0, feedback: "398 ≈ 400 et 204 ≈ 200, donc environ 600." },
      { question: "49 × 21 est environ égal à...", options: ["1000", "500", "2000"], correct: 0, feedback: "49 ≈ 50 et 21 ≈ 20, donc 50 × 20 = 1000." },
      { question: "Estimer sert surtout à...", options: ["vérifier si le résultat est raisonnable", "remplacer toujours le calcul exact", "éviter de lire la question"], correct: 0, feedback: "L’estimation permet de contrôler l’ordre de grandeur." }
    ],
    "Fraction ou pourcentage d’une quantité": [
      { question: "25 % de 80 vaut...", options: ["20", "25", "40"], correct: 0, feedback: "80 × 0,25 = 20." },
      { question: "3/4 de 60 vaut...", options: ["45", "30", "15"], correct: 0, feedback: "60 ÷ 4 × 3 = 45." }
    ],
    "Résoudre une équation": [
      { question: "Si x + 7 = 15, alors x vaut...", options: ["8", "22", "7"], correct: 0, feedback: "x = 15 - 7 = 8." },
      { question: "Si 3x = 21, alors x vaut...", options: ["7", "18", "63"], correct: 0, feedback: "x = 21 ÷ 3 = 7." }
    ],
    "Théorème de Pythagore": [
      { question: "Pythagore s’utilise dans un triangle...", options: ["rectangle", "équilatéral uniquement", "quelconque sans condition"], correct: 0, feedback: "Le théorème de Pythagore concerne les triangles rectangles." },
      { question: "Avec deux côtés 3 et 4 dans un triangle rectangle, l’hypoténuse vaut...", options: ["5", "7", "12"], correct: 0, feedback: "3² + 4² = 25, donc l’hypoténuse vaut 5." }
    ],
    "Repérage dans un repère": [
      { question: "Dans A(3 ; 2), le 3 correspond à...", options: ["l’abscisse", "l’ordonnée", "la hauteur"], correct: 0, feedback: "On lit d’abord x, l’abscisse." },
      { question: "L’ordonnée se lit sur l’axe...", options: ["vertical", "horizontal", "du temps"], correct: 0, feedback: "L’ordonnée correspond à l’axe y." }
    ]
  };

  return [...(quizzes[section.title] || []), ...baseQuestions].slice(0, 6);
}

function renderFrenchRevision() {
  const list = document.querySelector("#french-topic-list");
  const topicSelect = document.querySelector("#french-topic-select");
  const panel = document.querySelector("#french-topic-panel");

  if (!list || !panel) return;

  list.innerHTML = frenchRevisionTopics
    .map((topic, index) => {
      const active = index === 0 ? " active" : "";
      return `<button class="revision-topic-button${active}" type="button" data-topic="${topic.id}">
        <span>${topic.icon}</span>
        ${topic.title}
      </button>`;
    })
    .join("");

  if (topicSelect) {
    topicSelect.innerHTML = frenchRevisionTopics
      .map((topic) => `<option value="${topic.id}">${topic.title}</option>`)
      .join("");
  }

  function showTopic(topicId) {
    const topic = frenchRevisionTopics.find((item) => item.id === topicId) || frenchRevisionTopics[0];
    panel.classList.remove("literary-mode");
    panel.innerHTML = `
      <div class="revision-panel-head">
        <span class="section-chip">${topic.title}</span>
        <h3>${topic.title}</h3>
        <p class="revision-intro">${topic.intro}</p>
      </div>
      <div class="revision-subtopic-layout">
        <div class="revision-subtopic-tabs" aria-label="Sous-thèmes de ${topic.title}">
          ${topic.sections
            .map((section, index) => {
              const active = index === 0 ? " active" : "";
              return `<button class="revision-subtopic-button${active}" type="button" data-subtopic="${index}">${section.title}</button>`;
            })
            .join("")}
        </div>
        <div class="revision-subtopic-content" aria-live="polite"></div>
      </div>
      <div class="topic-mini-test" aria-live="polite"></div>
    `;

    const subtopicContent = panel.querySelector(".revision-subtopic-content");
    const subtopicButtons = panel.querySelectorAll(".revision-subtopic-button");
    const miniTest = panel.querySelector(".topic-mini-test");

    function renderSectionQuiz(section, sectionIndex) {
      const quiz = getRevisionQuiz(topic, section);
      if (!miniTest) return;

      miniTest.innerHTML = `
        <article class="mini-test-card">
          <div>
            <span class="section-chip">Mini test</span>
            <h4>Exercices : ${section.title}</h4>
          </div>
          <div class="mini-test-questions">
            ${quiz
              .map(
                (question, questionIndex) => `
                  <fieldset class="mini-question compact">
                    <legend>${questionIndex + 1}. ${question.question}</legend>
                    ${question.options
                      .map(
                        (option, optionIndex) => `
                          <label>
                            <input type="radio" name="${topic.id}-${sectionIndex}-quiz-${questionIndex}" value="${optionIndex}" />
                            <span>${option}</span>
                          </label>
                        `
                      )
                      .join("")}
                    <p class="mini-feedback" hidden></p>
                  </fieldset>
                `
              )
              .join("")}
          </div>
          <button class="button primary small" type="button">Vérifier mes réponses</button>
          <div class="mini-result" hidden></div>
        </article>
      `;

      const checkButton = miniTest.querySelector("button");
      const result = miniTest.querySelector(".mini-result");
      checkButton.addEventListener("click", () => {
        let score = 0;
        let answered = 0;
        const feedbacks = miniTest.querySelectorAll(".mini-feedback");
        quiz.forEach((question, questionIndex) => {
          const selected = miniTest.querySelector(`input[name="${topic.id}-${sectionIndex}-quiz-${questionIndex}"]:checked`);
          const hasAnswer = Boolean(selected);
          const isCorrect = hasAnswer && Number(selected.value) === question.correct;
          if (hasAnswer) answered += 1;
          if (isCorrect) score += 1;
          feedbacks[questionIndex].hidden = false;
          feedbacks[questionIndex].textContent = hasAnswer
            ? `${isCorrect ? "Bonne réponse." : "À revoir."} ${question.feedback}`
            : "Choisis une réponse pour cette question, puis vérifie à nouveau.";
          feedbacks[questionIndex].classList.toggle("correct", Boolean(isCorrect));
          feedbacks[questionIndex].classList.toggle("wrong", hasAnswer && !isCorrect);
        });
        const percentage = Math.round((score / quiz.length) * 100);
        result.hidden = false;
        result.textContent = `Score : ${score}/${quiz.length} (${percentage}%). Réponses complétées : ${answered}/${quiz.length}.`;
      });
    }

    function showSubtopic(index) {
      const section = topic.sections[index] || topic.sections[0];
      subtopicContent.innerHTML = `
        <article class="revision-content-card active${section.html ? " rich-content" : ""}">
          ${section.html || `<h4>${section.title}</h4><ul>${section.items.map((item) => `<li>${item}</li>`).join("")}</ul>`}
        </article>
      `;

      subtopicButtons.forEach((button) => {
        button.classList.toggle("active", Number(button.dataset.subtopic) === index);
      });
      renderSectionQuiz(section, index);
    }

    subtopicButtons.forEach((button) => {
      button.addEventListener("click", () => showSubtopic(Number(button.dataset.subtopic)));
    });

    showSubtopic(0);
  }

  function activateTopic(topicId) {
    list.querySelectorAll(".revision-topic-button").forEach((item) => {
      item.classList.toggle("active", item.dataset.topic === topicId);
    });
    if (topicSelect) topicSelect.value = topicId;
    showTopic(topicId);
  }

  list.querySelectorAll(".revision-topic-button").forEach((button) => {
    button.addEventListener("click", () => {
      activateTopic(button.dataset.topic);
    });
  });

  if (topicSelect) {
    topicSelect.addEventListener("change", () => activateTopic(topicSelect.value));
  }

  activateTopic(frenchRevisionTopics[0].id);
}

renderFrenchRevision();

function renderMathRevision() {
  const list = document.querySelector("#math-topic-list");
  const topicSelect = document.querySelector("#math-topic-select");
  const panel = document.querySelector("#math-topic-panel");

  if (!list || !panel) return;

  list.innerHTML = mathRevisionTopics
    .map((topic, index) => {
      const active = index === 0 ? " active" : "";
      return `<button class="revision-topic-button${active}" type="button" data-topic="${topic.id}">
        <span>${topic.icon}</span>
        ${topic.title}
      </button>`;
    })
    .join("");

  if (topicSelect) {
    topicSelect.innerHTML = mathRevisionTopics
      .map((topic) => `<option value="${topic.id}">${topic.title}</option>`)
      .join("");
  }

  function showTopic(topicId) {
    const topic = mathRevisionTopics.find((item) => item.id === topicId) || mathRevisionTopics[0];
    panel.innerHTML = `
      <div class="revision-panel-head">
        <span class="section-chip">${topic.title}</span>
        <h3>${topic.title}</h3>
        <p class="revision-intro">${topic.intro}</p>
      </div>
      <div class="revision-subtopic-layout">
        <div class="revision-subtopic-tabs" aria-label="Sous-thèmes de ${topic.title}">
          ${topic.sections
            .map((section, index) => {
              const active = index === 0 ? " active" : "";
              return `<button class="revision-subtopic-button${active}" type="button" data-subtopic="${index}">${section.title}</button>`;
            })
            .join("")}
        </div>
        <div class="revision-subtopic-content" aria-live="polite"></div>
      </div>
      <div class="topic-mini-test" aria-live="polite"></div>
    `;

    const subtopicContent = panel.querySelector(".revision-subtopic-content");
    const subtopicButtons = panel.querySelectorAll(".revision-subtopic-button");
    const miniTest = panel.querySelector(".topic-mini-test");

    function renderSectionQuiz(section, sectionIndex) {
      const quiz = getMathRevisionQuiz(topic, section);
      miniTest.innerHTML = `
        <article class="mini-test-card">
          <div>
            <span class="section-chip">Mini test</span>
            <h4>Exercices : ${section.title}</h4>
          </div>
          <div class="mini-test-questions">
            ${quiz
              .map(
                (question, questionIndex) => `
                  <fieldset class="mini-question compact">
                    <legend>${questionIndex + 1}. ${question.question}</legend>
                    ${question.options
                      .map(
                        (option, optionIndex) => `
                          <label>
                            <input type="radio" name="math-${topic.id}-${sectionIndex}-quiz-${questionIndex}" value="${optionIndex}" />
                            <span>${option}</span>
                          </label>
                        `
                      )
                      .join("")}
                    <p class="mini-feedback" hidden></p>
                  </fieldset>
                `
              )
              .join("")}
          </div>
          <button class="button primary small" type="button">Vérifier mes réponses</button>
          <div class="mini-result" hidden></div>
        </article>
      `;

      const checkButton = miniTest.querySelector("button");
      const result = miniTest.querySelector(".mini-result");
      checkButton.addEventListener("click", () => {
        let score = 0;
        let answered = 0;
        const feedbacks = miniTest.querySelectorAll(".mini-feedback");
        quiz.forEach((question, questionIndex) => {
          const selected = miniTest.querySelector(`input[name="math-${topic.id}-${sectionIndex}-quiz-${questionIndex}"]:checked`);
          const hasAnswer = Boolean(selected);
          const isCorrect = hasAnswer && Number(selected.value) === question.correct;
          if (hasAnswer) answered += 1;
          if (isCorrect) score += 1;
          feedbacks[questionIndex].hidden = false;
          feedbacks[questionIndex].textContent = hasAnswer
            ? `${isCorrect ? "Bonne réponse." : "À revoir."} ${question.feedback}`
            : "Choisis une réponse pour cette question, puis vérifie à nouveau.";
          feedbacks[questionIndex].classList.toggle("correct", Boolean(isCorrect));
          feedbacks[questionIndex].classList.toggle("wrong", hasAnswer && !isCorrect);
        });
        const percentage = Math.round((score / quiz.length) * 100);
        result.hidden = false;
        result.textContent = `Score : ${score}/${quiz.length} (${percentage}%). Réponses complétées : ${answered}/${quiz.length}.`;
      });
    }

    function showSubtopic(index) {
      const section = topic.sections[index] || topic.sections[0];
      subtopicContent.innerHTML = `
        <article class="revision-content-card active rich-content">
          ${section.html}
        </article>
      `;
      subtopicButtons.forEach((button) => {
        button.classList.toggle("active", Number(button.dataset.subtopic) === index);
      });
      renderSectionQuiz(section, index);
    }

    subtopicButtons.forEach((button) => {
      button.addEventListener("click", () => showSubtopic(Number(button.dataset.subtopic)));
    });

    showSubtopic(0);
  }

  function activateTopic(topicId) {
    list.querySelectorAll(".revision-topic-button").forEach((item) => {
      item.classList.toggle("active", item.dataset.topic === topicId);
    });
    if (topicSelect) topicSelect.value = topicId;
    showTopic(topicId);
  }

  list.querySelectorAll(".revision-topic-button").forEach((button) => {
    button.addEventListener("click", () => activateTopic(button.dataset.topic));
  });

  if (topicSelect) {
    topicSelect.addEventListener("change", () => activateTopic(topicSelect.value));
  }

  activateTopic(mathRevisionTopics[0].id);
}

renderMathRevision();

let currentQuestion = 0;
let answers = Array(quizQuestions.length).fill(null);
let timerId = null;
let remainingSeconds = demoTests[activeDemoKey].duration;
let started = false;

const quizArea = document.querySelector("#quiz-area");
const resultArea = document.querySelector("#result-area");
const timer = document.querySelector("#timer");
const progressLabel = document.querySelector("#progress-label");
const progressFill = document.querySelector("#progress-fill");
const startButton = document.querySelector("#start-test");

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function normalizeAnswer(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(",", ".");
}

function isQuizAnswerCorrect(question, answer) {
  if (question.type === "input") {
    return question.accepted.some((item) => normalizeAnswer(item) === normalizeAnswer(answer));
  }
  return answer === question.correct;
}

function answeredCount() {
  return answers.filter((answer) => answer !== null && String(answer).trim() !== "").length;
}

function updateProgress() {
  const answered = answeredCount();
  progressLabel.textContent = `${answered}/${quizQuestions.length}`;
  progressFill.style.width = `${(answered / quizQuestions.length) * 100}%`;
}

function renderDemoIntro() {
  const test = demoTests[activeDemoKey];
  resultArea.hidden = true;
  quizArea.innerHTML = `
    <div class="demo-choice" aria-label="Choisir le test d&eacute;mo">
      ${Object.entries(demoTests)
        .map(([key, item]) => `<button class="${key === activeDemoKey ? "active" : ""}" type="button" data-demo="${key}">${item.label}</button>`)
        .join("")}
    </div>
    <h3>Pr&ecirc;t &agrave; commencer ?</h3>
    <p class="quiz-question">${test.description}</p>
  `;

  quizArea.querySelectorAll("[data-demo]").forEach((button) => {
    button.addEventListener("click", () => selectDemoTest(button.dataset.demo));
  });
}

function selectDemoTest(key) {
  if (!demoTests[key]) return;
  clearInterval(timerId);
  activeDemoKey = key;
  quizQuestions = demoTests[activeDemoKey].questions;
  answers = Array(quizQuestions.length).fill(null);
  currentQuestion = 0;
  remainingSeconds = demoTests[activeDemoKey].duration;
  started = false;
  startButton.textContent = "Démarrer le test";
  timer.textContent = formatTime(remainingSeconds);
  updateProgress();
  renderDemoIntro();
}

function renderQuiz() {
  const item = quizQuestions[currentQuestion];
  const savedAnswer = answers[currentQuestion];
  quizArea.innerHTML = `
    <p class="eyebrow">${item.subject} - ${item.category || "Test EVA"} - Question ${currentQuestion + 1} sur ${quizQuestions.length}</p>
    <h3>${item.question}</h3>
    ${item.type === "input" ? `
      <label class="demo-input-label" for="demo-answer">R&eacute;ponse :</label>
      <input class="demo-answer-input" id="demo-answer" type="text" value="${savedAnswer ?? ""}" autocomplete="off" />
    ` : `
      <div class="answers">
        ${item.answers
          .map((answer, index) => {
            const selected = savedAnswer === index ? " correct" : "";
            return `<button class="answer-button${selected}" type="button" data-choice="${index}">${answer}</button>`;
          })
          .join("")}
      </div>
    `}
    <div class="quiz-nav">
      <button class="button secondary" type="button" id="prev-question">Pr&eacute;c&eacute;dente</button>
      <button class="button primary" type="button" id="next-question">${currentQuestion === quizQuestions.length - 1 ? "Terminer" : "Suivante"}</button>
    </div>
  `;

  if (item.type === "input") {
    const input = quizArea.querySelector("#demo-answer");
    input?.addEventListener("input", () => {
      answers[currentQuestion] = input.value;
      updateProgress();
    });
    input?.focus();
  } else {
    quizArea.querySelectorAll(".answer-button").forEach((button) => {
      button.addEventListener("click", () => {
        answers[currentQuestion] = Number(button.dataset.choice);
        updateProgress();
        renderQuiz();
      });
    });
  }

  document.querySelector("#prev-question").addEventListener("click", () => {
    currentQuestion = Math.max(0, currentQuestion - 1);
    renderQuiz();
  });

  document.querySelector("#next-question").addEventListener("click", () => {
    if (currentQuestion === quizQuestions.length - 1) {
      finishQuiz();
      return;
    }
    currentQuestion += 1;
    renderQuiz();
  });
}

function startQuiz() {
  started = true;
  answers = Array(quizQuestions.length).fill(null);
  currentQuestion = 0;
  remainingSeconds = demoTests[activeDemoKey].duration;
  resultArea.hidden = true;
  startButton.textContent = "Relancer le test";
  timer.textContent = formatTime(remainingSeconds);
  updateProgress();
  renderQuiz();

  clearInterval(timerId);
  timerId = setInterval(() => {
    remainingSeconds -= 1;
    timer.textContent = formatTime(Math.max(remainingSeconds, 0));
    if (remainingSeconds <= 0) finishQuiz();
  }, 1000);
}

function finishQuiz() {
  clearInterval(timerId);
  const correct = quizQuestions.reduce((score, question, index) => {
    return score + (isQuizAnswerCorrect(question, answers[index]) ? 1 : 0);
  }, 0);
  const percentage = Math.round((correct / quizQuestions.length) * 100);
  const answered = answeredCount();
  const test = demoTests[activeDemoKey];
  const categoryStats = quizQuestions.reduce((stats, question, index) => {
    const key = question.category || question.subject;
    if (!stats[key]) stats[key] = { total: 0, correct: 0 };
    stats[key].total += 1;
    if (isQuizAnswerCorrect(question, answers[index])) stats[key].correct += 1;
    return stats;
  }, {});
  quizArea.innerHTML = "";
  resultArea.hidden = false;
  resultArea.innerHTML = `
    <h3>R&eacute;sultat final</h3>
    <p>Correction automatique termin&eacute;e. Le test d&eacute;mo <strong>${test.label}</strong> contient ${quizQuestions.length} questions avec une r&eacute;partition inspir&eacute;e des domaines EVA.</p>
    <div class="result-grid">
      <div><strong>${correct}</strong><span>R&eacute;ponses correctes</span></div>
      <div><strong>${percentage}%</strong><span>Pourcentage</span></div>
      <div><strong>${answered}</strong><span>Questions r&eacute;pondues</span></div>
    </div>
    <div class="grammar-table-wrap">
      <table class="grammar-table">
        <thead><tr><th>Domaine</th><th>Score</th><th>Pourcentage</th></tr></thead>
        <tbody>
          ${Object.entries(categoryStats).map(([category, stat]) => {
            const pct = Math.round((stat.correct / stat.total) * 100);
            return `<tr><td>${category}</td><td>${stat.correct}/${stat.total}</td><td>${pct}%</td></tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
  started = false;
  startButton.textContent = "Relancer le test";
}

startButton.addEventListener("click", startQuiz);

if (timer) timer.textContent = formatTime(remainingSeconds);
if (progressLabel) progressLabel.textContent = `0/${quizQuestions.length}`;

renderDemoIntro();

const pageSections = [...document.querySelectorAll("[data-page]")];
const pageNames = new Set(pageSections.map((section) => section.dataset.page));

function resolveRoute() {
  const hash = window.location.hash.replace("#", "");

  if (!hash) {
    return { page: "accueil", target: null };
  }

  if (pageNames.has(hash)) {
    return { page: hash, target: null };
  }

  const target = document.getElementById(hash);
  const page = target?.closest("[data-page]")?.dataset.page;
  return { page: page || "accueil", target };
}

function showPage() {
  const { page, target } = resolveRoute();

  pageSections.forEach((section) => {
    section.hidden = section.dataset.page !== page;
  });

  navLinks.forEach((link) => {
    const route = link.getAttribute("href")?.replace("#", "");
    link.classList.toggle("active", route === page);
  });

  if (target) {
    requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    return;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("hashchange", showPage);
showPage();
