import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Form, Input, Button, Spin, message } from 'antd';

function EditProfile() {
    const { id } = useParams(); 
    const history = useHistory(); 
    const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
});

	useEffect(() => {
    console.log("Fetching data for user ID:", id); 
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
        if (!response.ok) {
        	throw new Error('Failed to fetch');
        }
        return response.json();
    })
    	.then((data) => {
        console.log("User data:", data); 
        setUser(data);
        setFormData({
          name: data.name,
          email: data.email,
          phone: data.phone
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error); 
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    setLoading(true); 

    setTimeout(() => {
      console.log("Updated user data:", formData);
      message.success('Changes saved successfully');
      setLoading(false);
      history.push('/app/clients/clientsList');
    }, 2000); 
  };
  if (loading) {
    return <Spin size="large" />;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>Edit Profile</h2>
      <Form layout="vertical">
        <Form.Item label="Name">
          <Input
            value={formData.name}
            name="name"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Phone">
          <Input
            value={formData.phone}
            name="phone"
            onChange={handleChange}
          />
        </Form.Item>
        <Button
          type="primary"
          onClick={handleSave}
          loading={loading}
        >
          Save Changes
        </Button>
      </Form>
    </div>
  );
}

export default EditProfile;
