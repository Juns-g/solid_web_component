declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-button': {
        text?: string
        color?: string
        onClick?: (event: MouseEvent) => void // 可以根据需要添加其他事件
      }
    }
  }
}
