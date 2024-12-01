import React from 'react'
import { FaBuilding, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiContactsBook2Fill } from 'react-icons/ri'
import { SiGoogleads } from 'react-icons/si'
import { Doughnut, Line } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import AvatarIcon from '../../assets/dashboard/avatar.jpg'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

const Home = () => {

  const cardData = [
    { id: 1, title: "Total Contacts", number: 100, logo: <RiContactsBook2Fill />, background: "bg-[#5B93FF]", color: "text-[#5B93FF]" },
    { id: 2, title: "Total Calls Made", number: 100, logo: <FaPhone />, background: "bg-[#FFD66B]", color: "text-[#FFD66B]" },
    { id: 3, title: "Totals Email Made", number: 100, logo: <MdEmail />, background: "bg-[#FF8F6B]", color: "text-[#FF8F6B]" },
    { id: 4, title: "Sucessfull Leads", number: 100, logo: <SiGoogleads />, background: "bg-[#605BFF]", color: "text-[#605BFF]" },
    { id: 5, title: "Total Companies", number: 100, logo: <FaBuilding />, background: "bg-[#E71D36]", color: "text-[#E71D36]" },

  ]

  const data = { labels: ["January", "February", "March", "April", "May", "June"], datasets: [{ label: "Monthly Sales ($)", data: [12000, 15000, 14000, 17000, 16000, 19000], borderColor: "#EA580C", backgroundColor: "rgba(234, 88, 12, 0.2)", pointBackgroundColor: "#EA580C", tension: 0.4, },], };
  const options = { responsive: true, maintainAspectRatio: true, legend: { display: data?.datasets?.length < 0 ? false : true, }, scales: { yAxes: [{ display: true, gridLines: { zeroLineColor: localStorage.getItem("theme") === "dark" ? "#a6b0c4" : "black", borderDash: [10] }, ticks: { fontColor: localStorage.getItem("theme") === "dark" ? "white" : "black", suggestedMin: 0, beginAtZero: true, userCallback: function (label, index, labels) { if (Math.floor(label) === label) { return label; } }, }, },], xAxes: [{ display: true, gridLines: { display: false, zeroLineColor: localStorage.getItem("theme") === "dark" ? "#a6b0c4" : "black", }, ticks: { fontColor: localStorage.getItem("theme") === "dark" ? "white" : "black", }, },], }, elements: { line: { borderWidth: 2, borderColor: "#3587ec", fill: true, backgroundColor: "rgba(53, 135, 236, 0.15)", }, point: { radius: 0, }, }, };
  const donutData = {
    labels: ["Total Calls", "Sucessfull", "Unsucessfull"],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ["#4F8EF7", "#FFD66B", "#FF8F6B"],
        hoverBackgroundColor: ["#4F8EF7", "#FFD66B", "#FF8F6B"],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };
  const donutOptions = {
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            const label = data.labels[tooltipItem.dataIndex];
            const value = data.datasets[0].data[tooltipItem.dataIndex];
            return `${label}: ${value}%`;
          },
        },
      },
      legend: {
        display: false
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };


  const orders = [
    {
      trackingNo: '112223',
      productName: 'Emily',
      price: 'emily@yopmail.com',
      totalOrder: '12345678910',
      totalAmount: 'Sucesfull',
    },
    {
      trackingNo: '12113213',
      productName: 'Emily',
      price: 'emily@yopmail.com',
      totalOrder: '12345678910',
      totalAmount: 'Sucesfull',
    },
    {
      trackingNo: '112223',
      productName: 'Emily',
      price: 'emily@yopmail.com',
      totalOrder: '12345678910',
      totalAmount: 'Sucesfull',
    },
    {
      trackingNo: '12113213',
      productName: 'Emily',
      price: 'emily@yopmail.com',
      totalOrder: '12345678910',
      totalAmount: 'Sucesfull',
    },
    {
      trackingNo: '12113213',
      productName: 'Emily',
      price: 'emily@yopmail.com',
      totalOrder: '12345678910',
      totalAmount: 'Sucesfull',
    },
  ];

  const topPerformers = [
    {
      name: 'John Doe',
      sales: 12345,
      imageSrc: AvatarIcon,
    },
    {
      name: 'Jane Smith',
      sales: 9876,
      imageSrc: AvatarIcon,
    },
    {
      name: 'Jane Smith',
      sales: 9876,
      imageSrc: AvatarIcon,
    },
  ];



  return (


    <div className='flex-1 overflow-x-auto'>

      {/* CARDS  */}
      <div className='flex justify-between items-center w-[100%] overflow-x-auto gap-x-5'>
        {
          cardData.map((i) => (
            <div key={i.id} className='min-w-[276px] h-[116px] bg-white rounded-md flex items-center px-5'>

              <div className='flex items-start gap-x-6'>

                <div className={`w-[50px] h-[50px] rounded-full flex justify-center items-center ${i.background} bg-opacity-10`}>
                  <p className={`${i.color} text-xl`}>{i.logo}</p>
                </div>

                <div>
                  <h1 className='mb-1 text-xl'>{i.number}+</h1>
                  <p className='text-[#a6b0cf] text-sm'>{i.title}</p>
                </div>
              </div>

            </div>
          ))
        }
      </div>

      {/* CHARTS  */}

      <div className='flex justify-between items-start mt-8 gap-x-6 flex-wrap'>

        {/* LINE CHART  */}
        <div className='bg-white rounded-md lg:min-w-[70%] p-5 lg:flex-none flex-1 mt-2 '>

          <p className="text-lg font-medium mb-2">Sales</p>
          <Line data={data?.datasets?.length > 0 ? data : []} options={options} height={103} />

        </div>

        {/* PIE CHART  */}
        <div className="bg-white rounded-md p-5 h-[23rem] flex-1 mt-2">
          <p className="text-lg font-medium mb-4">Analytics</p>
          <div className=' flex justify-center items-center flex-col'>
            <div className="relative w-[12rem] h-[12rem]">
              <Doughnut data={donutData} options={donutOptions} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-4xl font-bold text-black">80%</p>
                <p className="text-sm text-gray-600">Transactions</p>
              </div>
            </div>
            <div className="flex justify-between w-full mt-8">

              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#4F8EF7] rounded-full mr-2"></div>
                <span className="text-sm">Total Calls</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#FFD66B] rounded-full mr-2"></div>
                <span className="text-sm">Sucessfull</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#FF8F6B] rounded-full mr-2"></div>
                <span className="text-sm">Unsucessfull</span>
              </div>
            </div>

          </div>
        </div>

      </div>


      {/* TABLES  */}

      <div className='flex justify-between items-start mt-8 gap-x-6 flex-wrap'>

        <div className='bg-white rounded-md lg:min-w-[70%] p-5 lg:flex-none min-w-[100%] flex-1 mt-2  overflow-x-auto'>
          <p className="text-lg font-medium mb-2">Total Calls</p>
          <div className="overflow-x-auto w-full"> {/* Enable horizontal scrolling and ensure full width */}
            <table className="min-w-[800px] border-collapse overflow-x-auto"> {/* Ensure table is wide enough */}
              <thead>
                <tr>
                  <th className="border-b py-2 px-4 text-left text-sm font-normal">Call Id</th>
                  <th className="border-b py-2 px-4 text-left text-sm font-normal">Customer Name</th>
                  <th className="border-b py-2 px-4 text-left text-sm font-normal">Customer Email</th>
                  <th className="border-b py-2 px-4 text-left text-sm font-normal">Customer Phone</th>
                  <th className="border-b py-2 px-4 text-left text-sm font-normal">Transcript</th>
                  <th className="border-b py-2 px-4 text-left text-sm font-normal">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.trackingNo} className="border-b hover:bg-gray-100 text-sm font-normal">
                    <td className="py-2 px-4 text-sm font-normal">{order.trackingNo}</td>
                    <td className="py-2 px-4 flex items-center text-sm font-normal">{order.productName}</td>
                    <td className="py-2 px-4 text-sm font-normal">{order.price}</td>
                    <td className="py-2 px-4 text-sm font-normal">{order.totalOrder}</td>
                    <td className="py-2 px-4 text-sm font-normal">{order.totalAmount}</td>
                    <td className="py-2 px-4 text-sm font-normal">{order.totalAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-md p-5 flex-1 mt-2 min-w-[20rem]">
          <p className="text-lg font-medium mb-4">Top Performers</p>
          <div className="">
            {topPerformers.map((i) => (
              <div key={i.imageSrc} className='mb-2 flex items-start gap-x-4 border-b py-2'>
                <div className='bg-[#d0e3fa] w-[3rem] h-[3rem] rounded-md flex justify-center items-center'>
                  <img src={i.imageSrc} alt="" />
                </div>
                <div>
                  <p className='text-lg'>{i.name}</p>
                  <p className='text-sm mt-1'>{i.sales} lead closed</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>


  )
}

export default Home