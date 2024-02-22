import React, { useState, useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import ProductService from '../../../services/ProductService';

const CompanyHome = () => {
  const [categoryStatistics, setCategoryStatistics] = useState({});
  const chartRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await ProductService.getProductsList(); // Adjust the API endpoint based on your backend route
      const products = response.data;

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

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = chartRef.current.chartInstance;
      if (chartInstance) {
        chartInstance.destroy();
      }
    }
  }, [categoryStatistics]);

  return (
    <div className="statistics-container">
      <h2>Category Statistics</h2>
      <div className="pie-chart-container">
        <Pie
          ref={chartRef}
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
    </div>
  );
};
export default CompanyHome;
