import React from "react";
import PresetPack from "../../assets/images/preset_pack.png";
import SwagPack from "../../../../assets/images/fruit.png";
import CupPack from "../../../../assets/images/cup.png";
import Apple from "../../../../assets/images/apple.png";
import { useDispatch, useSelector } from "react-redux";
import { IPrison } from "../../../../store/modules/configuration/prison/types";
import { AppState } from "../../../../store/configureStore";
import { getPrisons } from "../../../../store/modules/configuration/prison/actions";
import { getChildrenByPrison } from "../../../../store/modules/adopt/citizen/child/actions";
import { useHistory } from "react-router-dom";
import { getRequisitionsByPrison } from "../../../../store/modules/donation/requisition/actions";

export default function Sidebar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { prisons }: { prisons: IPrison[] } = useSelector(
    (state: AppState) => state.prison
  );
  React.useEffect(() => {
    dispatch(getPrisons());
  }, []);

  const handleViewAdopt = (id: any) => {
    dispatch(getChildrenByPrison(id, history));
  };

  const handleViewDonation = (id: any) => {
    dispatch(getRequisitionsByPrison(id, history));
  };

  return (
    <aside className="flex flex-col w-72 border-l border-gray-200">
      <div className=" py-4 px-6 border-b border-gray-200">
        <div className="font-semibold leading-relaxed text-gray-800">
          Prison list
        </div>
      </div>
      <ul className="overflow-y-scroll flex-1 px-6">
        <li>
          {prisons.map((prison) => (
            <div className="py-2 border-b border-gray-200 last:border-none">
              <div className="mt-2 text-sm font-semibold text-gray-800 uppercase">
                {prison.names}
              </div>
              <div className="flex justify-between items-center mt-1 text-xs text-gray-400">
                <button
                  onClick={() => handleViewAdopt(prison.id)}
                  className="inline-block mt-3 text-xs font-semibold leading-relaxed text-blue-500 hover:text-green-900"
                >
                  <span>Adopt</span>
                </button>
                <button
                  onClick={() => handleViewDonation(prison.id)}
                  className="inline-block mt-3 text-xs font-semibold leading-relaxed text-blue-500 hover:text-green-900"
                >
                  <span>Donation</span>
                </button>
              </div>
              <span className="mt-2 text-sm font-semibold text-gray-400">
                {" "}
                Location: {prison.location}
              </span>
            </div>
          ))}
        </li>
      </ul>
    </aside>
  );
}
