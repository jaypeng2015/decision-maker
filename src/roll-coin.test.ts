import { includes } from 'lodash';

import { handler } from './roll-coin';
import mockContext from './mock-context';

describe('roll coin', () => {
  it('should get a random head and tail', done => {
    handler(
      { responseUrl: 'responseUrl', identity: 'identity' },
      mockContext,
      (err, { text, responseUrl, identity }) => {
        expect(err).toBeNull();
        expect(responseUrl).toBe('responseUrl');
        expect(identity).toBe('identity');
        expect(includes([':coin_1:', ':coin_2:'], text)).toBe(true);
        done();
      }
    );
  });
});
