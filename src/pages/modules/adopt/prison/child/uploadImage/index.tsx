import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PrisonLayout from "../../../../../../components/layout/Prison";
import UploadChildImage from "../../../../../../components/modules/adopt/prison/child/uploadImage";
import { AppState } from "../../../../../../store/configureStore";
import { uploadImage } from "../../../../../../store/modules/adopt/prison/child/actions";
import { IChild } from "../../../../../../store/modules/adopt/prison/child/types";

type Props = {
  history: any;
  location: any;
};
interface RouteParams {
  id: string;
}

export default function UploadImageCampaign(props: Props) {
  const dispatch = useDispatch();
  const params = useParams<RouteParams>();

  const childReducer = useSelector((state: AppState) => state.child);
  const { child }: { child: IChild } = childReducer;

  const [state, setState] = React.useState({
    file: child.file,
  });

  const { file } = state;
  const data = {
    file,
  };
  const onChange = (e: any) => {
    const formData = new FormData();
    //FILE INFO NAME WILL BE "my-image-file"
    formData.append("file", e.target.files[0], e.target.files[0].name);

    setState(e.target.files[0]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    const file = state;
    // formData.append('file',state);
    console.log(state);

    dispatch(uploadImage(params.id, file, props.history));
  };

  return (
    <PrisonLayout>
      <UploadChildImage
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
      />
    </PrisonLayout>
  );
}
