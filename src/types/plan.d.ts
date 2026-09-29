export interface AddonDto {
  available_for: string[];
  badge: string;
  description: string;
  id: string;
  monthly_price: number;
  name: string;
  yearly_price: number;
}

export interface PlanDto {
  checkout_kind: string;
  features: string[];
  id: string;
  monthly_price: number | null;
  name: string;
  state_cap: number | null;
  user_max: number | null;
  user_min: number;
  yearly_price: number | null;
}

export interface ProrationPolicyDto {
  prorate_new_signup: boolean;
  prorate_plan_change: string | null;
}

export interface TrialPolicyDto {
  enabled: boolean;
}

export interface YearlyDiscountDto {
  approx_pct: number;
  display: string;
  kind: string;
  months_free: number;
}

export interface SubscriptionConfigResponseDto {
  addons: AddonDto[];
  plans: PlanDto[];
  proration_policy: ProrationPolicyDto;
  trial_policy: TrialPolicyDto;
  yearly_discount: YearlyDiscountDto;
}
