import React from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend  } from 'recharts';

/**
 * Component for the graph.
 */
export default class Graph extends React.Component {

    /**
     * Render method.
     */
    render() {

        // The code will generate the graph's data dynamically.

        const intervals = [0, 10, 20, 30, 40, 50, 60]; // These will be the intervals. (1-10, 11-20, ...)
        const graphData = []; // This will contain the actual data for the graph.
        const data = this.props.data || []; // The data that we get:

        // Loop for the intervals:
        for (let i = 0; i < intervals.length; i++) {
            let count = 0; // The number of the persons for the current interval
            // Loop for the persons:
            for (let person of data) {
                if ((i < intervals.length - 1) && (+person.age > intervals[i]) && (+person.age <= intervals[i + 1])) {
                    // If we are not at the end of the for loop
                    // AND the current person's age is between the current and the next value, we increase the count:
                    count++;
                } else if ((i === intervals.length - 1) && (+person.age > intervals[i])) {
                    // If we are at the end of the for loop
                    // AND the current person's age is greater than the current value, we increase the count:
                    count++;
                }
            }
            // Create the next graphData item for the current interval:
            if (i < intervals.length - 1) {
                graphData.push({name: '' + (intervals[i] + 1) + '-' + intervals[i + 1], count: count});
            } else {
                graphData.push({name: '' + (intervals[i] + 1) + '-', count: count});
            }
        }

        return (
            <BarChart
                width={500}
                height={300}
                data={graphData}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
        );
    }

}