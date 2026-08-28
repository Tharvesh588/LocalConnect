'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { skills, type Skill } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, Mic, Video, Send } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

function CategoryCard({ skill, isSelected, onSelect }: { skill: Skill; isSelected: boolean; onSelect: () => void }) {
  const Icon = skill.icon;
  return (
    <Card
      onClick={onSelect}
      className={cn(
        'cursor-pointer transition-all duration-200',
        isSelected ? 'border-primary ring-2 ring-primary ring-offset-2' : 'hover:border-primary/50'
      )}
    >
      <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
        <Icon className={cn('w-12 h-12 transition-colors', isSelected ? 'text-primary' : 'text-muted-foreground')} strokeWidth={1.5} />
        <p className="font-semibold text-center">{skill.name}</p>
      </CardContent>
    </Card>
  );
}

export default function CreateJobPage() {
  const router = useRouter();
  const [step, setStep] = useState<'category' | 'details'>('category');
  const [selectedCategory, setSelectedCategory] = useState<Skill | null>(null);

  const handleFindWorkers = () => {
    // Mock navigation to matching page
    const mockJobId = Date.now();
    router.push(`/jobs/${mockJobId}/match`);
  };

  if (step === 'category') {
    return (
      <div className="container mx-auto max-w-4xl py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-3xl font-bold">What do you need help with?</h1>
          <p className="text-muted-foreground mt-2">Select a category to find skilled workers near you.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill) => (
            <CategoryCard
              key={skill.name}
              skill={skill}
              isSelected={selectedCategory?.name === skill.name}
              onSelect={() => {
                setSelectedCategory(skill);
                setStep('details');
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (step === 'details') {
    const CategoryIcon = selectedCategory!.icon;
    return (
      <div className="container mx-auto max-w-2xl py-12 px-4">
        <Button variant="ghost" onClick={() => setStep('category')} className="mb-4">
          <ArrowLeft className="mr-2" /> Back to categories
        </Button>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <CategoryIcon className="w-10 h-10 text-primary" strokeWidth={1.5} />
              <div>
                <p className="text-sm text-muted-foreground">Category</p>
                <h1 className="font-headline text-2xl font-bold">{selectedCategory!.name}</h1>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="description" className="text-lg">Describe the job</Label>
                <p className="text-sm text-muted-foreground mb-2">Be as detailed as possible.</p>
                <Textarea id="description" placeholder="e.g., My kitchen sink is dripping and I need it fixed urgently. It seems to be coming from the cold water tap." rows={5} />
              </div>

              <div>
                <p className="text-lg mb-2">Or explain with audio/video</p>
                <div className="flex gap-4">
                  <Button variant="outline" className="h-12 flex-1">
                    <Mic className="mr-2"/>
                    Record Audio
                  </Button>
                  <Button variant="outline" className="h-12 flex-1">
                    <Video className="mr-2"/>
                    Record Video
                  </Button>
                </div>
              </div>
            </div>

            <Button onClick={handleFindWorkers} className="w-full h-14 text-lg mt-8">
              Find Workers
              <Send className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
}
