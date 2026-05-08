import { useState } from "react";
import { quizQuestions, quizResults } from "../../data/quiz";
import { clans } from "../../data/clans";
import { cn } from "@/lib/utils";

export default function ClanQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const question = quizQuestions[currentQuestion];
  const totalQuestions = quizQuestions.length;
  const progress = ((currentQuestion + (selectedOption !== null ? 1 : 0)) / totalQuestions) * 100;

  function handleSelect(index: number) {
    setSelectedOption(index);
  }

  function handleNext() {
    if (selectedOption === null) return;

    const chosenClan = question.options[selectedOption].clan;
    const newScores = { ...scores, [chosenClan]: (scores[chosenClan] || 0) + 1 };
    setScores(newScores);

    if (currentQuestion + 1 >= totalQuestions) {
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  }

  function handleRestart() {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScores({});
    setShowResult(false);
  }

  function getResult() {
    let maxScore = 0;
    let winningClan = "thunderclan";
    for (const [clan, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score;
        winningClan = clan;
      }
    }
    return quizResults.find((r) => r.clan === winningClan) ?? quizResults[0];
  }

  if (showResult) {
    const result = getResult();
    const clan = clans.find((c) => c.slug === result.clan);

    return (
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-br from-forest-700 to-forest-900 p-8 text-center text-white">
            <span className="text-6xl block mb-4">{clan?.symbol}</span>
            <h2 className="text-2xl font-bold font-[Georgia,serif]">{result.title}</h2>
          </div>
          <div className="p-6 text-center">
            <p className="text-earth-700 leading-relaxed mb-6">{result.description}</p>
            {clan && (
              <p className="text-sm text-earth-500 italic mb-6">
                "{clan.motto}" &mdash; {clan.name}
              </p>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleRestart}
                className="px-6 py-2.5 bg-forest-700 text-white font-medium rounded-lg hover:bg-forest-800 transition-colors text-sm"
              >
                Take Again
              </button>
              {clan && (
                <a
                  href={`/clans/${clan.slug}`}
                  className="px-6 py-2.5 border-2 border-forest-300 text-forest-700 font-medium rounded-lg hover:bg-forest-50 transition-colors text-sm"
                >
                  Learn About {clan.name}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-earth-500 mb-2">
          <span>Question {currentQuestion + 1} of {totalQuestions}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-earth-200 rounded-full h-2.5">
          <div
            className="bg-gold-500 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-forest-800 p-6">
          <h2 className="text-lg font-bold text-white font-[Georgia,serif]">{question.question}</h2>
        </div>
        <div className="p-6 space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={cn(
                "w-full text-left p-4 rounded-xl border-2 transition-all text-sm leading-relaxed",
                selectedOption === index
                  ? "border-gold-500 bg-gold-500/10 text-forest-900"
                  : "border-earth-200 hover:border-earth-300 text-earth-700 hover:bg-earth-50"
              )}
            >
              {option.text}
            </button>
          ))}
        </div>
        <div className="px-6 pb-6">
          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={cn(
              "w-full py-3 rounded-lg font-medium text-sm transition-all",
              selectedOption !== null
                ? "bg-forest-700 text-white hover:bg-forest-800 cursor-pointer"
                : "bg-earth-200 text-earth-400 cursor-not-allowed"
            )}
          >
            {currentQuestion + 1 >= totalQuestions ? "See My Result" : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
}
