"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Crown, ArrowRight } from "lucide-react";

const questions = [
  {
    question: "Do you judge people based on the color of their skin?",
    options: [
      { label: "Yes", score: "aurangzeb" },
      { label: "No", score: "akbar" },
    ],
  },
  {
    question: "Do you like the idea of one state enforced religion?",
    options: [
      { label: "Yes", score: "aurangzeb" },
      { label: "No", score: "akbar" },
    ],
  },
  {
    question: "Do you like religious monuments?",
    options: [
      { label: "Yes", score: "akbar" },
      { label: "No", score: "aurangzeb" },
    ],
  },
  {
    question: "Do you like unfair taxes?",
    options: [
      { label: "Yes", score: "aurangzeb" },
      { label: "No", score: "akbar" },
    ],
  },
  {
    question: "Do you hate people who practice different religions?",
    options: [
      { label: "Yes", score: "aurangzeb" },
      { label: "No", score: "akbar" },
    ],
  },
];

export function QuizComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<string>("");
  const router = useRouter();

  const handleNext = () => {
    if (selectedOption) {
      const newAnswers = [...answers, selectedOption];
      setAnswers(newAnswers);
      
      if (currentQuestion === questions.length - 1) {
        const finalResult = calculateResult(newAnswers);
        setResult(finalResult);
        setShowResult(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption("");
      }
    }
  };

  const calculateResult = (allAnswers: string[]) => {
    const akbarCount = allAnswers.filter(answer => answer === "akbar").length;
    const aurangzebCount = allAnswers.filter(answer => answer === "aurangzeb").length;
    return akbarCount > aurangzebCount ? "akbar" : "aurangzeb";
  };

  if (showResult) {
    localStorage.setItem("result", result);
    return (
      <div className="space-y-8 text-center">
        <Crown className="h-16 w-16 mx-auto text-primary" />
        <h2 className="text-3xl font-bold">
          You are an {result === "akbar" ? "Akbar!" : "Aurangzeb!"}
        </h2>
        <p className="text-lg text-muted-foreground">
          {result === "akbar" 
            ? "Like Akbar, you show traits of tolerance, inclusivity, and progressive thinking."
            : "Like Aurangzeb, you show traits of traditional values and strong convictions."}
        </p>
        <Button 
          onClick={() => router.push(`/${result}`)}
          size="lg"
          className="gap-2"
        >
          Explore More <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          Question {currentQuestion + 1} of {questions.length}
        </h2>
        <p className="text-lg">{questions[currentQuestion].question}</p>
        
        <RadioGroup
          value={selectedOption}
          onValueChange={setSelectedOption}
          className="space-y-4"
        >
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={option.score} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Button 
        onClick={handleNext}
        disabled={!selectedOption}
        className="w-full"
      >
        {currentQuestion === questions.length - 1 ? "See Results" : "Next Question"}
      </Button>
    </div>
  );
}