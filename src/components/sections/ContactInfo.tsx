
"use client";

import Link from 'next/link';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ContactInfo() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedWrapper animationType="fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">Get In Touch</h2>
          <p className="text-md sm:text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </AnimatedWrapper>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
          <AnimatedWrapper animationType="slide-right">
            <Card className="shadow-xl">
              <CardHeader className="pb-3 pt-5 px-5 sm:px-6">
                <CardTitle className="text-xl sm:text-2xl text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-5 p-5 sm:p-6">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="flex items-start space-x-3 sm:space-x-4 group">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-md sm:text-lg">{item.label}</h4>
                      {item.href ? (
                        <Link href={item.href} className="text-sm sm:text-base text-muted-foreground hover:text-accent transition-colors duration-300 break-all">
                          {item.value}
                        </Link>
                      ) : (
                        <p className="text-sm sm:text-base text-muted-foreground break-all">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </AnimatedWrapper>

          <AnimatedWrapper animationType="slide-left">
            <Card className="shadow-xl">
              <CardHeader className="pb-3 pt-5 px-5 sm:px-6">
                <CardTitle className="text-xl sm:text-2xl text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 p-5 sm:p-6">
                 <p className="text-sm sm:text-base text-muted-foreground">
                  Follow me on social media to see my latest updates and activities.
                </p>
                <div className="flex flex-col space-y-2 sm:space-y-3">
                  {SOCIAL_LINKS.map((item) => (
                    <Button key={item.name} variant="outline" asChild className="justify-start text-md sm:text-lg py-5 sm:py-6 group">
                      <Link href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3">
                        {item.icon && <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:text-accent transition-colors" />}
                        <span className="transition-colors group-hover:text-accent">{item.name}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
