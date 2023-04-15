import type { Meta, StoryObj } from '@storybook/react'

import Typography from './typography'
import type { TitleProps, TypographyProps } from './typography'

const {
  Title: TypographyTitle,
  Paragraph: TypographyParagraph,
  Text: TypographyText,
  Blockquote: TypographyBlockquote,
  // InlineCode: TypographyInlineCode,
  Subtle: TypographySubtle,
} = Typography

const meta: Meta<typeof TypographyText> = {
  title: 'Typography/Text',
  component: TypographyText,
  // subcomponents: {
  //   TypographyTitle,
  //   TypographyParagraph,
  //   TypographyBlockquote,
  //   TypographyInlineCode,
  //   TypographySubtle,
  // },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TypographyText>

export const Demo = {
  args: {
    children: 'The Joke Tax Chronicles',
    level: 1,
  },
  render: () => (
    <div>
      <TypographyTitle level={1}>The Joke Tax Chronicles</TypographyTitle>
      <TypographyParagraph>
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </TypographyParagraph>
      <TypographyTitle level={2}>The King&apos;s Plan</TypographyTitle>
      <TypographyParagraph>
        The king thought long and hard, and finally came up with{' '}
        <a
          href="#"
          className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-50"
        >
          a brilliant plan
        </a>
        : he would tax the jokes in the kingdom.
      </TypographyParagraph>
      <TypographyBlockquote>
        &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
        it&apos;s only fair that they should pay for the privilege.&quot;
      </TypographyBlockquote>
      <TypographyTitle level={3}>The Joke Tax</TypographyTitle>
      <TypographyParagraph>
        The king&apos;s subjects were not amused. They grumbled and complained,
        but the king was firm:
      </TypographyParagraph>
      <TypographyParagraph>
        {`As a result, people stopped telling jokes, and the kingdom fell into a
        gloom. But there was one person who refused to let the king's
        foolishness get him down: a court jester named Jokester.`}
      </TypographyParagraph>
      <TypographyTitle level={3}>Jokester&apos;s Revolt</TypographyTitle>
      <TypographyParagraph>
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king&apos;s pillow, in his
        soup, even in the royal toilet. The king was furious, but he
        couldn&apos;t seem to stop Jokester.
      </TypographyParagraph>
      <TypographyParagraph>
        And then, one day, the people of the kingdom discovered that the jokes
        left by Jokester were so funny that they couldn&apos;t help but laugh.
        And once they started laughing, they couldn&apos;t stop.
      </TypographyParagraph>
      <TypographyTitle level={3}>The People&apos;s Rebellion</TypographyTitle>
      <TypographyParagraph>
        The people of the kingdom, feeling uplifted by the laughter, started to
        tell jokes and puns again, and soon the entire kingdom was in on the
        joke.
      </TypographyParagraph>
      <TypographyParagraph>
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax. Jokester was declared a hero, and
        the kingdom lived happily ever after.
      </TypographyParagraph>
      <TypographyParagraph>
        The moral of the story is: never underestimate the power of a good laugh
        and always be careful of bad ideas.
      </TypographyParagraph>
    </div>
  ),
}
export const Title = {
  args: {
    children: 'The Joke Tax Chronicles',
    level: 1,
  },
  render: (args: TitleProps) => <TypographyTitle {...args} />,
}
export const Paragraph = {
  args: {
    children:
      'Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money.',
  },
  render: (args: TypographyProps) => <TypographyParagraph {...args} />,
}

export const BlockQuote = {
  args: {
    children:
      '"After all," he said, "everyone enjoys a good joke, so it\'s only fairthat they should pay for the privilege."',
  },
  render: (args: TypographyProps) => <TypographyBlockquote {...args} />,
}
export const Subtle = {
  args: {
    children: 'Enter your email address.',
  },
  render: (args: TypographyProps) => <TypographySubtle {...args} />,
}

export const Text: Story = {
  args: {
    children: 'text',
    // size: 'md',
    type: undefined,
  },
}
