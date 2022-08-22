import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CitizenLayout from "../../../../../components/layout/Citizen";
import ChildrenComponent from "../../../../../components/modules/adopt/citizen/List";
import { AppState } from "../../../../../store/configureStore";
import { getChildren } from "../../../../../store/modules/adopt/citizen/child/actions";
import { IChild } from "../../../../../store/modules/adopt/citizen/child/types";

export default function ChildrenToAdopt() {
  const dispatch = useDispatch();

  const { children }: { children: IChild[] } = useSelector(
    (state: AppState) => state.child
  );
  React.useEffect(() => {
    dispatch(getChildren());
  }, []);


  return (
    <CitizenLayout>
      <section className="pt-6">
        <h1 className="text-2xl font-bold text-gray-900">Children to adopt</h1>
        <div className="grid grid-cols-3 gap-x-6 py-6">
          {children.map((child) => (
            <ChildrenComponent child={child} /> 
          ))}
        </div>
      </section>
    </CitizenLayout>
  );
}
