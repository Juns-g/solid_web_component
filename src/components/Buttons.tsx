import { createEffect, createSignal } from 'solid-js'

export const Buttons = () => {
  let buttonsRef: HTMLDivElement | undefined
  const [btnText, setBtnText] = createSignal('我是按钮')
  createEffect(() => {
    const btn = buttonsRef!.querySelector('my-button') as HTMLElement
    btn.setAttribute('text', btnText())
  })
  return (
    <div
      class='flex items-center justify-center gap-3'
      ref={buttonsRef}
    >
      {/* @ts-ignore */}
      <my-button
        on:handleClick={(event: MouseEvent) => {
          console.log('点击了按钮', event)
          setBtnText('我被点击了')
        }}
      />
      {/* @ts-ignore */}
      <my-button
        text='danger按钮'
        color='danger'
      />
    </div>
  )
}
