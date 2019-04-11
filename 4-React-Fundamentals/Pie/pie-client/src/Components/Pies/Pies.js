import React from 'react'
import './Pies.css';
import Pie from './Pies/Pie';

const testData = [
    {
        nameOfPie: 'Apple',
        baseOfPie: 'Delicious Apples',
        crust: 'Pastry',
        timeToBake: '45 Minutes',
        servings: '12',
        rating: '4 Stars'
    },
    {
        nameOfPie: 'Cherry',
        baseOfPie: 'Fruit Filling',
        crust: 'Pastry',
        timeToBake: '30 mins',
        servings: 97,
        rating: '5 stars'
    },
    {
        nameOfPie: 'Pecan',
        baseOfPie: 'Sugary Goodness',
        crust: 'Graham Cracker',
        timeToBake: '40 mins',
        servings: 2,
        rating: '3 stars'
    }
];


class Pies extends React.Component {
    constructor() {
        super();

        this.state = {
            pies: []
        }
    }

    componentDidMount = () => {
        this.fetchPies();

    }

    fetchPies = () => { //brings back pie data and updates our state
        let url = 'http://localhost:3000/pies';

        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    pies: data
                })
            })
            .catch(err => console.log(err));

    }

    render() {
        let pieRows = this.state.pies.map(pie => {
            return (
                <Pie pie={pie} />
            )
        })


        return (
            <table>
                <thead>
                    <td>Name of Pie</td>
                    <td>Base of Pie</td>
                    <td>Crust</td>
                    <td>Time to Bake</td>
                    <td>Servings</td>
                    <td>Rating</td>
                </thead>
                <tbody>
                    {pieRows}
                </tbody>
            </table>
        )
    }
}

export default Pies;