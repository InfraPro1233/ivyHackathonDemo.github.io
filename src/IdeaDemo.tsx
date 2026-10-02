import { useState } from 'react'
import { IvyGarden, Leaf } from './IvyIllustrations'

export function IdeaDemo() {
  const [memoOpen, setMemoOpen] = useState(false)

  return (
    <section id="demo" className="idea-demo" aria-labelledby="idea-demo-heading">
      <header className="idea-demo-heading">
        <span className="capability-eyebrow">A little curiosity goes a long way</span>
        <h2 id="idea-demo-heading">Watch an idea take root.</h2>
        <p>From a question to something you can work with.</p>
      </header>

      <div className="idea-demo-card">
        <div className="demo-context">
          <span className="demo-avatar" aria-hidden="true"><IvyGarden compact /></span>
          <div><strong>A moment with Ivy</strong><span>Illustrative demo · Hypothetical scenario</span></div>
        </div>

        <ol className="idea-steps">
          <li className="idea-step">
            <span className="idea-step-number" aria-hidden="true">1</span>
            <div className="idea-step-content">
              <h3>Ask</h3>
              <p className="demo-question">What would a TSMC capex cut mean for my holdings?</p>
            </div>
          </li>

          <li className="idea-step">
            <span className="idea-step-number" aria-hidden="true">2</span>
            <div className="idea-step-content">
              <h3>Connect the dots</h3>
              <p className="demo-explanation">A smaller equipment budget could mean delayed orders. Ivy connects that possibility to two sample holdings worth a closer look.</p>
              <div className="demo-holdings">
                <svg className="holdings-vine" viewBox="0 0 520 56" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M260 0 C251 24 189 9 130 27 L130 55 M260 0 C269 24 331 9 390 27 L390 55" fill="none" stroke="#9CB38E" strokeWidth="1.5" strokeLinecap="round" />
                  <Leaf x={214} y={16} angle={-55} scale={0.3} pale />
                  <Leaf x={328} y={19} angle={50} scale={0.28} pale />
                </svg>
                <div className="demo-holding">
                  <span className="holding-mark" aria-hidden="true">A</span>
                  <div><strong>ASML</strong><span>Equipment orders</span></div>
                </div>
                <div className="demo-holding">
                  <span className="holding-mark" aria-hidden="true">L</span>
                  <div><strong>Lam Research</strong><span>Spending exposure</span></div>
                </div>
              </div>
              <p className="demo-small-note">Sample holdings, not a connected portfolio.</p>
            </div>
          </li>

          <li className="idea-step">
            <span className="idea-step-number" aria-hidden="true">3</span>
            <div className="idea-step-content">
              <h3>Make something of it</h3>
              <p className="demo-explanation">Give the idea a place to grow. Turn it into a short research memo.</p>
              <button type="button" className="demo-memo-button" aria-expanded={memoOpen} aria-controls="ivy-example-memo" onClick={() => setMemoOpen(open => !open)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 3 h9 l4 4 v14 H6Z M15 3 v5 h4 M10 12 h5 M10 16 h5" />
                </svg>
                {memoOpen ? 'Close memo' : 'Draft a memo'}
                <span aria-hidden="true">{memoOpen ? '−' : '↗'}</span>
              </button>

              <div id="ivy-example-memo" hidden={!memoOpen}>
                {memoOpen && <article className="demo-memo" aria-labelledby="example-memo-title">
                  <span className="memo-fold" aria-hidden="true" />
                  <span className="capability-eyebrow">Example memo · For review</span>
                  <h4 id="example-memo-title">If TSMC trims its capex</h4>
                  <dl>
                    <div><dt>The scenario</dt><dd>Assume TSMC reduces planned capital spending. This is a hypothetical change, not a reported update.</dd></div>
                    <div><dt>What to investigate</dt><dd>Could equipment orders shift for ASML or Lam Research? The effect would depend on which projects change and when.</dd></div>
                    <div><dt>Next checks</dt><dd>Review company guidance, order backlogs, and actual portfolio weights before drawing a conclusion.</dd></div>
                  </dl>
                  <div className="memo-signoff"><span aria-hidden="true">✿</span> A starting point for your research.</div>
                </article>}
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}
