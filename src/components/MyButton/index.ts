const COLOR_MAP = {
  primary: '#007bff',
  danger: 'red',
}

const template = document.createElement('template')
template.innerHTML = `
    <style>
        button {
            color: white;
            background-color: var(--button-color,${COLOR_MAP.primary});
            padding: 10px 20px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
    }
    </style>

    <button>默认文案</button>
`

class MyButton extends HTMLElement {
  static observedAttributes = ['text', 'color']

  constructor() {
    super()

    const content = template.content.cloneNode(true)
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(content)
  }

  connectedCallback() {
    console.log('挂载')
    this.render()
  }

  render() {
    const btn = this.shadowRoot!.querySelector('button') as HTMLButtonElement

    // text
    const buttonText = this.getAttribute('text') || '我是自定义按钮'
    btn!.innerHTML = buttonText

    // color
    const color = (this.getAttribute('color') ||
      'primary') as keyof typeof COLOR_MAP
    btn.style.setProperty('--button-color', COLOR_MAP[color])

    // handleClick
    btn.onclick = () => {
      this.dispatchEvent(new Event('handleClick'))
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    console.log('attribute change', { name, oldValue, newValue })
    this.render()
  }
}

setTimeout(() => {
  window.customElements.define('my-button', MyButton)
}, 100)
