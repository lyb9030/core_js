export class Card extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.state = {
      showImage: this.getAttribute('show-image') || 'true',
      title: this.getAttribute('title') || 'Card Title',
    };

    this.render();
  }

  //관찰자 설정
  static get observedAttributes() {
    return ['show-image', 'title'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'show-image') {
      this.state.showImage = newValue;
      this.render();
    }

    if (name === 'title') {
      this.state.title = newValue;
      this.render();
    }
  }

  // 화면에 랜더링 하기
  render() {
    const { showImage, title } = this.state;

    const figure = /* html */ `
      <figure>
        <img src="./assets/visual.jpg" alt="" />
        <figcaption class="a11y-hidden">눈이 소복히 쌓인 나뭇가지</figcaption>
      </figure>
    `;

    this.shadowRoot.innerHTML = `
      <style>@import url('./components/Card/Card.css');</style>
      <div class="card">
      <!-- 이미지 접었다 펼쳤다 하기 -->
        ${showImage === 'true' ? figure : ''}
        <!-- h2 title 변경하기 -->
        <h2>${title}</h2>
        <p>
          <slot name="desc">description...</slot>
        </p>
      </div>
    `;
  }
}
