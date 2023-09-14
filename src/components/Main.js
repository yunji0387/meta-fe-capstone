import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Markdown from './Markdown';

function Main(props) {
  const { posts } = props;
  const [markdownContent, setMarkdownContent] = useState([]);

  useEffect(() => {
    // Create a function to fetch and store the Markdown content
    const fetchMarkdown = () => {
      Promise.all(
        posts.map((post) => {
          return fetch(post)
            .then((response) => response.text())
            .then((text) => text);
        })
      ).then((content) => {
        setMarkdownContent(content);
      });
    };

    fetchMarkdown();
  }, [posts]);

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      {markdownContent.map((content, index) => (
        <Markdown className="markdown" key={index}>
          {content}
        </Markdown>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;