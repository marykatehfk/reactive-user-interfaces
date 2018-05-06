import React, { Component } from 'react';
import './Infos.css';
import { Link } from 'react-router-dom';

class Infos extends Component {

  render() {

    return (
      <div>
      <Link to="/" className="back">Back</Link>
      <div className="Infos">
      <header>
        <h2 className="title"> Interview with Mr. Xu </h2>
        <h4> Mr. Xu is the manager of the cleaning team.
             Manager Xu has over 10 years experience being in cleaning management.
             He has good relationships among faculty and staff.
             Every department needs some cleaning/service, and manager Xu will make their best efforts to provides services.
             Their work is to try their best to do what they are able to do.
             Working standard is very high. </h4>
      </header>

        <p className="title"> What is the daily routine of an Aiyi? </p>
        <p>  Before 7a.m they will eat breakfast by themselves.
             And then they come to set up for work, change clothes, shoes and prepare for work.
             They start work at 7.30 a.m. They receive their own individual work instructions,
             they will know what time to do what and how to do what, what kind of tools to do what kind of jobs. </p>

        <p className="title"> What are the working hours of the aiyis? </p>
        <p> Aiyis work one day, and rest one day.
            Aiyis work 12 hours a day. They come at 7.30a.m and leave at 8.30p.m.
            They have 30 mins for lunch and 30 minutes for dinner.
            There are two aiyi teams who come on rotation. In total there are 35 aiyis. </p>

        <p className="title"> How do the Aiyis feel about working at NYU Shanghai? </p>
        <p> Our Aiyis feel very happy to be working in this Academic Building,
            because the working environment is better than other places.
            The building has good lights, air conditioning, and hot water.
            The environment is comfortable. The students are also very good to our aiyis. </p>

        <p className="title"> Do the Aiyis feel respected at NYU Shanghai? </p>
        <p> The school atmophere here is better and all of the students will
            be respectful to the aiyis. When an aiyi finish their tasks,
            students will thank the aiyi and then the aiyi will feel very warm hearted. </p>

        <p className="title"> Do the Aiyis have special acitivities that they gather all together? </p>
        <p> They do have several events planned in the year.
            During Spring festival, they will eat together.
            Every April, there is a thanks giving day for aiyis. Some students will come and give gifts to the aiyis for their work.
            Every year in June, July and August, because these are the warmest months, so aiyis will receive gifts to thank them for their work during summer holiday. </p>

        <p className="title"> What is the biggest task the cleaning team is holding at the moment? </p>
        <p> This year is the second commencement ceremony that they will experience.
            When the building is built they were here, so they have been here 4 years.
            The school trusts their service and have been working with their company together for 4 years. </p>

        <p className="title"> Where do they eat their meals? </p>
        <p> For Lunch and dinner, aiyis will carry their own food from their home to eat here.
            They always have time to eat together and share what they did today.
            They talk to each other sharing working experience. </p>

      </div>
      </div>
    );
  }
}

export default Infos;
