"use client"

import Link from "next/link";
import {
  CalendarDays,
  ChartLine,
  CodeXml,
  DollarSign,
  Globe,
  GraduationCap,
  MonitorCog,
  Users,
} from "lucide-react";
import { modules } from "@/lib/modules";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  const handleNews = () => {
    router.push("/newsletter");
  };

  const handleGit = () => {
    router.push("https://github.com/GoWithFund-Org");
  };

  return (
    <>
      <title>Home | GoWithFund</title>
      {/* Hero Section */}
      <section className="bg-[url(/hero1.png)] bg-no-repeat w-full text-white py-16 px-4 md:px-5 rounded-xl shadow-md mt-4 flex min-h-[480px] flex-col gap-6 bg-cover bg-center items-center justify-center p-4 @[480px]:gap-8 @[480px]:rounded-lg">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl md:text-5xl font-extrabold leading-tight mb-6 tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
            Build the Future of Impact — With AI,{" "}
            <br className="hidden md:inline" />
            Ethics, and Open Innovation
          </h1>
          <p className="text-base md:text-lg text-gray-100 mb-8 font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
            An AI-driven, modular ecosystem for social-good infrastructure,
            connecting developers, nonprofits, donors, and educators globally.
          </p>
        </div>

        <div className="flex justify-center space-x-5 flex-wrap gap-y-3">
          <Link href="/volunteer">
            <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/50 text-white font-semibold px-5 py-2 rounded-md transition cursor-pointer">
              Join as Developer
            </button>
          </Link>

          <Link href="/contact">
            <button className="bg-white text-[var(--color-primary)] hover:bg-gray-200/90 font-semibold px-5 py-2 rounded-md transition cursor-pointer">
              Explore Campaigns
            </button>
          </Link>
        </div>
      </section>

      {/* Our Vision */}
      <section className="pt-10">
        <h2 className="text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Our Vision
        </h2>
        <div className="flex justify-center mb-5">
          <p className="font-normal leading-normal pb-3 pt-1 px-4 text-center">
            GoWithFund.org is the world&apos;s first AI-powered, open ecosystem
            for ethical fundraising, education, developer collaboration, job
            matching, and co-founder discovery - designed for changemakers
            worldwide.
          </p>
        </div>
      </section>

      {/* Core Modules */}
      <section className="pt-10">
        <h2 className="text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Core Modules
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className="border border-gray-200 p-4 hover:shadow-md transition bg-white flex flex-1 sm:flex-2 md:flex-3 lg:flex-6 gap-3 rounded-lg flex-col"
            >
              <mod.icon className="text-[var(--color-primary)] mb-2" />
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold leading-tight">
                  {mod.title}
                </h3>
                <p className="text-gray-600 text-sm font-normal leading-normal">
                  {mod.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*How it Work*/}
      <div className="pt-10">
        <h2 className="text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          How it Work
        </h2>
        <div className="flex w-full grow bg-white @container p-4">
          <div className="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[3/2] rounded-lg flex">
            <div className="bg-[url(/hero2.png)] w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"></div>
          </div>
        </div>
      </div>

      <section className="pt-10 ">
        <h2 className="text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Tech Stock &amp; AI Trust Layer
        </h2>
        <p className="text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Built with Next.js, Node.js, OpenAI, LangChain, Supabase, and more. We
          prioritize transparency, AI ethics, and data trust in all our
          operations.
        </p>
      </section>

      {/* Roadmap */}
      <section className="pt-10">
        <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Roadmap (2025–2026)
        </h2>
        <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
          <div className="flex flex-col items-center gap-1 pt-3">
            <CalendarDays
              className="text-[var(--color-dark)] bg-[var(--color-primary)]/30 px-1.5 rounded-full"
              size={25}
            />
            <div className="w-[2px] bg-[var(--color-primary)]/50 h-3 grow"></div>
          </div>
          <div className="flex flex-1 flex-col pt-3 pb-5">
            <p className="text-base font-medium leading-normal">
              Q1 2025: Job Board MVP
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 pt-3">
            <CodeXml
              className="text-[var(--color-dark)] bg-[var(--color-primary)]/30 px-1.5 rounded-full"
              size={25}
            />
            <div className="w-[2px] bg-[var(--color-primary)]/50 h-3 grow"></div>
          </div>
          <div className="flex flex-1 flex-col pt-3 pb-5">
            <p className="text-base font-medium leading-normal">
              Q2 2025: Developer Portal Launch
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 pt-3">
            <DollarSign
              className="text-[var(--color-dark)] bg-[var(--color-primary)]/30 px-1.5 rounded-full"
              size={25}
            />
            <div className="w-[2px] bg-[var(--color-primary)]/50 h-3 grow"></div>
          </div>
          <div className="flex flex-1 flex-col pt-3 pb-5">
            <p className="text-base font-medium leading-normal">
              Q3 2025: Fundraising Platform Beta
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 pt-3">
            <Users
              className="text-[var(--color-dark)] bg-[var(--color-primary)]/30 px-1.5 rounded-full"
              size={25}
            />
            <div className="w-[2px] bg-[var(--color-primary)]/50 h-3 grow"></div>
          </div>
          <div className="flex flex-1 flex-col pt-3 pb-5">
            <p className="text-base font-medium leading-normal">
              Q4 2025: Co-Founder Matching Alpha
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 pt-3">
            <GraduationCap
              className="text-[var(--color-dark)] bg-[var(--color-primary)]/30 px-1.5 rounded-full"
              size={25}
            />
            <div className="w-[2px] bg-[var(--color-primary)]/50 h-3 grow"></div>
          </div>
          <div className="flex flex-1 flex-col pt-3 pb-5">
            <p className="text-base font-medium leading-normal">
              Q1 2026: E-learning Platfoam Pilot
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 pt-3">
            <MonitorCog
              className="text-[var(--color-dark)] bg-[var(--color-primary)]/30 px-1.5 rounded-full"
              size={25}
            />
            <div className="w-[2px] bg-[var(--color-primary)]/50 h-3 grow"></div>
          </div>
          <div className="flex flex-1 flex-col pt-3 pb-5">
            <p className="text-base font-medium leading-normal">
              Q2 2026: Full Ecosystem Integration
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 pt-3">
            <Globe
              className="text-[var(--color-dark)] bg-[var(--color-primary)]/30 px-1.5 rounded-full"
              size={25}
            />
            <div className="w-[2px] bg-[var(--color-primary)]/50 h-3 grow"></div>
          </div>
          <div className="flex flex-1 flex-col pt-3 pb-5">
            <p className="text-base font-medium leading-normal">
              Q3 2026: Global Expansion
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 pt-3">
            <ChartLine
              className="text-[var(--color-dark)] bg-[var(--color-primary)]/30 px-1.5 rounded-full"
              size={25}
            />
          </div>
          <div className="flex flex-1 flex-col pt-3 pb-5">
            <p className="text-base font-medium leading-normal">
              Q4 2026: Impact Reporting & Analytics
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-10">
        <h2 className="text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Get Involved</h2>
        <div className="">
          <p className="text-base font-normal leading-normal pb-5 pt-1 px-4 text-center">
            Are you a developer, educator, nonprofit, or funder? Join us today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button onClick={handleNews} className="bg-[var(--color-dark)] text-white font-bold px-6 py-2 rounded-md hover:bg-opacity-90 hover:bg-[var(--color-dark)]/90 cursor-pointer transition">
              Join Our Newsletter
            </button>
            <button onClick={handleGit} className="bg-gray-200 text-[var(--color-dark)] border border-[var(--color-dark)] px-6 py-2 rounded-md font-bold hover:bg-gray-100 cursor-pointer transition">
              Contribute on GitHub
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
