"use client";

import { QuizComponent } from "@/components/quiz/quiz-component";
import { Card, CardContent } from "@/components/ui/card";

export default function QuizPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Are You an Akbar or an Aurangzeb?</h1>
        <Card>
          <CardContent className="pt-6">
            <QuizComponent />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}