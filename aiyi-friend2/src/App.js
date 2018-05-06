import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage.js';
import Aiyipage from './Aiyipage.js';
import Questions from './Questions.js';
import Infos from './Infos.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  //state with array of all aiyis.
  constructor(props) {
    super(props)
    this.state = {
      aiyis: [
        { id: 1, pic: "/Aiyis/LiuChunYing.jpg", name: 'LIU CHUN YING', bday: '5th June', favfood: 'Dumplings', without: 'My family', bestday: 'Everyday when I come to work', never: 'I like everything', questions: []},
        { id: 2, pic: "/Aiyis/WanShiXiang.jpg", name: 'WAN SHI XIANG', bday: '28th July', favfood: 'Soup Dumplings', without: 'My mom, dad, husband and daughter', bestday: 'When I got married!', never: 'If you give me gifts, I will return you a gift', questions: []},
        { id: 3, pic: "/Aiyis/WangLongXuan.jpg", name: 'WANG LONG XUAN', bday: '20th October', favfood: 'Rice', without: 'Working', bestday: 'Everyday is a good day', never: 'Just do not give me things', questions: []},
        { id: 5, pic: "/Aiyis/QingShunJi.jpg", name: 'QING SHUN JI', bday: 'October', favfood: 'Vegetables', without: 'I do not know', bestday: 'Do not have one', never: 'Anything!', questions: []},
        { id: 6, pic: "/Aiyis/YinXianChun.jpg", name: 'YIN XIAN CUN', bday: '2nd March', favfood: 'All foods', without: 'Working', bestday: 'Celebrating my birthday', never: 'I like everything in general', questions: []},
        { id: 8, pic: "/AiyiF8.jpg", name: 'HUANG JIU HONG', bday: '6th September', favfood: 'Vegetables', without: 'Clean environment', bestday: 'When I come to work and talk to students. It makes me so happy!', never: 'I love all gifts', questions: []},
        { id: 9, pic: "/Aiyis/ShaAnQing.jpg", name: 'SHA AN QIN', bday: '20th July', favfood: 'Apple and bananas', without: 'Rice and green vegetables', bestday: 'When I became a grandma', never: 'Nothing, as I will feel embarassed when saying xiexie', questions: []},
        { id: 10, pic: "/Aiyis/TianZhaoCai.jpg", name: 'TIAN ZHAO CAI', bday: '3rd December', favfood: 'Baozi', without: 'The vacuum', bestday: 'When students smile and say hi to me', never: 'Food', questions: []}
      ],
    };
    this.updateQ = this.updateQ.bind(this);

    const aiyiState = localStorage.getItem('aiyisData');
    if (aiyiState) {
      this.state = JSON.parse(aiyiState);
    }
  }

  updateQ (id, question) {
    //find the aiyi with the id by doing findIndez

    const aiyiIndex = this.state.aiyis.findIndex(aiyi =>
      aiyi.id === id)

    let myCopy = this.state.aiyis.slice();


    //make an aiyi object myCopy
    let aiyiCopy = Object.assign({}, myCopy[aiyiIndex]);

    aiyiCopy.questions = aiyiCopy.questions.concat(question);

    myCopy[aiyiIndex] = aiyiCopy;

    this.setState({
      aiyis: myCopy
    })
    //console.log(this.state.aiyis); inside the render once all the states have been updated
  }

    componentDidUpdate() {
      localStorage.setItem('aiyiState', JSON.stringify(this.state));
    }

  render() {
    //console.log(this.state.aiyis);
    return (

      <Router>
        <div className="App">
          <div className="menu">
            <p><Link to='/Aiyipage/1'>First Floor</Link></p>
            <p><Link to='/Aiyipage/2'>Second Floor</Link></p>
            <p><Link to='/Aiyipage/3'>Third Floor</Link></p>
            <p><Link to='/Aiyipage/5'>Fifth Floor</Link></p>
            <p><Link to='/Aiyipage/6'>Sixth Floor</Link></p>
            <p><Link to='/Aiyipage/8'>Eigth Floor</Link></p>
            <p><Link to='/Aiyipage/9'>Ninth Floor</Link></p>
            <p><Link to='/Aiyipage/10'>Our Shushu</Link></p>

        </div>
        <div className="main">
          <Route exact path='/' component={Homepage} />
          <Route exact path='/infos' component={Infos} />

          <Route path='/Aiyipage/:id' render={props => {
            //find an aiyi
            const aiyi = this.state.aiyis.find(a => a.id === parseInt(props.match.params.id))
            //pass the aiyi prop to Component
              return(
                <div>
                <Aiyipage aiyi={aiyi} />
                <Questions Qlabel="Ask me a question:  " aiyi={aiyi} onSave={this.updateQ}/>
                </div>
             );
          }} />

        </div>
      </div>

    </Router>
    );
  }
}

export default App;
