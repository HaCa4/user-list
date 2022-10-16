import { Provider } from "react-redux";

import Container from "./Container";
import store from "./utilities/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
