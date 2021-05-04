

import WorkCards from '../WorkCards/WorkCards'
function Work() {

    const work = [
        {
            "id": 1,
            "title": "Suitcase",
            "desc": "A web application that provides the user with information about a inquired destination",
            "link": "https://deadstockskeleton.github.io/Suitcase/"
        },
        {
            "id": 2,
            "title": "Sermones",
            "desc": "This is a chatroom application which allows for private rooms, direct messaging, and audio/video.",
            "link":"https://sermones.herokuapp.com/"
        },
        {
            "id": 3,
            "title": "WeatherApp",
            "desc": "WeatherApp is a web browser application that displays requested city's current weather and forecast! WeatherApp takes advantage of OpenWeather's current weather, UV index and forecast features. In addtion, WeatherApp uses Moment.js to display dates!",
            "link":"https://deadstockskeleton.github.io/WeatherApp/"
        },
        {
            "id": 4,
            "title": "DayPlanner",
            "desc": "DayPlanner is a work day scheduler that utilizes Moment.js to handle the time and date. You can use DayPlanner for planning out your work flow and/or use it as an to-do list.",
            "link":"https://deadstockskeleton.github.io/DayPlanner/"
        },
        {
            "id": 5,
            "title": "TechBlog",
            "desc": "A simple blog site where you can login/signup and create blog post about the latest tech news",
            "link":"https://vast-cliffs-10761.herokuapp.com/"
        },
        {
            "id": 6,
            "title": "RPS",
            "desc": "RPS is a simple game of an old classic; Rock Paper Scissors",
            "link":"https://deadstockskeleton.github.io/RPS/"
        },
    ]
    return (
        <div id="work" className="container section p-4">
            {work.map(item => (
                <WorkCards key={item.id} title={item.title} desc={item.desc} 
                img={item.img} link={item.link}/>
            ))}
        </div>
    );
  }
  
  export default Work;