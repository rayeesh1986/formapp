import React, {Component} from 'react';

class Movieheader extends Component{

    renderPath = path =>{
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path === path){
            if(sortColumn.order === 'asc'){
               
                 sortColumn.order = 'desc';

            }else{
                 sortColumn.order = 'asc';
            }
        }
        else{
            sortColumn.path = path;
            sortColumn.order = 'asc'; 
        }

        this.props.sortData(sortColumn);
    }

    render(){
        return(
            <thead>
                <tr>
                    {this.props.columns.map(column =>
                        <th key={column.path || column.key} onClick={()=>this.renderPath(column.path)} scope="col">{column.label}</th>
                    )}
                    
                </tr>
            </thead>
        );
    }
}

export default Movieheader;