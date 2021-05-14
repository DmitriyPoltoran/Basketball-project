import React from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi()

class ResultsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = { results: [] };

    this.handleReload = this.handleReload.bind(this);
  }


  async handleReload(event) {
    const response = await api.results({ date: '' });
    this.setState({ results: response });
  }


  render() {
    return <table class ="ResultsCss">
     <button className="btn" onClick={this.handleReload}>Learn more</button>
     <tr>
            <td>   </td>
            <td class="tablemenu"><b> Дата игры:</b> </td>
            <td class="tablemenu"><b>Место проведения:</b>  </td>
            <td class="tablemenu"><b> Команда1:</b> </td>
            <td>   </td>
            <td class="tablemenu"> <b>Счёт </b> </td>
  
            <td class="tablemenu"><b>Команда2:</b>  </td>
         </tr>
         <tr>
         <b class="day">Понедельник</b>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.date}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.location}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.name1}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.score1}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> - {event.score2} </a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.name2}</a></li>)} </td>
         </tr>
         <hr></hr>
         <tr>
         <b class="day">Вторник</b>
         <td>{this.state.results.map((event) => <li><a class ="item"> {event.date}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.location}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.name1}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.score1}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> - {event.score2} </a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.name2}</a></li>)} </td>
         </tr>
         <hr></hr>
         <tr>
         <b class="day">Среда</b>
         <td>{this.state.results.map((event) => <li><a class ="item"> {event.date}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.location}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.name1}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.score1}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> - {event.score2} </a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.name2}</a></li>)} </td>
         </tr>
         <hr></hr>
         <tr>
         <b class="day">Четверг</b>
         <td>{this.state.results.map((event) => <li><a class ="item"> {event.date}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.location}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.name1}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.score1}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> - {event.score2} </a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.name2}</a></li>)} </td>
         </tr>
         <hr></hr>
         <tr>
         <b class="day">Пятница</b>
         <td>{this.state.results.map((event) => <li><a class ="item"> {event.date}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.location}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.name1}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li><a class ="item"> {event.score1}</a></li>)} </td>
            <td>{this.state.results.map((event) => <li class><a class ="item"> - {event.score2} </a></li>)} </td>
            <td>{this.state.results.map((event) => <li class><a class ="item"> {event.name2}</a></li>)} </td>
         </tr>
      </table>
     }
  }

export default ResultsTable;