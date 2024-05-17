function setCorrectAnswers(questions) {
  let questionsArray = [...questions];
  for (let i = 0; i < questionsArray.length; i++) {
    const question = questionsArray[i];
    if (questionsArray[i].type == "MULTIPLE_CHOICE") {
      questionsArray[i].choices.forEach((choice, index) => {
        if (choice.isCorrectAnswer) {
          questionsArray[i].answer = String.fromCharCode(65 + index);
          questionsArray[i].answerValue = choice.value;
        }
        questionsArray[i][choice.value] = String.fromCharCode(65 + index);
      });
      delete questionsArray[i].choices;
    }
  }
  return questionsArray;
}

function analysisOfAnswers2(dataMatrix, questions, metaData) {
  console.log("analysing answers......\n");

  let questionsSet = setCorrectAnswers(questions);
  // console.log(questionsSet)

  let output = [];
  let noQuestions = questionsSet.length;
  let noOfResponses = dataMatrix.length; // -1 here is so that the matrix header is not included in count

  let dataStartColumn = metaData.collectsEmail ? 3 : 2;
  let questionCounter = 0;
  let answersStartColumn = metaData.collectsEmail ? 3 : 2;
  // Focussing on looping through only questions and student responces
  for (let i = 1; i < noOfResponses; i++) {
    // i represents the row of the data

    for (let j = 0; j < noQuestions; j++) {
      // j represents the column of the question matrix
      if (questionsSet[j].type == "MULTIPLE_CHOICE") {
        //let name = metaData.collectsEmail ? dataMatrix[i][3] : dataMatrix[i][2];

        let userAnswer = "" + dataMatrix[i][j + dataStartColumn]; // adding offset of where the data actually starts from in the trix
        let question = questionsSet[j];
        if (!question.respFreqString) question.respFreqString = "";
        // console.log(question, String(userAnswer), question[String(userAnswer)], '\n')
        if (question[String(userAnswer)]) {
          question.respFreqString += question[String(userAnswer)];
        } else {
        }
        // Putting the question back into it's place
        questionsSet[j] = question;
        //output.push(question)
      } else {
      } //console.log(`The question type is ${questionsSet[j].type} and j is ${j}`)
    }
  }
  questionsSet.forEach((question, index) => {
    //console.log("inside q ",question)
    if (question.respFreqString) {
      questionsSet[index].respFreq = frequencyCount(
        questionsSet[index].respFreqString
      );
    }
  });
  return questionsSet;
}

/* Compiles all submitted answers letters into question array */
function analysisOfAnswers(responses, questionsArray) {
  for (let i = 0; i < responses.length; i++) {
    let submission = responses[i].responses;

    for (let j = 0; j < submission.length; j++) {
      let question = submission[j];
      if (question.choices) {
        let choice = getCorrectAnswer(question);
        questionsArray[j].answer = choice.correctAnswer;
        questionsArray[j].respFreqString =
          questionsArray[j].respFreqString + "" + choice.submittedAnswer;
        if (questionsArray[j].respFreqString) {
          questionsArray[j].respFreq = frequencyCount(
            questionsArray[j].respFreqString
          );
        }
      }
    }
  }
  return questionsArray;
}

function getCorrectAnswer(submission) {
  let res = { submittedAnswer: "", correctAnswer: "" };
  let choices = submission.choices;
  for (let i = 0; i < choices.length; i++) {
    let choice = choices[i];
    if (submission.response == choice.value) {
      res.submittedAnswer = String.fromCharCode(65 + i);
    }
    if (choice.isCorrectAnswer) {
      // Return corresponding answer Letter eg A,B,C,D. 65 is charCode of 'A'
      res.correctAnswer = String.fromCharCode(65 + i);
      // write code later for multiple correct answers like in US tests
    }
  }
  return res;
}

function frequencyCount(answerString) {
  let answerArray = answerString.split("");
  let answerMap = {};
  for (let answer of answerArray) {
    if (!answerMap[answer]) answerMap[answer] = 0;
    answerMap[answer] += 1;
  }
  return answerMap;
}

/* Compiles raw sccore of each Student submission */
function compileStudentRawScore(responsesArray) {
  let score = 0;
  for (let i = 0; i < responsesArray.length; i++) {
    let oneStudentSubmission = responsesArray[i];
    for (let j = 0; j < oneStudentSubmission.responses.length; j++) {
      const question = oneStudentSubmission.responses[j];
      score += question.score;
    }
    oneStudentSubmission.rawScore = score;
  }

  return numberRank(responsesArray.sort(rank));
}

/* 
I'm doig this and other computed fxns here becasue I dont want to slow down
an already slow google apps scripts server
 */
function getTotalPoints(questionsArray) {
  let totalPoints = 0;
  for (let i = 0; i < questionsArray.length; i++) {
    const question = questionsArray[i];
    question.points ? (totalPoints += question.points) : (totalPoints += 0);
  }
  return totalPoints;
}

function rank(a, b) {
  if (a.score < b.score) return 1;
  if (a.score > b.score) return -1;
  return 0;
}

function numberRank(sortedArray) {
  for (let i = 0; i < sortedArray.length; i++) {
    let submission1 = sortedArray[i];
    let submission2 = sortedArray[i + 1] ? sortedArray[i + 1] : sortedArray[i];
    if (submission1.rawScore > submission2.rawScore) {
      submission1.rank = i + 1;
      sortedArray[i] = submission1;
    } else if (submission1.rawScore == submission2.rawScore) {
      submission1.rank = i + 1;
      submission2.rank = i + 1;
      sortedArray[i] = submission1;
      sortedArray[i + 1] = submission2;
      i++;
    }
  }
  return sortedArray;
}

function totalQuizScore(questions) {
  let totalScore = 0;
  questions.forEach((question) => {
    totalScore += question.points ? question.points : 0;
  });
  return totalScore;
}

function processDataMatrix(dataMatrix, questions, metaData) {
  console.log("Number of responses:", dataMatrix.length);
  let output = [];
  let noQuestions = questions.length;
  let noOfResponses = dataMatrix.length;
  let questionCounter = 0;
  const uploaded = metaData.uploaded;
  let dataStartColumn = metaData.collectsEmail ? 3 : 2;
  // Focussing on looping through only questions and student responces
  for (let i = 1; i < noOfResponses; i++) {
    // i represents the row of the data
    console.log(
      "Analyzing response number",
      i,
      "for",
      dataMatrix[i][dataStartColumn]
    );
    let itemResponse = {};
    itemResponse.responses = [];
    itemResponse.responseNumber = i; //+ 1;
    itemResponse.score = metaData.collectsEmail
      ? dataMatrix[i][2]
      : dataMatrix[i][1];
    itemResponse.percentage = itemResponse.name = metaData.collectsEmail
      ? dataMatrix[i][3]
      : dataMatrix[i][2];
    itemResponse.rank = i;
    let trimmedData = [...dataMatrix[i].slice(dataStartColumn)];
    for (let j = 0; j < noQuestions; j++) {
      // j < dataMatrix[i].length // j represents the column of the 2x2 matrix
      itemResponse.responses.push({
        title: dataMatrix[0][j + dataStartColumn],
        response: trimmedData[j],
      });
      questionCounter++;
    }
    questionCounter = 1;
    output.push(itemResponse);
  }
  console.log("Output length before ranking:", output.length);
  const sortedArray = output.sort(rank);
  // console.log(sortedArray)
  // Sorting out proper ranking values
  return sortedArray;
  //return output;
}

module.exports = {
  analysisOfAnswers,
  analysisOfAnswers2,
  totalQuizScore,
  compileStudentRawScore,
  getTotalPoints,
  processDataMatrix,
};
