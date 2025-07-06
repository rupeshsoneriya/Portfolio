
"use client";

import { EDUCATION_DATA } from '@/lib/constants';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function EducationSection() {
  return (
    <section id="education" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedWrapper animationType="fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">My Education</h2>
          <p className="text-md sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            My academic qualifications and educational journey.
          </p>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6">
          {EDUCATION_DATA.map((edu, index) => (
            <AnimatedWrapper
              key={index}
              animationType="slide-up"
              delay={`delay-${index * 100}ms`}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-primary hover:border-accent bg-card">
                <CardHeader className="flex flex-row items-start gap-3 sm:gap-4 pb-2 sm:pb-3 pt-4 sm:pt-5">
                  <div className="flex-shrink-0 mt-1">
                    <edu.icon className="w-7 h-7 sm:w-8 sm:w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <CardTitle className="text-md sm:text-lg font-semibold mb-1 text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">{edu.institution}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-muted-foreground font-medium">{edu.degree}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-1 sm:pt-2 space-y-2 sm:space-y-3 pb-4 sm:pb-5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-muted-foreground">Duration:</span>
                    <Badge variant="outline" className="font-mono text-xs sm:text-sm">{edu.duration}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-muted-foreground">Grade/Marks:</span>
                    <Badge variant="secondary" className="font-semibold text-xs sm:text-sm">{edu.grade}</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
