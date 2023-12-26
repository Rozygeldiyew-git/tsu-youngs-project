



const quizData = [
    {
      question: 'Kibernetika näme?',
      options: ['Emeli intellekt barada ylym', 'Gözegçilik prosessleriniň we maşynlarda, janly organizmlerde, jemgyýetde maglumat geçirilişiniň umumy kanunalaýyklary baradaky ylym', 'Maglumat howpsuzlygy baradaky ylym', 'Adam pikirlenişiniň formalary we kanunalaýyklyklary baradaky ylym'],
      answer: 'Gözegçilik prosessleriniň we maşynlarda, janly organizmlerde, jemgyýetde maglumat geçirilişiniň umumy kanunalaýyklary baradaky ylym',
    },
    {
      question: 'Netijeli howpsuzlyk programmasy haýsysyny deňagramly ulanylmagyny talap edýär?',
      options: ['Tehniki we tehniki däl usullar', 'Garşylyk çäreleri we goranyş mehanizmleri', 'Fiziki howpsuzlyk we tehniki gorag serişdeleri', 'Howpsuzlyk we şifrlemek proseduralary'],
      answer: 'Tehniki we tehniki däl usullar',
    },
    {
      question: 'Maglumat ulgamlaryny kiberhowplardan goramak üçin haýsy işler ýerine ýetirmeli?',
      options: ['içki tor bilen Internet torunyň fiziki taýdan aýrybaşga bolmagy', 'ygtyýarnamaly antiwirus gorag serişdeleri ulanmak', 'kompýuterleriň bloklaryny plombalamak', 'hemmesini'],
      answer: 'hemmesini',
    },
    {
      question: 'gmail.com elektron poçta ulgamy arkaly nähili ölçegden uly maglumaty ugradyp bolmaýar?',
      options: ['5Mb', 'Çäklenmeýär', '25Mb', '100Mb'],
      answer: '25Mb',
    },
    {
      question: 'Ikibelgili san öz sifrleriniň ikisine hem köpeldilende üç sifri birmeňzeş bolan san alynýar. Şeýle sanlaryň mukdary näçe?',
      options: [
        '10',
        '1',
        '3',
        '5',
      ],
      answer: '10',
    },
    {
      question: 'IPv4 we IPv6 naçe baýtdan ybarat?',
      options: ['4 baýt we 16 baýt', '32 baýt we 64 baýt', '4 bit we 16 bit', '4 baýt we 6 baýt'],
      answer: '4 baýt we 16 baýt',
    },
    {
      question: 'Eger toruň prefiksi /16 bolsa ol näçe adres alyp bilýär?',
      options: [
        '512',
        '1024',
        '65534',
        '4 294 967 296',
      ],
      answer: '65534',
    },
    {
      question: 'Elektron tablisada nämäni ýok edip bolanok?',
      options: ['Öýjügiň adyny', 'Sütüni ýa-da setiri', 'Öýjügiň düzümini', 'Öýjügiň stilini'],
      answer: 'Öýjügiň adyny',
    },
    {
      question: 'Wideoadapter näme?',
      options: [
        'Monitoryň işini dolandyryjy gurluş',
        'Wideolaryň göwrümini kiçeldýän gurluş',
        'Grafiki şekiller barada maglumat berýär',
        'Monitor',
      ],
      answer: 'Monitoryň işini dolandyryjy gurluş',
    },
    {
      question: 'Elektron poçta arkaly şularyň haýsy birini amala aşyrmak mümkin däl ?',
      options: ['Hat ibermek', 'Iberiljek faýllary arhiwe salmak', 'Howply faýllary spama ibermek', 'Iberilen hatlary görmek'],
      answer: 'Iberiljek faýllary arhiwe salmak',
    },
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `Siz ${quizData.length} soragdan ${score} soraga dogry jogap berip bildiňiz!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Sorag:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Siziň jogabyňyz:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Dogry jogap:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>Siz ${quizData.length} soragdan ${score} soraga dogry jogap berip bildiňiz!</p>
      <p>Ýalňyş jogaplar:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();