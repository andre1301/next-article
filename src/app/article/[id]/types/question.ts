import {
  TextComponent,
  SubheadingComponent,
  TableComponent
} from '@smp-distribution/capi-types';
import ImageComponent from './image';

export default interface Question {
  components: (
    | TextComponent
    | SubheadingComponent
    | TableComponent
    | ImageComponent
  )[];
  presentationProperties: {
    richType: 'question';
    expirationDate?: string;
  };
  type: 'list';
  pollId: string;
  answers?: number[];
}
