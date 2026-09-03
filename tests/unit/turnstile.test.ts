import { describe, it, expect, vi } from 'vitest';
import { verifyTurnstileToken } from '../../worker/lib/turnstile';

describe('Turnstile Token Verifier', () => {
  it('should return success true when remote endpoint confirms', async () => {
    // Mock global fetch
    const fetchMock = vi.fn().mockResolvedValue({
      json: async () => ({ success: true }),
    });
    vi.stubGlobal('fetch', fetchMock);

    const res = await verifyTurnstileToken('valid-token', 'secret-key');
    expect(res.success).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(1);

    vi.unstubAllGlobals();
  });

  it('should return success false when endpoint returns failure', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      json: async () => ({ success: false, 'error-codes': ['invalid-input-response'] }),
    });
    vi.stubGlobal('fetch', fetchMock);

    const res = await verifyTurnstileToken('invalid-token', 'secret-key');
    expect(res.success).toBe(false);
    expect(res.errorCodes).toContain('invalid-input-response');

    vi.unstubAllGlobals();
  });

  it('should handle network errors safely', async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error('Network down'));
    vi.stubGlobal('fetch', fetchMock);

    const res = await verifyTurnstileToken('any-token', 'secret-key');
    expect(res.success).toBe(false);
    expect(res.errorCodes).toContain('internal-error');

    vi.unstubAllGlobals();
  });
});
