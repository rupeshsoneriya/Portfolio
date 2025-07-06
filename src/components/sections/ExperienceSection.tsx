
"use client";

import { EXPERIENCE_DATA } from '@/lib/constants';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedWrapper animationType="fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">My Experience</h2>
          <p className="text-md sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            My professional background and work experience.
          </p>
        </AnimatedWrapper>

        <div className="space-y-6 sm:space-y-8">
          {EXPERIENCE_DATA.map((exp, index) => (
            <AnimatedWrapper
              key={index}
              animationType={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={`delay-${index * 100}ms`}
            >
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group bg-card">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-primary/5 dark:bg-primary/15 p-4 sm:p-6 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-border group-hover:bg-accent/5 dark:group-hover:bg-accent/15 transition-colors duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 dark:bg-primary/20 text-primary group-hover:bg-accent/10 dark:group-hover:bg-accent/20 group-hover:text-accent flex items-center justify-center mb-2 sm:mb-3 transition-colors duration-300">
                      <exp.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl mb-1 text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">{exp.company}</CardTitle>
                    <p className="text-sm sm:text-md font-semibold text-foreground group-hover:text-accent transition-colors duration-300">{exp.role}</p>
                    <Badge variant="outline" className="mt-2 text-xs sm:text-sm">{exp.duration}</Badge>
                    <Badge variant="secondary" className="mt-1 text-xs">{exp.locationType}</Badge>
                  </div>
                  <div className="md:w-2/3 p-4 sm:p-6">
                    <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed text-left md:text-justify">
                      <ul className="list-disc pl-5 text-muted-foreground text-sm">
                        {exp.description.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </CardDescription>
                  </div>
                </div>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
