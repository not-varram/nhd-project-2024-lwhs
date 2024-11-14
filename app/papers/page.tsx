"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollText, BookOpen, Heart } from "lucide-react";
import Link from 'next/link';
import { useEffect, useState } from 'react';



export default function PapersPage() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

useEffect(() => {
  setPdfUrl('/processPaper.pdf');
}, []);
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <ScrollText className="h-16 w-16 mx-auto text-primary" />
          <h1 className="text-4xl font-bold">Research Papers</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <ScrollText className="h-6 w-6" />
                <h2 className="text-2xl font-semibold">Process Paper</h2>
              </div>
              <p className="text-muted-foreground">

              {pdfUrl && (
                <iframe
                  src={pdfUrl}
                  width="100%"
                  height="500px"
                  className="border rounded"
                />
              )}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                <h2 className="text-2xl font-semibold">Annotated Bibliography</h2>
              </div>
              <p className="text-muted-foreground">
                The annotated bibliography will be displayed here once the PDF is provided.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/thanks">
          <Button 
            size="lg"
            className="group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
            Thank You <Heart className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}