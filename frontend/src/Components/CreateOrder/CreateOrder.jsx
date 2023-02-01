import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import api from '../../api';
import './CreateOrder.styles.scss'

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
    <div className="order-form">
        <div className="order-form__upload-container">
          <label className="order-form__upload-label">Upload Image</label>
          <button style={{backgroundColor: 'red', color: 'white', width: '90%', height: '4rem', margin: '2rem', fontSize: 'large'}}>Choose File</button>
          {/* <input className="order-form__upload-input" type="file" name='image' onChange={handleChange} /> */}
        </div>
        <div className="order-form__comments-container">
          <label className="order-form__comments-label">Comments</label>
          <input className="order-form__comments-input" type="text" name='comments' onChange={handleChange} />
        </div>
        <button className="order-form__submit-btn" type="button" onClick={handleSubmit}>Create Order</button>
    </div>
  );
};

export default CreateOrder
