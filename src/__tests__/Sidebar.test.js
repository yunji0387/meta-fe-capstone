import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sidebar from '../components/Sidebar'; // Adjust the import path if needed

describe('Sidebar', () => {
    const mockProps = {
        open: true, // initially, we'll assume the sidebar is open
        toggleSidebar: jest.fn(),
        theme: {
            palette: {
                primary: {
                    main: '#3f51b5',
                    mainText: '#ffffff',
                    light: '#ffffff'
                }
            }
        }
    };

    const sections = [
        { title: "HOME", href: "/", icon: 'HomeIcon' },
        { title: "MENU", href: "/menu", icon: 'RestaurantMenuIcon' },
        { title: "RESERVATION", href: "/reservation", icon: 'ReservationIcon' },
        { title: "DELIVERY", href: "/delivery", icon: 'DeliveryIcon' },
        { title: "PICK UP", href: "/pickup", icon: 'PickUpIcon' },
        { title: "ABOUT US", href: "/about", icon: 'InfoIcon' }
    ];

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('displays all menu items correctly', () => {
        render(<Sidebar {...mockProps} />);
        sections.forEach(section => {
            expect(screen.getByText(section.title)).toBeInTheDocument();
        });
    });

    it('displays the correct icon for each menu item', () => {
        render(<Sidebar {...mockProps} />);
        sections.forEach(section => {
            expect(screen.getByTestId(`icon-${section.title}`)).toBeInTheDocument();
        });
    });

    it('links to the correct page for each menu item', () => {
        render(<Sidebar {...mockProps} />);
        sections.forEach(section => {
            const linkElement = screen.getByRole('link', { name: section.title });
            expect(linkElement).toHaveAttribute('href', section.href);
        });
    });

    it('toggles the sidebar when the menu icon button is clicked', () => {
        render(<Sidebar {...mockProps} />);
        fireEvent.click(screen.getByLabelText('open drawer'));
        expect(mockProps.toggleSidebar).toHaveBeenCalledTimes(1);
    });
});

