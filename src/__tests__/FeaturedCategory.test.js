import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import HomeIcon from '@mui/icons-material/Home';

import FeaturedCategory from '../components/FeaturedCategory';

describe('FeaturedCategory', () => {

    const mockProps = {
        category: {
            href: "/sample-url",
            icon: HomeIcon,
            title: "Sample Title"
        },
        theme: {
            palette: {
                primary: {
                    main: '#3f51b5'
                }
            }
        }
    };

    it('renders without crashing', () => {
        render(<FeaturedCategory {...mockProps} />);
        // Assertion to ensure the component has been rendered. This could be anything, e.g.:
        expect(screen.getByText("Sample Title")).toBeInTheDocument();
    });

    it('renders category title and icon', () => {
        render(<FeaturedCategory {...mockProps} />);
        expect(screen.getByText("Sample Title")).toBeInTheDocument();
        expect(screen.getByTestId("HomeIcon")).toBeInTheDocument();
    });

    it('has a link with correct href', () => {
        render(<FeaturedCategory {...mockProps} />);
        const cardActionArea = screen.getByRole('link', { name: /Sample Title/i });
        expect(cardActionArea).toHaveAttribute('href', mockProps.category.href);
    });

    it('has correct background color from theme', () => {
        render(<FeaturedCategory {...mockProps} />);
        const cardElement = screen.getByTestId('featured-category-card');
        expect(cardElement).toHaveStyle(`background-color: ${mockProps.theme.palette.primary.main}`);
    });

    it('invokes onClick when clicked', () => {
        render(<FeaturedCategory {...mockProps} />);
        const cardActionArea = screen.getByRole('link', { name: /Sample Title/i });
        userEvent.click(cardActionArea);
        // If you expect some changes after the click, use waitFor with an assertion here.
    });
});
