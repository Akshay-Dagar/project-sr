import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import api from '../api';

const CreateOrder = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({image: null, comments: null})

  const handleSubmit = () => {
    const newOrder = {
      creator: 'dummy_user',       // to be set to proper name later
      image: formData.image,
      comments: formData.comments
    };
    dispatch(api.createOrder(newOrder))
  };

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <div>
        <div>
          <label>Upload Image</label>
          <input type="file" name='image' onChange={handleChange} />
        </div>
        <div>
          <label>Additional Comments</label>
          <input type="text" name='comments' onChange={handleChange} />
        </div>
        <button type="button" onClick={handleSubmit}>Create Order</button>
    </div>
  );
};

export default CreateOrder
