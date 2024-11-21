export type PaywallType =
  | ''
  | 'subscription'
  | 'metered,subscription'
  | 'login'
  | 'login-metered,subscription';

export type RestrictionType =
  | 'automatic'
  | 'open'
  | 'closed'
  | 'metered'
  | 'true'
  | 'plus'
  | 'subscription'
  | 'login'
  | 'login-metered'
  | boolean;

export interface AccessControl {
  /** This is what we (initially) get from CAPI, and base control calculation on */
  restrictions: RestrictionType[];
  /** This is what access-control transformation creates */
  control?: {
    /** article id */
    aid: string;
    productIds: string;
    paywallType: PaywallType;
  };
}
