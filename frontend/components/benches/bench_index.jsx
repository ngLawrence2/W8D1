import React from 'react';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    const allBenches = this.props.benches.map(bench=>{
      return <ul key ={bench.id}>{bench.description}</ul>
    });

    return (
        <div>
          {allBenches}
        </div>
    );
  }
}

export default BenchIndex;
