import questions.mjs from 'political-compass/app/questions.mjs'
const max_econ, max_dipl, max_govt, max_scty = 0; //Max possible scores

const econ, dipl, govt, scty = 0; //Users scores.

const qn = 0; // Question number

const prev_answer = null;

init_question();

for (let = 0; i < questions.length; i++) {
  max_econ += Math.abs(questions[i].effect.econ)
  max_dipl += Math.abs(questions[i].effect.dipl)
  max_govt += Math.abs(questions[i].effect.govt)
  max_scty += Math.abs(questions[i].effect.scty)
}

function init_question() {
}

function next_question(mult) {
  econ += mult*questions[qn].effect.econ
  dipl += mult*questions[qn].effect.dipl
  govt += mult*questions[qn].effect.govt
  scty += mult*questions[qn].effect.scty
  qn++;
  prev_answer = mult;
  if (qn < questions.length) {
    init_question();
  } else {
    results();
  }
}
function prev_question() {
  if (prev_answer == null) {
    return;
  }
  qn--;
  econ -= prev_answer * questions[qn].effect.econ;
  dipl -= prev_answer * questions[qn].effect.dipl;
  govt -= prev_answer * questions[qn].effect.govt;
  scty -= prev_answer * questions[qn].effect.scty;
  prev_ans = null;
  init_question();
}
function calc_score(score, max) {
  return (100*(max+score)/(2*max)).toFixed(1);
}
