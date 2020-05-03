import { ItemModel } from './item.model';

export class ListModel {
  constructor(public id: number, public name: string, categoryId: number, items: Array<ItemModel>) {}
}