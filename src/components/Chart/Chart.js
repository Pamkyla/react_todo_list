import React from 'react';

import { LineChart, Line } from 'recharts';



class Chart extends React.Component {

    state = {
        data: []
    }
    
    componentDidMount() {
        let name = this.props.name;
        const URL = `https://api.github.com/repos/Pamkyla/${name}/stats/commit_activity`;
        fetch(URL).then(res => res.json()).then(json => {
          this.setState({ data: json });
        });
      }

    render() {
        return (
            <LineChart width={155} height={13} data={this.state.data}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" dot={false} />
            </LineChart>
        );
    }
}
export default Chart;