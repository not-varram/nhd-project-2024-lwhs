import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function ThanksPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <Heart className="h-16 w-16 mx-auto text-primary animate-pulse" />
        <h1 className="text-4xl font-bold">Thank You</h1>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg text-muted-foreground">
              Thank you for exploring our National History Day project about the Mughal Empire.
              We hope you learned something new about this fascinating period of history.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}