import React, { Component } from 'react';
import './Questions.css';

class Questions extends Component {
  constructor(props) {
    super(props)
    this.state={
      question: ''
    };
    this.questionInput = this.questionInput.bind(this);
    this.postQ = this.postQ.bind(this);
  }

  questionInput (e) {
    this.setState({
      question: e.target.value
    });

    }

  postQ () {

    this.props.onSave(this.props.aiyi.id, this.state.question);

    this.setState({
      question: ''
    })
  }

  render() {
    const Qlist = this.props.aiyi.questions.map((q, i) => (
        <p key={'q'+i}>
        {q}
        </p>
        ));

    return (
      <div className="Questions">
        <label> {this.props.Qlabel}
          <input type="text" onChange={this.questionInput} value={this.state.question}/>
        </label>
        <button className="submitButton" onClick={this.postQ}> Submit! </button>
        {Qlist}
      </div>
    );
  }
}

export default Questions;
