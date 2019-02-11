import React from "react";
import { connect } from "react-redux";

import { When } from "../if";

import * as actions from "./actions.js";
import '../../styles/model.css';
import '../../styles/core.css';

const styles = {
  clickable: { cursor: "pointer" },
  delete: {
    color: "rgb(200, 200, 200",
    cursor: "pointer",
    marginLeft: ".5em"
  }
};

const API = 'https://javascript-401-api.herokuapp.com/api/v1';

class Records extends React.Component {
  getRecord = id => {
    let url = `${API}/${this.props.model}/${id}`;
    this.props.getRecord(url);
  };

  deleteRecord = id => {
    console.log('id of thing to be deleted', id);
    let url = `${API}/${this.props.model}/${id}`;
    this.props.deleteRecord(this.props.model, id, url);
  };

  plusRecord = () =>{
    this.props.clearRecord();
  }

  render() {
    return (
      <When condition={this.props.model} >
        <button className="add" onClick={()=>this.plusRecord() }> Add Item </button>

        <ul className="records center">
          {this.props.records.map((record, i) => (
            <li key={record._id}>
              <span
                style={styles.clickable}
                onClick={() => this.getRecord(record._id)}
              >
                {record.name}
              </span>
              <span
                style={styles.delete}
                onClick={() => this.deleteRecord(record._id)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
      </When>
    );
  }
}

const mapStateToProps = state => ({
  records: state.records.records,
  model: state.records.model
});

const mapDispatchToProps = (dispatch, getState) => ({
  getRecord: url => dispatch(actions.getRecord(url)),
  deleteRecord: (model, id, url) => dispatch(actions.destroy(model, id, url)),
  clearRecord: () => dispatch(actions.clearRecord())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Records);
