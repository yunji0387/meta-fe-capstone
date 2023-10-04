import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
    const mockProps = {
        theme: {
            palette: {
                primary: {
                  light: '#fff',
                }
            }
        }
    };

    const mobileMenuItems = [
        { label: "Notifications", href: './notifications', iconName: 'NotificationsIcon' },
        { label: "Profile", href: './profile', iconName: 'AccountCircle' },
        { label: "Settings", href: './settings', iconName: 'SettingsIcon' }
    ];

    it('renders without crashing', () => {
        render(
            <BrowserRouter>
                <Navbar {...mockProps} />
            </BrowserRouter>
        );
        const logo = screen.getByAltText('Little Lemon Logo');
        expect(logo).toBeInTheDocument();
    });

    it('has mobile menu items with correct labels, icons, and hrefs', () => {
        render(
            <BrowserRouter>
                <Navbar {...mockProps} />
            </BrowserRouter>
        );
        // Open the mobile menu
        const menuButton = screen.getByLabelText("show more");
        fireEvent.click(menuButton);

        mobileMenuItems.forEach(item => {
            // Check if label exists
            const menuItem = screen.getByText(item.label);
            expect(menuItem).toBeInTheDocument();

            // Check if icon exists
            expect(screen.getByTestId(`icon-${item.iconName}`)).toBeInTheDocument();

            // Check if link has correct href
            const link = screen.getByRole('link', { name: new RegExp(item.label, 'i') });
            expect(link).toHaveAttribute('href', item.href);
        });
    });

    // Add any other specific tests you'd like for Navbar here
});