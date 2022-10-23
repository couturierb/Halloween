const template = document.createElement('template');
template.innerHTML = `
<style> @import "./pumpkin.css"; </style>
<div class=container>
    <div class="pumpkin">
        <div class="texture"></div>
        <div class="root"></div>
        <div class="eye left"></div>
        <div class="eye right"></div>
        <div class="mouth left"></div>
        <div class="mouth right"></div>
        <div class="teeth"></div>
    </div>
 
    <div class="shadow"></div>
</div>
`;

class HalloweenPumpkin extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('halloween-pumpkin', HalloweenPumpkin);
