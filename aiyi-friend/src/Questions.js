import React, { Component } from 'react';
import './Questions.css';

class Questions extends Component {
  constructor(props) {
    super(props)
    this.state={
      question: '',
      questions: []
    };
    this.questionInput = this.questionInput.bind(this);
    this.postQ = this.postQ.bind(this);

    const aiyiState = localStorage.getItem('questionsData');
    if (aiyiState) {
      this.state = JSON.parse(aiyiState);
    } else {
      this.state = {
        questions: []
      }
    }
  }

  questionInput (e) {
    this.setState({
      question: e.target.value
    });

    }

  postQ () {
    let Qcopy = this.state.questions.slice();

    Qcopy.push({
      question: this.state.question,
      id: this.state.questions.length
    });

    this.setState({
      questions: Qcopy
    });
    console.log(Qcopy);
  }

  componentDidUpdate() {
    localStorage.setItem('aiyiState', JSON.stringify(this.state));
  }

  render() {
    const Qlist = this.state.questions.map(q => (
        <p key={q.id}>
        {q.question}
        </p>
        ));

    return (
      <div className="Questions">
        <label> {this.props.Qlabel}
          <input type="text" onChange={this.questionInput} />
        </label>
        <button className="submitButton" onClick={this.postQ}> Submit! </button>
        {Qlist}
      </div>
    );
  }
}

export default Questions;
