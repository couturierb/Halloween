const template = document.createElement('template');
template.innerHTML = `
<style> @import "./background.css"; </style>
<div class='background'></div>
<h1 id='title'>
  Happy Halloween!
</h1>
<img class='web-right' src='https://engage-codepen.s3.amazonaws.com/2016/spider/web.png'>
<img class='web-left' src='https://engage-codepen.s3.amazonaws.com/2016/spider/web.png'>
`;

class HalloweenBackground extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const title = this.shadowRoot.getElementById('title');
        title.style.left = this.getAttribute('title-position-X');
        title.style.top = this.getAttribute('title-position-Y');
    }
}

window.customElements.define('halloween-background', HalloweenBackground);
