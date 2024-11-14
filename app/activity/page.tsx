import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";
import Link from 'next/link';

export default function ActivityPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <FileText className="h-16 w-16 mx-auto text-primary" />
        <h1 className="text-4xl font-bold">Interactive Activity</h1>
        <Card>
          <CardContent className="p-6">
            <img src="/crossword.png" alt="Crossword Puzzle" className="mx-auto" />
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/papers">
          <Button 
            size="lg"
            className="group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
            View Research Papers <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}