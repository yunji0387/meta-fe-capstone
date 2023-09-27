import * as React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function MarkdownListItem(props) {
  return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
}

const options = (theme) => {
  return {
    overrides: {
      h1: {
        component: Typography,
        props: {
          gutterBottom: true,
          variant: 'h4',
          component: 'h1',
          fontFamily: theme.typography.titleText,
        },
      },
      h2: {
        component: Typography,
        props: { gutterBottom: true, variant: 'h6', component: 'h2', fontFamily: theme.typography.titleText },
      },
      h3: {
        component: Typography,
        props: { gutterBottom: true, variant: 'subtitle1', fontFamily: theme.typography.titleText },
      },
      h4: {
        component: Typography,
        props: {
          gutterBottom: true,
          variant: 'caption',
          paragraph: true,
          fontFamily: theme.typography.titleText
        },
      },
      p: {
        component: Typography,
        props: { paragraph: true, fontFamily: theme.typography.contentText },
      },
      a: { component: Link },
      li: {
        component: MarkdownListItem,
      },
    },
  };
};

export default function Markdown(props) {
  const { theme, ...restProps } = props;
  const markdownOptions = options(theme);
  return <ReactMarkdown options={markdownOptions} {...restProps} />;
}
