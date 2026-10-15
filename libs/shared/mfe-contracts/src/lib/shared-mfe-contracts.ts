/** Names of the remotes registered in the shell's federation manifest. */
export type RemoteName = 'quote' | 'claims' | 'account';

/** Module exposed by every remote (see each app's federation.config.mjs). */
export const EXPOSED_COMPONENT = './Component';
