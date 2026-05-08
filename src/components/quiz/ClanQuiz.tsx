import { useState } from "react";
import { quizQuestions, quizResults, generateWarriorName } from "../../data/quiz";
import { clans } from "../../data/clans";
import { cn, url } from "@/lib/utils";

function PawIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <ellipse cx="6" cy="9" rx="2.2" ry="2.8" />
      <ellipse cx="10" cy="6" rx="2" ry="2.6" />
      <ellipse cx="14" cy="6" rx="2" ry="2.6" />
      <ellipse cx="18" cy="9" rx="2.2" ry="2.8" />
      <path d="M6 16 C6 12, 18 12, 18 16 C18 19, 14 21, 12 21 C10 21, 6 19, 6 16 Z" />
    </svg>
  );
}

function WarriorNameCard({ clanSlug }: { clanSlug: string }) {
  const [name, setName] = useState(() => generateWarriorName(clanSlug));
  return (
    <div
      className="mx-auto my-2 mb-5 px-5 py-[18px] rounded-[14px] text-center border"
      style={{
        background: "linear-gradient(135deg, oklch(0.97 0.02 80) 0%, oklch(0.93 0.05 80) 100%)",
        borderColor: "oklch(0.78 0.16 80 / 0.35)",
        animation: "nameReveal 0.8s 1.0s ease-out backwards",
      }}
    >
      <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-earth-600 mb-1.5">
        Your Warrior Name
      </p>
      <p className="font-[Georgia,serif] font-bold text-[30px] leading-tight text-forest-900">
        {name}
      </p>
      <button
        className="mt-2.5 text-xs font-medium text-forest-700 bg-transparent border-0 px-2 py-1 rounded-md hover:bg-[oklch(0.78_0.16_80_/_0.20)] transition-colors cursor-pointer"
        onClick={() => setName(generateWarriorName(clanSlug))}
      >
        ↻ Try another
      </button>
    </div>
  );
}

export default function ClanQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const question = quizQuestions[currentQuestion];
  const totalQuestions = quizQuestions.length;

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
      <div className="max-w-[540px] mx-auto py-12 px-4">
        <div className="bg-white rounded-[20px] overflow-hidden shadow-xl">
          <div
            className="p-8 text-center text-white"
            style={{ background: "linear-gradient(135deg, oklch(0.35 0.10 145), oklch(0.20 0.06 145))" }}
          >
            <span className="relative inline-block">
              <span
                className="absolute rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  width: 220,
                  height: 220,
                  marginLeft: -110,
                  marginTop: -110,
                  background: `
                    radial-gradient(closest-side, oklch(0.78 0.16 80 / 0.35) 0%, transparent 70%),
                    conic-gradient(from 0deg,
                      transparent 0deg, oklch(0.78 0.16 80 / 0.35) 8deg, transparent 16deg,
                      transparent 30deg, oklch(0.78 0.16 80 / 0.30) 38deg, transparent 46deg,
                      transparent 60deg, oklch(0.78 0.16 80 / 0.35) 68deg, transparent 76deg,
                      transparent 90deg, oklch(0.78 0.16 80 / 0.30) 98deg, transparent 106deg,
                      transparent 360deg)`,
                  animation: "burstIn 1.2s 0.2s ease-out forwards, burstSpin 18s linear infinite",
                  opacity: 0,
                }}
              />
              <span
                className="text-[64px] leading-none block relative z-10"
                style={{ animation: "symbolPop 0.7s 0.4s cubic-bezier(.34,1.56,.64,1) backwards" }}
              >
                {clan?.symbol}
              </span>
            </span>
            <h2 className="text-[28px] font-bold font-[Georgia,serif] mt-3">{result.title}</h2>
          </div>
          <div className="p-7 text-center">
            <p className="text-[15px] text-earth-700 leading-relaxed mb-4">{result.description}</p>
            {clan && <WarriorNameCard clanSlug={result.clan} />}
            {clan && (
              <p className="font-[Georgia,serif] italic text-sm text-earth-500 mb-6">
                "{clan.motto}" &mdash; {clan.name}
              </p>
            )}
            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={handleRestart}
                className="px-6 py-2.5 bg-forest-700 text-white font-bold text-sm rounded-lg hover:bg-forest-800 transition-colors cursor-pointer"
              >
                Take Again
              </button>
              {clan && (
                <a
                  href={url(`/clans/${clan.slug}`)}
                  className="px-6 py-2.5 border-2 border-earth-300 text-forest-700 font-bold text-sm rounded-lg hover:bg-forest-50 transition-colors"
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
    <div className="max-w-[540px] mx-auto py-12 px-4">
      {/* Paw-print progress */}
      <div className="mb-6">
        <div
          className="flex gap-3.5 items-center justify-center mb-2"
          aria-label={`Question ${currentQuestion + 1} of ${totalQuestions}`}
        >
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <PawIcon
              key={i}
              className={cn(
                "w-7 h-7 transition-all duration-300",
                i < currentQuestion
                  ? "text-gold-500 scale-110"
                  : i === currentQuestion
                    ? "text-gold-400"
                    : "text-earth-200"
              )}
              {...(i === currentQuestion
                ? { style: { animation: "pawPulse 1.4s ease-in-out infinite" } as React.CSSProperties }
                : {})}
            />
          ))}
        </div>
        <p className="text-sm text-earth-500 text-center">
          Question {currentQuestion + 1} of {totalQuestions}
        </p>
      </div>

      {/* Quiz card */}
      <div className="bg-white rounded-[20px] overflow-hidden shadow-xl">
        <div className="bg-forest-800 p-6">
          <h2 className="text-xl font-bold text-white font-[Georgia,serif] leading-snug">
            {question.question}
          </h2>
        </div>
        <div className="p-6 flex flex-col gap-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(index)}
              className={cn(
                "w-full text-left p-4 rounded-xl border-2 transition-all text-sm leading-relaxed cursor-pointer",
                selectedOption === index
                  ? "border-gold-500 bg-[oklch(0.72_0.16_80_/_0.10)] text-forest-900"
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
              "w-full py-3 rounded-lg font-bold text-sm transition-all",
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
