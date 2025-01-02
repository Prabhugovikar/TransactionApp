import { http, HttpResponse } from 'msw';

export const handlers = [
  // Mock user information
  http.get('/api/user', () => {
    return HttpResponse({
      user: {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
      }
    })
  }),

  // Mock card details
  http.get('/api/cards', () => {
    return HttpResponse(
      { id: 1, cardNumber: '3778 **** **** 1234', type: 'Visa' },
      { id: 2, cardNumber: '9856 **** **** 5678', type: 'MasterCard' },
      { id: 2, cardNumber: '7405 **** **** 5678', type: 'MasterCard' },
    );
  }),

  // Mock transaction history
  http.get('/api/transactions', () => {
    return HttpResponse.json(
      { id: 1, amount: 200, date: '2025-01-01', description: 'Grocery' },
      { id: 2, amount: 500, date: '2025-01-02', description: 'Electronics' },
    );
  }),

  // Mock chart data
  http.get('/api/chart', (req, res, ctx) => {
    return HttpResponse(
        { month: 'January', value: 50 },
        { month: 'February', value: 75 },
    );
  }),
];
