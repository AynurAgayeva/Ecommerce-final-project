import ReactDOM from "react-dom";
import "./sass/style.css";
import configureStore from "./manager/store/configureStore";
import App from "./App";
import global_en from "./components/en/global.json"
import global_az from "./components/az/global.json";
import global_ru from "./components/ru/global.json"
import { Provider } from "react-redux";
import { getBlogsFromDatabase } from "./manager/actions/blogAction";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("lang") || "en",
  resources: {
    en: {
      global: global_en,
    },
    az: {
      global: global_az,
    },
    ru: {
      global: global_ru,
    },
  },
});

const store = configureStore();
const result = (
  <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <App />
    </Provider>
  </I18nextProvider>
);
 
ReactDOM.render(
  <div
    className="d-flex align-items-center justify-content-center "
    style={{ height: "100vh" }}
  >
    <img 
      src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"
      alt=""
    />
  </div>,
  document.getElementById("root")
);

store.dispatch(getBlogsFromDatabase()).then(() => {
  ReactDOM.render(result, document.getElementById("root"));
});
