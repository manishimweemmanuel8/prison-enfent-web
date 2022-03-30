import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PrisonLayout from "../../../../../../components/layout/Prison";
import ChildListComponent from "../../../../../../components/modules/adopt/prison/child/List";
import { AppState } from "../../../../../../store/configureStore";
import { getChildren } from "../../../../../../store/modules/adopt/prison/child/actions";
import { IChild } from "../../../../../../store/modules/adopt/prison/child/types";

export default function Children() {
  const dispatch = useDispatch();

  const { children }: { children: IChild[] } = useSelector(
    (state: AppState) => state.child
  );
  React.useEffect(() => {
    dispatch(getChildren());
  }, []);

  const title:string="Children";

  return (
    <PrisonLayout>
      <ChildListComponent children={children} title={title}/>
    </PrisonLayout>
  );
}
