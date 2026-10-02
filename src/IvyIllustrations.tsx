import type { CSSProperties } from 'react'

export function Leaf({ x, y, angle = 0, scale = 1, pale = false }: { x: number; y: number; angle?: number; scale?: number; pale?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle}) scale(${scale})`}>
      <g className="illustrated-leaf">
      <path d="M0 0 C-24 -5 -31 -25 -22 -37 C-13 -40 -4 -32 0 -27 C4 -34 16 -39 23 -33 C32 -18 19 -5 0 0Z" fill={pale ? '#C8E8A7' : '#79AC83'} stroke="#376D54" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M0 -3 Q-1 -15 0 -26" fill="none" stroke="#376D54" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </g>
  )
}

function Plant() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="500" cy="315" rx="102" ry="12" fill="#DCE8D4" />
      <g fill="none" stroke="#376D54" strokeWidth="4">
        <path d="M498 236 C487 203 525 178 506 135 S474 93 499 55" />
        <path d="M494 220 C462 204 446 165 416 157" />
        <path d="M505 223 C543 205 546 166 584 152" />
        <path d="M476 195 C441 202 422 226 393 211" />
      </g>
      <Leaf x={499} y={64} angle={12} scale={0.95} pale />
      <Leaf x={496} y={108} angle={-65} scale={0.9} />
      <Leaf x={513} y={143} angle={65} pale />
      <Leaf x={499} y={183} angle={-52} scale={1.1} />
      <Leaf x={444} y={180} angle={-48} scale={0.85} pale />
      <Leaf x={419} y={159} angle={-70} scale={0.8} />
      <Leaf x={548} y={192} angle={48} scale={0.9} />
      <Leaf x={581} y={154} angle={48} scale={0.85} pale />
      <Leaf x={396} y={213} angle={-102} scale={0.65} pale />
      <path d="M449 243 L459 296 Q461 310 479 310 H521 Q538 310 541 296 L552 243" fill="#EBC7A9" stroke="#926C52" strokeWidth="2.5" />
      <rect x="442" y="231" width="117" height="22" rx="9" fill="#F5D9BD" stroke="#926C52" strokeWidth="2.5" />
      <path d="M469 264 L473 288" stroke="#F8E4CF" strokeWidth="5" />
      <g fill="#604C3D">
        <circle cx="489" cy="276" r="3" />
        <circle cx="515" cy="276" r="3" />
      </g>
      <path d="M496 286 Q502 292 508 286" fill="none" stroke="#604C3D" strokeWidth="2" />
    </g>
  )
}

export function IvyGarden({ compact = false }: { compact?: boolean }) {
  return (
    <svg className={compact ? 'ivy-garden ivy-garden--compact' : 'ivy-garden'} viewBox={compact ? '340 0 320 360' : '0 0 1000 360'} role="img" aria-label="A cheerful illustrated ivy plant growing beside research notes" preserveAspectRatio="xMidYMid slice">
      <rect width="1000" height="360" fill="#EEF3E5" />
      <path d="M0 295 Q180 254 360 292 T700 293 T1000 282 V360 H0Z" fill="#E5EEDC" />
      <circle cx="506" cy="157" r="132" fill="#F9F8E9" />
      <g fill="none" stroke="#97B08B" strokeWidth="2" strokeLinecap="round">
        <path d="M354 98 v12 M348 104 h12 M631 215 v10 M626 220 h10" />
        <path d="M608 67 l4 -7 M620 78 l8 -2" />
        <circle cx="374" cy="261" r="3" />
        <circle cx="632" cy="116" r="4" />
      </g>
      {!compact && <g className="garden-notes" strokeLinecap="round" strokeLinejoin="round">
        <g transform="rotate(-7 225 190)">
          <rect x="112" y="122" width="209" height="154" rx="18" fill="#DCE6D1" />
          <rect x="106" y="115" width="209" height="154" rx="18" fill="#FFFEF8" stroke="#ACC0A3" strokeWidth="2" />
          <path d="M130 146 h61 M130 158 h39" stroke="#91A48B" strokeWidth="5" />
          <path d="M132 229 H287" stroke="#DBE5D5" strokeWidth="2" />
          <path d="M139 212 L167 202 L194 214 L226 181 L247 189 L281 169" fill="none" stroke="#568966" strokeWidth="3" />
          <circle cx="281" cy="169" r="5" fill="#C8E8A7" stroke="#568966" strokeWidth="2" />
        </g>
        <g transform="rotate(7 773 185)">
          <rect x="697" y="96" width="182" height="184" rx="18" fill="#DCE6D1" />
          <rect x="691" y="89" width="182" height="184" rx="18" fill="#FFFEF8" stroke="#ACC0A3" strokeWidth="2" />
          <rect x="712" y="110" width="39" height="39" rx="12" fill="#E4EED8" />
          <path d="M723 129 l6 6 12 -13" fill="none" stroke="#568966" strokeWidth="2.5" />
          <path d="M712 170 h129 M712 183 h107 M712 196 h117" stroke="#D0DDC8" strokeWidth="5" />
          <rect x="712" y="222" width="78" height="23" rx="11" fill="#E4EED8" />
          <path d="M725 233 h50" stroke="#91A48B" strokeWidth="3" />
        </g>
        <path d="M333 193 Q359 162 379 181 M652 180 Q666 162 683 177" fill="none" stroke="#ACC0A3" strokeWidth="2" strokeDasharray="3 7" />
      </g>}
      <Plant />
    </svg>
  )
}

export function IvyConnections() {
  return (
    <svg className="ivy-connections" viewBox="0 0 560 560" role="img" aria-label="Ivy at the center of a circle, with roots connecting stocks, email, a Word document, and research notes">
      <circle cx="280" cy="280" r="216" fill="#EEF3E8" />
      <circle cx="280" cy="280" r="215" fill="none" stroke="#DCE7D4" />
      <circle cx="280" cy="280" r="160" fill="none" stroke="#E0E9D9" strokeDasharray="2 9" />
      <g fill="none" stroke="#9DB494" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M280 337 C260 362 193 307 193 246 S188 154 129 134" />
        <path d="M280 337 C306 354 367 306 366 252 S373 154 419 129" />
        <path d="M280 337 C233 377 185 331 157 326 S106 318 85 297" />
        <path d="M280 337 C309 371 367 355 402 324 S442 292 465 300" />
        <path d="M280 337 C257 378 316 387 299 421 S299 447 310 463" />
        <path d="M193 248 Q176 234 167 235 M190 191 Q207 176 204 162 M367 217 Q386 200 396 204 M348 349 Q353 375 365 381 M216 355 Q200 374 188 370 M294 396 Q319 395 328 406" stroke="#B7C9AC" />
      </g>
      <g opacity="0.7">
        <Leaf x={192} y={216} angle={-45} scale={0.3} pale />
        <Leaf x={370} y={188} angle={45} scale={0.3} pale />
        <Leaf x={165} y={328} angle={-75} scale={0.28} pale />
        <Leaf x={397} y={330} angle={65} scale={0.3} pale />
        <Leaf x={298} y={428} angle={70} scale={0.28} pale />
      </g>
      <g transform="translate(-45 137) scale(0.65)"><Plant /></g>
      <g className="connection-node">
        <g transform="translate(69 105) rotate(-5 58 27)">
          <rect width="116" height="54" rx="17" />
          <path d="M16 34 l8 -9 7 4 11 -12" fill="none" stroke="#82A375" strokeWidth="2" strokeLinecap="round" />
          <text x="54" y="32">AAPL</text>
        </g>
        <g transform="translate(361 99) rotate(5 61 27)">
          <rect width="122" height="54" rx="17" />
          <g fill="none" stroke="#829D78" strokeWidth="1.7" strokeLinejoin="round">
            <rect x="16" y="18" width="25" height="18" rx="3" />
            <path d="M17 20 l11.5 9 L40 20" />
          </g>
          <text x="53" y="32">Email</text>
        </g>
        <g transform="translate(25 272) rotate(-4 57 27)">
          <rect width="114" height="54" rx="17" />
          <circle cx="28" cy="27" r="12" fill="#E9EFDF" stroke="none" />
          <path d="M22 29 l4 -6 4 4 5 -7" fill="none" stroke="#82A375" strokeWidth="1.6" strokeLinecap="round" />
          <text x="49" y="32">NVDA</text>
        </g>
        <g transform="translate(410 270) rotate(5 63 30)">
          <rect width="126" height="60" rx="17" />
          <path d="M18 16 h15 l7 7 v22 H18Z M33 16 v8 h7" fill="#EEF0EB" stroke="#849B88" strokeWidth="1.3" strokeLinejoin="round" />
          <text x="23" y="37" style={{ fontSize: 12 }} fill="#5E7D6E">W</text>
          <text x="50" y="27" style={{ fontSize: 13 }}>Word</text>
          <text x="50" y="43" style={{ fontSize: 11, fontWeight: 400 }} fill="#84927D">document</text>
        </g>
        <g transform="translate(229 442) rotate(-3 81 27)">
          <rect width="162" height="54" rx="17" />
          <g fill="none" stroke="#829D78" strokeWidth="1.5" strokeLinecap="round">
            <path d="M19 15 h20 v25 H19Z M24 22 h10 M24 28 h10 M24 34 h6" />
          </g>
          <text x="51" y="32" style={{ fontSize: 13 }}>Research notes</text>
        </g>
      </g>
    </svg>
  )
}

export function CornerVines({ animate = false }: { animate?: boolean }) {
  const leaves = [
    { x: 99, y: 19, angle: -55, delay: 160 },
    { x: 78, y: 18, angle: 55, delay: 280 },
    { x: 54, y: 17, angle: -55, delay: 410 },
    { x: 27, y: 18, angle: 60, delay: 550 },
    { x: 108, y: 40, angle: -40, delay: 320 },
    { x: 109, y: 64, angle: 35, delay: 470 },
    { x: 104, y: 90, angle: -35, delay: 620 },
  ]

  return (
    <div className={`corner-vines${animate ? '' : ' corner-vines--static'}`} aria-hidden="true">
      {['top', 'bottom'].map(corner => (
        <svg key={corner} className={`corner-vine corner-vine--${corner}`} viewBox="0 0 120 120" fill="none">
          <path className="vine-stem" pathLength="1" d="M120 3 C98 5 106 24 78 18 S37 14 8 20" />
          <path className="vine-stem" pathLength="1" d="M117 2 C108 24 101 40 109 57 S98 91 103 112" />
          {leaves.map((leaf, index) => (
            <g key={index} transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.angle})`}>
              <g className="vine-leaf" style={{ '--leaf-delay': `${leaf.delay}ms` } as CSSProperties}>
                <path d="M0 0 C-9 -2 -12 -11 -8 -14 C-4 -16 -1 -11 0 -10 C3 -15 8 -15 10 -11 C13 -6 6 -1 0 0Z" fill={index % 2 ? '#BFD7AA' : '#98BC96'} />
                <path d="M0 -1 L1 -9" stroke="#72936D" strokeWidth="0.8" />
              </g>
            </g>
          ))}
        </svg>
      ))}
    </div>
  )
}
