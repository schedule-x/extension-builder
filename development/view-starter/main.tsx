import '@fontsource/open-sans'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/500-italic.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/700-italic.css'
import {
  createCalendar, createViewWeek,
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
import '../app.css'
import {createView} from "../../packages/view-starter/src";
import '../../packages/view-starter/src/styles/index.scss'

const calendarElement = document.getElementById('calendar') as HTMLElement

let sampleView = createView();

const calendar = createCalendar({
  selectedDate: '2024-05-11',
  events: [],
  views: [sampleView, createViewWeek()],
  defaultView: sampleView.name,
})
calendar.render(calendarElement)
