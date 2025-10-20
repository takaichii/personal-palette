// Personal Palette – Smoke test ensuring the calm shell renders.
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import App from '../App';

describe('App smoke test', () => {
  it('renders home heading', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Personal Palette/i)).toBeInTheDocument();
  });
});
