import React from 'react'
import MaterialTable from 'material-table';
import { red } from '@material-ui/core/colors';
import { LeftComponent } from "../PartialComponents/LeftComponent";
import styles from "./Admin.module.css";


function AdminPage() {
  
    
  const data=[
    {name:'Sudipta Bandyopadhyay', empid:'12345', costCentre:'Kolkata', grp:'X', empType:'Permanent', title:'XXX',individualRate:'XXX', projectName:'Coop', 
      projNChgble:'XXX', projID:'XXXX', nominalCode:'XXX', costCentre:'Manchester', deptCode:'XXX', shortCode:'XXX', cerNumber:'XXXX', time:'200', totalValue:'4000' },
    {name:'Diptayan Dutta', empid:'12346', costCentre:'Kolkata', grp:'X', empType:'Permanent', title:'XXX',individualRate:'XXX', projectName:'Coop', 
    projNChgble:'XXX', projID:'XXXX', nominalCode:'XXX', costCentre:'Manchester', deptCode:'XXX', shortCode:'XXX', cerNumber:'XXXX', time:'200', totalValue:'4000' },
    {name:'Somnath Karmokar', empid:'12347', costCentre:'Kolkata', grp:'X', empType:'Permanent', title:'XXX',individualRate:'XXX', projectName:'Coop', 
    projNChgble:'XXX', projID:'XXXX', nominalCode:'XXX', costCentre:'Manchester', deptCode:'XXX', shortCode:'XXX', cerNumber:'XXXX', time:'200', totalValue:'4000' },
    {name:'Dhrubajyoti Ghosh', empid:'12348', costCentre:'Kolkata', grp:'X', empType:'Permanent', title:'XXX',individualRate:'XXX', projectName:'Coop', 
    projNChgble:'XXX', projID:'XXXX', nominalCode:'XXX', costCentre:'Manchester', deptCode:'XXX', shortCode:'XXX', cerNumber:'XXXX', time:'200', totalValue:'4000' }

  ]

  const columns=[
      
      {title:'Resource Name', field:'name'},
      {title:'Staff ID', field:'empid'},
      {title:'Resource Cost Centre', field:'costCentre'},
      {title:'Group', field:'grp'},
      {title:'Employee Type', field:'empType'},
      {title:'Res Non Chgble', field:'title'},
      {title:'Individual Rate', field:'individualRate'},
      {title:'Project Name', field:'projectName'},
      {title:'Proj Non Chgble', field:'projNChgble'},
      {title:'Project ID', field:'projID'},
      {title:'Nominal Code', field:'nominalCode'},
      {title:'Cost Centre', field:'costCentre'},
      {title:'Department Code', field:'deptCode'},
      {title:'Short Code', field:'shortCode'},
      {title:'CERNumber', field:'cerNumber'},
      {title:'Time', field:'time'},
      {title:'Total Value', field:'totalValue'}

  ]
  

  return (
    
    <div>
      <div><LeftComponent /></div>
      <div className={styles.adm} >
     
        <MaterialTable  title="Employee Table"
        data={data}
        columns={columns}
        options={
            {
                paging:false,
                search: true,
                exportButton: true,
                editable: true,
                isEditable: true
            }
            
        }
        detailPanel={[
          {
          tooltip: 'Show Details',
          render: rowData => {
            return (
              <div
                style={{
                  fontSize: 100,
                  textAlign: 'center',
                  color: 'white',
                  backgroundColor:'#ADD8E6',
                }}
              >
                {rowData.name},{rowData.empid}
              </div>
            )
          },
          },

          ]}
          
          />
    </div>


   

    </div>
    
    
    
    
    
    
    )
}

export { AdminPage };
