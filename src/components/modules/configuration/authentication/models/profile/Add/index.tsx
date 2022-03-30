import React from "react";
import { IProfile } from "../../../../../../../store/modules/configuration/profile/types";


type EditProfileProps = {
  closeModle: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  state: IProfile;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
};

export default function AddProfile(props: EditProfileProps) {
  const { closeModle,onChange,onSubmit,state } = props;
  console.log(state);
  const {email,cell,district,names,phone,province,sector,village}=state;
  return (
    <div
      className="py-12  transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0  "
      id="modal"
    >
      <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg ">
        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-3xl border border-gray-400 ">
          {/* form  */}

          <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
            Personal profile
          </div>

          <div className="mt-10">
            <form action="#" onSubmit={onSubmit}>
              <div className="flex flex-col mb-5">
                <label className="mb-1 text-xs tracking-wide text-gray-600">
                  E-Mail Address:
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="
                  text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  rounded-2xl
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-green-900
                "
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(e)
                }
                value={email}
                  />
                </div>

                <label className="mb-1 text-xs tracking-wide text-gray-600">
                  Full names:
                </label>
                <div className="relative">
                  <input
                    id="names"
                    type="names"
                    name="names"
                    className="
                  text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  rounded-2xl
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-green-900
                "
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(e)
                }
                value={names}
                  />
                </div>

                <label className="mb-1 text-xs tracking-wide text-gray-600">
                  Phone:
                </label>
                <div className="relative">
                  <input
                    id="phone"
                    type="phone"
                    name="phone"
                    className="
                  text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  rounded-2xl
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-green-900
                "
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(e)
                }
                value={phone}
                  />
                </div>

                <label className="mb-1 text-xs tracking-wide text-gray-600">
                  Province:
                </label>
                <div className="relative">
                  <input
                    id="province"
                    type="province"
                    name="province"
                    className="
                  text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  rounded-2xl
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-green-900
                "
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(e)
                }
                value={province}
                  />
                </div>

                <label
                  // for="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  District:
                </label>
                <div className="relative">
                  <input
                    id="district"
                    type="district"
                    name="district"
                    className="
                  text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  rounded-2xl
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-green-900
                "
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(e)
                }
                value={district}
                  />
                </div>

                <label
                  // for="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  Sector:
                </label>
                <div className="relative">
                  <input
                    id="sector"
                    type="sector"
                    name="sector"
                    className="
                  text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  rounded-2xl
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-green-900
                "
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(e)
                }
                value={sector}
                  />
                </div>

                <label
                  // for="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  Cell:
                </label>
                <div className="relative">
                  <input
                    id="cell"
                    type="cell"
                    name="cell"
                    className="
                  text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  rounded-2xl
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-green-900
                "
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(e)
                }
                value={cell}
                  />
                </div>

                <label
                  // for="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  Village:
                </label>
                <div className="relative">
                  <input
                    id="village"
                    type="village"
                    name="village"
                    className="
                  text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  rounded-2xl
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-green-900
                "
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(e)
                }
                value={village}
                  />
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="
                flex
                mt-2
                items-center
                justify-center
                focus:outline-none
                text-white text-sm
                sm:text-base
                bg-green-900
                hover:bg-green-700
                rounded-2xl
                py-2
                w-full
                transition
                duration-150
                ease-in
              "
                >
                  <span className="mr-2 uppercase">Submit</span>
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>

          <button
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
            onClick={closeModle}
            aria-label="close modal"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
