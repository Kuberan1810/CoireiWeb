import React, { useEffect, useRef } from 'react';

const Tasie = () => {
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Audio context initialization will happen on first interaction
    }, []);

    let audioCtx: AudioContext | null = null;

    const clickSound = () => {
        try {
            audioCtx = audioCtx || new (window.AudioContext || (window as any).webkitAudioContext)();
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            const now = audioCtx.currentTime;

            // Noise burst
            const bufferSize = audioCtx.sampleRate * 0.03;
            const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
            const data = buffer.getChannelData(0);

            for (let i = 0; i < bufferSize; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.exp(-i / bufferSize * 12);
            }

            const noise = audioCtx.createBufferSource();
            noise.buffer = buffer;

            const filter = audioCtx.createBiquadFilter();
            filter.type = "highpass";
            filter.frequency.value = 1800;

            const gain = audioCtx.createGain();
            gain.gain.setValueAtTime(0.18, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(audioCtx.destination);

            noise.start(now);
            noise.stop(now + 0.03);
        } catch (e) {
            // Audio unsupported or error
        }
    };

    
    const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
        const target = e.currentTarget as HTMLElement;
        const keyName = target.getAttribute('data-key');
        console.log(`Key pressed: ${keyName}`);
        // Add any additional click functionality here
    };

    const handlePress = (e: React.MouseEvent | React.TouchEvent) => {
        // Prevent default touch behavior (like scrolling) if it's a touch event
        if (e.type === 'touchstart') {
            if(e.cancelable) e.preventDefault();
        }
        const target = e.currentTarget as HTMLElement;
        target.classList.add('active');
        clickSound();
    };

    const handleRelease = (e: React.MouseEvent | React.TouchEvent) => {
        const target = e.currentTarget as HTMLElement;
        target.classList.remove('active');
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Share+Tech+Mono&display=swap');

                #tasie-root {
                    --gap: 1.2rem;
                    --gray-100: #f1f5f9;
                    --gray-200: #e2e8f0;
                    --gray-300: #cbd5e1;
                    --gray-400: #94a3b8;
                    --gray-500: #64748b;
                    --gray-700: #334155;
                    --gray-800: #1e293b;
                    --gray-900: #0f172a;
                    --ink-950: #060b14;

                    --neon-300: #86efac;
                    --neon-400: #3ddc84;
                    --neon-500: #16a34a;
                    --neon-glow: rgba(61, 220, 132, 0.55);

                    width: 100%;
                    height: 100%;
                    font-family: 'Share Tech Mono', monospace;
        
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 2.5rem;
                    padding: 0;
                    perspective: 300rem;
                    overflow: hidden;
                    position: relative;
                }

                /* Progressive scaling for laptops (1024px - 1536px) where it's 7/12 cols */
                @media (max-width: 1536px) {
                    #tasie-root .keyboard { transform: scale(0.85) rotateX(60deg) rotateZ(45deg) !important; }
                }
                @media (max-width: 1440px) {
                    #tasie-root .keyboard { transform: scale(0.7) rotateX(60deg) rotateZ(45deg) !important; }
                }
                @media (max-width: 1280px) {
                    #tasie-root .keyboard { transform: scale(0.55) rotateX(60deg) rotateZ(45deg) !important; }
                }
                
                /* Below 1024px it switches to 1 column, so the container actually gets wider again! */
                @media (max-width: 1024px) {
                    #tasie-root .keyboard { transform: scale(0.75) rotateX(60deg) rotateZ(45deg) !important; }
                }
                @media (max-width: 768px) {
                    #tasie-root .keyboard { transform: scale(0.55) rotateX(60deg) rotateZ(45deg) !important; }
                }
                @media (max-width: 480px) {
                    #tasie-root .keyboard { transform: scale(0.4) rotateX(60deg) rotateZ(45deg) !important; }
                }

                #tasie-root * {
                    box-sizing: border-box;
                }

                #tasie-root .brand {
                    position: relative;
                    text-align: center;
                    z-index: 2;
                }

                #tasie-root .brand .eyebrow {
                    font-size: 0.7rem;
                    letter-spacing: 0.45em;
                    color: var(--neon-400);
                    text-transform: uppercase;
                    opacity: 0.85;
                }

                #tasie-root .brand h1 {
                    font-family: 'Orbitron', sans-serif;
                    font-weight: 900;
                    font-size: clamp(2.4rem, 6vw, 3.6rem);
                    letter-spacing: 0.12em;
                    margin: 0.3rem 0 0.2rem;
                    color: var(--gray-100);
                    text-shadow: 0 0 12px var(--neon-glow), 0 0 40px rgba(61, 220, 132, 0.25);
                }

                #tasie-root .brand h1 span {
                    color: var(--neon-400);
                }

                #tasie-root .brand p {
                    font-size: 0.8rem;
                    color: var(--gray-400);
                    letter-spacing: 0.15em;
                    margin: 0;
                }

                #tasie-root .brand .status {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-top: 1rem;
                    font-size: 0.7rem;
                    color: var(--neon-300);
                    letter-spacing: 0.2em;
                }

                #tasie-root .brand .status .dot {
                    width: 0.5rem;
                    height: 0.5rem;
                    border-radius: 50%;
                    background: var(--neon-400);
                    box-shadow: 0 0 8px var(--neon-400);
                    animation: blink 1.6s ease-in-out infinite;
                }

                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.25; }
                }

                #tasie-root .keyboard {
                       transform: rotateX(60deg) rotateZ(45deg);
                    transform-style: preserve-3d;
                    background: var(--gray-800);
                    border-radius: 2rem;
                    padding: var(--gap);
                    box-shadow: inset 1rem 1rem 0 0.4rem var(--gray-500), 0 0 3rem rgba(61, 220, 132, 0.12);
                    display: flex;
                    gap: 0 var(--gap);
                    position: relative;
                    z-index: 2;
                }

                #tasie-root .shade {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 90%;
                    height: 5rem;
                    transform: rotateX(90deg) rotateX(14deg) translateX(10rem) translateY(-6rem) translateZ(-39rem);
                    filter: blur(0.5rem);
                    pointer-events: none;
                }

                #tasie-root .cover {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: transparent;
                    border-radius: 2rem;
                    pointer-events: none;
                    box-shadow:
                        inset -0.3rem -0.3rem 0.1rem 0.2rem var(--gray-100),
                        inset -1rem -1rem 0 0.4rem var(--gray-300),
                        inset -2rem -2rem 2rem -0.6rem var(--gray-500),
                        0 0 #e2e8f0,
                        0.3rem 0.3rem #e2e8f0,
                        0.6rem 0.6rem #e2e8f0,
                        0.9rem 0.9rem #e2e8f0,
                        1.2rem 1.2rem #e2e8f0,
                        1.5rem 1.5rem #e2e8f0,
                        1.8rem 1.8rem #e2e8f0,
                        2.1rem 2.1rem #e2e8f0,
                        2.4rem 2.4rem #e2e8f0,
                        2.7rem 2.7rem #e2e8f0,
                        3.0rem 3.0rem #e2e8f0,
                        3.3rem 3.3rem #e2e8f0,
                        3.6rem 3.6rem #e2e8f0,
                        3.9rem 3.9rem #e2e8f0,
                        4.2rem 4.2rem #e2e8f0,
                        4.5rem 4.5rem #e2e8f0,
                        4.8rem 4.8rem #e2e8f0,
                        5.1rem 5.1rem #e2e8f0,
                        5.4rem 5.4rem #e2e8f0,
                        5.7rem 5.7rem #e2e8f0,
                        6.0rem 6.0rem #e2e8f0,
                        6.3rem 6.3rem #e2e8f0,
                        6.6rem 6.6rem #e2e8f0,
                        6.9rem 6.9rem #e2e8f0,
                        7.2rem 7.2rem #e2e8f0,
                        7.5rem 7.5rem #e2e8f0,
                        8rem 10rem 2rem rgba(6, 11, 20, 0.35),
                        8rem 8rem 0.5rem rgba(6, 11, 20, 0.35);
                }

                #tasie-root .row {
                    display: flex;
                    gap: 0 var(--gap);
                }

                #tasie-root .row:not(:first-child) {
                    filter: drop-shadow(2rem -0.5rem 0.5rem rgba(6, 11, 20, 0.45));
                }

                #tasie-root .row:not(:first-child) .key:not(:first-child) {
                    filter: drop-shadow(-0.5rem 0.5rem 0.5rem rgba(6, 11, 20, 0.45));
                }

                #tasie-root .row > .key.span {
                    flex: 0 0 13.5rem;
                }

                #tasie-root .row > .key.span .side {
                    width: 120%;
                    height: 237%;
                    transform: rotateZ(45deg) translate(24%, -14%) skew(337deg);
                    background-image: linear-gradient(var(--gray-100) 25%, var(--gray-300) 30%);
                }

                #tasie-root .row > .key.span .top::before {
                    transform: translate(5%, 5%);
                }

                #tasie-root .row > .key.span .top::after {
                    background-image: linear-gradient(-25deg, transparent 45%, var(--gray-200) 55%);
                }

                #tasie-root .column {
                    display: flex;
                    flex-direction: column;
                    gap: var(--gap) 0;
                }

                #tasie-root .column > .key.span {
                    flex: 0 0 13.5rem;
                }

                #tasie-root .column > .key.span .side {
                    width: 220%;
                    height: 103%;
                    transform: rotateZ(45deg) translate(27%, 17%) skew(22deg);
                    background-image: linear-gradient(var(--gray-700) 65%, var(--gray-900) 78%);
                }

                #tasie-root .column > .key.span .top::before {
                    background-color: var(--gray-900);
                    transform: translate(5%, 5%);
                }

                #tasie-root .column > .key.span .top::after {
                    background-image: linear-gradient(291deg, transparent 45%, var(--ink-950) 50%);
                }

                #tasie-root .column > .key.span:not(.active) .char {
                    color: #fff;
                }

                #tasie-root .column:not(:first-child) {
                    filter: drop-shadow(-0.5rem 0.5rem 0.5rem rgba(6, 11, 20, 0.45));
                }

                #tasie-root .key {
                    position: relative;
                    width: 6rem;
                    height: 6rem;
                    transform: translateX(-3rem) translateY(-3rem);
                    transform-style: preserve-3d;
                    user-select: none;
                    cursor: pointer;
                    transition: transform 0.1s ease-out, filter 0.15s ease-out;
                }

                #tasie-root .key:hover {
                    transform: translateX(-3.4rem) translateY(-3.4rem);
                    filter: brightness(1.12) drop-shadow(0 0 0.6rem var(--neon-glow));
                }

                #tasie-root .key:hover .char {
                    color: var(--neon-300);
                }

                #tasie-root .key.active {
                    transform: translateX(-1rem) translateY(-1rem) !important;
                    filter: brightness(0.94) !important;
                }

                #tasie-root .key.active .char {
                    color: var(--neon-400);
                    text-shadow:
                        0.05rem 0.0rem 0 var(--gray-400),
                        0.05rem 0.1rem 0 var(--ink-950),
                        0 0 0.6rem var(--neon-glow);
                }

                #tasie-root .key.span.active .side {
                    filter: brightness(1.15);
                }

                #tasie-root .char {
                    position: absolute;
                    font-family: 'Share Tech Mono', monospace;
                    font-size: 2.6rem;
                    letter-spacing: 0.02em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    color: var(--gray-500);
                    transition: color 0.15s ease-out;
                    text-shadow:
                        0.05rem 0.0rem 0 var(--gray-400),
                        0.05rem 0.1rem 0 var(--ink-950),
                        0.1rem 0.05rem 0 var(--gray-400),
                        0.1rem 0.15rem 0 var(--ink-950),
                        0.15rem 0.1rem 0 var(--gray-400),
                        0.15rem 0.2rem 0 var(--ink-950),
                        0.2rem 0.15rem 0 var(--gray-400),
                        0.2rem 0.25rem 0 var(--ink-950),
                        0.25rem 0.2rem 0 var(--gray-400),
                        0.25rem 0.3rem 0 var(--ink-950);
                }

                #tasie-root .char.word {
                    font-size: 1.2rem;
                    letter-spacing: 0.06em;
                }

                #tasie-root .char.sym {
                    font-size: 1.8rem;
                }

                #tasie-root .side {
                    position: absolute;
                    width: 250%;
                    height: 140%;
                    background-image: linear-gradient(var(--gray-100) 45%, var(--gray-300) 55%);
                    border-radius: 1rem;
                    transform: rotateZ(45deg) translate(19%, 28%);
                }

                #tasie-root .top {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }

                #tasie-root .top::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: var(--gray-200);
                    border-radius: 0.8em;
                    filter: blur(0.3rem);
                    transform: translate(10%, 10%);
                }

                #tasie-root .top::after {
                    content: '';
                    position: absolute;
                    width: 105%;
                    height: 105%;
                    background-image: linear-gradient(-45deg, transparent 45%, var(--gray-200) 55%);
                    border-radius: 0.8rem;
                    box-shadow: inset -0.2rem -0.2rem 0.5rem -0.2rem white, 0.2rem 0.2rem 0.5rem -0.2rem white;
                }

                #tasie-root .hint {
                    position: relative;
                    z-index: 2;
                    color: var(--gray-500);
                    font-size: 0.72rem;
                    letter-spacing: 0.12em;
                    text-align: center;
                }

                #tasie-root .hint b {
                    color: var(--neon-400);
                }
                #tasie-root .key.orange-key .side {
                    background-image: linear-gradient(#f48120 45%, #d8721c 55%);
                }

                #tasie-root .key.orange-key .top::before {
                    background-color: #ff9842;
                }

                #tasie-root .key.orange-key .top::after {
                    background-image: linear-gradient(-45deg, transparent 45%, #ff9842 55%);
                }

                #tasie-root .key.orange-key .char {
                    color: #fff;
                    text-shadow: none;
                }
            `}</style>

            <div id="tasie-root" className="" ref={rootRef}>


                <div className="keyboard" id="tasie-keyboard">
                    <div className="column">
                        <div className="row">
                            <div className="key orange-key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="t">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char text-white!">T</div>
                            </div>
                            <div className="key orange-key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="a">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char text-white!">A</div>
                            </div>
                            <div className="key orange-key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="s">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char text-white!">S</div>
                            </div>
                            <div className="key orange-key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="i">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char text-white!">I</div>
                            </div>
                            <div className="key orange-key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="e">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char text-white!">E</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="brace">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char sym">&lt;/&gt;</div>
                            </div>
                            <div className="key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="hex">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char sym">0x</div>
                            </div>
                            <div className="key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="curly">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char sym">{`{ }`}</div>
                            </div>
                            <div className="key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="colons">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char sym">::</div>
                            </div>
                            <div className="key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="equals">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char sym">=</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="brackets">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char sym">[ ]</div>
                            </div>
                            <div className="key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="parens">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char sym">( )</div>
                            </div>
                            <div className="key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="quotes">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char sym">" "</div>
                            </div>
                            <div className="key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="semi">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char sym">;</div>
                            </div>
                            <div className="key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="plus">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char sym">+</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="asterisk">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char sym">*</div>
                            </div>
                            <div className="key span" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="prompt">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char sym">&gt;_</div>
                            </div>
                            <div className="key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="slash">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char sym">/</div>
                            </div>
                            <div className="key" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="dot">
                                <div className="side"></div>
                                <div className="top"></div>
                                <div className="char">.</div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="key span" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="scan">
                            <div className="side"></div>
                            <div className="top"></div>
                            <div className="char word">SCAN</div>
                        </div>
                        <div className="key span" onClick={handleClick}  onMouseDown={handlePress} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={handlePress} onTouchEnd={handleRelease} data-key="lock">
                            <div className="side"></div>
                            <div className="top"></div>
                            <div className="char word">LOCK</div>
                        </div>
                    </div>
                    <div className="shade"></div>
                    <div className="cover"></div>
                </div>


            </div>
        </>
    );
};

export default Tasie;