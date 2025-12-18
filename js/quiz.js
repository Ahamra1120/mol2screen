const quizData = [
    {
      q: "What is the main function of the GLP-1 hormone in the human body?",
      options: [
        "Increases blood pressure and heart rate",
        "Stimulates insulin release and lowers blood glucose levels",
        "Inhibits insulin production in the pancreas",
        "Speeds up protein breakdown in the liver"
      ],
      answer: 1
    },
    {
      q: "Juanleoxy Fahrulanoside is developed as a compound with potential to...",
      options: [
        "Cure viral infections",
        "Inhibit fat-breaking enzymes",
        "Stimulate GLP-1 receptors to help control diabetes",
        "Block insulin production"
      ],
      answer: 2
    },
    {
      q: "Why is activation of GLP-1 receptors important in type 2 diabetes therapy?",
      options: [
        "Because it can increase blood glucose levels",
        "Because it can enhance insulin secretion depending on glucose levels",
        "Because it decreases beta cell activity in the pancreas",
        "Because it accelerates gastric digestion"
      ],
      answer: 1
    },
    {
      q: "One potential advantage of Juanleoxy Fahrulanoside compared to conventional GLP-1 agonist drugs is...",
      options: [
        "Faster absorption in the digestive system",
        "No side effects at all",
        "High stability and strong binding ability to GLP-1 receptors",
        "Works without requiring insulin"
      ],
      answer: 2
    },
    {
      q: "GLP-1 works by increasing insulin secretion and...",
      options: [
        "Increasing glucagon release",
        "Slowing gastric emptying and suppressing appetite",
        "Reducing insulin sensitivity",
        "Speeding up carbohydrate digestion"
      ],
      answer: 1
    }
  ];
  
  let current = 0;
  
  const qText = document.getElementById('question-text');
  const optionsDiv = document.getElementById('options');
  const statusText = document.getElementById('status');
  const nextBtn = document.getElementById('next-btn');
  const progress = document.getElementById('progress');
  
  function loadQuestion() {
    const item = quizData[current];
    qText.textContent = item.q;
  
    optionsDiv.innerHTML = '';
    statusText.textContent = '';
    nextBtn.style.display = 'none';
  
    progress.textContent = `${current + 1}/${quizData.length}`;
  
    item.options.forEach((opt, index) => {
      const btn = document.createElement('button');
      btn.textContent = opt;
      btn.classList.add('option');
      btn.onclick = () => checkAnswer(index, item.answer);
      optionsDiv.appendChild(btn);
    });
  }
  
  function checkAnswer(selected, correct) {
    const allButtons = document.querySelectorAll('.option');
    allButtons.forEach(btn => btn.disabled = true);
  
    if (selected === correct) {
      statusText.textContent = "✅ Correct!";
      statusText.style.color = "#00c96b";
    } else {
      statusText.textContent = "❌ Wrong!";
      statusText.style.color = "#ff5252";
    }
  
    nextBtn.style.display = 'inline-block';
  }
  
  nextBtn.onclick = () => {
    current++;
    if (current < quizData.length) {
      loadQuestion();
    } else {
      qText.textContent = "🎉 Quiz Completed!";
      optionsDiv.innerHTML = "";
      statusText.textContent = "You’ve learned about GLP-1 and Juanleoxy Fahrulanoside!";
      nextBtn.style.display = 'none';
      progress.textContent = "";
    }
  };
  
  loadQuestion();
  