import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export type TypographyProps = {
  children: React.ReactNode
  className?: string
}

const H1 = ({ children, className = '' }: TypographyProps) => (
  <h1
    className={`dark:text-neutral-50lg:text-5xl scroll-m-20 text-4xl font-extrabold  tracking-tight  ${className}`}
  >
    {children}
  </h1>
)

const H2 = ({ children, className = '' }: TypographyProps) => (
  <h2
    className={`dark:text-neutral-50text-3xl scroll-m-20 border-b border-b-slate-200  pb-2  font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700 ${className}`}
  >
    {children}
  </h2>
)

const H3 = ({ children, className = '' }: TypographyProps) => (
  <h3
    className={`scroll-m-20 text-2xl font-semibold tracking-tight dark:text-neutral-50 ${className}`}
  >
    {children}
  </h3>
)

const H4 = ({ children, className = '' }: TypographyProps) => (
  <h4
    className={`scroll-m-20 text-xl font-semibold tracking-tight dark:text-neutral-50 ${className}`}
  >
    {children}
  </h4>
)

export type TitleProps = {
  level?: 1 | 2 | 3 | 4
  children: React.ReactNode
  className?: string
}

export const Title = ({ children, level, className = '' }: TitleProps) => {
  switch (level) {
    case 1:
      return <H1 className={className}>{children}</H1>
    case 2:
      return <H2 className={className}>{children}</H2>
    case 3:
      return <H3 className={className}>{children}</H3>
    case 4:
      return <H4 className={className}>{children}</H4>
    default:
      return <H3 className={className}>{children}</H3>
  }
}

export const Paragraph = ({ children, className = '' }: TypographyProps) => (
  <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
    {children}
  </p>
)

export const Blockquote = ({ children, className = '' }: TypographyProps) => (
  <blockquote
    className={`mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200 ${className}`}
  >
    {children}
  </blockquote>
)

export const InlineCode = ({ children, className = '' }: TypographyProps) => (
  <code
    className={`relative rounded bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 ${className}`}
  >
    {children}
  </code>
)

export type TextProps = {
  size?: 'sm' | 'md' | 'lg'
  type?: 'subtle'
  children: React.ReactNode
  className?: string
}

const textClasses = cva(['text-slate-900', 'dark:text-slate-50'], {
  variants: {
    size: {
      sm: ['text-sm', 'font-medium', 'leading-none'],
      md: 'text-base',
      lg: ['text-lg', 'font-semibold'],
    },
  },
})

export const Text = ({ children, size = 'md', className = '' }: TextProps) => (
  <p className={cn(textClasses({ size, className }))}>{children}</p>
)

export const Subtle = ({ children, className = '' }: TextProps) => (
  <p className={`text-sm text-slate-500 dark:text-slate-400 ${className}`}>
    {children}
  </p>
)

const Typography = {
  Title,
  Paragraph,
  Blockquote,
  InlineCode,
  Text,
  Subtle,
}

export default Typography
