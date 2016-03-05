import chunk from 'lodash/chunk';

export function makeFourColumns(products) {
  return chunk(products, 4)
}
