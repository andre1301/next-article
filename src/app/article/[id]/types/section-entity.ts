import type { SectionEntity as SectionEntityCapi } from '@smp-distribution/capi-types';

export default interface SectionEntity
  extends Omit<SectionEntityCapi, 'parent'> {
  parent?: SectionEntity;
  statisticsName?: string;
}
