import React from 'react';
import { connect } from "react-redux";
import Record from './record.js';
import Models from './models.js';
import Records from './records.js';
import  '../../styles/core.css';

class CMS extends React.Component {
  render() {
    return (
      <>
        <header className="centercol">
          <div > API </div>
          <nav className="centerrow">
            <Models />
          </nav>
        </header>
      <main >
      <h2 className="centercol form-title">Selected Model: {this.props.model}</h2>
      <section className="flex-top">
        <section className="centercol records">
          <Records/>
        </section>

        <section>
          <Record/>
        </section>
      </section>
      </main>
      </>
    );
  }
}

const mapStateToProps = state => ({
  model: state.records.model
});

export default connect(mapStateToProps, undefined)(CMS);
