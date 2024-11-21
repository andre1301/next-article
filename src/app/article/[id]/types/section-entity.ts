import type { SectionEntity as SectionEntityCapi } from '../capi-types';

export default interface SectionEntity
  extends Omit<SectionEntityCapi, 'parent'> {
  parent?: SectionEntity;
  statisticsName?: string;
}
