import { Project } from "wp/components/project";
import { SocialLinks } from "wp/components/socials";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "wp/components/ui/tooltip";
import { projects, socialLinks } from "wp/lib/constants";
import { cn } from "wp/lib/utils";
import { Newsreader } from "next/font/google";
import ThemeToggle from "wp/components/theme-toggle";

const newsreader = Newsreader({
  style: "italic",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <section className="items-center gap-8 container py-3 md:py-4 space-y-12">
      <header className="flex justify-between items-center w-full animate-slide-from-down-and-fade-1">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold">Nguyễn Việt Hưng</h1>

          <div className="flex items-center space-x-1 relative">
            <span className="relative w-3 h-3 rounded-full bg-green-500">
              <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75"></span>
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-sm font-semibold">
              Available for work
            </span>
          </div>
        </div>

        <ThemeToggle />
      </header>

      <section className="prose prose-zinc dark:prose-invert text-[15px] animate-slide-from-down-and-fade-2 text-pretty">
        <p className="leading-relaxed">
          I&#39;m a{" "}
          <span
            className={cn(
              "font-medium font-reader text-[16px] text-foreground",
              newsreader.className
            )}
          >
            Software Developer
          </span>{" "}
          who believes in building creative and modern web apps. Inspired by{" "}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="italic hover:underline underline-offset-4">
                  Kaizen,{" "}
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <span className="italic prose prose-zinc dark:prose-invert text-sm">
                  (n.) philosophy of continuous improvement
                </span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>{" "}
          strive for continuous learning and improvement, always seeking
          innovative ways to refine my skills and knowledge.
        </p>
      </section>

      <section className="animate-slide-from-down-and-fade-3 space-y-4 text-sm">
        <h3 className="font-medium text-[15px]">Projects</h3>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <Project {...project} key={index} />
          ))}
        </div>
      </section>

      <section className="animate-slide-from-down-and-fade-4 space-y-4 text-sm">
        <h3 className="prose prose-zinc dark:prose-invert text-[15px] ">
          If you&#39;re looking to connect with me for a project, feel free to
          reach out to me.
        </h3>
        <section>
          <div className="flex items-center gap-6 ">
            {socialLinks.map((socials, index) => (
              <SocialLinks {...socials} key={index} />
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}
