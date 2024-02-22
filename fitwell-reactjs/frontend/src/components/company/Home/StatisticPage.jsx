import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { useDispatch } from "react-redux";


import ProductService from "../../../services/ProductService";
import { setProducts } from "../../../store/slices/productsSlice.jsx";


const StatisticsPage = () => {
  const [categoryStatistics, setCategoryStatistics] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState();



  useEffect(() => {
    fetchData();
  }, []);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const res = await ProductService.getProducts();
      if (!res.error) {
        dispatch(setProducts(res.data));
        setData(res.data);
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/products'); // Adjust the API endpoint based on your backend route
      const products = response.data;

      // Calculate category statistics
      const categoryCounts = {};
      products.forEach((product) => {
        categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
      });

      const totalProducts = products.length;
      const categoryPercentages = {};
      Object.keys(categoryCounts).forEach((category) => {
        categoryPercentages[category] = (categoryCounts[category] / totalProducts) * 100;
      });

      setCategoryStatistics(categoryPercentages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Category Statistics</h2>
      <Pie
        data={{
          labels: Object.keys(categoryStatistics),
          datasets: [
            {
              data: Object.values(categoryStatistics),
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default StatisticsPage;
