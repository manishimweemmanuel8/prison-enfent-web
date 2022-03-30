import React from "react";
import Adopt from "../../../../../assets/images/adopt.jpg";
import Donation from "../../../../../assets/images/donation.jpg";

import PrisonLayout from "../../../../../components/layout/Prison";

export default function PrisonDashboard() {
 

  return (
    <PrisonLayout>
      <section className="py-5">
        <h1 className="text-2xl font-bold text-gray-900">Adopt & Donation</h1>
        <div className="grid grid-cols-2 gap-x-6 pt-6">
          <div className="relative p-6 rounded-2xl border border-gray-100">
            <div className="flex justify-between items-center pb-4 border-b  border-gray-100">
              <h3 className="font-semibold">Adoptation</h3>
              <a
                href="/prison/adopted/child"
                className="flex items-center text-sm font-semibold text-green-900 hover:text-green-500"
              >
                <span>View Children to adopt</span>

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
                <div className="text-sm text-gray-600">Pending to adopt</div>
                <div className="pt-2 text-lg font-semibold">2</div>
              </div>

              <div>
                <div className="text-sm text-gray-600">Totoal adopted</div>
                <div className="pt-2 text-lg font-semibold">30</div>
              </div>
            </div>
            <a href="prison/child/create">
              <button className="py-2 px-5 mt-4 text-sm font-semibold leading-relaxed text-green-900 rounded-full border border-green-900 hover:text-white hover:bg-green-900 hover:border-green-900">
                Create Child
              </button>
            </a>
            <img
              src={Adopt}
              alt=""
              className="absolute right-0 bottom-0 w-28"
            />
          </div>
          <div className="relative p-6 rounded-2xl border border-gray-100 overflow-hidden">
            <div className="flex justify-between items-center pb-4 border-b  border-gray-100">
              <h3 className="font-semibold">Donation requisition</h3>
              <a
                href="/prison/requisitions"
                className="flex items-center text-sm font-semibold text-green-900 hover:text-green-500"
              >
                <span>View requisition</span>

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
                <div className="text-sm text-gray-600">Active requisition</div>
                <div className="pt-2 text-lg font-semibold">30</div>
              </div>

              <div>
                <div className="text-sm text-gray-600">Closed requisition</div>
                <div className="pt-2 text-lg font-semibold">400</div>
              </div>
            </div>
            <a href="prison/requisition/create">
              <button className="py-2 px-5 mt-4 text-sm font-semibold leading-relaxed text-green-900 rounded-full border border-green-900 hover:text-white hover:bg-green-900 hover:border-green-900">
                Create Requisition
              </button>
            </a>
            <img
              src={Donation}
              alt=""
              className="absolute right-0 bottom-0 w-28"
            />
          </div>
        </div>
      </section>
    </PrisonLayout>
  );
}
