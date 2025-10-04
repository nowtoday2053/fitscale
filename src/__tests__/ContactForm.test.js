import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../components/ContactForm';

describe('ContactForm', () => {
  test('renders form fields correctly', () => {
    render(<ContactForm />);
    
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/current mrr/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/industry/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/interested package/i)).toBeInTheDocument();
  });

  test('validates MRR requirement', async () => {
    render(<ContactForm />);
    
    const mrrInput = screen.getByLabelText(/current mrr/i);
    const submitButton = screen.getByRole('button', { name: /book free consultation/i });
    
    // Fill form with valid data except MRR
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john@company.com' } });
    fireEvent.change(screen.getByLabelText(/company name/i), { target: { value: 'Test Company' } });
    fireEvent.change(mrrInput, { target: { value: '$3,000' } });
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/we focus on saas\/startups with at least \$5k mrr/i)).toBeInTheDocument();
    });
  });

  test('allows submission with valid MRR', async () => {
    render(<ContactForm />);
    
    // Fill form with valid data including MRR >= $5k
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john@company.com' } });
    fireEvent.change(screen.getByLabelText(/company name/i), { target: { value: 'Test Company' } });
    fireEvent.change(screen.getByLabelText(/current mrr/i), { target: { value: '$7,500' } });
    
    const submitButton = screen.getByRole('button', { name: /book free consultation/i });
    fireEvent.click(submitButton);
    
    // Should not show MRR warning
    expect(screen.queryByText(/we focus on saas\/startups with at least \$5k mrr/i)).not.toBeInTheDocument();
  });

  test('shows MRR warning when MRR is below $5k', async () => {
    render(<ContactForm />);
    
    const mrrInput = screen.getByLabelText(/current mrr/i);
    const submitButton = screen.getByRole('button', { name: /book free consultation/i });
    
    // Fill form with MRR below $5k
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john@company.com' } });
    fireEvent.change(screen.getByLabelText(/company name/i), { target: { value: 'Test Company' } });
    fireEvent.change(mrrInput, { target: { value: '$3,000' } });
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/mrr requirement/i)).toBeInTheDocument();
      expect(screen.getByText(/you can still request resources & diy guide/i)).toBeInTheDocument();
    });
  });

  test('clears errors when user starts typing', async () => {
    render(<ContactForm />);
    
    const mrrInput = screen.getByLabelText(/current mrr/i);
    const submitButton = screen.getByRole('button', { name: /book free consultation/i });
    
    // Submit with invalid MRR
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john@company.com' } });
    fireEvent.change(screen.getByLabelText(/company name/i), { target: { value: 'Test Company' } });
    fireEvent.change(mrrInput, { target: { value: '$3,000' } });
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/we focus on saas\/startups with at least \$5k mrr/i)).toBeInTheDocument();
    });
    
    // Start typing in MRR field
    fireEvent.change(mrrInput, { target: { value: '$6,000' } });
    
    // Error should be cleared
    expect(screen.queryByText(/we focus on saas\/startups with at least \$5k mrr/i)).not.toBeInTheDocument();
  });

  test('disables submit button while submitting', async () => {
    render(<ContactForm />);
    
    // Fill form with valid data
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john@company.com' } });
    fireEvent.change(screen.getByLabelText(/company name/i), { target: { value: 'Test Company' } });
    fireEvent.change(screen.getByLabelText(/current mrr/i), { target: { value: '$7,500' } });
    
    const submitButton = screen.getByRole('button', { name: /book free consultation/i });
    fireEvent.click(submitButton);
    
    // Button should be disabled and show submitting text
    expect(screen.getByText(/submitting/i)).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });
});
