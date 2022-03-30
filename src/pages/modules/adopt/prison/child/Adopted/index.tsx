import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PrisonLayout from "../../../../../../components/layout/Prison";
import ChildListComponent from "../../../../../../components/modules/adopt/prison/child/List";
import { AppState } from "../../../../../../store/configureStore";
import { getAdoptedChildren } from "../../../../../../store/modules/adopt/prison/child/actions";
import { IChild } from "../../../../../../store/modules/adopt/prison/child/types";


export default function AdoptedChildren() {
  const dispatch = useDispatch();

  const { adoptedChildren }: { adoptedChildren: IChild[] } = useSelector(
    (state: AppState) => state.child
  );
  React.useEffect(() => {
    dispatch(getAdoptedChildren());
  }, []);

  const title: string = "Adopted Children";

  return (
    <PrisonLayout>
      <ChildListComponent children={adoptedChildren} title={title} />
    </PrisonLayout>
  );
}
