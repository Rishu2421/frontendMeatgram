import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import backendUrl from '../../../config';
const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: null,
    quantityAndMrp: [],
    numOfPieces: '',
    description: '',
    category: '',
    isTopSelling: false,
    discount:'',
    isBoneless: false,
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/categories`);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleQuantityAndMrpChange = (e, index) => {
    const updatedQuantityAndMrp = [...product.quantityAndMrp];
    updatedQuantityAndMrp[index][e.target.name] = e.target.value;
    setProduct({ ...product, quantityAndMrp: updatedQuantityAndMrp });
  };

  const addQuantityAndMrpField = () => {
    const updatedQuantityAndMrp = [...product.quantityAndMrp, { quantity: '', mrp: '' }];
    setProduct({ ...product, quantityAndMrp: updatedQuantityAndMrp });
  };

  const removeQuantityAndMrpField = (index) => {
    const updatedQuantityAndMrp = [...product.quantityAndMrp];
    updatedQuantityAndMrp.splice(index, 1);
    setProduct({ ...product, quantityAndMrp: updatedQuantityAndMrp });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminToken');
      const formData = new FormData();

      formData.append('name', product.name);
      formData.append('price', product.price);
      formData.append('image', product.image);
      formData.append('quantityAndMrp', JSON.stringify(product.quantityAndMrp));
      formData.append('numOfPieces', product.numOfPieces);
      formData.append('description', product.description);
      formData.append('category', product.category);
      formData.append('isTopSelling', product.isTopSelling);
      formData.append('isBoneless', product.isBoneless);
      formData.append('discount', product.discount);

      // Send the product data to the backend API
      const response = await axios.post(`${backendUrl}/api/admin/addproduct`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data); // Handle the response as needed

      // Reset the form
      setProduct({
        name: '',
        price: '',
        image: null,
        quantityAndMrp: [],
        numOfPieces: '',
        description: '',
        category: '',
        discount:"",
        isTopSelling: false,
        isBoneless: false,
      });
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            className="form-control"
            id="productName"
            placeholder="Product Name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price (Discounted)
          </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="form-control"
            id="productPrice"
            placeholder="Price"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">
            Product Image
          </label>
          <input
            type="file"
            accept="image/jpeg"
            name="image"
            onChange={handleImageUpload}
            className="form-control"
            id="productImage"
            required
          />
        </div>

       
        {product.quantityAndMrp.map((item, index) => (
          <div key={index} className="mb-3">
            <label htmlFor={`quantity${index}`} className="form-label">
              Quantity
            </label>
            <input
              type="text"
              name="quantity"
              value={item.quantity}
              onChange={(e) => handleQuantityAndMrpChange(e, index)}
              className="form-control"
              id={`quantity${index}`}
              placeholder="Quantity"
              required
            />

            <label htmlFor={`mrp${index}`} className="form-label">
              MRP
            </label>
            <input
              type="number"
              name="mrp"
              value={item.mrp}
              onChange={(e) => handleQuantityAndMrpChange(e, index)}
              className="form-control"
              id={`mrp${index}`}
              placeholder="MRP"
              required
            />

            <button type="button" onClick={() => removeQuantityAndMrpField(index)}>
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={addQuantityAndMrpField}>
          Add Quantity and MRP
        </button>
        <div className="mb-3">
          <label htmlFor="numOfPieces" className="form-label">
            Number of Pieces
          </label>
          <input
            type="number"
            name="numOfPieces"
            value={product.numOfPieces}
            onChange={handleInputChange}
            className="form-control"
            id="numOfPieces"
            placeholder="Number of Pieces"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleInputChange}
            className="form-control"
            id="productDescription"
            placeholder="Description"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="productMrp" className="form-label">
            MRP
          </label>
          <input
            type="number"
            name="mrp"
            value={product.mrp}
            onChange={handleInputChange}
            className="form-control"
            id="productMrp"
            placeholder="MRP"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productDiscount" className="form-label">
            Discount
          </label>
          <input
            type="number"
            name="discount"
            value={product.discount}
            onChange={handleInputChange}
            className="form-control"
            id="productDiscount"
            placeholder="Discount"
            required
          />
        </div>

        <div className="mb-3">
  <label htmlFor="productCategory" className="form-label">
    Category
  </label>
  <select
    name="category"
    value={product.category}
    onChange={handleInputChange}
    className="form-control"
    id="productCategory"
    required
  >
    <option value="">Select a category</option>
    {categories.map((category, index) => (
      <option key={index} value={category.name}>
        {category.name}
      </option>
    ))}
  </select>
</div>


        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="isTopSelling"
            name="isTopSelling"
            checked={product.isTopSelling}
            onChange={(e) => setProduct({ ...product, isTopSelling: e.target.checked })}
          />
          <label className="form-check-label" htmlFor="isTopSelling">
            Top Selling
          </label>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="isBoneless"
            name="isBoneless"
            checked={product.isBoneless}
            onChange={(e) => setProduct({ ...product, isBoneless: e.target.checked })}
          />
          <label className="form-check-label" htmlFor="isBoneless">
            Boneless
          </label>
        </div>


        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;



// <div className="mb-3">
// <label className="form-label">Quantity</label>
// <div className="form-check">
//   <input
//     className="form-check-input"
//     type="radio"
//     name="quantity"
//     value="0.5kg"
//     checked={product.quantity === '0.5kg'}
//     onChange={handleQuantityChange}
//     id="quantityHalf"
//     required
//   />
//   <label className="form-check-label" htmlFor="quantityHalf">
//     0.5 kg
//   </label>
// </div>
// <div className="form-check">
//   <input
//     className="form-check-input"
//     type="radio"
//     name="quantity"
//     value="1kg"
//     checked={product.quantity === '1kg'}
//     onChange={handleQuantityChange}
//     id="quantityOne"
//     required
//   />
//   <label className="form-check-label" htmlFor="quantityOne">
//     1 kg
//   </label>
// </div>
// </div>
