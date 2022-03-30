import React, { useState } from "react";
import logo from "./assets/images/logo192.png";
import DashboardIcon from "../../assets/icons/dashboard.svg";
import DesignIcon from "../../assets/icons/design.svg";
import OrderIcon from "../../assets/icons/order.svg";
import InventoryIcon from "../../assets/icons/inventory.svg";
import ContactIcon from "../../assets/icons/contact.svg";
import ProfileIcon from "../../assets/icons/profile.svg";
import HelpIcon from "../../assets/icons/help.svg";
import TruckIcon from "../../assets/icons/truck.svg";
import BillingIcon from "../../assets/icons/billing.svg";
import LogoutIcon from "../../assets/icons/logout.svg";
import PresetPack from "../../assets/images/preset_pack.png";
import SwagPack from "../../assets/images/fruit.png";
import CupPack from "../../assets/images/cup.png";
import Apple from "../../assets/images/apple.png";
import { SignOut } from "../../store/auth/actions";
import AddProfile from "../../components/modules/configuration/authentication/models/profile/Add";
import CitizenLayout from "../../components/layout/Citizen";

export default function Home() {
  const signOut = () => {
    SignOut();
  };

  const products = [
    {
      name: "Apple Fruit",
      imgUrl: Apple,
      status: "In-Design",
      color: "Red",
      category: "Pack",
    },
    {
      name: "Orange Fruit",
      imgUrl: SwagPack,
      status: "In-Design",
      color: "Custom",
      category: "Pack",
    },

    {
      name: "Grapes Fruit",
      imgUrl: CupPack,
      status: "In-Design",
      color: "Custom",
      category: "Pack",
    },
  ];

  const orders = [
    { productName: "Apple -- Pack 1/29/2020", price: 5000, quantity: 8 },
    { productName: "Mango -- Pack 1/29/2020", price: 8600, quantity: 24 },
    { productName: "Orange ", price: 5000, quantity: 8 },
    { productName: "Apple -- Pack 1/29/2020", price: 5000, quantity: 8 },
    { productName: "Mango -- Pack 1/29/2020", price: 8600, quantity: 24 },
    { productName: "Orange ", price: 5000, quantity: 8 },
    { productName: "Apple -- Pack 1/29/2020", price: 5000, quantity: 8 },
    { productName: "Mango -- Pack 1/29/2020", price: 8600, quantity: 24 },
  ];

  const formatMoney = (value: any) =>
    new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "RWF",
    }).format(value);

  const totalOrder = 607000;

  const [modalState, setModalState] = React.useState({
    open: false,
  });

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setModalState({ ...modalState, open: false });
  };

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    console.log("hello");
    setModalState({ ...modalState, open: true });
  };

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log("close");
    setIsOpen(false);
  };

  return (
    <CitizenLayout>
      <section className="pt-6">
        <h1 className="text-2xl font-bold text-gray-900">Products</h1>
        <div className="grid grid-cols-3 gap-x-6 py-6">
          {products.map((item) => (
            <article className="overflow-hidden rounded-2xl border border-gray-100">
              <div className="flex justify-center items-center bg-gray-50 aspect-square">
                <img src={item.imgUrl} alt="" className="h-40" />
              </div>
              <div className="flex flex-col p-6">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold tracking-wide">{item.name}</h2>
                  <span className="flex gap-x-1 items-center">
                    <svg
                      className="w-4 h-4 text-gray-400 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <rect x="3" y="4" width="18" height="4" rx="2"></rect>
                      <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"></path>
                      <line x1="10" y1="12" x2="14" y2="12"></line>
                    </svg>

                    <svg
                      className="w-4 h-4 text-gray-400 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95"></path>
                      <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44"></path>
                      <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92"></path>
                      <path d="M8.56 20.31a9 9 0 0 0 3.44 .69"></path>
                      <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95"></path>
                      <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44"></path>
                      <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92"></path>
                      <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                    <span className="text-sm font-semibold tracking-wide text-gray-800">
                      {item.category}
                    </span>
                  </span>
                </div>
                <span className="text-sm text-gray-400">
                  Color : <span className="text-gray-600">{item.color}</span>
                </span>
                <a
                  href="#"
                  className="inline-block mt-6 text-sm font-semibold text-center text-blue-500 hover:text-blue-600"
                >
                  View Mockups
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-5">
        <h1 className="text-2xl font-bold text-gray-900">Shipping & Storage</h1>
        <div className="grid grid-cols-2 gap-x-6 pt-6">
          <div className="relative p-6 rounded-2xl border border-gray-100">
            <div className="flex justify-between items-center pb-4 border-b  border-gray-100">
              <h3 className="font-semibold">Ship Weag to Recipients</h3>
              <a
                href="#"
                className="flex items-center text-sm font-semibold text-blue-500 hover:text-blue-600"
              >
                <span>View Shipments</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="9 6 15 12 9 18"></polyline>
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-x-4 pt-4">
              <div>
                <div className="text-sm text-gray-600">Shipment Created</div>
                <div className="pt-2 text-lg font-semibold">2</div>
              </div>

              <div>
                <div className="text-sm text-gray-600">Totoal Shipment</div>
                <div className="pt-2 text-lg font-semibold">$30.00</div>
              </div>
            </div>
            <button className="py-2 px-5 mt-4 text-sm font-semibold leading-relaxed text-blue-500 rounded-full border border-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500">
              Create Shipment
            </button>
            <img
              src={PresetPack}
              alt=""
              className="absolute right-0 bottom-0 w-28"
            />
          </div>
          <div className="relative p-6 rounded-2xl border border-gray-100 overflow-hidden">
            <div className="flex justify-between items-center pb-4 border-b  border-gray-100">
              <h3 className="font-semibold">Send Sweag to Recipients</h3>
              <a
                href="#"
                className="flex items-center text-sm font-semibold text-blue-500 hover:text-blue-600"
              >
                <span>View Swag Storage</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="9 6 15 12 9 18"></polyline>
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-x-4 pt-4">
              <div>
                <div className="text-sm text-gray-600">Sending to Storage</div>
                <div className="pt-2 text-lg font-semibold">300</div>
              </div>

              <div>
                <div className="text-sm text-gray-600">Totoal Storage</div>
                <div className="pt-2 text-lg font-semibold">$1,400.00</div>
              </div>
            </div>
            <button className="py-2 px-5 mt-4 text-sm font-semibold leading-relaxed text-blue-500 rounded-full border border-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500">
              Create Shipment
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 bottom-0 w-28 text-gray-500"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 21v-13l9 -4l9 4v13"></path>
              <path d="M13 13h4v8h-10v-6h6"></path>
              <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3"></path>
            </svg>
          </div>
        </div>
      </section>
    </CitizenLayout>
  );
}
