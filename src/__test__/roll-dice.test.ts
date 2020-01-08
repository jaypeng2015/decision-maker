import { includes } from 'lodash';

import { handler } from '../roll-dice';
import mockContext from './mock-context';

describe('roll dice', () => {
  it('should get a random dice', done => {
    handler(
      { responseUrl: 'responseUrl', identity: 'identity' },
      mockContext,
      (err, { text, responseUrl, identity }) => {
        expect(err).toBeNull();
        expect(responseUrl).toBe('responseUrl');
        expect(identity).toBe('identity');
        expect(includes([':dice_1:', ':dice_2:', ':dice_3:', ':dice_4:', ':dice_5:', ':dice_6:'], text)).toBe(true);
        done();
      }
    );
  });
});
