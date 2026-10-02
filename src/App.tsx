import { IdeaDemo } from './IdeaDemo'
import { useState } from 'react'
import { SiteNav } from './SiteNav'
import { CornerVines, IvyGarden, IvyConnections } from './IvyIllustrations'
import { SourcesScene, PortfolioScene, FollowUpScene } from './CapabilityScenes'

const SHOW_PRICING = false
const SHOW_LAUNCH_LINKS = false

function IvyLogo({ size = 20 }: { size?: number }) {
  return (
    <div className="flex items-center gap-[7px]">
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left lobe */}
        <path d="M10 17 C9 15 3 13 2.5 8 C2 5 4.5 2.5 7.5 3.5 C8.8 4 9.5 5.2 10 6.5" fill="#0E6F5F"/>
        {/* Right lobe */}
        <path d="M10 17 C11 15 17 13 17.5 8 C18 5 15.5 2.5 12.5 3.5 C11.2 4 10.5 5.2 10 6.5" fill="#0E6F5F" opacity="0.55"/>
        {/* Stem */}
        <line x1="10" y1="6.5" x2="10" y2="17" stroke="#0E6F5F" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
      <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: `${size * 0.85}px`, letterSpacing: '-0.025em', color: '#0E6F5F' }}>
        ivy
      </span>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="hero-layout">
      <div className="hero-copy">
        <p className="hero-eyebrow"><span aria-hidden="true">✳</span> A little curiosity. A lot of possibility.</p>
        <h1 
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          className="hero-heading text-ink mb-6"
        >
          Ivy, your analyst<br />
          <span className="italic font-light">that’s always there.</span>
        </h1>
        <p className="text-[1.125rem] md:text-[1.25rem] text-ink-muted leading-relaxed mb-10 max-w-[560px]">
          Ask about markets, companies, or your holdings. Get cited answers and help with the work that follows.
        </p>
        
        {/* Search Bar */}
        <div className="hero-search bg-surface border border-border rounded-xl p-2 flex items-center shadow-sm w-full max-w-[520px]">
          <input 
            type="text" 
            readOnly 
            aria-label="Example question for Ivy"
            value="What moved markets this week, and why?"
            className="flex-1 bg-transparent border-none outline-none text-[15px] text-ink px-4 w-full truncate text-left"
          />
          <a href="#how" aria-label="Explore example questions" className="w-10 h-10 rounded-lg bg-teal flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12L8 4M8 4L4 8M8 4L12 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className="hero-prompts"><span>A little inspiration</span><a href="#how">Market moves ↗</a><a href="#how">Company research ↗</a></div>
      </div>
      
      <div className="hero-illustration">
        <IvyConnections />
        <p className="hero-illustration-caption">Good questions have a way of branching out.</p>
      </div>
    </section>
  )
}

const SHOWCASE_DATA = [
  {
    topic: "Supply chain",
    question: "Which semi caps have the most exposure to Taiwan?",
    answer: "Based on geographic revenue segments, Applied Materials (AMAT) derives 22% of sales from Taiwan, while Lam Research (LRCX) sits at 18%. Both are highly dependent on TSMC capex cycles.",
    sources: ["AMAT 10-K", "LRCX Q2 Earnings Supplemental"]
  },
  {
    topic: "Macro prints",
    question: "What's the market's read on today's CPI print?",
    answer: "Headline CPI came in at 3.1%, slightly above the 3.0% consensus. Shelter costs remained sticky, prompting a minor selloff in front-end Treasuries. Rate cut expectations for June dropped from 65% to 48%.",
    sources: ["BLS CPI Release", "CME FedWatch Tool"]
  },
  {
    topic: "Consumer spend",
    question: "Are luxury consumers trading down this quarter?",
    answer: "Yes, LVMH and Kering both noted softer demand in aspirational segments, particularly in the US. However, ultra-high-end core brands like Hermès show continued resilience.",
    sources: ["LVMH Earnings Call Transcript", "Kering Q1 Release"]
  },
  {
    topic: "Earnings season",
    question: "How could higher oil prices affect airline margins?",
    answer: "Higher fuel costs may pressure margins. The effect depends on hedging, ticket pricing, and demand.",
    sources: ["Delta Airlines 10-Q (Hedging Strategy)", "Industry fuel sensitivity model"]
  },
  {
    topic: "Energy",
    question: "What's driving the spread between WTI and Brent?",
    answer: "The WTI-Brent spread has widened to $4.50, primarily driven by strong US shale production outpacing Gulf Coast export capacity, combined with OPEC+ extending production cuts in the North Sea market.",
    sources: ["EIA Weekly Petroleum Status", "OPEC Secretariat Report"]
  },
  {
    topic: "Your holdings",
    question: "Which of my holdings is most sensitive to rate cuts?",
    answer: "Your position in Prologis (PLD) and American Tower (AMT) show the highest inverse correlation to the 10Y yield. A 50bps cut historically aligns with a 6-8% outperformance for your REIT allocation.",
    sources: ["Portfolio Beta Analysis", "Historical REIT Performance Data"]
  },
]

function InteractiveShowcase() {
  const [active, setActive] = useState(3) // Default to Earnings season
  const [growth, setGrowth] = useState(0)

  return (
    <section id="how" className="question-section py-[80px] md:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <p className="section-kicker">01 / Follow your curiosity</p>
        <h2 style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }} className="text-[2rem] md:text-[2.5rem] text-ink mb-12 text-center">
          Ask questions you didn't know you could.
        </h2>
        
        <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-8 md:gap-16 items-start">
          {/* Left: Topics */}
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            {SHOWCASE_DATA.map((item, idx) => (
              <button 
                key={idx}
                onClick={() => {
                  setActive(idx)
                  setGrowth(count => count + 1)
                }}
                aria-pressed={active === idx}
                aria-controls="ivy-answer"
                className={`showcase-topic text-left px-5 py-3 rounded-xl text-[15px] whitespace-nowrap transition-all duration-300 ease-out border ${
                  active === idx 
                    ? 'bg-pale-green text-teal border-fresh-green font-medium' 
                    : 'bg-transparent text-ink-muted border-transparent hover:bg-white/50 font-normal'
                }`}
              >
                {item.topic}
              </button>
            ))}
          </div>

          {/* Right: Answer Panel */}
          <div className="answer-card bg-surface border border-border rounded-3xl p-8 md:p-10 min-h-[320px] flex flex-col relative overflow-hidden">
            <CornerVines key={growth} animate={growth > 0} />
            <div id="ivy-answer" role="region" aria-label="Example question and Ivy answer" aria-live="polite" aria-atomic="true" className="relative flex-1 flex flex-col">
            <div key={active} className="animate-slide-fade flex-1 flex flex-col">
              <div className="mb-8">
                <span className="text-[13px] text-ink-muted font-medium mb-3 block tracking-wide uppercase">Question</span>
                <p className="text-[1.125rem] text-ink font-medium">"{SHOWCASE_DATA[active].question}"</p>
              </div>
              
              <div className="mb-10 flex-1">
                <span className="text-[13px] text-ink-muted font-medium mb-3 block tracking-wide uppercase">Ivy</span>
                <p className="text-[1rem] text-ink leading-relaxed">
                  {SHOWCASE_DATA[active].answer}
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex flex-wrap gap-3">
                  {SHOWCASE_DATA[active].sources.map((src, i) => (
                    <span key={i} className="text-[12px] bg-mist text-ink-muted px-3 py-1.5 rounded border border-border">
                      {src}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatItDoes() {
  return (
    <section id="capabilities" className="capabilities-section py-[80px] md:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <p className="section-kicker">02 / Room to grow</p>
        <h2 style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }} className="text-[2rem] md:text-[2.5rem] text-ink mb-12 text-center">
          From question to next step.
        </h2>
        <div className="capability-grid">
          <article className="capability-card capability-card--wide bg-surface">
            <div className="capability-copy">
              <span className="capability-eyebrow">Rooted in research</span>
              <h3>Answers with receipts</h3>
              <p>Follow the sources behind every answer. Ivy grounds its reasoning in SEC filings, earnings calls, and macro data.</p>
            </div>
            <SourcesScene />
          </article>

          <article className="capability-card bg-pale-green">
            <div className="capability-copy">
              <span className="capability-eyebrow">The bigger picture</span>
              <h3>Portfolio aware</h3>
              <p>See which holdings may be impacted—and exactly why.</p>
            </div>
            <PortfolioScene />
          </article>

          <div className="capability-card capability-card--companion">
            <div className="companion-intro">
              <IvyLogo size={20} />
              <p className="ivy-speech">Let’s look into it.</p>
            </div>
            <div className="companion-garden"><IvyGarden compact /></div>
          </div>

          <article className="capability-card capability-card--wide bg-mist">
            <div className="capability-copy">
              <span className="capability-eyebrow">Ideas into action</span>
              <h3>Does the follow-up</h3>
              <p>Don't just get answers. Have Ivy instantly draft the investment memo, update allocation models, or publish straight to your team's Notion.</p>
            </div>
            <FollowUpScene />
          </article>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="py-[80px] md:py-[140px] px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }} className="text-[2rem] md:text-[2.5rem] text-ink mb-4">
            Start free. Go deeper when you need to.
          </h2>
          <p className="text-[1rem] text-ink-muted">Start with a 14-day free trial on any plan.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Desk */}
          <div className="border border-border rounded-2xl p-8 bg-surface">
            <h3 className="text-[1.25rem] text-ink font-medium mb-2">Desk</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-[2rem] text-ink font-medium">$199</span>
              <span className="text-ink-muted text-[14px]">/ seat / month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-[14px] text-ink-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Market summaries
              </li>
              <li className="flex items-center gap-3 text-[14px] text-ink-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Document querying
              </li>
              <li className="flex items-center gap-3 text-[14px] text-ink-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Export to text
              </li>
            </ul>
            <button className="w-full py-2.5 rounded-lg border border-teal text-teal text-[14px] font-medium hover:bg-teal hover:text-white transition-colors">
              Start free trial
            </button>
          </div>
          
          {/* Research */}
          <div className="border border-border rounded-2xl p-8 bg-pale-green relative">
            <h3 className="text-[1.25rem] text-ink font-medium mb-2">Research</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-[2rem] text-ink font-medium">$499</span>
              <span className="text-ink-muted text-[14px]">/ seat / month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-[14px] text-ink-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Portfolio integration
              </li>
              <li className="flex items-center gap-3 text-[14px] text-ink-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Memo generation
              </li>
              <li className="flex items-center gap-3 text-[14px] text-ink-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Notion & CMS export
              </li>
            </ul>
            <button className="w-full py-2.5 rounded-lg bg-teal text-white text-[14px] font-medium hover:opacity-90 transition-opacity">
              Start free trial
            </button>
          </div>
          
          {/* Enterprise */}
          <div className="border border-border rounded-2xl p-8 bg-surface flex flex-col">
            <h3 className="text-[1.25rem] text-ink font-medium mb-2">Enterprise</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-[2rem] text-ink font-medium">Custom</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-[14px] text-ink-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Firm-wide data grounding
              </li>
              <li className="flex items-center gap-3 text-[14px] text-ink-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Custom integrations
              </li>
              <li className="flex items-center gap-3 text-[14px] text-ink-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Dedicated support
              </li>
            </ul>
            <button className="w-full py-2.5 rounded-lg border border-border text-ink text-[14px] font-medium hover:bg-mist transition-colors">
              Contact us
            </button>
          </div>
        </div>
        
        <div className="mt-10 text-center flex flex-col gap-2">
          <p className="text-[12px] text-ink-muted">Payments handled by Paddle, our merchant of record.</p>
          <p className="text-[12px] text-ink-muted">Educational only — not financial advice.</p>
        </div>
      </div>
    </section>
  )
}

function ClosingInvitation() {
  return (
    <section className="closing-band" aria-labelledby="closing-heading">
      <div className="closing-inner">
        <div className="closing-copy">
          <span className="closing-eyebrow">Stay curious. Ivy’s right here.</span>
          <h2 id="closing-heading">Let your next question<br /><em>take root.</em></h2>
          <p>A market move. A company you’re watching. A “what if” that won’t leave you alone.</p>
          <a href="#how" className="closing-link">Find your first question <span aria-hidden="true">↗</span></a>
        </div>
        <div className="closing-art" aria-hidden="true">
          <span className="closing-speech">What are you curious about?</span>
          <div className="closing-plant"><IvyGarden compact /></div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface pt-12 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <IvyLogo size={20} />
        <p className="footer-note">A little more clarity. A little more room to grow.</p>
        
        {SHOW_LAUNCH_LINKS && <div className="flex gap-6 md:gap-10">
          <a href="#" className="text-[13px] text-ink-muted hover:text-ink">Terms</a>
          <a href="#" className="text-[13px] text-ink-muted hover:text-ink">Privacy</a>
          <a href="#" className="text-[13px] text-ink-muted hover:text-ink">Disclaimer</a>
          <a href="#" className="text-[13px] text-ink-muted hover:text-ink">Refund Policy</a>
        </div>}
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-mist selection:bg-fresh-green selection:text-ink">
      <SiteNav brand={<IvyLogo size={28} />} />
      <Hero />
      <InteractiveShowcase />
      <WhatItDoes />
      <IdeaDemo />
      {SHOW_PRICING && <Pricing />}
      <ClosingInvitation />
      <Footer />
    </div>
  )
}
