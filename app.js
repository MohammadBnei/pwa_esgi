'use strict';

(async () => {
    const app = document.querySelector('#app main');

    const result = await fetch('/data/spacex.json');
    const data = await result.json();
    
    const skeleton = app.querySelector('.skeleton');
    skeleton.setAttribute('hidden', '');

    const constructor = html`
        <section class="card">

        </section>
    `
})();