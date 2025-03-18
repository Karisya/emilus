import React, { Component } from 'react';
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import UserView from './UserView';

export class ClientsList extends Component {
	state = {
		users: [],
		userProfileVisible: false,
		selectedUser: null
	}

	componentDidMount() {
		// Загрузка данных с API
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(data => this.setState({ users: data }))
			.catch(error => console.error("Error fetching users:", error));
	}

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		});
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
		});
	}

	render() {
		const { users, userProfileVisible, selectedUser } = this.state;

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
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => this.showUserProfile(user)} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={() => this.deleteUser(user.id)} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];

		return (
			<Card bodyStyle={{ padding: '0px' }}>
				<Table columns={tableColumns} dataSource={users} rowKey="id" />
				<UserView data={selectedUser} visible={userProfileVisible} close={this.closeUserProfile} />
			</Card>
		);
	}
}

export default ClientsList;
