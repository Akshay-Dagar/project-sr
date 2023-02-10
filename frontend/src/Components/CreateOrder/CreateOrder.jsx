import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../api';
import './CreateOrder.styles.scss'
import { BsTrashFill } from 'react-icons/bs'
import { imgToBase64 } from '../../utils';

const CreateOrder = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({images: [], comments: null})

  const handleSubmit = async () => {
    const imageData = await Promise.all(formData.images.map(async (image) => imgToBase64(image)));

    const newOrder = {
      creator: 'dummy_user',       // to be set to proper name later
      images: imageData,
      comments: formData.comments
    };

    console.log(newOrder)

    dispatch(api.createOrder(newOrder))
  };

  const handleImageChange = e => {
    let imgs = []
    Array.from(e.target.files).map(file => imgs.push(URL.createObjectURL(file)))
    setFormData({...formData, [e.target.name]: [...formData[e.target.name], ...imgs]})
  }

  const handleCommentsChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const removeImage = img => {
    const imgs = formData.images.filter(imgName => imgName !== img)
    setFormData({...formData, images: [...imgs]})
  }


  return (
    <div className="order-form">
        <div className="order-form__upload-container">
          <div className='order-form__images'>
            {formData.images.map((img, idx) => (
              <div className='order-form__image-container' key={`image-${idx}`}>
                <img className='order-form__image-img' src={img} alt="Failed to Load" />
                <button className='order-form__image-remove' onClick={() => removeImage(img)}><BsTrashFill /></button>
              </div>
            ))}
          </div>
          
          <input id="order-form__upload-input" type="file" name='images' onChange={handleImageChange} hidden accept='image/*' multiple />
          <label for="order-form__upload-input" className='order-form__upload-label'>Choose File(s)</label>
        </div>
        <div className="order-form__comments-container">
          <textarea className="order-form__comments-input" rows={2} cols={30} type="text" name='comments' placeholder='Additional Comments...' onChange={handleCommentsChange} />
        </div>
        <button className="order-form__submit-btn" type="button" onClick={handleSubmit} disabled={!formData.images || formData.images.length === 0}>Create Order</button>
    </div>
  );
};

export default CreateOrder
