import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CitizenLayout from "../../../../../components/layout/Citizen";
import ChildrenComponent from "../../../../../components/modules/adopt/citizen/List";
import { AppState } from "../../../../../store/configureStore";
import { getChildren } from "../../../../../store/modules/adopt/citizen/child/actions";
import { IChild } from "../../../../../store/modules/adopt/citizen/child/types";

export default function ChildrenToAdoptByPrison() {
  const dispatch = useDispatch();

  const { childrenByPrison }: { childrenByPrison: IChild[] } = useSelector(
    (state: AppState) => state.citizenChild
  );
  console.log(childrenByPrison)

  return (
    <CitizenLayout>
      <section className="pt-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Children to adopt by prison
        </h1>
        <div className="grid grid-cols-3 gap-x-6 py-6">
          {childrenByPrison.map((child) => (
            <ChildrenComponent child={child} />
          ))}
        </div>
      </section>
    </CitizenLayout>
  );
}
