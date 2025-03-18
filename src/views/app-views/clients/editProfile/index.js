import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Form, Input, Button, Spin, message } from 'antd';

function EditProfile() {
  const { id } = useParams(); // Получаем id пользователя из URL
  const history = useHistory(); // Для перенаправления на другой маршрут
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    console.log("Fetching data for user ID:", id); // Логируем id
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then((data) => {
        console.log("User data:", data); // Логируем полученные данные
        setUser(data);
        setFormData({
          name: data.name,
          email: data.email,
          phone: data.phone
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error); // Логируем ошибку
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
    setLoading(true); // Включаем лоадер

    // Имитируем отправку данных на сервер
    setTimeout(() => {
      // Допустим, что данные успешно отправлены
      console.log("Updated user data:", formData);

      // Показываем сообщение об успешном сохранении
      message.success('Changes saved successfully');

      // Останавливаем лоадер
      setLoading(false);

      // Перенаправляем на страницу списка пользователей
      history.push('/app/clients/clientsList');
    }, 2000); // Имитируем задержку в 2 секунды
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
