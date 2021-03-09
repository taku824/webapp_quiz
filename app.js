const quiz = [
  {
    qusetion: '地球上でもっとも血圧が高い動物は？',
    answers: [
    '人間',
    'チンパンジー',
    'ゾウ',
    'キリン'
    ],
    correct: 'キリン',
    comment: '人間の最高血圧が、健康な人の場合120mmHg前後なのに対し、キリンの場合、心臓に最も近いところで約260mmHgにもなるという。'
  },{
    qusetion: 'ゴリ押しの「ゴリ」ってなんのゴリ？',
    answers: [
    'ゴリラ',
    '懲り懲り',
    '小魚のゴリ',
    'ゴリゴリという音'
    ],
    correct: '小魚のゴリ',
    comment: '石にへばりついたゴリを追い込む「ゴリ押し漁」の様子から、「ゴリ押し」という言葉が生まれたという。'
  },{
  	qusetion: 'オーストラリアの世界遺産「エアーズロック」の地上に出ている部分の割合は？',
    answers: [
    '1%未満',
    '約５％',
    '約５０％',
    '約１００％'
    ],
    correct: '約５％',
    comment: '残り９５％は数キロに渡り地中に埋まっていると言われている。'
  },{
  	qusetion: '日本で一番多いものは？',
    answers: [
    '電車の駅',
    '病院',
    '歯医者',
    'コンビニ'
    ],
    correct: '歯医者',
    comment: '歯科医院の数は6万8872軒、コンビニの店舗数は5万5322軒（2017年調査）'
  },{
    qusetion: '自動販売機で10円玉は何枚まで使える？',
    answers: [
    '10枚',
    '20枚',
    '30枚',
    '50枚以上'
    ],
    correct: '20枚',
    comment: 'たとえば、駅券売機で210円の切符を購入する場合、10円玉21枚では購入できない。これは、同一硬貨が強制力をもって使えるのは20枚までと定めた「通貨の単位及び貨幣の発行等に関する法律第7条」に則っているためで、21枚目を入れた途端にシステムがロックされ、硬貨がすべて返却口に戻ってくるよう、制限機能が設定されている。'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
let level = ''

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
      window.alert('正解！' + quiz[quizIndex].comment);
      score++;
    }else{
      window.alert('不正解！正解は' + quiz[quizIndex].correct + '!' + quiz[quizIndex].comment);
    }

    quizIndex++;
    if(quizIndex < quizLength){
      // まだ問題ある
      setQuiz();
    }else{
      // 結果画面へ
    	if(score > 4){
    		level = 'すごい！雑学博士だ！';
      	}
      window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！' + level);
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






