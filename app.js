const quiz = [
  {
    qusetion: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
    'スーパファミコン',
    'プレステーション２',
    '任天度スイッチ',
    'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  },{
    qusetion: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [
    'MOTHERS2',
    'スーパーマリオブラザーズ３',
    'スーパドンキーコング',
    '星のカービィ'
    ],
    correct: 'MOTHERS2'
  },{
    qusetion: 'FFIVの主人公の名前は？',
    answers: [
    'フリオニール',
    'クラウド',
    'ティーダ',
    'セシル'
    ],
    correct: 'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// 問題文、選択肢を定義
const　setQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].qusetion;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
      window.alert('正解！');
    }else{
      window.alert('不正解！');
    }

    quizIndex++;
    if(quizIndex < quizLength){
      // まだ問題ある
      setQuiz();
    }else{
      // 結果画面へ
      window.alert('終了！')
    }

};

let handleIndex = 0;
  while(handleIndex < buttonLength){
    $button[handleIndex].addEventListener('click', (e) =>{
    clickHandler(e);
  });
  handleIndex++;
}



// console.log();






