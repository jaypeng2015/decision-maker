import { toNumber, split } from 'lodash';

import { handler } from '../roll-number';
import mockContext from './mock-context';

describe('roll number', () => {
  it('should get a random number', done => {
    handler(
      { number: 5, responseUrl: 'responseUrl', identity: 'identity' },
      mockContext,
      (err, { text, responseUrl, identity }) => {
        expect(err).toBeNull();
        expect(responseUrl).toBe('responseUrl');
        expect(identity).toBe('identity');
        expect(toNumber(split(text, ' ')[0])).toBeLessThanOrEqual(5);
        done();
      }
    );
  });
});
