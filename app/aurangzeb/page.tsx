"use client";
import { Sword, Crown, Scale, BookOpen, Tractor } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function AkbarPage() {
  const [result, setResult] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only runs on client side
      const storedResult = localStorage.getItem("result") || "";
      setResult(storedResult);
    }
  }, []);

  console.log(result);
  console.log(result === 'aurangzeb');
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <Crown className="h-16 w-16 mx-auto text-primary" />
          <h1 className="text-4xl font-bold">Aurangzeb</h1>
          <p className="text-muted-foreground">1618-1707</p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Sword className="h-6 w-6" /> Introduction
              </h2>
              <p className="text-lg leading-relaxed">
              Aurangzeb was born on November 3, 1618 in Dhod, Malwa from the emperor Shah Jahān and Mumtaz Mahal. He was the third son and grew up with Muslim orthodoxy. In his youth, he showed great military leadership in battles against the Uzbeks and the Persians. This leadership was also demonstrated against his Oldest brother, Dārā Shikōh, who was supposed to succeed his father for rulership. The battle between the two brothers occurred after their father, Shah Jahān, fell ill (1657). Aurangzeb ultimately won the war and claimed the role of the successor to the throne. Through this battle, Aurangzeb had executed 2 other siblings, a nephew, and a son.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Scale className="h-6 w-6" /> Religious Policy
              </h2>
              <p className="text-lg leading-relaxed">
              The religious rulership of Aurangzeb depicted his devotion to the religion of Islam. Through his leadership came the reintroduction of the Jizya tax. This tax was for the tax of any non-muslim. As well as the implementation of the Sharia laws(rules based on the basic Muslim rules).               </p>
              <p className="text-lg leading-relaxed">
              The people of the Mughal Empire were stopped or even banned from creating religious monuments. The Hindu monuments that were once made were destroyed under Aurangzeb’s reign and the Muslim confession of faith was removed from all coins. 
              </p>
            </div>

            <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2"> <Tractor className="h-6 w-6"/>  Responsibilities of the People</h2>
              <p className="text-lg leading-relaxed">
              During Aurangzeb’s reign the obvious strengthening and increase of political power of the government. This was because of the expansion and strengthening of the military. Also, those who were once colleagues to the ruler became subordinates because of the religion that they believed in. including the exclusion of Hindus in office.  Another thing is the implication that muhtasibs(censors of morals) would enforce stringent rules following the Sharia laws. As well as the banning of people saluting in a Hindu fashion. The non-muslim people of the Mughal empire were forced to pay the Jizya tax. The manṣabdār were given the power to govern the empire and command the military under Aurangzeb’s name. 
                            </p>
            </div>

            <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
                <BookOpen className="h-6 w-6"/> Analysis
                </h2>
              <p className="text-lg leading-relaxed">
              In the end, his rule strained the empire's finances, and the policies he introduced pushed away his allies. Along with a war with the Sikhs and the Jats, the Mughal empire met its end soon after Aurangzeb left power.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center">
        <Link href={(result === 'aurangzeb') || '' ? '/akbar' : '/compare'}>
            <Button size="lg" onClick={() => { if(result === 'akbar') localStorage.removeItem('result'); }}>{(result === 'aurangzeb') ? 'Compare with Akbar' : 'Compare Rulers'} </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}