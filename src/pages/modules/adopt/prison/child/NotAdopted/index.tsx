import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PrisonLayout from "../../../../../../components/layout/Prison";
import ChildListComponent from "../../../../../../components/modules/adopt/prison/child/List";
import { AppState } from "../../../../../../store/configureStore";
import { getNotAdoptedChildren } from "../../../../../../store/modules/adopt/prison/child/actions";
import { IChild } from "../../../../../../store/modules/adopt/prison/child/types";


export default function NotAdoptedChildren() {
  const dispatch = useDispatch();

  const { notAdoptedChildren }: { notAdoptedChildren: IChild[] } = useSelector(
    (state: AppState) => state.child
  );
  React.useEffect(() => {
    dispatch(getNotAdoptedChildren());
  }, []);

  const title: string = "Not adopted Children";

  return (
    <PrisonLayout>
      <ChildListComponent children={notAdoptedChildren} title={title} />
    </PrisonLayout>
  );
}
