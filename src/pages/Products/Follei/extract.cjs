const fs = require('fs');

const css = fs.readFileSync('footer.css', 'utf8');

const classesToKeep = [
    '.footer', '.footer-top', '.container-fluid', '.footer-widgets-area',
    '.footer-widgets-nav', '.footer-title', '.footer-nav', '.footer-text-link',
    '.w-inline-block', '.w--current', '.text-link-wrapper', '.link-text',
    '.link-text-hover', '.white', '.footer-center', '.footer-logo',
    '.flex', '.justify-center', '.follei-char', '.inline-block',
    '.footer-center-backgorund', '.foote-bottom', '.footer-source-link',
    ':root', 'html', 'body', 'a', 'img', '*'
];

let currentMedia = '';
let inMedia = false;
let outCss = '';

let buffer = '';
let braces = 0;
let selector = '';

for (let i = 0; i < css.length; i++) {
    const char = css[i];
    buffer += char;
    if (char === '{') {
        braces++;
        if (braces === 1) {
            selector = buffer.slice(0, -1).trim();
            if (selector.startsWith('@media') || selector.startsWith('@keyframes') || selector.startsWith('@font-face')) {
                inMedia = true;
                currentMedia = selector;
                buffer = '';
            }
        } else if (braces === 2 && inMedia) {
             selector = buffer.slice(0, -1).trim();
        }
    } else if (char === '}') {
        braces--;
        if (inMedia && braces === 0) {
            inMedia = false;
            currentMedia = '';
            buffer = '';
        } else if ((!inMedia && braces === 0) || (inMedia && braces === 1)) {
            const block = buffer;
            const shouldKeep = classesToKeep.some(c => {
                if (c.startsWith('.')) return selector.includes(c);
                if (c === ':root') return selector.includes(':root');
                return selector.split(',').map(s => s.trim()).includes(c);
            });
            if (shouldKeep) {
                if (inMedia) {
                    outCss += currentMedia + ' {\n  ' + block.trim() + '\n}\n\n';
                } else {
                    outCss += block.trim() + '\n\n';
                }
            }
            buffer = '';
        }
    }
}

// Add the custom animation rules for footer text hover
outCss += `
/* Hover animation for footer text links */
.text-link-wrapper .link-text, .text-link-wrapper .link-text-hover { 
    transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); 
}
.text-link-wrapper .link-text-hover { 
    top: 100%; 
}
.footer-text-link:hover .link-text { 
    transform: translateY(-100%); 
}
.footer-text-link:hover .link-text-hover { 
    transform: translateY(-100%); 
}
`;

fs.writeFileSync('footer.css', outCss);
console.log('Done rewriting footer.css!');
