import { Lieu } from './lieu.model';

export class LieuWrapper {
  _embedded!: { lieux: Lieu[] };
}