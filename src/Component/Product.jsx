import { useState } from 'react';
import { useGetProductsQuery, useGetProductByIdQuery, useUpdateProductMutation } from '../redux/productApi';

const Product = () => {
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState();

  const { data: products, refetch: refetchProducts } = useGetProductsQuery();
  const { data: productById } = useGetProductByIdQuery(selectedProduct);
  const [updateProduct, { data, error, isLoading }] = useUpdateProductMutation()
  // console.log(data, error, isLoading);



  const handleUpdate = async (id) => {
    console.log(id);
    if (id) {
      const prod = {
        title: "xxxx",
      }
      await updateProduct({
        id: id,
        data: prod
      })
      await refetchProducts();
    }
  }


  const handleSingleGet = (id) => {
    setSelectedProduct(id);
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products?.products?.map((p) => (
          <li key={p.id}>
            {p.title}
            <button onClick={() => handleSingleGet(p.id)}>Get</button>
            <button onClick={() => handleUpdate(p.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;