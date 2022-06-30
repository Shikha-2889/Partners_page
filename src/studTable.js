import React from "react";
import {Button,Space,Table} from "antd";
import StudentDetails from "./studDetails";

export default class StudTable extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           /* pagination:{
                current: 1,
                pageSize: 20
            },*/
            col :[
                {
                    title:'Mobile/Id',
                    width: '13%',
                    sorter: true ,
                    dataIndex: 'user_name' 
                },
                {
                    title:'Full Name',
                    width: '15%',
                    sorter: true,
                    dataIndex: 'name'
                },
                {
                    title:'Class',
                    width: '10%',
                    sorter: true,
                    dataIndex: 'class'
                },
                {
                    title: 'EMail',
                    width: '25%',
                    dataIndex: 'mail'
                },
                {
                    title: 'Enrolled On',
                    width: '15%',
                    sorter: true,
                    dataIndex: 'enrld_on'
                },
                {
                    title: 'DOB',
                    width: '10%',
                    sorter: true,
                    dataIndex:'dob'
                },
                {
                    title: 'Is Active?',
                    width: '10%',
                    dataIndex:'status'
                },
                {
                    title: 'Action',
                    width: '12%',
                    dataIndex:'user_name',
                    render:(id)=><div>
                        <StudentDetails btn = "View"/>
                    </div>
            }
            ],
            data:[{
                user_name:9999421976,
                key:1,
                name:'Rahul Bhatt',
                class: 11,
                mail:'zrahul.bhatt99@gmail.com',
                enrld_on:'2020-11-2024',
                dob: '2004-28-01',
                status:'Active',
           },
           {
            user_name:9997617017,
            name:'Shikha Chaudhary',
            key:2,
            class: 12,
            mail:'zshikha.ch99@gmail.com',
            enrld_on:'2020-11-2022',
            dob: '2006-28-01',
            status:'Active',
       }]
        }
        
    }

    componentDidMount(){
        //const {pagination} = this.state
        //this.fetch({pagination})
    }
    render(){
        const {col,data}=this.state
        return(
            <>
            <Table 
            columns={col}
            dataSource={data}>
            </Table>
            </>
        )
    }
}