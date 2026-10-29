const assert = require('node:assert/strict');
const fs = require('node:fs');
const { JSDOM } = require('jsdom');

const inputs = [
    ['fas fa-angle-up', 'I', 'fas fa-angle-up'],
    ['dashicons-arrow-up-alt', 'SPAN', 'dashicon dashicons dashicons-arrow-up-alt'],
    ['fa-x&quot;&gt;&lt;img src=x onerror=alert(document.domain)&gt;', 'I', null],
    ['dashicons-x&#34;&#62;&#60;img src=x onerror=alert(document.domain)&#62;', 'SPAN', null],
    [null, 'I', 'fas fa-angle-up'],
];
// The built bundle is only present after `npm run build`; test it when it is.
const targets = ['src/frontend.js', 'dist/frontend/index.js'].filter((file) => fs.existsSync(file));
for (const file of targets) {
    for (const [value, tag, classes] of inputs) {
        const attr = value === null ? '' : `data-scroll-top-icon="${value}"`;
        const dom = new JSDOM(`<body><div class="eb-toc-container" data-scroll-top="true" ${attr}></div></body>`, { runScripts: 'outside-only' });
        const { window } = dom;
        window.eval(fs.readFileSync(file, 'utf8'));
        window.dispatchEvent(new window.Event('DOMContentLoaded'));
        const button = window.document.querySelector('.eb-toc-go-top');
        assert.ok(button, file);
        assert.equal(button.children.length, 1);
        assert.equal(button.firstElementChild.tagName, tag);
        assert.equal(button.querySelectorAll('img, script, svg, [onerror]').length, 0);
        if (classes) assert.equal(button.firstElementChild.className.trim(), classes);
        let scrolled = false;
        window.scroll = () => { scrolled = true; };
        button.click();
        assert.ok(scrolled);
        window.close();
    }
}
console.log(`PASS (${targets.join(', ')}): encoded payloads, both icon families, missing attribute, and click behavior`);
