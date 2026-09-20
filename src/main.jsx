import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import oneImage from "../assets/one.jpg"
import twoImage from "../assets/two.jpg"
import threeImage from "../assets/three.jpg"
import fourImage from "../assets/four.jpg"
import {
  ArrowDown,
  CakeSlice,
  ChevronRight,
  Heart,
  Gift,
  Images,
  Sparkles,
  Star,
  X,
} from 'lucide-react'
import './styles.css'

const person = {
  name: 'Aayde',
  nickname: 'my favorite person',
  year: 'another beautiful year',
}

const memories = [
  { date: 'The beginning', title: 'When our story started', text: 'Some moments arrive quietly, and somehow become part of your favorite memories.', icon: '♡' },
  { date: 'Little things', title: 'The ordinary became special', text: 'Chai, conversations, silly laughs — the small things I never want to take for granted.', icon: '✦' },
  { date: 'Today', title: 'Celebrating you', text: 'A new chapter, more places to see, more memories to make, and so many reasons to smile.', icon: '♥' },
]

const wishes = [
  'I hope this year brings you calm mornings, exciting adventures, and the kind of happiness that stays.',
  'I hope you keep choosing the things that make you feel alive, proud, peaceful, and completely yourself.',
  'And I hope we get to collect many more little moments that one day become our favorite stories.',
]

function FloatingHearts() {
  const hearts = useMemo(
    () => Array.from({ length: 15 }, (_, i) => ({ id: i, left: `${(i * 7.3) % 100}%`, delay: `${(i % 7) * 1.1}s`, size: `${10 + (i % 4) * 5}px` })),
    []
  )
  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map(h => <Heart key={h.id} style={{ left: h.left, animationDelay: h.delay, width: h.size, height: h.size }} />)}
    </div>
  )
}

// function Sparkles() {
//   const points = useMemo(
//     () => Array.from({ length: 24 }, (_, i) => ({ id: i, left: `${(i * 19) % 97}%`, top: `${(i * 37) % 92}%`, delay: `${(i % 8) * .55}s` })),
//     []
//   )
//   return (
//     <div className="sparkles" aria-hidden="true">
//       {points.map(p => <span key={p.id} style={{ left: p.left, top: p.top, animationDelay: p.delay }}>✦</span>)}
//     </div>
//   )
// }

function App() {
  const [surprise, setSurprise] = useState(false)
  const [celebrate, setCelebrate] = useState(false)
  const [lit, setLit] = useState(false)

  useEffect(() => {
    if (!celebrate) return
    const timer = setTimeout(() => setCelebrate(false), 5200)
    return () => clearTimeout(timer)
  }, [celebrate])

  return (
    <main>
      <FloatingHearts />
      <Sparkles />

      <section className="hero" id="top">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <nav className="nav">
          <a href="#top" className="brand"><span>♡</span> for {person.name}</a>
          <a href="#memories" className="nav-link">our little story <ChevronRight size={15} /></a>
        </nav>

        <div className="hero-content">
          <div className="eyebrow"><Sparkles size={15} /> a little birthday corner, made with love</div>
          <p className="small-script">Today is all about you,</p>
          <h1>Happy Birthday,<br /><em>{person.name}.</em></h1>
          <p className="hero-copy">
            I hope today feels a little softer, a little brighter, and full of the tiny things that make you smile.
          </p>
          <a className="primary-btn" href="#memories">Start the little journey <ArrowDown size={17} /></a>
        </div>

        <div className="hero-note glass">
          <Heart size={17} fill="currentColor" />
          <span>for my {person.nickname}</span>
        </div>
      </section>

      <section className="intro section">
        <div className="section-kicker">01 — a note for you</div>
        <div className="intro-grid">
          <div>
            <h2>Some people make<br /><em>life feel warmer.</em></h2>
          </div>
          <div className="body-copy">
            <p>
              You are only person for me. I love the way you can turn an ordinary day into something I want to remember.
            </p>
            <p>
              So today, I just want to celebrate <strong>you</strong> — your heart, your laugh, your little habits, and the person you are becoming.
            </p>
          </div>
        </div>
      </section>

      <section className="gallery section" id="memories">
        <div className="section-heading">
          <div><div className="section-kicker">02 — our memories</div><h2>Another Year,<br /><em>Countless memories together.</em></h2></div>
          {/* <p>Replace these with your favorite photos together.<br />The memories are yours; this is just the frame.</p> */}
        </div>
        <div className="memory-grid">
          <div className="photo-card tall "  style={{ backgroundImage: `url(${oneImage})` }}>
            <div className="placeholder-icon">
              <Images />
            </div>
            <span></span>
            <b>01</b>
          </div>
          <div className="photo-card warm" style={{ backgroundImage: `url(${twoImage})` }}>
            <div className="placeholder-icon">
              <Heart />
            </div>
            <span>a silly little moment</span>
            <b>02</b>
          </div>
          <div className="photo-card dark" style={{ backgroundImage: `url(${ fourImage})` }}>
            <div className="placeholder-icon"><Star />
            </div>
            <span>one for the memory box</span>
            <b>03</b>
          </div>
          <div className="photo-card blush" style={{ backgroundImage: `url(${threeImage})` }}>
            <div className="placeholder-icon">
              <Sparkles />
            </div>
            <span>one that makes you smile</span>
            <b>04</b>
          </div>
        </div>
      </section>

      <section className="timeline section">
        <div className="section-kicker">03 — our little timeline</div>
        <h2>Things worth<br /><em>remembering.</em></h2>
        <div className="timeline-list">
          {memories.map((m, i) => (
            <article className="timeline-item" key={m.title}>
              <div className="timeline-dot">{m.icon}</div>
              <div className="timeline-meta">{m.date} <span>0{i + 1}</span></div>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wishes section">
        <div className="wish-card glass">
          <div className="wish-flower">✽</div>
          <div className="section-kicker">04 — birthday wishes</div>
          <h2>For this year,<br /><em>I wish you...</em></h2>
          <div className="wishes-list">
            {wishes.map((wish, i) => <div className="wish" key={wish}><span>0{i + 1}</span><p>{wish}</p></div>)}
          </div>
        </div>
      </section>

      <section className="surprise section">
        <div className="surprise-inner">
          <div className="section-kicker">05 — one more thing</div>
          <h2>There is a little<br /><em>surprise for you.</em></h2>
          <p>No pressure. Just tap the button when you're ready.</p>
          <button className="primary-btn" onClick={() => setSurprise(true)} aria-label="Open your birthday surprise">
            <Gift size={18} /> Open my little surprise
          </button>
        </div>
      </section>

      <section className="cake-section section">
        <div className="section-kicker">06 — make a wish</div>
        <h2>A tiny cake for<br /><em>a very special day.</em></h2>
        <div className={`cake ${lit ? 'lit' : ''}`}>
          <div className="flame" aria-hidden="true" />
          <div className="candle"><span /></div>
          <div className="cake-top" />
          <div className="cake-body"><span>♡</span></div>
          <div className="plate" />
        </div>
        <button className="text-btn" onClick={() => setLit(v => !v)}>
          {lit ? 'Make another wish' : 'Light the candle'} <ChevronRight size={16} />
        </button>
      </section>

      <section className="final section">
        <div className="final-glow" />
        <Heart className="final-heart" size={27} fill="currentColor" />
        <p className="small-script">one last thing...</p>
        <h2>Happy Birthday,<br /><em>{person.name}.</em></h2>
        <p className="final-copy">May this new year of your life be gentle with you, generous to you, and full of moments you never want to forget.</p>
        <button className="celebrate-btn" onClick={() => setCelebrate(true)}><Sparkles size={18} /> Celebrate you</button>
        <p className="signature">with all my love, always ♡</p>
      </section>

      <footer>Made for {person.name} · {person.year} · ♡</footer>

      {surprise && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Birthday surprise">
          <div className="modal glass">
            <button className="close-btn" onClick={() => setSurprise(false)} aria-label="Close surprise"><X /></button>
            <div className="modal-heart"><Heart fill="currentColor" /></div>
            <div className="section-kicker">just between us</div>
            <h2>You are the <br /><em>Best part of my life.</em></h2>
            <p>
              Tula kiti mahatvachi ahes he sangnyasathi mala perfect moment chi garaj nahi. 
              Tujyasobatle hasne, shant moments, random gappa aani aaplya sundar aathvani yanchyasathi mi khup grateful aahe.
              Aani pudhehi aaplyala asech khup sundar moments ekatra jagayche aahet ❤️.
            </p>
            <strong>Happy birthday, beautiful. ♡</strong>
          </div>
        </div>
      )}

      {celebrate && (
        <div className="confetti" aria-hidden="true">
          {Array.from({ length: 90 }, (_, i) => <i key={i} style={{ '--x': `${(i * 47) % 100}vw`, '--d': `${(i % 15) * .08}s`, '--r': `${(i * 37) % 360}deg` }} />)}
        </div>
      )}
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
