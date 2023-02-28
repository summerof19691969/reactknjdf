import React, { Component } from 'react';

import { Demon } from 'megaten';


export default class Catch extends Component {
      constructor(props) {
        super(props);
        this.state = {
          demons: [],
        };
      }
    
      componentDidMount() {
        Demon.all().then((demons) => {
          this.setState({ demons: demons });
        });
      }
    
      render() {
        const demonList = this.state.demons.map((demon) => (
          <tr key={demon.name}>
            <td>{demon.name}</td>
            <td>{demon.race}</td>
            <td>{demon.level}</td>
            <td>{demon.stats.hp}</td>
            <td>{demon.stats.mp}</td>
            <td>{demon.skills.map((skill) => skill.name)}</td>
          </tr>
        ));
    
        return (
          <div>
            <h1>Demons</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Race</th>
                  <th>Level</th>
                  <th>HP</th>
                  <th>MP</th>
                  <th>Skills</th>
                </tr>
              </thead>
              <tbody>{demonList}</tbody>
            </table>
          </div>
        );
      }
    }
