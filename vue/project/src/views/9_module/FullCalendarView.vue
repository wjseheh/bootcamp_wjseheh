<template>
  <FullCalendar :options="calendarOptions" />
</template>
<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
export default {
  components: { FullCalendar },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',

        dateClick: this.handleDateClick,
        events: [
          { title: 'event 1', date: '2022-12-01' },
          { title: 'event 2', start: '2022-12-02', end: '2022-12-08' }
        ],
        headerToolbar: {
          left: 'dayGridMonth,timeGridWeek,timeGridDay ',
          center: 'title',
          right: 'prevYear,prev,next,nextYear'
        }
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    handleDateClick(arg) {
      alert('date click! ' + arg.dateStr)
    }
  }
}
</script>
