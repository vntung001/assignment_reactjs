import { add, getAll, remove, update } from "./api/productAPI";
import { useEffect, useState } from "react";
import { getAllCategory, removeCategory, addCategory, updateCategory } from "./api/categoryAPI";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import LayoutWebsite from "./layouts/LayoutWebsite";
import LayoutAdmin from "./layouts/LayoutAdmin";
import ProductAdd from "./features/product/pages/ProductAdd";
import ProductManager from "./features/product/pages/ProductManager";
import ProductEdit from "./features/product/pages/ProductEdit";
import Products from "./features/product/pages/Products";
import ProductDetail from "./features/product/pages/ProductDetail";
import HomePage from "./pages/website/HomePage";
import CategoryAdd from "./features/category/pages/CategoryAdd";
import CategoryManager from "./features/category/pages/CategoryManager";
import CategoryEdit from "./features/category/pages/CategoryEdit";
import SignUp from "./features/user/SignUp";
import CategoryPage from "./pages/website/CategoryPage";


function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await getAllCategory();
        setCategories(data);
      } catch (error) {
        toast.error(error.response.data);
      }
    };

    getCategories();
  }, []); 


  const onHandleRemove = async (id) => {
    try {
      const { data } = await remove(id);
      const newProducts = products.filter((item) => item.id !== data.id);
      toast.success("Xóa sản phẩm thành công !");
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

  // Category
  const onHandleRemoveCategory = async (id) => {
    try {
      const { data } = await removeCategory(id);
      const newCategories = categories.filter((item) => item.id !== data.id);
      toast.success("Remove Item Successfully");
      setCategories(newCategories);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  const onHandleAddCategory = async (category) => {
    try {
      // call api
      const { data } = await addCategory(category);
      // rerender
      setProducts([...categories, data]);
      toast.success("Thêm danh mục thành công");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  const onHandeUpdateCategory = async (category) => {
    try {
      const { data } = await updateCategory(category);
      const newCategories = categories.map((item) =>
        item.id === data.id ? data : item
      );
      setCategories(newCategories);
      toast.success(`Cập nhật danh mục thành công`);
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
                              element={<Products products={products} categories={categories} />}
                            />
                            <Route
                              path="/category/:id"
                              element={<CategoryPage products={products} categories={categories} />}
                            />
                            <Route path="product/:id" element={<ProductDetail />} />
                            <Route path="contact" element={<div>Contact</div>} />
                            <Route path="blog" element={<div>Blog</div>} />
                            <Route path="signup" element={<SignUp />} />

                          </Route>

                      {/* Layout Admin */}
                          <Route path="admin/*" element={<LayoutAdmin />}>
                            <Route index element={<Navigate to="dashboard" />} />
                            <Route path="dashboard" element={<div></div>} />

                            {/* Product Features */}
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
                              element={<ProductAdd onAdd={onHandleAdd} category={categories} />}
                            />
                            <Route
                              path="product/:id/edit"
                              element={<ProductEdit onUpdate={onHandeUpdate} />}
                            />

                              {/* Product Features */}

                              <Route
                              path="category"
                              element={
                                <CategoryManager
                                  categories={categories}
                                  onRemove={onHandleRemoveCategory}
                                />
                              }
                            />
                            <Route
                              path="category/add"
                              element={<CategoryAdd onAdd={onHandleAddCategory} />}
                            />
                            <Route
                              path="category/:id/edit"
                              element={<CategoryEdit onUpdate={onHandeUpdateCategory} />}
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
