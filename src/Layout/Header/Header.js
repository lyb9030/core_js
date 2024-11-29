// css를 못가져오는 상황은 css text를 import를 작성 하면 됨
// css를 불러오면 에러가 발생, 뒤에 inline을 붙혀주면 일단은 불러는 올 수 있음
import style from "/src/Layout/Header/Header.css?inline";
import s from "/src/tailwind.css?inline";

export class Header extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = ` 
    <style>${s}</style>
      <header class="flex justify-between p-6 bg-slate-300">
        <h1 class="logo font-bold">
          <a href="/">🐯HOLA</a>
        </h1>
        <nav>
          <ul class="flex gap-5">
            <li><a href="/">HOME</a></li>
            <li><a href="/">PRODUCT</a></li>
            <li><a href="/">CONTACT</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("c-header", Header);
