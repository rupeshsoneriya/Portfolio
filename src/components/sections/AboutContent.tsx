
"use client";

import Image from 'next/image';
import { SKILLS_DATA } from '@/lib/constants';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function AboutContent() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedWrapper animationType="fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">About Me</h2>
          <p className="text-md sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            A glimpse into my journey, skills, and passion for web development.
          </p>
        </AnimatedWrapper>

        <div className="grid md:grid-cols-5 gap-6 md:gap-10 items-center mb-12 md:mb-16">
          <AnimatedWrapper animationType="slide-right" className="md:col-span-2">
            <div className="relative w-full max-w-xs sm:max-w-sm mx-auto aspect-square rounded-lg overflow-hidden shadow-2xl border-4 border-primary/20 group">
              <Image
                src="/Profile/profile-pic.png"
                alt="Rupesh Soneriya at work"
                layout="fill"
                objectFit="cover"
                data-ai-hint="profile picture"
                className="transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper animationType="slide-left" className="md:col-span-3">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">My Journey & Who I Am</h3>
 <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
  I’m a <span className="font-semibold text-primary">Web Developer</span> with extensive expertise in <span className="font-semibold text-primary">React.js, Next.js, and Shopify Liquid</span>, dedicated to building <span className="font-semibold text-primary">custom themes</span> and transforming <span className="font-semibold text-primary">Figma designs</span> into fully functional, high-performing <span className="font-semibold text-primary">Shopify stores</span>. With experience working on over <span className="font-semibold text-primary">50 projects</span>—including more than <span className="font-semibold text-primary">40 Shopify websites</span> and several <span className="font-semibold text-primary">React.js</span> and <span className="font-semibold text-primary">Next.js</span> frontend development projects—I take pride in delivering clean, efficient, and user-friendly solutions that prioritize both functionality and aesthetics. Proficient in <span className="font-semibold text-primary">HTML</span>, <span className="font-semibold text-primary">CSS</span>, <span className="font-semibold text-primary">JavaScript</span>, and <span className="font-semibold text-primary">Liquid</span>, I ensure each project is <span className="font-semibold text-primary">responsive</span> and tailored to meet client needs. I’m passionate about crafting seamless <span className="font-semibold text-primary">eCommerce experiences</span> and thrive on collaborating with others to bring innovative ideas to life.
</p>


              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Let’s work together to build something exceptional!
              </p>
            </div>
          </AnimatedWrapper>
        </div>

        <AnimatedWrapper animationType="fade-in">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">Technical Skills</h3>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {SKILLS_DATA.map((skill, index) => (
            <AnimatedWrapper
              key={skill.name}
              animationType="slide-up"
              delay={`delay-${index * 50}ms`}
            >
              <Card className="h-full shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 group border-2 border-transparent bg-card">
                <CardHeader className="flex flex-row items-center gap-3 sm:gap-4 space-y-0 pb-2 sm:pb-3 pt-4 sm:pt-5">
                  <skill.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary group-hover:text-accent transition-colors duration-300" />
                  <CardTitle className="text-md sm:text-lg font-semibold text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-4 sm:pb-5">
                  {skill.level && (
                    <Badge variant="secondary" className="mb-2 font-medium text-xs sm:text-sm">{skill.level}</Badge>
                  )}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {skill.desc} 
                  </p>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
