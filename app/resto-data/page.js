import React from "react";

const RestaurantTable = () => {
  return (
    <table className="mt-5">
      <thead>
        <tr>
          <th className="border border-gray-400 custom-scrollbar  p-2">Name</th>
          <th className="border border-gray-400 custom-scrollbar p-4">
            Website
          </th>
          <th className="border border-gray-400 custom-scrollbar p-4">Phone</th>
          <th className="border border-gray-400 custom-scrollbar p-4">Email</th>
          <th className="border border-gray-400 custom-scrollbar p-4">
            Facebook
          </th>
          <th className="border border-gray-400 custom-scrollbar p-4">
            Instagram
          </th>
          <th className="border border-gray-400 custom-scrollbar p-4">Map</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border border-gray-400 custom-scrollbar overflow-auto">
            <div className="custom-w">Restaurant Name</div>
          </td>{" "}
          <td className="p-2 border border-gray-400 custom-scrollbar overflow-auto">
            <div className="custom-w">Restaurant Website </div>
          </td>{" "}
          <td className="p-2  border border-gray-400 custom-scrollbar overflow-auto">
            <div className="custom-w">Restaurant Phone </div>
          </td>{" "}
          <td className="p-2 border border-gray-400 custom-scrollbar overflow-auto">
            <div className="custom-w">Restaurant Email </div>
          </td>{" "}
          <td className="p-2 border border-gray-400 custom-scrollbar overflow-auto">
            <div className="custom-w">Restaurant Facebook </div>
          </td>{" "}
          <td className="p-2 border border-gray-400 custom-scrollbar overflow-auto">
            <div className="custom-w">Restaurant Instagram </div>
          </td>
          <td className="p-2 border border-gray-400 custom-scrollbar overflow-auto">
            <div className="custom-w">
              https://www.google.com/maps/place/DTX+Hotel+Nha+Trang/@12.2418539,103.9211935,6z/data=!4m13!1m2!2m1!1sVietnam+hotel!3m9!1s0x31706780f733c299:0xb7e64008c09d90d4!5m2!4m1!1i2!8m2!3d12.2348242!4d109.1963373!15sCg1WaWV0bmFtIGhvdGVskgEFaG90ZWzgAQA!16s%2Fg%2F11h1kwmk5l?entry=ttu
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default RestaurantTable;
