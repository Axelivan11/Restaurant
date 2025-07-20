import React from "react";
import Analytics from "../components/admin.components/Analytics"
import Overview from "../components/admin.components/Overview"
import Products from "../components/admin.components/Products";
import Orders from "../components/admin.components/Orders";
import Category from "../components/admin.components/Category";
import ProductSale from "../components/admin.components/ProductSale";
import ProductRanking from "../components/admin.components/ProductRanking";
const Admin = () => {
  return (
    <div className="flex flex-col">
      <Overview />
      <Analytics />

      <div className="flex flex-col md:flex-row gap-6">
        <ProductSale />
        <ProductRanking />
      </div>

      <Products />
      <div className="flex flex-col md:flex-row gap-6">
        <Orders />
        <Category />
      </div>
    </div>
  );
};

export default Admin;


 