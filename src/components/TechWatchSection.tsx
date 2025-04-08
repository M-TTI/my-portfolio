import React from "react";
import MotionWrapper from "./MotionWrapper";
import { techWatchDetails } from "@/lib/data";

export default function TechWatchSection() {
    return (
        <section
            id="veille-technologique"
            className="py-12 bg-gradient-to-b from-muted/10 to-background"
        >
            <div className="container max-w-4xl mx-auto px-6 md:px-4">
                <MotionWrapper>
                    <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
                        🌐 Veille Technologique
                    </h2>
                </MotionWrapper>
                <div className="space-y-8">
                    {techWatchDetails.map((section, index) => (
                        <MotionWrapper key={index} delay={index * 0.1}>
                            <div className="p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm">
                                <h3 className="text-lg font-semibold mb-2">
                                    {section.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {section.content}
                                </p>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}