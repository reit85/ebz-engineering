import React, {Component} from 'react';
import {DayPilot, DayPilotScheduler} from "daypilot-pro-react";
import {SchedulerRow} from './SchedulerRow';
// import Zoom from "./Zoom";
import { Card, CardContent } from '@material-ui/core'
import moment from 'moment'
import uuid from 'uuid'

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
            position: "EventBottom",
            eventHeight: 45,
            onBeforeRowHeaderRender: function(args) {
                args.row.areas = [
                  {
                    right: 3,
                    top: 3,
                    height: 12,
                    width: 12,
                    icon: "icon-info",
                    style: "cursor: pointer",
                    onClick: function(args) {
                      var row = args.source;
                      DayPilot.Modal.alert(row.name);
                    }
                  }
                ]
              },
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
              },
            timeHeaders: [
                { groupBy: "Month"},
                { groupBy: "Day", format: "d"}
            ],
            resources: [
                {id: "A", name: "Wagon Überarbeitung"},
                {id: "B", name: "Audi Batteriemontage"},
                {id: "C", name: "Daimler PB 340"},
                {id: "D", name: "Tesla MY"},
                {id: uuid(), name: ""},
                {id: uuid(), name: ""},
                {id: uuid(), name: ""},
                {id: uuid(), name: ""},
                {id: uuid(), name: ""},
                {id: uuid(), name: ""},
                {id: uuid(), name: ""},
                {id: uuid(), name: ""},
                {id: uuid(), name: ""},
                {id: uuid(), name: ""},
            ],
            events: [
                {id: 1, resource: "A", text: "Runde 3", barColor: "#1593D7", barBackColor: "#1593D7", start: moment().subtract(6, 'days').toISOString(), end: moment().add(12, 'days').toISOString(), bubbleHtml: "Static 'Event 1' details specified using event <b>data object</b>." },
                {id: 2, resource: "B", text: "Runde 2", barColor: "#1593D7", barBackColor: "#1593D7", start: moment().subtract(3, 'days').toISOString(), end: moment().add(18, 'days').toISOString() },
                {id: 3, resource: "C", text: "Runde 2", barColor: "#1593D7", barBackColor: "#1593D7", start: moment().subtract(2, 'days').toISOString(), end: moment().add(20, 'days').toISOString() },
                {id: 4, resource: "D", text: "Runde 1", barColor: "#1593D7", barBackColor: "#1593D7", start: moment().subtract(1, 'days').toISOString(), end: moment().add(8, 'days').toISOString() },
                {id: 5, resource: "A", text: "Runde 4", barColor: "#1593D7", barBackColor: "#1593D7", start: moment().add(20, 'days').toISOString(), end: moment().add(34, 'days').toISOString() }
            ]
        };
    }

    // zoomChange(args) {
    //     switch (args.level) {
    //         case "month":
    //             this.setState({
    //                 startDate: DayPilot.Date.today().firstDayOfMonth(),
    //                 days: DayPilot.Date.today().daysInMonth(),
    //                 scale: "Day"
    //             });
    //             break;
    //         case "week":
    //             this.setState({
    //                 startDate: DayPilot.Date.today().firstDayOfWeek(),
    //                 days: 7,
    //                 scale: "Day"
    //             });
    //             break;
    //         default:
    //             throw new Error("Invalid zoom level");
    //     }
    // }

    // cellWidthChange(ev) {
    //     var checked = ev.target.checked;
    //     this.setState({
    //         cellWidthSpec: checked ? "Auto" : "Fixed"
    //     });
    // }

    render() {
        var {...config} = this.state;

        return (
            <Card>
                <CardContent>
                {/* <div className="toolbar">
                    <Zoom onChange={args => this.zoomChange(args)} />
                    <span className="toolbar-item"><label><input type="checkbox" checked={this.state.cellWidthSpec === "Auto"} onChange={ev => this.cellWidthChange(ev)} /> Auto width</label></span>
                </div> */}

                <DayPilotScheduler
                  {...config}
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
                      if (!modal.result) {
                        return;
                      }
                      this.scheduler.events.add({
                        id: DayPilot.guid(),
                        text: modal.result,
                        start: args.start,
                        end: args.end,
                        resource: args.resource
                      });
                    });
                  }}
                  ref={component => { this.scheduler = component && component.control; }}
                />
                </CardContent>
            </Card>
        );
    }
}

export default Scheduler;