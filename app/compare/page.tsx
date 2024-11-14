"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Crown, Users, Scroll, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ComparePage() {
  const commonTraits = [
    "Both were Muslim",
    "Both maintained peace",
    "Both ruled ~same area"
  ];

  const akbarTraits = [
    "Central government",
    "Religious tolerance",
    "Support of arts and cultures",
    "Abolished Jizya Tax"
  ];

  const aurangzebTraits = [
    "Gave military all power",
    "Religious intolerance",
    "Didn't support different religions",
    "Used religion in politics",
    "Reinstated Jizya Tax"
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Comparing the Rulers</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 h-full bg-primary/5">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Crown className="h-6 w-6" />
                <h2 className="text-2xl font-semibold">Akbar</h2>
              </div>
              <ul className="space-y-2">
                {akbarTraits.map((trait, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {trait}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6 h-full bg-secondary/10">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                <h2 className="text-2xl font-semibold">Common Traits</h2>
              </div>
              <ul className="space-y-2">
                {commonTraits.map((trait, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    {trait}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6 h-full bg-primary/5">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Scroll className="h-6 w-6" />
                <h2 className="text-2xl font-semibold">Aurangzeb</h2>
              </div>
              <ul className="space-y-2">
                {aurangzebTraits.map((trait, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {trait}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>
      </div>
      <div className="flex justify-center mt-12">
        <Link href="/activity">
          <Button 
            size="lg"
            className="group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
            Try the Crossword <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}