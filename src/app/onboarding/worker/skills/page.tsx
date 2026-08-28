'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { skills, type Skill } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

function SkillCard({ skill, isSelected, onToggle }: { skill: Skill; isSelected: boolean; onToggle: () => void }) {
  const Icon = skill.icon;
  return (
    <Card
      onClick={onToggle}
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

export default function SkillsPage() {
  const router = useRouter();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skillName: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skillName) ? prev.filter((s) => s !== skillName) : [...prev, skillName]
    );
  };

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            isSelected={selectedSkills.includes(skill.name)}
            onToggle={() => toggleSkill(skill.name)}
          />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t">
        <div className="container mx-auto max-w-4xl">
          <Button 
            className="w-full h-14 text-lg" 
            onClick={() => router.push('/onboarding/worker/intro')}
            disabled={selectedSkills.length === 0}
          >
            Continue
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
