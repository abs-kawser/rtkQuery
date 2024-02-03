import React, { useState } from 'react';
import { useGetProductsQuery, useGetProductByIdQuery, useUpdateProductMutation } from '../redux/productApi';

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState(); 

  const { data: products } = useGetProductsQuery();
  // console.log('Products', products);

  const {  data: productById, error, isLoading } = useGetProductByIdQuery(selectedProduct);
  console.log('ProductById', productById);

  const updateProductMutation = useUpdateProductMutation();


  const handleSingleGet = (id) => {
    setSelectedProduct(id);
  };

  const handleUpdateProduct = async () => {
    try {
      // Assuming you have the updated title in the state
      const { data: updatedProduct } = await updateProductMutation.mutateAsync({
        id: selectedProduct,
        title: updatedTitle,
        // Add other fields as needed for the update
      });

      console.log('Updated Product:', updatedProduct);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  }


  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products?.products?.map((p) => (
          <li key={p.id}>
            {p.title}
            <button onClick={() => handleSingleGet(p.id)}>Get</button>
            
          </li>
        ))}
      </ul>

      {selectedProduct !== "" && (
        <div>
          <h2>Product by ID</h2>
          {/* <p>{productById ? productById.title : 'Loading...'}</p> */}
          
          {/* Update Product Section */}
          <div>
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <button onClick={handleUpdateProduct}>Update Product</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;

