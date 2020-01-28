import React, {Component} from 'react'
import {DayPilot, DayPilotScheduler} from "daypilot-pro-react"
import SchedulerRow from './SchedulerRow'
import { Card, CardContent } from '@material-ui/core'
import moment from 'moment'
import { resources, events } from '../../data'

class Scheduler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment().subtract(15, 'days').toISOString(),
      height: 700,
      days: 120,
      scale: "Day",
      cellWidthSpec: "Fixed",
      cellWidth: 25,
      rowMarginTop: 10,
      rowMarginBottom: 10,
      rowHeaderWidth: 280,
      position: "EventBottom",
      eventHeight: 45,
      resources,
      events,
      timeHeaders: [
        { groupBy: "Month"},
        { groupBy: "Day", format: "d"}
      ],
      onBeforeRowHeaderDomAdd: function(args) {
        args.target = "Cell";
        args.element = <SchedulerRow row={args.row} />;
      },
      onBeforeTimeHeaderRender: args => {
        if (args.header.level === 1 && args.header.start === DayPilot.Date.today()) {
          args.header.backColor = "#cc0000";
          args.header.fontColor = "#ffffff";
          args.header.cssClass = "today";
        }
      }
    };
  }

  render() {
    var {...config} = this.state;

    return (
      <Card>
        <CardContent>
          <DayPilotScheduler
            {...config}
            ref={component => { 
              this.scheduler = component && component.control; 
            }}
            onEventMoved={args => {
              console.log("Event moved: ", args.e.data.id, args.newStart, args.newEnd, args.newResource);
              this.scheduler.message("Event moved: " + args.e.data.text);
            }}
            onEventResized={args => {
              console.log("Event resized: ", args.e.data.id, args.newStart, args.newEnd);
              this.scheduler.message("Event resized: " + args.e.data.text);
            }}
            onTimeRangeSelected={args => {
              DayPilot.Modal.prompt("New event name", "Event").then(modal => {
                this.scheduler.clearSelection();
                if (!modal.result) {return;}
                this.scheduler.events.add({
                  id: DayPilot.guid(),
                  text: modal.result,
                  start: args.start,
                  end: args.end,
                  resource: args.resource
                });
              });
            }}
          />
        </CardContent>
      </Card>
    );
  }
}

export default Scheduler;