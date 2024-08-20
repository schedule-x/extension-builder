import {createPreactView, setRangeForMonth} from '@schedule-x/calendar'
import {addMonths} from '@schedule-x/shared'
import {ViewWrapper} from './components/view-wrapper'
import {Signal} from '@preact/signals'

type PreactView = ReturnType<typeof createPreactView>

type ViewFactory = () => PreactView;

export type PreactViewComponent = ReturnType<
  typeof createPreactView
>['Component']

export const createView: ViewFactory = () => createPreactView({
  name: 'SX_PLACEHOLDER_VIEW_NAME',
  label: 'SX_PLACEHOLDER_VIEW_LABEL',
  Component: ViewWrapper,
  hasWideScreenCompat: true,
  hasSmallScreenCompat: true,
  backwardForwardFn: addMonths,
  backwardForwardUnits: 1,
  setDateRange: setRangeForMonth,
})
