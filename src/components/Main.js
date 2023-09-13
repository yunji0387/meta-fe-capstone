import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';

function Main(props) {
  const { posts, title } = props;
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
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
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


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import Markdown from './Markdown';

// function Main(props) {
//   const { posts, title } = props;

//   return (
//     <Grid
//       item
//       xs={12}
//       md={8}
//       sx={{
//         '& .markdown': {
//           py: 3,
//         },
//       }}
//     >
//       <Typography variant="h6" gutterBottom>
//         {title}
//       </Typography>
//       <Divider />
//       {posts.map((post) => (
//         fetch(post)
//           .then(response => response.text())
//           .then(text => {
//             // Logs a string of Markdown content.
//             // Now you could use e.g. <rexxars/react-markdown> to render it.
//             console.log(text);
//             <Markdown className="markdown" key={post.substring(0, 40)}>
//               {post}
//             </Markdown>
//           });
//       {/* <Markdown className="markdown" key={post.substring(0, 40)}>
//         {post}
//       </Markdown> */}
//       ))}
//     </Grid>
//   );
// }

// Main.propTypes = {
//   posts: PropTypes.arrayOf(PropTypes.string).isRequired,
//   title: PropTypes.string.isRequired,
// };

// export default Main;
