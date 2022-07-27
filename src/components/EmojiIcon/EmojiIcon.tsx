import { CSSProperties } from 'react'

type Props = {
  src: string
  alt: string
  title?: string
  width?: string
  height?: string
  verticalAlign?: string
  style?: CSSProperties
}

const EmojiIcon = ({
  src,
  alt,
  title,
  width = '1em',
  height = '1em',
  verticalAlign = '-0.1em',
  style,
}: Props) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      title={title || alt}
      src={src}
      style={{
        width,
        height,
        margin: '0 0.05em 0 0.1em',
        verticalAlign,
        ...style,
      }}
    />
  )
}

export default EmojiIcon
