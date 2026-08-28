'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, ArrowRight, CheckCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function VerifyPage() {
  const router = useRouter();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const aadharPlaceholder = PlaceHolderImages.find(p => p.id === 'aadhar-card');

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // For demo purposes, we always show the placeholder.
      // In a real app, you'd use URL.createObjectURL(file)
      if (aadharPlaceholder) {
        setUploadedImage(aadharPlaceholder.imageUrl);
      }
    }
  };

  return (
    <div className="container mx-auto max-w-md py-12 px-4 flex flex-col h-full items-center justify-center text-center">
      <div className="flex-grow flex flex-col items-center justify-center w-full">
        {!uploadedImage ? (
          <>
            <Upload className="w-24 h-24 text-muted-foreground mb-6" strokeWidth={1} />
            <h2 className="font-headline text-2xl mb-2">Verify Your Aadhar</h2>
            <p className="text-muted-foreground mb-8">Please upload a clear photo of the front of your Aadhar card.</p>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
            <Button onClick={handleUploadClick} className="w-full h-14 text-lg">
              <Upload className="mr-2" />
              Upload Photo
            </Button>
          </>
        ) : (
          <>
            <CheckCircle className="w-24 h-24 text-green-500 mb-6" strokeWidth={1} />
            <h2 className="font-headline text-2xl mb-2">Aadhar Uploaded</h2>
            <p className="text-muted-foreground mb-8">We'll review your document. You can complete your profile now.</p>
            <Card className="w-full">
              <CardContent className="p-4">
                <Image
                  src={uploadedImage}
                  alt="Uploaded Aadhar Card"
                  width={856}
                  height={540}
                  className="rounded-lg"
                  data-ai-hint={aadharPlaceholder?.imageHint}
                />
              </CardContent>
            </Card>
          </>
        )}
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t">
        <div className="container mx-auto max-w-md">
          <Button
            className="w-full h-14 text-lg"
            onClick={() => router.push('/dashboard/worker')}
            disabled={!uploadedImage}
          >
            Complete Profile
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
