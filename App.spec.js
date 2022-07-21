import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import App from './App';

describe('App', () => {
  it('allows navigation', () => {
    render(<App />);

    expect(screen.queryByText('Home Screen')).not.toBeNull();

    fireEvent.press(screen.getByText('Go to Details'));
    expect(screen.queryByText('Details Screen')).not.toBeNull();
    expect(screen.queryByText('Home Screen')).toBeNull();

    fireEvent.press(screen.getByText('Home'));
    expect(screen.queryByText('Home Screen')).not.toBeNull();
    expect(screen.queryByText('Details Screen')).toBeNull();
  });
});
