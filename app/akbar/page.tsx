"use client";
import { BookOpen, Crown, Scroll, Tractor, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function AkbarPage() {
  const [result, setResult] = useState("");

  useEffect(() => {
    // Only access localStorage if it's available (client-side)
    if (typeof window !== "undefined") {
      const storedResult = localStorage.getItem("result") || "";
      setResult(storedResult);

      if (storedResult === "akbar") {
        localStorage.removeItem("result");
      }
    }
  }, []);

  console.log(result);
  console.log((result === 'akbar' || result === ""))
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <Crown className="h-16 w-16 mx-auto text-primary" />
          <h1 className="text-4xl font-bold">Akbar the Great</h1>
          <p className="text-muted-foreground">1542-1605</p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Users className="h-6 w-6" /> Introduction
              </h2>
              <p className="text-lg leading-relaxed">
                One of the six major Mughal Emperors Abul Fath Jalal ud-din Muhammad Akbar was born in Umarkot, on October 15, 1542, C.E. He reigned from 1556 to 1605, seizing power when he was only a teenager and extended the Mughal empire over much of modern-day India and the middle east.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Scroll className="h-6 w-6" /> Religion
              </h2>
              <p className="text-lg leading-relaxed">
              Religious tolerance was a core part of Akbar’s governing. He sought to both gain power in his Muslim subjects and win over the support of his Hindu subjects, as well as garner the support of people of other religions. He sponsored pilgrimages to Mecca as well as patronized Sunni and Shii ulama, religious scholars. He included members of Hindu nobles in his government while also canceling taxes imposed on Hindu pilgrims and landholders. He also made an effort to attend Hindu festivals all while himself was Muslim. He funded the translation of Hindu religious texts and held meetings between representatives from all types of religions in his House of Worship. However, his reign was not kind to everyone as he was a vicious conqueror. Upon the start of his reign, he went on a conquest of the Indian subcontinent and showed no mercy to any tribes that opposed him.
              </p>
              <p className="text-lg leading-relaxed">
              Akbar remained a Muslim for his entire life, however, he took an active interest in learning about other religions, even though he himself was illiterate, regularly inviting, Hindus, Parsis, Christians, and Muslims to come to speak in his court and engage in religious discussion, he also encouraged Scholars, Poets, Painters, and Musicians, to make his court a center of learning and culture introduced the Mansabdari system.
              </p>
            </div>

            <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2"> <Tractor className="h-6 w-6"/>  Responsibilities of the People</h2>
            <p className="text-lg leading-relaxed">
              Akbar’s empire had four ministers: Finance, military organization, royal household, and religious/legal affairs. These ministers had the most responsibility out of anyone under Akbar. The minister of military would assign mansabdars which was a series of ranks the specified status, pay, and assignment. These ranks would be in charge of the army and were responsible for recruiting and training a fixed number of soldiers to always be ready for Akbar’s needs. The minister of Finance would appoint revenue officials who decide the rent of the farmland. Rent was based on climate, quality of soil, and the farmer's harvest that year. Taxes could be reduced if the harvest was of poor quality due to drought or disease. The people who collected the taxes the chiefs and landlords could only keep about 10% of their collected taxes as well the local rulers would pay tax based on their land, location, and crops.
              </p>
            </div>

            <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
                <BookOpen className="h-6 w-6"/> Analysis
                </h2>
              <p className="text-lg leading-relaxed">
                The rights Akbar set for his citizens were based on law and were generally relaxed. These policies granted him more support from his mostly Hindu population. This led to a prosperous empire with little risk of revolution and led to a solid foundation the next king would use before Aurangzeb would take power.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center"> 
          <Link href={(result === 'akbar' || result === "") || '' ? '/aurangzeb' : '/compare'}>
            <Button size="lg" onClick={() => { if(result === 'aurangzeb') localStorage.removeItem('result'); }}>
              {(result === 'akbar' || result === "") ? 'Compare with Aurangzeb' : 'Compare Rulers'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
