import { Leaf } from './IvyIllustrations'

export function SourcesScene() {
  return (
    <svg className="capability-scene" viewBox="0 0 520 220" role="img" aria-label="Illustrated research papers, with a highlighted passage connected by a vine to AMAT 10-K and LRCX Q2 citations">
      <ellipse cx="262" cy="195" rx="218" ry="15" fill="#EEF3E8" />
      <g transform="rotate(-6 170 110)">
        <rect x="49" y="35" width="240" height="153" rx="15" fill="#E8EFDF" stroke="#B8CAAD" strokeWidth="1.5" />
      </g>
      <g className="scene-paper">
        <rect x="59" y="25" width="240" height="153" rx="15" fill="#FFFEF8" stroke="#ABC09E" strokeWidth="1.5" />
        <text x="81" y="55" className="scene-label">RESEARCH NOTES</text>
        <path d="M82 76 H264 M82 90 H244 M82 145 H201" className="scene-lines" />
        <rect x="76" y="104" width="199" height="24" rx="7" fill="#DFEDCF" />
        <path d="M84 116 H233" stroke="#88A577" strokeWidth="3" strokeLinecap="round" />
        <circle cx="260" cy="116" r="5" fill="#A7C491" />
      </g>
      <g fill="none" stroke="#91AD81" strokeWidth="1.7" strokeLinecap="round">
        <path d="M264 116 C310 115 303 80 347 80 M309 102 C325 106 320 145 347 145" />
      </g>
      <g className="scene-leaf"><Leaf x={317} y={99} angle={42} scale={0.32} pale /></g>
      <g className="scene-leaf"><Leaf x={329} y={134} angle={-45} scale={0.27} /></g>
      <g className="scene-source">
        <rect x="346" y="57" width="142" height="46" rx="14" />
        <rect x="346" y="123" width="142" height="46" rx="14" />
        <text x="369" y="85">AMAT 10-K</text>
        <text x="378" y="151">LRCX Q2</text>
      </g>
    </svg>
  )
}

export function PortfolioScene() {
  return (
    <svg className="capability-scene" viewBox="0 0 300 220" role="img" aria-label="AAPL, NVDA, and MSFT stock cards connected by leafy stems">
      <ellipse cx="150" cy="201" rx="103" ry="11" fill="#DAE8CF" />
      <g fill="none" stroke="#8AA67D" strokeWidth="2" strokeLinecap="round">
        <path d="M150 200 C153 147 94 153 70 95 M150 200 C142 154 192 134 219 64 M150 200 C140 174 118 163 89 163" />
      </g>
      <g className="scene-leaf"><Leaf x={131} y={171} angle={-55} scale={0.43} pale /></g>
      <g className="scene-leaf"><Leaf x={181} y={129} angle={50} scale={0.36} /></g>
      <g className="scene-leaf"><Leaf x={101} y={137} angle={-45} scale={0.3} /></g>
      <g className="scene-source">
        <g transform="rotate(-6 66 65)"><rect x="17" y="39" width="98" height="53" rx="15" /><text x="44" y="72">AAPL</text></g>
        <g transform="rotate(5 224 42)"><rect x="175" y="16" width="98" height="53" rx="15" /><text x="199" y="49">NVDA</text></g>
        <g transform="rotate(-3 61 164)"><rect x="12" y="139" width="98" height="49" rx="15" /><text x="36" y="169">MSFT</text></g>
      </g>
    </svg>
  )
}

export function FollowUpScene() {
  return (
    <svg className="capability-scene" viewBox="0 0 520 220" role="img" aria-label="An illustrated investment memo branching into email, Word, and Notion documents">
      <ellipse cx="267" cy="199" rx="214" ry="12" fill="#E6EDDE" />
      <g fill="none" stroke="#96AE88" strokeWidth="1.7" strokeLinecap="round">
        <path d="M219 115 C299 125 286 43 351 43 M219 115 C282 113 291 111 352 111 M219 115 C282 109 293 179 352 179" />
      </g>
      <g className="scene-leaf"><Leaf x={294} y={76} angle={-45} scale={0.32} pale /></g>
      <g className="scene-leaf"><Leaf x={310} y={163} angle={55} scale={0.32} /></g>
      <g transform="rotate(-5 144 110)">
        <g className="scene-paper">
          <rect x="63" y="21" width="164" height="177" rx="16" fill="#FFFEF8" stroke="#ABC09E" strokeWidth="1.5" />
          <rect x="82" y="41" width="34" height="34" rx="11" fill="#E3EDDA" />
          <path d="M93 60 l5 5 9 -12" fill="none" stroke="#729462" strokeWidth="2" strokeLinecap="round" />
          <text x="82" y="99" className="scene-label">INVESTMENT MEMO</text>
          <path d="M83 117 H203 M83 131 H192 M83 145 H200" className="scene-lines" />
          <rect x="82" y="162" width="74" height="18" rx="8" fill="#E3EDDA" />
          <path d="M93 171 H144" stroke="#A2BB94" strokeWidth="2" strokeLinecap="round" />
        </g>
      </g>
      <g className="scene-source">
        <rect x="350" y="19" width="127" height="48" rx="14" />
        <rect x="350" y="87" width="127" height="48" rx="14" />
        <rect x="350" y="155" width="127" height="48" rx="14" />
        <g fill="none" stroke="#809771" strokeWidth="1.5" strokeLinejoin="round">
          <rect x="367" y="35" width="23" height="16" rx="3" /><path d="M368 37 l10 8 11 -8" />
          <path d="M368 100 h15 l6 6 v17 h-21Z M383 100 v7 h6" />
          <rect x="367" y="169" width="23" height="22" rx="4" />
        </g>
        <text x="402" y="48">Email</text>
        <text x="402" y="116">Word</text>
        <text x="402" y="184">Notion</text>
        <text x="372" y="117" style={{ fontSize: 10 }}>W</text>
        <text x="373" y="185" style={{ fontSize: 13 }}>N</text>
      </g>
    </svg>
  )
}
