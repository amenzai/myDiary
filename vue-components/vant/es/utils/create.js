import _Object$assign from 'babel-runtime/core-js/object/assign';
/**
 * Create a component with common options
 */
import createBasic from './create-basic';
import Icon from '../icon';
import Loading from '../loading';
import Cell from '../cell';
import CellGroup from '../cell-group';

export default function (sfc) {
  sfc.components = _Object$assign(sfc.components || {}, {
    Icon: Icon,
    Loading: Loading,
    Cell: Cell,
    CellGroup: CellGroup
  });
  return createBasic(sfc);
};