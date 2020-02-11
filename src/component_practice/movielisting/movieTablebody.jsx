import React, {Component} from 'react';
import Liked from './liked';
import _ from 'lodash';

class Moviebody extends Component{
    
    rendrCell = (item, column) =>{
        if(column.content) return column.content(item)

        return _.get(item, column.path)
    }



    render(){

        const {data, columns} = this.props;
        console.log(data)
        return(
            <tbody>
                {data.map(item => ( 
                    <tr key={item}>
                       {columns.map(column => <td>{this.rendrCell(item, column)}</td>)}
                    </tr>
                ))} 
            </tbody>
        )
    }
}

export default Moviebody;


