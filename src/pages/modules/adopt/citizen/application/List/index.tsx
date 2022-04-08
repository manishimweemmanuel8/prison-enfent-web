import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CitizenLayout from "../../../../../../components/layout/Citizen";
import ApprovedApplicationListComponent from "../../../../../../components/modules/adopt/citizen/List/application/List";
import { AppState } from "../../../../../../store/configureStore";
import { IHistory } from "../../../../../../store/globalType";
import { getApprovedApplication } from "../../../../../../store/modules/adopt/prison/application/actions";
import { IApplication } from "../../../../../../store/modules/adopt/prison/application/types";

export default function ApprovedApplication(props: IHistory) {
  const dispatch = useDispatch();

  const { approvedApplications }: { approvedApplications: IApplication[] } =
    useSelector((state: AppState) => state.prisonApplication);
  React.useEffect(() => {
    dispatch(getApprovedApplication(props.history));
  }, []);

  console.log(approvedApplications);

  return (
    <CitizenLayout>
      {approvedApplications.map((application) => (
        <ApprovedApplicationListComponent
          application={application}
        />
      ))}
    </CitizenLayout>
  );
}
