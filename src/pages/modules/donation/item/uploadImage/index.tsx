import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AdminLayout from "../../../../../components/layout/Admin";
import UploadItemImage from "../../../../../components/modules/donation/item/uploadImage";
import { AppState } from "../../../../../store/configureStore";
import { uploadItemImage } from "../../../../../store/modules/donation/item/actions";
import { IItem } from "../../../../../store/modules/donation/item/types";

type Props = {
  history: any;
  location: any;
};
interface RouteParams {
  id: string;
}

export default function UploadImageItem(props: Props) {
  const dispatch = useDispatch();
  const params = useParams<RouteParams>();

  const itemReducer = useSelector((state: AppState) => state.item);
  const { item }: { item: IItem } = itemReducer;

  const [state, setState] = React.useState({
    file: item.file,
  });


  const onChange = (e: any) => {
    const formData = new FormData();
    //FILE INFO NAME WILL BE "my-image-file"
    formData.append("file", e.target.files[0], e.target.files[0].name);

    setState(e.target.files[0]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const file = state;
    // formData.append('file',state);
    console.log(state);

    dispatch(uploadItemImage(params.id, file, props.history));
  };

  return (
    <AdminLayout>
      <UploadItemImage
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
      />
    </AdminLayout>
  );
}
