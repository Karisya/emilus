import React, { Component } from 'react';
import { Card, Table, Tooltip, message, Button, Spin } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import UserView from './UserView';
import { withRouter } from 'react-router-dom'; 

class ClientsList extends Component {
    state = {
        users: [],
        userProfileVisible: false,
        selectedUser: null,
        loading: true 
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
				console.log("ddfjkd", data)
                this.setState({ users: data, loading: false }); 
            })
            .catch(error => {
                console.error("Error fetching users:", error);
                this.setState({ loading: false }); 
            });
    }

    deleteUser = userId => {
        this.setState({
            users: this.state.users.filter(item => item.id !== userId),
        });
        message.success({ content: `Deleted user ${userId}`, duration: 2 });
    };

    
    onRowClick = user => {
        this.props.history.push(`/app/clients/editProfile/${user.id}`); 
    };

    closeUserProfile = () => {
        this.setState({
            userProfileVisible: false,
            selectedUser: null,
        });
    };

    render() {
        const { users, userProfileVisible, selectedUser, loading } = this.state;

        const tableColumns = [
            {
                title: 'Name',
                dataIndex: 'name',
                sorter: (a, b) => a.name.localeCompare(b.name),
            },
            {
                title: 'Username',
                dataIndex: 'username',
                sorter: (a, b) => a.username.localeCompare(b.username),
            },
            {
                title: 'Email',
                dataIndex: 'email',
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
            },
            {
                title: 'Company',
                dataIndex: ['company', 'name'],
            },
            {
                title: '',
                dataIndex: 'actions',
                render: (_, user) => (
                    <div className="text-right">
                        <Tooltip title="View">
                            <Button
                                type="primary"
                                className="mr-2"
                                icon={<EyeOutlined />}
                                onClick={() => this.onRowClick(user)}  
                                size="small"
                            />
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button
                                danger
                                icon={<DeleteOutlined />}
                                onClick={() => this.deleteUser(user.id)}
                                size="small"
                            />
                        </Tooltip>
                    </div>
                ),
            },
        ];

        return (
            <Card bodyStyle={{ padding: '0px' }}>
                {loading ? (
                    <Spin size="large" />
                ) : (
                    <Table
                        columns={tableColumns}
                        dataSource={users}
                        rowKey="id"
                        onRow={(record) => ({
                            onClick: () => this.onRowClick(record),  
                        })}
                    />
                )}
                <UserView data={selectedUser} visible={userProfileVisible} close={this.closeUserProfile} />
            </Card>
        );
    }
}


export default withRouter(ClientsList);
