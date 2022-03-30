import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PrisonLayout from "../../../../../../components/layout/Prison";
import ChildApplicationListComponent from "../../../../../../components/modules/adopt/prison/application/List";
import ChildListComponent from "../../../../../../components/modules/adopt/prison/child/List";
import { AppState } from "../../../../../../store/configureStore";
import { IApplication } from "../../../../../../store/modules/adopt/prison/application/types";
import { getChildren } from "../../../../../../store/modules/adopt/prison/child/actions";
import { IChild } from "../../../../../../store/modules/adopt/prison/child/types";

export default function ChildApplication() {
  const dispatch = useDispatch();

  const { applications }: { applications: IApplication[] } = useSelector(
    (state: AppState) => state.prisonApplication
  );

  return (
    <PrisonLayout>
      <ChildApplicationListComponent applications={applications} />
    </PrisonLayout>
  );
}
