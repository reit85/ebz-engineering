import uuid from 'uuid';
import moment from 'moment';

export let resources = [
    {id: "A", name: "BR214 / XC254", logoUrl: "/images/avatars/wagon.png"},
    {id: "B", name: "AU49x Batteriemontage", logoUrl: "/images/avatars/wagon.png"},
    {id: "C", name: "PB 340", logoUrl: "/images/avatars/wagon.png"},
    {id: "D", name: "Model Y", logoUrl: "/images/avatars/wagon.png"}
  ]

export let events = [
  {id: uuid(), resource: "A", text: "Runde 3", barColor: "#1593D7", barBackColor: "#1593D7", start: moment().subtract(6, 'days').toISOString(), end: moment().add(12, 'days').toISOString(), bubbleHtml: "Static 'Event 1' details specified using event <b>data object</b>." },
  {id: uuid(), resource: "B", text: "Runde 2", barColor: "#1593D7", barBackColor: "#1593D7", start: moment().subtract(3, 'days').toISOString(), end: moment().add(18, 'days').toISOString() },
  {id: uuid(), resource: "C", text: "Runde 2", barColor: "#1593D7", barBackColor: "#1593D7", start: moment().subtract(2, 'days').toISOString(), end: moment().add(20, 'days').toISOString() },
  {id: uuid(), resource: "D", text: "Runde 1", barColor: "#1593D7", barBackColor: "#1593D7", start: moment().subtract(1, 'days').toISOString(), end: moment().add(8, 'days').toISOString() },
  {id: uuid(), resource: "A", text: "Runde 4", barColor: "#1593D7", barBackColor: "#1593D7", start: moment().add(20, 'days').toISOString(), end: moment().add(34, 'days').toISOString() }
]