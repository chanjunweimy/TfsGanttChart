import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import 'dhtmlx-gantt';
import {} from '@types/dhtmlxgantt';

@Component({
    selector: 'app-gantt',
    styles: [
        `
        :host{
            display: block;
            height: 600px;
            position: relative;
            width: 100%;
        }
    `],
    template: '<div #gantt_here style="width: 100%; height: 100%;"></div>',
})
export class GanttComponent implements OnInit {
    @ViewChild('gantt_here') ganttContainer: ElementRef;

    ngOnInit() {
        gantt.config.xml_date = '%Y-%m-%d %H:%i';

        gantt.init(this.ganttContainer.nativeElement);

        const data = [
            {id: 1, text: 'Task #1', start_date: '2017-04-15 00:00', duration: 3, progress: 0.6},
            {id: 2, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 3, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 4, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 5, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 6, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 7, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 8, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 9, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 10, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 11, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 12, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 13, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 14, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 15, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 16, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 17, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 18, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 19, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 20, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 21, text: 'Task #2', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
            {id: 22, text: 'Task #22', start_date: '2017-04-18 00:00', duration: 3, progress: 0.4},
        ];

        const links = [
            {id: 1, source: 1, target: 2, type: '0'}
        ];

        gantt.parse({data, links});
    }
}

export class Task {
    id: number;
    start_date: string;
    text: string;
    progress: number;
    duration: number;
    parent: number;
}

export class Link {
    id: number;
    source: number;
    target: number;
    type: string;
}

