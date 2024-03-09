import { render } from '@testing-library/react';

import Main from '../Main';

describe('Main', () => {
  test('rendered component', () => {
    const { getByText } = render(<Main />);
    expect(getByText('Main Page')).toBeInTheDocument();
  });
})