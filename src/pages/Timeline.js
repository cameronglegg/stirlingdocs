import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";

const EXAMPLE = [
  {
    data: "1",
    status: "Planning",
  },
  {
    data: "2",
    status: "Production",
  },
  {
    data: "3",
    status: "Finishing",
  }
];

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,      
      prevIdx: -1
    };
  }

  render() {    
    const {curIdx, prevIdx} = this.state;
    const curStatus = EXAMPLE[curIdx].status;
    const prevStatus = prevIdx >= 0 ? EXAMPLE[prevIdx].status : '';

    return (
      <div>
        {/* Bounding box for the Timeline */}
        <div
          style={{
            width: "80%",
            height: "100px",
            margin: "0 auto",
            marginTop: "0 auto",
            fontSize: "15px"
          }}
        >
          <HorizontalTimeline
            styles={{
              background: "#FFFFFF",
              foreground: "#1A79AD",
              outline: "#dfdfdf"
            }}
            index={this.state.curIdx}
            indexClick={index => {
              const curIdx = this.state.curIdx;
              this.setState({ curIdx: index, prevIdx: curIdx });
            }}            
            values={EXAMPLE.map(x => x.data)}
          />
        </div>
        <div className="text-center">
          {/* any arbitrary component can go here */}
          {curStatus}
        </div>
      </div>
    );
  }
}
