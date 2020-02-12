import { Injectable } from '@nestjs/common';
import { Item } from '../item';
import { Items } from '../items';

@Injectable()
export class ItemsService {
  private readonly items: Items = {
    1: {
      id: 1,
      version: '1.7',
      octreeDir: 'data',
      projection: '',
      points: 6417736,
      boundingBox: {
        lx: 297479.04347171177,
        ly: 6418078.112909423,
        lz: 36.83869552612305,
        ux: 300162.04347171177,
        uy: 6420761.112909423,
        uz: 2719.838695526123,
      },
      tightBoundingBox: {
        lx: 297479.04347171177,
        ly: 6418078.112909423,
        lz: 36.83869552612305,
        ux: 299871.04347171177,
        uy: 6420761.112909423,
        uz: 396.18280029296877,
      },
      pointAttributes: ['POSITION_CARTESIAN', 'COLOR_PACKED'],
      spacing: 23.235462188720704,
      scale: 0.001,
      hierarchyStepSize: 5,
    },
  };

  findAll(): Items {
    return this.items;
  }

  create(newItem: Item) {
    const id = new Date().valueOf();
    this.items[id] = {
      ...newItem,
      id,
    };
  }

  find(id: number): Item {
    const record: Item = this.items[id];

    if (record) {
      return record;
    }

    throw new Error('No record found');
  }

  update(updatedItem: Item) {
    if (this.items[updatedItem.id]) {
      this.items[updatedItem.id] = updatedItem;
      return;
    }

    throw new Error('No record found to update');
  }

  delete(id: number) {
    const record: Item = this.items[id];

    if (record) {
      delete this.items[id];
      return;
    }

    throw new Error('No record found to delete');
  }
}
