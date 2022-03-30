import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { applicationReducer } from "./modules/adopt/citizen/application/reducers";
import { citizenChildReducer } from "./modules/adopt/citizen/child/reducers";
import { prisonApplicationReducer } from "./modules/adopt/prison/application/reducers";
import { childReducer } from "./modules/adopt/prison/child/reducers";
import { prisonReducer } from "./modules/configuration/prison/reducers";
import { profileReducer } from "./modules/configuration/profile/reducers";
import { donationReducer } from "./modules/donation/donation/reducers";
import { itemReducer } from "./modules/donation/item/reducers";
import { requisitionReducer } from "./modules/donation/requisition/reducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  prison: prisonReducer,
  profile: profileReducer,
  child: childReducer,
  application: applicationReducer,
  prisonApplication: prisonApplicationReducer,
  item: itemReducer,
  requisition: requisitionReducer,
  donation:donationReducer,
  citizenChild:citizenChildReducer,
});
