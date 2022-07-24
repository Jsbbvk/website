type Props = {
  src: string
  alt: string
  width?: string
  height?: string
  verticalAlign?: string
}

const EmojiIcon = ({
  src,
  alt,
  width = '1em',
  height = '1em',
  verticalAlign = '-0.1em',
}: Props) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      src={src}
      title={alt}
      style={{
        width,
        height,
        margin: '0 0.05em 0 0.1em',
        verticalAlign,
      }}
    />
  )
}

export default EmojiIcon
