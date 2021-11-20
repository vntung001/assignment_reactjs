import { add, getAll, remove, update } from "./api/productAPI";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import LayoutWebsite from "./layouts/LayoutWebsite";
import LayoutAdmin from "./layouts/LayoutAdmin";
import ProductAdd from "./features/product/pages/ProductAdd";
import ProductManager from "./features/product/pages/ProductManager";
import Products from "./features/product/pages/Products";
import ProductDetail from "./features/product/pages/ProductDetail";
import ProductEdit from "./features/product/pages/ProductEdit";
import HomePage from "./pages/website/HomePage";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        toast.error(error.response.data);
      }
    };

    getProducts();
  }, []); 

  const onHandleRemove = async (id) => {
    try {
      const { data } = await remove(id);
      const newProducts = products.filter((item) => item.id !== data.id);
      toast.success("Remove Item Successfully");
      setProducts(newProducts);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  const onHandleAdd = async (product) => {
    try {
      // call api
      const { data } = await add(product);
      // rerender
      setProducts([...products, data]);
      toast.success("Thêm sản phẩm thành công");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  const onHandeUpdate = async (product) => {
    try {
      const { data } = await update(product);
      const newProducts = products.map((item) =>
        item.id === data.id ? data : item
      );
      setProducts(newProducts);
      toast.success(`Cập nhật sản phẩm thành công`);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <div className="App">
          <BrowserRouter>
              <div>
                    <Routes>
                      {/* Layout Website */}
                          <Route path="/" element={<LayoutWebsite />}>
                            <Route index element={<HomePage products={products} />} />
                            <Route
                              path="/product"
                              element={<Products products={products} />}
                            />
                            <Route path="product/:id" element={<ProductDetail />} />
                            <Route path="contact" element={<div>Contact</div>} />
                            <Route path="blog" element={<div>Blog</div>} />

                          </Route>

                      {/* Layout Admin */}
                          <Route path="admin/*" element={<LayoutAdmin />}>
                            <Route index element={<Navigate to="dashboard" />} />
                            <Route path="dashboard" element={<div>Dashboard</div>} />
                            <Route
                              path="product"
                              element={
                                <ProductManager
                                  products={products}
                                  onRemove={onHandleRemove}
                                />
                              }
                            />
                            <Route
                              path="product/add"
                              element={<ProductAdd onAdd={onHandleAdd} />}
                            />
                            <Route
                              path="product/:id/edit"
                              element={<ProductEdit onUpdate={onHandeUpdate} />}
                            />
                      </Route>
                    </Routes>
              </div>
            </BrowserRouter>
            <ToastContainer />
    </div>
  );
}

export default App;
